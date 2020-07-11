This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

chautari-rental-web
This is front-end application for rental service using react and material-UI.

Create React App: npx create-react-app chautari-rental-web cd my-app npm start

Installing Material-UI Library & Dependencies library's website : https://material-ui.com

$ npm install @material-ui/core $ npm start

Web This project was generated with node version v14.1.0 and npm version 6.14.5.

Development server Run ng serve for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

Making Pull Request Before making pull request, please make sure your code changes pass code analysis and tests. To verify, please run below commands:

npm test

#Redux installation
-> npm i redux react-redux

#Redux, react-redux, redux-thunk

Can someone clearly explain how control flow happens in redux ? Redux has (always) a single store.
Whenever you want to replace the state in the store, you dispatch an action.

The action is caught by one or more reducers.

The reducer/s create a new state that combines the old state, and the dispatched action.

The store subscribers are notified that there is a new state.

What are roles of components/containers/actions/action creators/store in redux ?
Store - holds the state, and when a new action arrives runs the dispatch -> middleware -> reducers pipeline, and notifies subscribers when the state is replaced by a new one.

Components - dumb view parts which are not aware of the state directly. Also know as presentational components.

Containers - pieces of the view that are aware of the state using react-redux. Also known as smart components, and higher order components

Note that containers / smart components vs. dumb components is just a good way to structure your app.

Actions - same as flux - command pattern with type and payload.

Action creators - DRY way of creating actions (not strictly necessary)

Difference between redux/react-redux/redux-thunk/any others ?
redux - flux like flow with a single store, that can be used in whatever enviroment you like including vanilla js, react, angular 1/2, etc...

react-redux - bindings between redux and react, that creates containers (smart components) that listen to the store's state changes, prepare the props for and rerender the presentational (dumb) components.

redux-thunk - middleware that allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. Used mainly for async calls to api, that dispatch another action on success / failure.


https://redux.js.org/introduction/getting-started
https://egghead.io/courses/getting-started-with-redux
https://egghead.io/courses/building-react-applications-with-idiomatic-redux
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ntt3yarhm

