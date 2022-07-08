import React, { useState } from "react";
import InputText from "../templates/InputText";
import InputImage from "../templates/InputImage";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterUser = () => {
  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get('room');

  // useState
  const [name, setName] = useState(""); //必須
  const [age, setAge] = useState("");    //必須
  const [gender, setGender] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");

  const navigate = useNavigate();

  const postUserData = ()=>{

    // formdata準備
    const data = new FormData();

    data.append("name", name);
    data.append("age", age);
    data.append("gender", gender);
    data.append("github", github);
    data.append("twitter", twitter);
    data.append("room", room);

    axios
      .post(`http://localhost:8080/member/new?room=${room}`,data)
      .then(()=>{
          navigate(`/event/prepare?room=${room}`);
         })
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-5">ユーザー登録</h1>
      <InputImage title="アイコン画像" />
      <InputText title="名前" id="name" name="name" value={name} setValue={setName}/>
      <InputText title="年齢" id="age" name="age" value={age} setValue={setAge} />
      <InputText title="性別" id="gender" name="gender" value={gender} setValue={setGender}/>
      <InputText title="GitHub" id="github" name="github" value={github} setValue={setGithub} />
      <InputText title="Twitter" id="twitter" name="twitter" value={twitter} setValue={setTwitter} />
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" 
        onClick={postUserData}
        disabled={!name || !age}
      >
        Send
      </button>
    </div>
  );
};
export default RegisterUser;
