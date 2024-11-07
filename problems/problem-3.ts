{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    const sentenceLower = sentence.toLocaleLowerCase();
    const wordLower = word.toLocaleLowerCase();
    const occurneces = sentenceLower.split(wordLower).length - 1;
    return occurneces;
  }

  // const problem3 = countWordOccurrences("I love typescript", "success");
  // console.log(problem3);

  //
}
