export enum PetType {
    BLOBBY
}

// Static information about a pet type
export class PetInfo {
}

const PET_TYPE_INFOS = {
    [PetType.BLOBBY]: {}
}

export const getInfo = (type: PetType) => PET_TYPE_INFOS[type];

// An instance of a pet
export class Pet {
    type: PetType;

    info(): PetInfo {
        return getInfo(this.type);
    }
}
