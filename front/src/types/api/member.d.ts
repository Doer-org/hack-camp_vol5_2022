export interface IPostAddNewMemberInput {
	name: string;
	roomID: string;
	question: string;
	comment: string | undefined;
	lang: string | undefined;
	github: string | undefined;
	twitter: string | undefined;
}

export interface IPostAddNewMemberOutput {
	id: number;
	name: string;
	comment: string;
	lang: string;
	github: string;
	twitter: string;
	question: string;
	room: string;
}

export interface IGetRoomMembersInput {
	roomID: string;
}

export interface IGetRoomMembersOutput {
	id: number;
	name: string;
	comment: string;
	github: string;
	twitter: string;
	question: string;
	room: string;
}
