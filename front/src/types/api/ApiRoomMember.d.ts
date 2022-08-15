export type ApiRoomMembersInput = {
    roomID : string
}

export type ApiRoomMemberOutput = {
    id : number
    name : string
    comment : string
    github : string
    twitter : string 
    question : string
    room : string
}