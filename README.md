# Recipe Book

This is the phase 2 project of the Flatiron Software Engineering Flex course.

## About the app

I created this app so my wife and I could explore new recipes to try at home.
The front end is hosted on Netlify (https://roaring-fox-140188.netlify.app/)
The back end is hosted on Heroku.

## Features

This app has 3 main pages: Random Recipe, Recipe Book, and Add Recipe. 

### Random Recipe

Random Recipe will display a randomly pulled recipe from the Spoonacular public API (https://spoonacular.com/food-api). You can like the recipe using the Like it! button which will add the recipe to the Recipe Book. 

#### Rate and Quota Limits

New random recipes can be fetched per the quota limit of 60 per minute on the Free account. Requests for new random recipes cost 1 point and 0.01 points for each recipe with a maximum 150 points per day. For more information, visit Spoonacular (https://spoonacular.com/food-api/docs#Quotas).

### Recipe Book

This is the place where you will find all of your liked and added recipes. You can delete recipes at any time with the Delete It! button. This action is final and the recipe cannot be restored. There's a chance the same recipe could come up again on the Random Recipe page or it can be manual added on the Add Recipe page.

### Add Recipe

On this page you're able to enter in your own recipes to store in the Recipe Book. All fields are optional. 

#

Below is information regarding running the application.

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

