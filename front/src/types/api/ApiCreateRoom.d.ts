export type TApiCreateRoomInput = {
    name : string
    max_count : number
}

export type TApiCreateRoomOutput = {
    id : string
    name : string
    max_count : number
    status : string
    create_at : Date
}