interface Truck {
    id: number;
    deliver(): void;
}

class FastTruck implements Truck {
    constructor(public id: number) {}
    deliver(): void {
        console.log(`FastTruck id: ${this.id} deliver`);
    }
}

class SlowTruck implements Truck {
    constructor(public id: number) {}
    deliver(): void {
        setTimeout(() => console.log(`SlowTruck id: ${this.id} deliver`), 5000);
    }
}

/** new feat: if isUrgent is `true`, deliver by fast/slow plane according to premiumCustomer*/
function ClientCode() {
    const premiumCustomer = true;

    const truck = premiumCustomer ? new FastTruck(1) : new SlowTruck(1);
    truck.deliver();
}

ClientCode();
