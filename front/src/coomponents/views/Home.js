import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>home</div>
        <div>
          <Link to="CreateRoom">CreateRoom</Link>
        </div>
      </div>
    );
  }
}
 