import React from "react";
import { hot } from "react-hot-loader";

class GreetingComponent extends React.Component {
  render () {
    return (
      <div>
        <p className="indexTitle">WebTagPostion-您的网页书签plus</p>
      </div>
    )
  }
};

export default hot(module)(GreetingComponent)
