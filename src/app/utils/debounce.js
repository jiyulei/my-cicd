export function debounce(fn, duration) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timeId);
    }, duration);
  };
}
