export type TPostCreateNewRoomInput = {
    name : string
    max_count : number
}

export type TPostCreateNewRoomOutput = {
    id : string
    name : string
    max_count : number
    status : string
    create_at : Date
}

export type TGetRoomInfoInput = {
    roomID : string
}

export type TGetRoomInfoOutput = { 
    id : string 
    name : string 
    max_count : number 
    status : string 
    create_at : Date 
}