import {useState} from "react";
import {Dragon, initialDragon} from "../../domain/Dragon";
import {lensBuilder} from "../../utils/lens";
import {renderGenericObjectWithLens} from "./render.with.lense";
import {dragonProp} from "../../utils/dragon.def";
import {dragonDataFromArray} from "../../witLenseUpdate/dragon.form.v2";

export const DragonFormWithLens = () => {
    const [dragonData, setDragonData] = useState<Dragon>(initialDragon);
    const lens = lensBuilder<Dragon>();
    return renderGenericObjectWithLens(
        dragonDataFromArray,
        lens.build(),
        dragonData,
        setDragonData
    );
};