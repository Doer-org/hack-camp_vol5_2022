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

  // createUser data
  const [name, setName] = useState(""); //必須
  const [age, setAge] = useState("");    //必須
  const [gender, setGender] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [question, setQuestion] = useState(""); //必須

  // Step bar
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const navigate = useNavigate();

  const createUserData = ()=>{

    // formdata準備
    const data = new FormData();

    data.append("name", name);
    data.append("age", age);
    data.append("gender", gender);
    data.append("github", github);
    data.append("twitter", twitter);
    data.append("question", question);
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
      {
        (first === false && second === false && third === false)?
        <>
          <div>説明とか</div>
          <div>texttext.ss..</div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" 
            onClick={()=>{setFirst(!first)}}
            >
              Next
            </button>

            <div class="w-11/12 lg:w-2/6 mx-auto">
              <div class="bg-gray-200 h-1 flex items-center justify-between">

                <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                    <div class="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    <div class="absolute right-0 -mr-2">
                      <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                          <p tabindex="0" class="focus:outline-none text-fuchsia-700 text-xs font-bold">Step 0: ようこそ！</p>
                      </div>
                  </div>
                </div>

                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>

                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>

                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>

              </div>
            </div>

        </>
        :null
      }
      {
        (first === true && second === false && third === false)?
        <>
          <InputText title="呼ばれた名前 または あだな" id="name" name="name" value={name} setValue={setName}/>
          <InputText title="年齢" id="age" name="age" value={age} setValue={setAge} />
          <InputText title="性別" id="gender" name="gender" value={gender} setValue={setGender}/>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" 
            onClick={()=>{setSecond(!second)}}
            disabled={!name || !age}
            >
              Next
            </button>

            <div class="w-11/12 lg:w-2/6 mx-auto">
              <div class="bg-gray-200 h-1 flex items-center justify-between">

                <div class="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div class="absolute right-0 -mr-2">
                        <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                            <p tabindex="0" class="focus:outline-none text-fuchsia-700 text-xs font-bold">Step 1: 基本情報の入力</p>
                        </div>
                    </div>

                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                    <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                        <div class="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                </div>

                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>

                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>

              </div>
            </div>

        </>
        :null
      }
      {
        (second === true && third === false)?
        <>
          <InputText title="GitHub ( ユーザー名 )" id="github" name="github" value={github} setValue={setGithub} />
          <InputText title="Twitter ( 例: @OOO )" id="twitter" name="twitter" value={twitter} setValue={setTwitter} />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" 
            onClick={()=>{setThird(!third)}}
          >
            Next
          </button>

          <div class="w-11/12 lg:w-2/6 mx-auto">
            <div class="bg-gray-200 h-1 flex items-center justify-between">
                <div class="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                </div>


                <div class="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div class="absolute right-0 -mr-2">
                        <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                            <p tabindex="0" class="focus:outline-none text-fuchsia-700 text-xs font-bold">Step 2: SNS情報入力</p>
                        </div>
                    </div>

                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                    <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                        <div class="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                </div>


                <div class="w-1/3 flex justify-end">
                    <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>
              </div>
          </div>
        </>

        :null
      }
      {
        (third === true)?
        <>
          <InputText title="他の人に聞きたい質問" id="question" name="question" value={question} setValue={setQuestion} />
          <button
          className="bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2" 
          onClick={createUserData}
          disabled={!question}
          >
            Ready
          </button>

          <div class="w-11/12 lg:w-2/6 mx-auto">
            <div class="bg-gray-200 h-1 flex items-center justify-between">

                <div class="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                </div>

                <div class="w-1/3 bg-fuchsia-500 h-1 flex items-center">
                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                </div>

                <div class="w-1/3 flex justify-between bg-fuchsia-500 h-1 items-center relative">
                    <div class="absolute right-0 -mr-2">
                        <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                            <p tabindex="0" class="focus:outline-none text-fuchsia-700 text-xs font-bold">Step 3: 質問の入力</p>
                        </div>
                    </div>

                    <div class="bg-fuchsia-500 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                    </div>
                    <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                        <div class="h-3 w-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                </div>

              </div>
          </div>

  
        </>
        :null
      }



  
    </div>
  );
};
export default RegisterUser;
