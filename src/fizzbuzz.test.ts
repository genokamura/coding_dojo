import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
  let log: jest.SpyInstance;
  beforeAll(() => {
    log = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    log.mockClear();
  });

  test('number', () => {
    const num = 2;
    fizzbuzz(num);

    expect(console.log).toBeCalled();
    for (let i = 0; i < num; i++) {
      expect(log.mock.calls[i][0]).toEqual((i + 1).toString());
    }
  });

  test('fizz', () => {
    const num = 3;
    fizzbuzz(num);

    expect(console.log).toBeCalled();
    expect(log.mock.calls[2][0]).toEqual('fizz');
  });

  test('buzz', () => {
    const num = 5;
    fizzbuzz(num);

    expect(console.log).toBeCalled();
    expect(log.mock.calls[4][0]).toEqual('buzz');
  });

  test('fizzbuzz', () => {
    const num = 15;
    fizzbuzz(num);

    expect(console.log).toBeCalled();
    expect(log.mock.calls[14][0]).toEqual('fizzbuzz');
  });
});
