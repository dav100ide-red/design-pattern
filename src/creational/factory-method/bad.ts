class FastTruck {
    constructor() {}
    deliver(): void {
        console.log(`FastTruck deliver`);
    }
}

class SlowTruck {
    constructor() {}
    deliver(): void {
        setTimeout(() => console.log(`SlowTruck deliver`), 5000);
    }
}

class FastPlane {
    constructor() {}
    deliver(): void {
        console.log(`FastPlane deliver`);
    }
}

class SlowPlane {
    constructor() {}
    deliver(): void {
        setTimeout(() => console.log(`SlowPlane deliver`), 2000);
    }
}

/** new feat: if isUrgent is `true`, deliver by fast/slow plane according to premiumCustomer*/
function ClientCode() {
    const premiumCustomer = true;

    const isUrgent = true;
    if (!isUrgent) {
        const truck = premiumCustomer ? new FastTruck() : new SlowTruck();
        truck.deliver();
        return;
    }

    const plane = premiumCustomer ? new FastPlane() : new SlowPlane();
    plane.deliver();
}

ClientCode();
