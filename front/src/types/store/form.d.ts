interface IFormStep1 {
  name: string
  lang: string
  github: string
  twitter: string
  comment: string
}

interface IFormStep2 {
  question: string
}

export interface IFormState {
  step1: IFormStep1
  step2: IFormStep2
}
