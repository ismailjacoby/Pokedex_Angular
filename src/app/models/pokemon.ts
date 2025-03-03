export interface Pokemon {
    id : number;
    name : string;
    sprite : string;
    sprites : { 
        front_default : string,
        other : { 
            dream_world : { front_default : string }
        } 
    };
    height : number;
    weight : number;
    types : { type : { name : string } }[];
    flav : string;
    frenchName : string;
}