{
  //

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentYear = new Date().getFullYear();
      if (this.year < currentYear) {
        return currentYear - this.year;
      } else {
        return "Invalid Input";
      }
    }
  }

  // const car = new Car("Honda", "Civic", 2081);
  // console.log(car.getCarAge());

  //
}
