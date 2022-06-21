import { Inputs } from "./input";

export enum RoomType {
    ROOM_MAP,
    ROOM_GRAVEYARD,
    ROOM_ARENA,
    ROOM_NURSERY,
    ROOM_GYM,
    ROOM_MARKET,
    ROOM_WILDERNESS,
    ROOM_LAB,
}

export interface RoomCtor {
    new(): Room
}

export interface Room {
    update(inputs: Inputs): void;
    render(context: CanvasRenderingContext2D): void;
}

let roomCtors = {};
let currentRoomType: RoomType | null = null;
let currentRoom: Room | null = null;

export const registerRoom = (type: RoomType, roomCtor: RoomCtor) => {
    roomCtors[type] = roomCtor;
}

export const switchRoom = (type: RoomType) => {
    if (typeof roomCtors[type] === "undefined") {
        throw new Error(`switched to unregistered room ${type}`);
    }
    currentRoom = new roomCtors[type]();
    currentRoomType = type;
};

export const updateRoom = () => {
    if (currentRoom === null) {
        throw new Error("current room is missing");
    }
    let inputs: Inputs = {}
    currentRoom.update(inputs);
};

export const renderRoom = (context: CanvasRenderingContext2D) => {
    if (currentRoom === null) {
        throw new Error("current room is missing");
    }
    currentRoom.render(context);
};

export const getRoomType = (): RoomType => currentRoomType as RoomType;
