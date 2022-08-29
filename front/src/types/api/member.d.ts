export interface TPostAddNewMemberInput {
    name : string
    roomID : string
    question : string
    comment : string | undefined
    lang : string | undefined
    github : string | undefined
    twitter : string | undefined
} 

export interface TPostAddNewMemberOutput {
    id : number
    name : string
    comment : string
    lang : string 
    github : string
    twitter : string
    question : string
    room : string
}

export interface TGetRoomMembersInput {
    roomID : string
}

export interface TGetRoomMembersOutput {
    id : number
    name : string
    comment : string
    github : string
    twitter : string 
    question : string
    room : string
}