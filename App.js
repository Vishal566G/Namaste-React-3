import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it into React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const JsxHeading = (
    <h1 className="halo" tabIndex="7">
      This is using Jsx
    </h1>
);

const Helo = (<>Santuryy!!</>);

// React Components :-
// Class Based Component - Old
// Functional Component - New

// React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      {Helo}
      <h1>Namaste React using Functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
