export function* useFibonacciGenerator(
  start: number
): Generator<number, void, unknown> {
  let current = 0;
  let next = 1;

  // Ensure the start position is a non-negative integer
  if (start < 0 || !Number.isInteger(start)) {
    throw new Error("Start position must be a non-negative integer.");
  }

  // Advance the generator to the specified "start" position
  // This loop iterates until the generator reaches the Fibonacci number at position "start"
  for (let i = 0; i < start; i++) {
    [current, next] = [next, current + next]; // Calculate the next Fibonacci number
  }

  // Generate Fibonacci numbers starting from the "start" position
  // The generator will continue yielding Fibonacci numbers indefinitely
  while (true) {
    // Using an iterative approach instead of recursion:
    // Iterative calculations use constant memory (only storing `current` and `next`),
    // making it highly optimized for large numbers. This avoids the recursion stack overhead
    // that would otherwise be a bottleneck for large Fibonacci sequences.
    yield current; // Yield the current Fibonacci number
    [current, next] = [next, current + next]; // Calculate the next Fibonacci number
  }
}
