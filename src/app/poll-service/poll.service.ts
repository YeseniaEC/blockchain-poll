import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { Web3Service } from '../blockchain/web3.service';
import { Poll, PollForm } from '../types';
import { fromAscii } from 'web3-utils';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor( private web3: Web3Service ) { }

  getPolls(): Observable<Poll[]> {
    return of(
      [
        {
          id: 1,
          question: 'Dogs or Cats?',
          thumbnail:
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
          results: [0, 5, 7],
          voted: true,
          options: ['cats', 'dogs', 'none'],
        },
        {
          id: 2,
          question: 'Best month for summer holidays?',
          thumbnail:
            'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
          results: [1, 6, 4],
          voted: false,
          options: ['june', 'july', 'august'],
        },
      ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    this.web3.executeTransaction('vote', pollId, voteNumber);
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    this.web3.executeTransaction('createPoll',
      poll.question,
      poll.thumbnail ||'',
      poll.options.map(opt => fromAscii(opt))
    );
    console.log(poll);

  }
}
