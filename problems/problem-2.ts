{
  //
  function removeDuplicates(nums: number[]): number[] {
    const uniqueItems = [...new Set(nums)];
    return uniqueItems;
  }

  // const problem2 = removeDuplicates([1, 2, 2, 2, 3, 4, 4, 5]);
  // console.log(problem2);

  //
}
