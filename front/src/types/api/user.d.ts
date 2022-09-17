export interface IPostLoginWithGithubInput {
  uid: string
  name : string
}

export interface IPostLoginWithGithubOutput {
  uid: string
  name : string
  lang: string
  comment : string
  github : string
  twitter : string
}

export interface IPutUserUpdateInput {
  uid: string
  name : string
  lang: string
  comment : string
  github : string
  twitter : string
}

export interface IPutUserUpdateOutput {
  uid: string
  name : string
  lang: string
  comment : string
  github : string
  twitter : string
}