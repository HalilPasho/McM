This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Comments about the project

Used in this project: react router, material ui, for the styles i used scss.
For loader i used the react loaders, to try it better, just remove something from API and see it in action.
About the icons i couldnt get them png from the design, it was coming always as jpeg even i chose the png option so i used the material ui icons and some i downloaded myself.
In the search inpput, you can search by name, lastname, and email.
In the sreen md and sm i used the burger menu from material ui but it can be changed if needed.
The icons backgound color are random, also the text names in card.

I did use some mocked data and API from https://jsonplaceholder.typicode.com/

The URL is updated when the user adds input in the search bar and for testing purposes in Chrome dev tools / Network also added a fetch api when user adds input.

### Issues

The issue i had was about the design.
Example in the inner container with white background the width says is 1161px. One Card component it says is 305px width plus 24px margin from each other so : (305*4) + (24*5) = 1340px. It cant be fit inside of that if we have 4 containers for raw.

Also the mobile part, as i used flex and grid, it comes with mobile feature, you requested the scroll to be horizontally, so flex and grid as desktop, in mobile in scroll horizontaly . But i wouldnt take that approach since it was not the best solution for me but i tried to keep as requested in design.
