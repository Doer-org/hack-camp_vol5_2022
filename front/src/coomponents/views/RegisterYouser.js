import React from "react";
import InputText from "../templates/InputText" 
import InputImage from "../templates/InputImage" 

export default class RegisterYouser extends React.Component {
  render() {
    return (
      <div className="w-10/12 mx-auto">
        <h1 className="text-3xl text-center mt-10 mb-5">ユーザー登録</h1>
        <InputImage title="アイコン画像" />
        <InputText title="名前" id="name" name="name" />
        <InputText title="SNS" id="sns" name="sns" />
      </div>
    );
  }
}
