{
  //

  type Person = {
    name: string;
    age: number;
  };

  const getProperty = <P, N extends keyof P>(person: P, name: N): P[N] => {
    return person[name];
  };

  const person: Person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}
