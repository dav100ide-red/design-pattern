interface ITransport {
    deliver(): void;
}

class FastTruck implements ITransport {
    deliver(): void {
        console.log("🚚 FastTruck delivering quickly!");
    }
}

class SlowTruck implements ITransport {
    deliver(): void {
        setTimeout(
            () => console.log("🚛 SlowTruck delivering... (5s delay)"),
            5000,
        );
    }
}

class FastPlane implements ITransport {
    deliver(): void {
        console.log("✈️ FastPlane delivering super fast!");
    }
}

class SlowPlane implements ITransport {
    deliver(): void {
        setTimeout(
            () => console.log("🛫 SlowPlane delivering... (2s delay)"),
            2000,
        );
    }
}

// Factory Method
abstract class BaseTransportCreator {
    public abstract createTransport(deliveryStatus: DeliveryStatus): ITransport;

    public deliverPackage(deliveryStatus: DeliveryStatus): void {
        const transport = this.createTransport(deliveryStatus);
        transport.deliver();
    }
}

class TransportCreator extends BaseTransportCreator {
    public createTransport({
        isUrgent,
        premiumUser,
    }: DeliveryStatus): ITransport {
        if (!isUrgent) {
            return premiumUser ? new FastTruck() : new SlowTruck();
        }
        return premiumUser ? new FastPlane() : new SlowPlane();
    }
}

// 🚀 Simuliamo il client
type DeliveryStatus = {
    isUrgent: boolean;
    premiumUser: boolean;
};

function ClientCode() {
    const deliveryStatus = { isUrgent: true, premiumUser: true };
    const transport = new TransportCreator().createTransport(deliveryStatus);
    transport.deliver();
}

ClientCode();
