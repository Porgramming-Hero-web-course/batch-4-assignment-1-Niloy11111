{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(
    myProfile: Profile,
    updatedValue: Partial<Profile>
  ): Profile {
    return { ...myProfile, ...updatedValue };
  }

  // const myProfile: Profile = {
  //   name: "Alice",
  //   age: 25,
  //   email: "alice@example.com",
  // };
  // console.log(updateProfile(myProfile, { age: 55 }));

  //
}
