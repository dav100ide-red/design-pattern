type CarEngine = "V6" | "V8" | "V12" | "Electric";

export interface ICar {
    id: number;
    engine: CarEngine;
    seats: number;
}
