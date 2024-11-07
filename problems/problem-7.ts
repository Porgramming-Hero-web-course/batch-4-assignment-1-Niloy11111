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
        console.log(currentYear - this.year);
        return currentYear - this.year;
      } else {
        return "Invalid Input";
      }
    }
  }

  // const car = new Car("Honda", "Civic", 2018);
  // car.getCarAge();

  //
}
