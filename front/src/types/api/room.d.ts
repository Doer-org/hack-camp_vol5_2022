export interface IPostCreateNewRoomInput {
	name: string;
	max_count: number;
}

export interface IPostCreateNewRoomOutput {
	id: string;
	name: string;
	max_count: number;
	status: string;
	create_at: Date;
}

export interface IGetRoomInfoInput {
	roomID: string;
}

export interface IGetRoomInfoOutput {
	id: string;
	name: string;
	max_count: number;
	status: string;
	create_at: Date;
}
