## The Significance of Union and Intersection Types in TypeScript

#### In TypeScript, union and intersection types are powerful tools that help handle types more precisely, allowing us to write cleaner and more flexible code.

#### A union type allows a variable to hold values of different types. It is defined by using the pipe symbol (|) between multiple types. This is especially useful when a variable needs to represent one of several types, depending on the situation. For example, if a variable can either be a string or a number, you can declare it as string | number. This enables dynamic typing.

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

#### An intersection type is used to combine multiple types into one, meaning a variable must have all the properties from the types involved. It uses the ampersand (&) symbol to join them. This ensures that a variable includes the properties of each type, making it possible to work with values that must satisfy all the criteria of multiple types at once. It's useful when you want a variable to explicitly include every property from both types, giving you more flexibility when combining them.

### Some examples

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

#### Key Benefits of Using Union and Intersection Types

1. **Better Type Flexibility:** Lets variables hold different types of data easily.
2. **Clear Structure:** Makes sure all required properties are included when combining types.
3. **Error Handling:** Helps catch mistakes related to types during development.
4. **Readable Code:** Makes complex type definitions simpler and clearer.
5. **Adaptable Code:** Allows code to easily adjust and scale for different needs.
