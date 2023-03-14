import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
  const log = jest.spyOn(console, 'log');

  test('number', () => {
    fizzbuzz(1);
    expect(console.log).toBeCalled();
    expect(log.mock.calls[0][0]).toEqual('1');
  });
});
