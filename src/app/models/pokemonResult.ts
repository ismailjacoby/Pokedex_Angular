import { Pokemon } from "./pokemon";

export interface PokemonResult {
    previous : string;
    next : string;
    results : PkmSimple[];
}

interface PkmSimple {
    name : string;
    url : string;
}
