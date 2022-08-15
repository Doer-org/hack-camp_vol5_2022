import axios from 'axios'
import * as E from 'fp-ts/Either'
import { TPostAddNewMemberInput, TPostAddNewMemberOutput, TGetRoomMembersInput, TGetRoomMembersOutput }  from '../types/api/member' 
import { TApiError }  from '../types/api/ApiError' 

const endpoint = "http://localhost:5000"  

export const postAddNewMember = async (input : TPostAddNewMemberInput) : Promise<E.Either<TApiError,TPostAddNewMemberOutput>> => { 
    try{ 
        const resp = await axios.post(endpoint + '/member/new?room=' + input.roomID, input);  
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

export const getRoomMembers = async (input : TGetRoomMembersInput) : Promise<E.Either<TApiError, TGetRoomMembersOutput[]>> => { 
    try{ 
        const resp = await axios.get(endpoint + '/member/all?room=' + input.roomID); 
        // console.log(resp)
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
