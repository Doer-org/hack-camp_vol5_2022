export type ApiCreateRoomInput = {
    name : string
    max_count : number
}

export type ApiCreateRoomOutput = {
    id : string
    name : string
    max_count : number
    status : string
    create_at : Date
}