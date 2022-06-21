export enum BadgeType {
    // TODO: This is a stub. Remove later
    COLLECTED_ALL_PETS,
}

export class Badge {
    type: BadgeType;
    active: boolean;
}

export interface BadgeService {
    has_badge(type: BadgeType): boolean;
    activate_badge(type: BadgeType): void;
}

export class BadgeServiceImpl implements BadgeService {
    has_badge(type: BadgeType): boolean {
        return false
    }

    activate_badge(type: BadgeType): void {
    }
}
