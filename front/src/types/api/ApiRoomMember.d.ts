export type TApiRoomMembersInput = {
    roomID : string
}

export type TApiRoomMemberOutput = {
    id : number
    name : string
    comment : string
    github : string
    twitter : string 
    question : string
    room : string
}