{
  //

  function getProperty<T, K extends keyof T>(person: T, key: K): T[K] {
    return person[key];
  }

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}
