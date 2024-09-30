import {DragonObjItem} from "./types";
import {ObjectDef} from "../render/RenderObject";
import {parseFieldString} from "./parse.field";

export function buildObjectDef(dragonObj: DragonObjItem[]): ObjectDef<any> {
    const objectDef: any = {};

    dragonObj.forEach((item) => {
        if (typeof item === 'string') {
            // It's a field definition
            const { path, renderDef } = parseFieldString(item);

            let currentLevel = objectDef;

            for (let i = 0; i < path.length; i++) {
                const key = path[i];

                if (i === path.length - 1) {
                    // Assign the render definition at the leaf node
                    currentLevel[key] = renderDef;
                } else {
                    // Create or navigate to the next nested level
                    if (!currentLevel[key]) {
                        currentLevel[key] = {
                            type: 'group',
                            defn: {},
                        };
                    } else if (currentLevel[key].type !== 'group') {
                        // Handle case where a field is both a group and a leaf node
                        currentLevel[key] = {
                            type: 'group',
                            defn: {},
                        };
                    }
                    currentLevel = currentLevel[key].defn;
                }
            }
        }
        // Titles and subtitles are ignored in the object definition
    });

    return objectDef;
}
