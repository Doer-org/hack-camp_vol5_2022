import {
	TPostCreateNewRoomInput,
	TPostCreateNewRoomOutput,
	TGetRoomInfoInput,
	TGetRoomInfoOutput
} from '../types/api/room';
import { TApiError } from '../types/api/apiError';
import { axiosClient } from './client';
import * as TE from 'fp-ts/TaskEither';

export const postCreateNewRoom = (input: TPostCreateNewRoomInput) => {
	const params = new URLSearchParams({
		name: input.name,
		max_count: input.max_count.toString()
	});
	return TE.tryCatch(
		async () => {
			const { data } = await axiosClient().post('/room/new/', params);
			const d: TPostCreateNewRoomOutput = data.data;
			return d;
		},
		(e: any) => {
			try {
				const resp: TApiError = { error: e.response.data.error };
				return resp;
			} catch (ee) {
                return { error: 'unexpected error' }; 
			}
		}
	);
};

export const getRoomInfo = (input: TGetRoomInfoInput) => {
	return TE.tryCatch(
		async () => {
			const { data } = await axiosClient().get('/room/' + input.roomID);
			const d: TGetRoomInfoOutput = data.data;
			return d;
		},
		(e: any) => {
			try {
				const resp: TApiError = { error: e.response.data.error };
				return resp;
			} catch (ee) {
				return { error: 'unexpected error' };
			}
		}
	);
};


export const getRoomFinish = (roomID : string | undefined) => {
	return TE.tryCatch(
		async () => {
			const { data } = await axiosClient().get('/room/finish/' + roomID); 
			return;
		},
		(e: any) => {
			try {
				const resp: TApiError = { error: e.response.data.error };
				return resp;
			} catch (ee) {
				return { error: 'unexpected error' };
			}
		}
	);
};
