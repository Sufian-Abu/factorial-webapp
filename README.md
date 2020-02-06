## Question
    Complete the following component in such a way that, if a user enter a number in the input field and submit the form, it will calculate and render the factorial inside the h2 tag.
    
    import React from "react";
    
    export default function App() {
      return (
        <div>
          <h1>Factorial Calculator</h1>
          <form>
            <input type="number" placeholder="Enter a number..." />
            <br />
            <button>Calculate Factorial</button>
          </form>
          <h2>Factorial: {0}</h2>
        </div>
      );
    }

## In the project directory

    ### `yarn install`

    ### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
