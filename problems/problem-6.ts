{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(myPrfile: Profile, value: Partial<Profile>): Profile {
    return { ...myPrfile, ...value };
  }

  // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(updateProfile(myProfile, { age: 24 }));

  //
}
