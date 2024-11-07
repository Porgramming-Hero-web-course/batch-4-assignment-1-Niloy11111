## The significance of union and intersection types in Typescript

#### In TypeScript union and intersection are very powerful in the sense of handling types precisely, which helps us write cooler code.

#### A union type can let a variable hold different types of values. It does this by using this symbol ( | ) between types. Often, we need to declare a variable with dynamic types, meaning its type can be A type and it can also be B type depending on the situation. Then we can use this.

### Some example

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

#### So here in the type alias, gender and degree are flexible with different values because of using union types. We can give either female or male, both are acceptable, and other than these two, no value is acceptable in gender.

#### Intersection is used to apply multiple types into one, meaning a variable must have all the properties that are involved in the types. Intersection uses this ( & ) symbol. It ensures flexibility to use if we have two types declared and in one variable, we want to have both types' properties included explicitly. Then we can use it.

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

#### Here, the Experience type has both Vehicle and Info type properties included, that's why we have to give all four properties in the vehicleExperience object.
