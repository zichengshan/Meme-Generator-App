# Meme-Generator

## Demo

## Q&A
1. Describe the concept of "state"?

   A way for React to remember saved values from within a component.
   This is similar to declaring variables from within a component,
   with a few added bonuses


2. When would you want to use props instead of state?

   Anytime you want to pass data into a component so that
   component can determine what will get displayed on the
   screen.


3. When would you want to use state instead of props?

   Anytime you want a component to maintain some values from
   within the component. (And "remember" those values even
   when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?

   Unchanging. Props are immutable.

5. You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?
   1. New value of state (setCount(42))
   2. Callback function - whatever the callback function returns === new value of state

6. When would you want to pass the first option (from answer above) to the state setter function?

   Whenever you don't need the previous value of state to determine what the new value of state should be.

7. When would you want to pass the second option (from answer above) to the state setter function?

   Whenever you DO need the previous value to determine the new value

8. What is "conditional rendering"?

   When we want to only sometimes display something on the page
   based on a condition of some sort

9. When would you use &&?

    When you want to either display something or NOT display it


10. When would you use a ternary?

   When you need to decide which thing among 2 options to display


11. What if you need to decide between > 2 options on what to display?

   Use an `if...else if... else` conditional or a `switch` statement

12. In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?

   Right before the form is submitted.


13. In a React app, when do you gather all the data from the filled-out form?

   As the form is being filled out. The data is all held in local state.


14. Which attribute in the form elements (value, name, onChange, etc.)should match the property name being held in state for that input?

   `name` property.


15. What's different about saving the data from a checkbox element vs. other form elements?

   A checkbox uses the `checked` property to determine what should be saved in state. Other form elements use the `value` property instead.


16. How do you watch for a form submit? How can you trigger a form submit?

- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

17. What is a "side effect" in React? What are some examples?

- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


18. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, render DOM elements


19. When does React run your useEffect function? When does it NOT run the effect function?

- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the array stay the same between renders


20. How would you explain what the "dependecies array" is?

- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
