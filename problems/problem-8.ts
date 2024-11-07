{
  //

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    const isExist = keys.every((item) => item in obj);
    return isExist;
  }

  // Sample Input:
  const person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
