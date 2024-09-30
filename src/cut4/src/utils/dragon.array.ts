/*
export const dragonObj = [
    {type: 'title', text: 'body'},
    'chest.stomach.contents/string',
    'chest.hitpoints',
    {type: 'title', text: 'leftWing'},
    'leftWing.hitpoints/number',
    {type: 'title', text: 'rightWing'},
    'rightWing.hitpoints/number',
    {type: 'title', text: 'head'},
    {type: 'subtitle', text: 'leftEye'},
    'leftEye.color/options:blue,green',
    {type: 'subtitle', text: 'rightEye'},
    'rightEye.color/options:blue,green'];*/

export const dragonObj = [
    {type: 'title', text: 'Body'},
    'body.chest.stomach.contents/string',
    'body.chest.hitpoints/string',
    {type: 'title', text: 'Left Wing'},
    'body.leftWing.hitpoints/string',
    {type: 'title', text: 'Right Wing'},
    'body.rightWing.hitpoints/string',
    {type: 'title', text: 'Head'},
    {type: 'subtitle', text: 'Left Eye'},
    'head.leftEye.color/options:blue,green',
    {type: 'subtitle', text: 'Right Eye'},
    'head.rightEye.color/options:blue,green',
    'head.hitpoints/string'
];
