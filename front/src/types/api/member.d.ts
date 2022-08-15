export type TPostAddNewMemberInput = {
    name : string
    roomID : string
    question : string
    comment : string | undefined
    lang : string | undefined
    github : string | undefined
    twitter : string | undefined
} 

export type TPostAddNewMemberOutput =  {
    id : number
    name : string
    comment : string
    lang : string 
    github : string
    twitter : string
    question : string
    room : string
}

export type TGetRoomMembersInput = {
    roomID : string
}

export type TGetRoomMembersOutput = {
    id : number
    name : string
    comment : string
    github : string
    twitter : string 
    question : string
    room : string
}