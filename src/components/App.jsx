import React from "react";
import Login from "./Login";

const isLoggedIn = false;




function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? (
        <h1>Hello</h1>
      ) : (
          <Login />
      )}
    </div>
  );
}

export default App;
