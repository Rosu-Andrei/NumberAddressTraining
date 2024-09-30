import {DragonObjItem} from "./types";
import {buildObjectDef} from "./build.object.def";
import {GenericData, ObjectDef} from "../render/RenderObject";
import {Dragon, initialDragon} from "../domain/Dragon";

export const dragonObj: DragonObjItem[] = [
    {type: 'title', text: 'body'},
    'body.chest.stomach.contents/string[]',
    'body.chest.hitpoints',
    {type: 'title', text: 'leftWing'},
    'body.leftWing.hitpoints/string',
    {type: 'title', text: 'rightWing'},
    'body.rightWing.hitpoints/string',
    {type: 'title', text: 'head'},
    {type: 'subtitle', text: 'leftEye'},
    'head.leftEye.color/options:[blue,green]',
    {type: 'subtitle', text: 'rightEye'},
    'head.rightEye.color/options:[blue,green]',
    'head.hitpoints',
];
const initialEmptyDragon: Dragon = {
    body: {
        chest: {
            stomach: {
                contents: [],
            },
            hitpoints: '10',
        },
        leftWing: {
            hitpoints: '5',
        },
        rightWing: {
            hitpoints: '5',
        },
    },
    head: {
        leftEye: {
            color: 'blue',
        },
        rightEye: {
            color: 'green',
        },
        hitpoints: '5',
    },
};
// Generate the dragonObjDef
export const dragonObjDef: ObjectDef<Dragon> = buildObjectDef(dragonObj);

export const dragonDataFromArray: GenericData<Dragon> = {
    defn: dragonObjDef,
    value: initialEmptyDragon,
};