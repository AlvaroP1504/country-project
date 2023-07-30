import type { Continent } from "./continent";
export interface BasicInfo{
    code:string,
    name:string
}

export interface CountryCard{
    code:string,
    name:string,
    continent:Continent
}
export interface Country{
    code:      string;
    name:      string;
    continent: Continent;
    capital:   string;
    currency:  string;
    languages: BasicInfo[];
    states:    BasicInfo[];
}