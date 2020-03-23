# Kaplan Take-Home Assignment

## Features:
- Built with React and Redux
- Utilizes SCSS for styling, with BEM naming convention
- Desktop and mobile-friendly
- Utilizes Jest and Enzyme for testing

## Notes:
- Though the app is small, I opted to separate the functionality of the app into separate reducers to more clearly separate concerns.
- I utilized PropTypes to add static type checking for the props of all my components.
- Since this assignment requested specifically unit tests, I only wrote tests for the components that would need unit tests. For components that would require more comprehensive tests (e.g. integration tests, end-to-end tests), like CreateBookForm, I opted to not write those comprehensive tests, in the interest of time.

## To run the app:
Run the following commands in order:
### `yarn`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run tests:
### `yarn test`

Launches the test runner in the interactive watch mode.<br />