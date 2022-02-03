export interface Poll extends PollForm {
  id: number; // 12
  results: number[]; // [0,0,0,5,7,2]
  voted: boolean;
}

export interface Voter {
  id: string; //wahero20384ho
  voted: number[];
}

export interface PollForm {
  question: string; // which days of the week you like most?
  options: string[]; // ["monday", "tuesday", ...]
  thumbnail: string; // image.png
}

export interface PollVote {
  id: number;
  vote: number;
}
