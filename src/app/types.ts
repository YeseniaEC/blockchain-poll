export interface Poll {
  id: number, // 12
  question: string, // which days of the week you like most?
  results: number[], // [0,0,0,5,7,2]
  options: string[], // ["monday", "tuesday", ...]
  thumbnail: string // image.png
}

export interface Voter {
  id: string, //wahero20384ho
  voted: number[]
}
