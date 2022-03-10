interface Point{
    x:number,
    y:number
}

interface Vehicle{
    currentLocation : Point;
    travelTo(point:Point): void;
}

class Taxi implements Vehicle {
    // ..
    currentLocation : Point;
    travelTo(point:Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor`);
    }
}

class Bus implements Vehicle {
    // ..
    currentLocation : Point;
    travelTo(point:Point): void {
        console.log(`bus X: ${point.x} Y: ${point.y} konumuna gidiyor`);
    }
}

//taxi_1 => 47 as 47
//taxi_1.currentLocation =>
//taxi_1.travelTo()

//taxi_2 => 47 ab 47
//taxi_2.currentLocation =>
//taxi_2.travelTo()
