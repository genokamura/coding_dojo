import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
  const log = jest.spyOn(console, 'log');

  // testing sample
  test('sample', () => {
    fizzbuzz();
    expect(console.log).toBeCalled();
    expect(log.mock.calls[0][0]).toEqual('fizzbuzz');
  });
});
