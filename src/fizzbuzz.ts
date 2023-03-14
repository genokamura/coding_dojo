export const fizzbuzz = (num: number) => {
  // fizzbuzz
  const FIZZ = 3;
  const BUZZ = 5;

  for (let i = 1; i <= num; i++) {
    if (i % (FIZZ * BUZZ) === 0) {
      console.log('fizzbuzz');
    } else if (i % FIZZ === 0) {
      console.log('fizz');
    } else if (i % BUZZ === 0) {
      console.log('buzz');
    } else {
      console.log(i.toString());
    }
  }
}
