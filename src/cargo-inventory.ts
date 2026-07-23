function getFirstItem<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

console.log(getFirstItem(["crate1", "crate2"])); // Output: "crate1"
console.log(getFirstItem([10, 20, 30])); // Output: 10
console.log(getFirstItem([])); // Output: undefined