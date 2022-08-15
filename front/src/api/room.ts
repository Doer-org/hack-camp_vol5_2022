import axios from 'axios'
import * as E from 'fp-ts/Either'
import { TPostCreateNewRoomInput, TPostCreateNewRoomOutput, TGetRoomInfoInput, TGetRoomInfoOutput }  from '../types/api/room' 
import { TApiError }  from '../types/api/ApiError'

const endpoint = "http://localhost:5000"  


export const postCreateNewRoom = async (input : TPostCreateNewRoomInput) : Promise<E.Either<TApiError,TPostCreateNewRoomOutput>> => { 
    try{ 
        const resp = await axios.post(endpoint + '/new/room', input);  
        return E.right(resp.data.data);  
    } 
    catch (e : any) {  
        try { 
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    }  
}

export const getRoomInfo = async (input : TGetRoomInfoInput) : Promise<E.Either<TApiError, TGetRoomInfoOutput>> => {  
    try{ 
        const resp = await axios.get(endpoint + '/room/'+ input.roomID);  
        return E.right(resp.data.data);  
    } 
    catch (e : any) {  
        try { 
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    } 
} 