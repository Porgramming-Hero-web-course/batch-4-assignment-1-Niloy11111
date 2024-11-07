## The significance of union and intersection types in Typescript.

<br/>
### In TypeScript union and intersection is very powerfull in the sense of handling type precisely which helps us write cooler code.

<br/>

#### A union type can let a variable to holds different types of values.Its do this by using this symbol ( | ) between types.Often we needs to declare a variable to be dynamic types like its types can be A type and it also can be B type depend on the situation wise,then we can use this.

<br/>
#### some example

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
#### so here in the type alias gender and degree is flexible of different values because of using union types.we can give female or male both are acceptable and othere than these two no value is accetabl ein gender.

### Intersection use to apply multiple types into one,meaning a variable must have all the properties that was involved in the types.Intersection use by this ( & ) this symbol.It ensure flexible to use if we have two type declared and in one variable we want to have both two type properties included explicity then we can use it.

<br/>
#### some example

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

<br/>
#### here the Experience type has both Vehicle and Info type properties inclueded thats why we have to give all four properties in the vehicleExperience object
