export const fizzbuzz = (num: number) => {
  // fizzbuzz
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i.toString());
    }
  }
}
