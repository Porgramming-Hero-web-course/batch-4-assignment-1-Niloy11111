{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    const wordsWithoutSpecialCharacters = sentence
      .replace(/[^\w\s]/g, "")
      .split(" ");

    const allWords = wordsWithoutSpecialCharacters.filter(
      (each) => each.toLocaleLowerCase() === word.toLocaleLowerCase()
    );
    return allWords?.length;
  }

  // const problem3 = countWordOccurrences(
  //   "TypeScript is great. I love TypeScript!",
  //   "typescript"
  // );
  // console.log(problem3);

  //
}
