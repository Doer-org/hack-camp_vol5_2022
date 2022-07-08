import React from "react";
import InputText from "../templates/InputText";
import InputImage from "../templates/InputImage";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get('room');

  const navigate = useNavigate();

  const postUserData = ()=>{
    console.log("POST!")
    // axiosPOST

    navigate(`/event/prepare?room=${room}`);
  
  }

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-5">ユーザー登録</h1>
      <InputImage title="アイコン画像" />
      <InputText title="名前" id="name" name="name" />
      <InputText title="年齢" id="age" name="age" />
      <InputText title="性別" id="gender" name="gender" />
      <InputText title="GitHub" id="github" name="github" />
      <InputText title="Twitter" id="twitter" name="twitter" />
      <div>hoge: {room}</div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" onClick={postUserData}>Send</button>
    </div>
  );
};
export default RegisterUser;
