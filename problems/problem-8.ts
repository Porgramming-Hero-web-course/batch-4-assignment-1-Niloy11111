{
  //

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  function validateKeys(obj: Person, keys: keyof Person[]): Person {
    const values = Object.keys(obj);
    const isExist = keys.every((item) => values.includes(item));
    return isExist;
  }

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "email"]));

  //
}
