## The Significance of Union and Intersection Types in TypeScript

#### In TypeScript, union and intersection types are very powerful in the sense of handling types precisely, which helps us write cleaner code.

#### A union type allows a variable to hold different types of values. It does this by using the pipe symbol ( | ) between types. Often, we need to declare a variable with dynamic types, meaning its type can be type A or type B depending on the situation. In such cases, we can use this.

### Some examples

```typescript
type Doctor = {
  name: string;
  email: string;
  age: number;
  gender: "male" | "female";
  degree: "MBBS" | "MBChB" | "BDS";
};
const doctor1: Doctor = {
  name: "Fahim",
  email: "fahim@g.com",
  age: 30,
  gender: "male",
  degree: "BDS",
};
const doctor2: Doctor = {
  name: "Faria",
  email: "faria@g.com",
  age: 26,
  gender: "female",
  degree: "MBBS",
};
```

<br/>
#### So here in the type alias, gender and degree are flexible with different values because of using union types. We can assign either "female" or "male", both are acceptable, and other than these two, no value is allowed for gender.

#### Intersection is used to combine multiple types into one, meaning a variable must have all the properties from the involved types. Intersection uses the ampersand ( & ) symbol. It ensures flexibility when we have two types declared, and in one variable, we want to include both types' properties explicitly. In such cases, we can use it.

### Some example

```typescript
type Vehicle = {
  name: string;
  brand: string;
};
type Info = {
  userExperience: number;
  userRating: number;
};
type Experience = Vehicle & Info;
const vehicleExperience: Experience = {
  name: "Model S",
  brand: "Tesla",
  userExperience: 5,
  userRating: 4.8,
};
```

#### Here, the Experience type has both Vehicle and Info type properties included, which is why we need to provide all four properties in the vehicleExperience object.
