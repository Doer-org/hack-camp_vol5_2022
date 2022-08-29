export interface TPostCreateNewRoomInput   {
    name : string
    max_count : number
}

export interface TPostCreateNewRoomOutput {
    id : string
    name : string
    max_count : number
    status : string
    create_at : Date
}

export interface TGetRoomInfoInput {
    roomID : string
}

export interface TGetRoomInfoOutput { 
    id : string 
    name : string 
    max_count : number 
    status : string 
    create_at : Date 
}