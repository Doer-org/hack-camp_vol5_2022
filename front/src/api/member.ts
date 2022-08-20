import * as T from 'fp-ts/Task';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { TPostAddNewMemberInput, TPostAddNewMemberOutput, TGetRoomMembersInput, TGetRoomMembersOutput }  from '../types/api/member' 
import { TApiError }  from '../types/api/apiError' 
import { axiosClient } from './client'

function defaultArg (value:string | undefined, defaultValue : string) : string  {
    if (typeof value === 'string') {
        return value;
    } else { 
        return defaultValue; 
    }
}

export const postAddNewMember = async (input : TPostAddNewMemberInput) : Promise<E.Either<TApiError,TPostAddNewMemberOutput>> => { 
    const params = new URLSearchParams(
        {   
            name : input.name,
            roomID : input.roomID,
            question : input.question,
            comment : defaultArg (input.comment, ""),
            lang : defaultArg (input.lang, ""),
            github : defaultArg (input.github, ""),
            twitter : defaultArg (input.twitter, ""),
        } 
    ); 
    try{ 
        // const {data} : {data : TPostAddNewMemberOutput} = await axiosClient().post('/member/new?room=' + input.roomID, input);  
        const {data}  = await axiosClient().post('/member/new?room=' + input.roomID, params);  
        return E.right(data.data);  

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
        // const {data} : {data : TGetRoomMembersOutput[]} = await axiosClient().get('/member/all?room=' + input.roomID); 
        const {data}  = await axiosClient().get('/member/all?room=' + input.roomID); 
        // console.log(data.data)
        return E.right(data.data);  
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
