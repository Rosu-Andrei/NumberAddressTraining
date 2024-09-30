import React from 'react';
import {FieldWithLens} from "../file.with.lense";
import {RenderDef} from "../../simpleImpl/simple.renderers";
import {parseLens} from "../../../utils/lens";

const dragonToObj = <Main extends any>(list: any[], obj: Main, setObj: (main: Main) => void) => {
    return list.map((item, index) => {
        if (typeof item === 'string') {
            // Split the item into path and type, and extract additional options if necessary
            let [path, type] = item.split('/');
            const lens = parseLens<Main, any>(path); // Parse the path into a lens for accessing nested properties

            // Determine the RenderDef based on the type
            let renderer: RenderDef;
            if (type === 'string') {
                renderer = "text"; // Use "text" renderer for string fields
            } else if (type.startsWith('options:')) {
                // Extract options from the type and define a dropdown renderer
                const options = type.replace('options:', '').split(',');
                renderer = {type: "dropdown", options}; // Use dropdown renderer with extracted options
            } else {
                throw new Error(`Invalid type ${type}`);
            }

            return (
                <FieldWithLens // Add unique key for each element to ensure React doesn't complain about missing keys
                    id={path as keyof Main}
                    renderer={renderer} // Use the determined RenderDef
                    lens={lens}
                    obj={obj}
                    setObj={setObj}
                />
            );
        } else if (item.type) {
            // Render titles and subtitles based on item type
            if (item.type === 'title') {
                return <h1>{item.text}</h1>;
            } else if (item.type === 'subtitle') {
                return <h2>{item.text}</h2>;
            } else {
                throw new Error(`Invalid item type ${item.type}`);
            }
        } else {
            throw new Error(`Invalid item ${JSON.stringify(item)}`);
        }
    });
};

export default dragonToObj;
