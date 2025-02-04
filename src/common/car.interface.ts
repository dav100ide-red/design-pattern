type FuelType = "diesel" | "petrol";
export type Fuel = {
    type: FuelType;
    amount: number; //litri
};

export interface ITransport {
    id: number;

    deliver(): void;
    addFuel(fuel: Fuel): void;
}
