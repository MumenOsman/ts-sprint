function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}


// Navigation coordinate adjustment
console.log(swap("delta", 3)); // Output: [3, "delta"]

// Sensor calibration values
console.log(swap(true, { x: 10 })); // Output: [{ x: 10 }, true]