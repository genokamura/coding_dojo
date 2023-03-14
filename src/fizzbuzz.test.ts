import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
  const log = jest.spyOn(console, 'log');

  test('number', () => {
    const num = 2;
    fizzbuzz(num);

    expect(console.log).toBeCalled();
    for (let i = 0; i < num; i++) {
      expect(log.mock.calls[i][0]).toEqual((i + 1).toString());
    }
  });
});
