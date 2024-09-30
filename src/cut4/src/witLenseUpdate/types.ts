import {RenderDef} from "../render/simpleImpl/simple.renderers";

export type FieldDef = {
    path: string[];
    renderDef: RenderDef;
};

export type TitleDef = {
    type: 'title' | 'subtitle';
    text: string;
};

export type DragonObjItem = string | TitleDef;