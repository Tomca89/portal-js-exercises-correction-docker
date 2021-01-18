class DealerShip {
    constructor(cars_inside, number_employees){
        this.cars_inside = cars_inside;
        this.number_employees = number_employees;
    }

    CalculateRatio(){
        const value = this.cars_inside * this.number_employees / 100
        return Math.round(value)
    }
}

RocketCars = new DealerShip(252, 15)