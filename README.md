# Basic Calculator

A simple web calculator project built with HTML, CSS, and JavaScript.

## Description

This application lets you perform basic math operations in the browser, such as:

- Addition
- Subtraction
- Multiplication
- Division
- Clearing the entire display
- Deleting the last entered value
- Evaluating expressions with the equals sign

The interface is designed as a classic-style calculator with number buttons, operators, and a result display.

## Technologies Used

- HTML: structure of the calculator and interface elements
- CSS: visual design, colors, layout, and button styling
- JavaScript: calculation logic, event handling, and display updates

## Project Structure

- `index.html`: application structure
- `styles.css`: visual styles for the calculator
- `script.js`: interaction and calculation logic

## How to Run

1. Download or clone this repository.
2. Open the `index.html` file in your browser.
3. Use the buttons to enter numbers and perform operations.

You can also serve the project locally with a simple server, for example:

```bash
python -m http.server 8000

```

Then open in your browser:

```text
http://localhost:8000

```

## Author

Andrés Ramírez Rodríguez

## Note

The calculator uses `eval()` to evaluate mathematical expressions, so it is suitable for an educational and basic practice project.