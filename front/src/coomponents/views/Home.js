import React from "react";
import NextButton from "../parts/button";

export default class Home extends React.Component {
  render() {
    return (
      <div> 
        <div align="center">
          <h1 className="text-6xl mt-24">タイトル</h1>
          <h2 className="text-3xl mt-8 mb-44" >説明文</h2>
          <NextButton path="CreateRoom" name="はじめる"/>
        </div>
        <div><NextButton path="About" name="About"/></div>
      </div>
    );
  }
}
 