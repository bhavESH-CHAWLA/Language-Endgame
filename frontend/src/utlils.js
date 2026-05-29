import {words} from "./word.js";

export function getRandomWord(){
    const randomindex= Math.floor(Math.random()*words.length);
    return words[randomindex];

}

