import type { BadgeType } from "../model/badge";

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
