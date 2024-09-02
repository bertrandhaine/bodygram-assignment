# Fibonacci Traffic Light Application

**Description** This application simulates traffic lights where each light calculates Fibonacci numbers starting from a different initial position. Built using React, the application efficiently calculates Fibonacci numbers using an iterative generator and provides a responsive layout for various screen sizes.

## Features

- Four traffic lights, each starting Fibonacci calculations from different initial values (e.g., 0, 10, 20, 30).
- Each traffic light stops and resets after completing 10 Fibonacci calculations.
- Fully responsive layout that adapts to different screen sizes (mobile and desktop).
- Optimized Fibonacci calculation using an iterative approach for handling large numbers efficiently.

## Prerequisites
- Node.js (version >= 14.x)
- npm or yarn (depending on your preferred package manager)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bertrandhaine/bodygram-assignment.git
   ```
2. Ensure Node.js is installed on your system:
   ```bash
   npm install npm@latest -g
   ```
3. Navigate to the project directory and install dependencies:
   ```bash
   cd bodygram-assignment
   npm install
   ```
4. Run the application:
   ```bash
   npm run dev
   ```

## Design Decisions
### Fibonacci Generator
The Fibonacci numbers are calculated using an iterative generator (useFibonacciGenerator). This method is optimized for handling large Fibonacci numbers because it avoids recursive function calls and keeps memory usage constant. The generator yields numbers one by one, starting from the specified position.

### Responsive Design
The layout is designed to be fully responsive, with traffic lights aligned horizontally on larger screens and stacked vertically on smaller screens (e.g., mobile devices). This ensures a clean and user-friendly experience on any device.

#### Responsive Design Implementation
- Desktop view: Traffic lights are displayed in a row using Flexbox.

### Why Use styled-components?
The application uses styled-components to handle component styling in a modular and maintainable way. Here’s why styled-components was chosen:

- Scoped Styles: styled-components ensures that styles are scoped to individual components, preventing any global CSS conflicts. This makes it easier to manage styles, especially in a large application with many components.

- Dynamic Styling: With styled-components, you can pass props to styled components, allowing for dynamic styling based on the component’s state or props. This is particularly useful for changing the colors of the traffic lights based on their state (e.g., red for stopped, yellow for calculating, green for complete).

- CSS-in-JS: By using CSS-in-JS, the styles are co-located with the components they belong to, which enhances readability and maintainability. This approach also eliminates the need to worry about class name collisions.

### Generator Reset
After each traffic light completes 10 Fibonacci calculations, the generator is reset, and the traffic light is ready for another cycle. This allows the user to see the lights perform repeated Fibonacci calculations starting from their respective initial positions.

## Optimizations
### Iterative Fibonacci Calculation
- Why iterative?: The Fibonacci generator uses an iterative approach, which is memory-efficient and optimized for large numbers. Unlike recursive methods, which can cause stack overflows or excessive memory usage, this approach stores only the last two numbers in the sequence (current and next), resulting in constant memory usage (O(1)).
- Performance: By avoiding recursive calls and keeping memory usage constant, the application can handle large Fibonacci numbers without performance degradation.

### Layout Responsiveness
- Flexbox Layout: The traffic light layout uses Flexbox for arranging the lights horizontally or vertically, depending on the screen size.

### React.memo and useCallback
- React.memo is used to avoid unnecessary re-renders of the traffic light components when their props (such as state or number) haven't changed.
- useCallback ensures that the event handlers, such as startCalculations, are not recreated on every render, improving performance.

## License
This project is licensed under the MIT License.