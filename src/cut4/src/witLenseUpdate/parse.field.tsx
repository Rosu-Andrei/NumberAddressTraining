import {FieldDef} from "./types";
import {RenderDef} from "../render/simpleImpl/simple.renderers";

export function parseFieldString(fieldString: string): FieldDef {
    const [pathPart, typePart] = fieldString.split('/');
    const path = pathPart.split('.');

    let renderDef: RenderDef = 'text'; // Default renderer

    if (typePart) {
        if (typePart.startsWith('options:')) {
            const optionsString = typePart.slice('options:'.length);
            const options = optionsString.replace('[', '').replace(']', '').split(',');
            renderDef = {
                type: 'dropdown',
                options: options.map((opt) => opt.trim()),
            };
        } else if (typePart === 'string[]') {
            // Handle string arrays as text inputs for simplicity
            renderDef = 'text';
        } else {
            renderDef = typePart as RenderDef;
        }
    }

    return {path, renderDef};
}