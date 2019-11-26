import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  somthing is wrong 
</div>
`;
ReactDOM.render(<h1>It works just fine</h1>, document.getElementById("app"));
