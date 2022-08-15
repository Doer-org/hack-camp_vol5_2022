export type ApiAddNewMemberInput = {
    name : string
    roomID : string
    question : string
    comment : string | undefined
    lang : string | undefined
    github : string | undefined
    twitter : string | undefined
} 

export type ApiAddNewMemberOutput =  {
    id : number
    name : string
    comment : string
    lang : string 
    github : string
    twitter : string
    question : string
    room : string
}