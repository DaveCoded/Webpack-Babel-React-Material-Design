import React from "react";
import ReactDOM from "react-dom";

import "typeface-roboto";
import Button from "@material-ui/core/Button";
import "index.scss";

let HelloWorld = () => {
  return (
    <>
      <h1>Hello there World!</h1>
      <Button variant="contained" color="primary">
        Material Button
      </Button>
    </>
  );
};
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
