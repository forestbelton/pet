import { Inputs } from "../input";
import { Room } from "../room";

export class MapRoom implements Room {
    update(inputs: Inputs) {
    }

    render() {
        console.log("rendering map!");
    }
}
