import { debounce } from "./debounce";

describe("debounce function ", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("it should debounce", () => {
    const fn = jest.fn();
    const wait = 300;

    const debouncedFn = debounce(fn, wait);

    debouncedFn(1);
    debouncedFn(2);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(300);
    expect(fn).toBeCalled();
    expect(fn).toHaveBeenCalledWith(2);
  });
});
