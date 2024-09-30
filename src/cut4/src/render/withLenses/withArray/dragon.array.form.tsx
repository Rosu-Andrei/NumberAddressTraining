import React, {useState} from 'react';
import {Dragon, initialDragon} from "../../../domain/Dragon";
import dragonToObj from "./dragonToDisplay";
import {dragonObj} from "../../../utils/dragon.array";


export const DragonFormWithArray: React.FC = () => {
    // Set up state management for the Dragon object using initialDragon as the starting state
    const [dragonData, setDragonData] = useState<Dragon>(initialDragon);

    // Render the form fields using the dragonToObj function and pass the state and setState
    return (
        <div>
            {dragonToObj<Dragon>(dragonObj, dragonData, setDragonData)}
        </div>
    );
};

