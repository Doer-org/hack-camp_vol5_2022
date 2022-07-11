import React, { useEffect, useState } from "react";
import SecTitle from "../parts/SecTitle";
import QuestionCard from "../parts/QuestionCard";
import BaseButton from "../parts/BaseButton";
import NextButton from "../parts/Nextbutton";
import axios from "axios";
import { useLocation } from "react-router-dom";
import robot from "../../assets/img/robot.png";

const Questions = () => {
  // query paramの取得
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const room = query.get("room");

  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${room}`)
      .then((response) => {
        const data = response.data.data;
        // 参加者名
        const users = data.map((user) => {
          return user.name;
        });
        setUsers(users);
        //質問
        let d = new Date();
        let month = d.getMonth() + 1;
        const count = data.length;
        const questions = data.map((item) => {
          return {
            id: (item.id + month - 1) % count,
            question: item.question,
          };
        });
        questions.sort((a, b) => b.id - a.id);
        setQuestions(questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [current, setCurrent] = useState(0);
  const nextQuestion = () => {
    setCurrent(current + 1);
    console.log(current);
  };
  const backQuestion = () => {
    setCurrent(current - 1);
    console.log(current);
  };
  return (
    <div className="bg-thin-purple h-screen">
      <div className="w-10/12 mx-auto">
        <div className="text-center">
          <div className="pt-10 mb-7">
            <p className="text-3xl">回答者は</p>
            <h2 className="text-3xl">{users[current] + "さん"}</h2>
          </div>
          <SecTitle title="質問内容" />
          <QuestionCard content={questions[current] ? questions[current].question : null} />


          <div class="mt-8 mb-2 mx-auto bg-grey-light rounded-lg shadow-lg py-8 px-4 bg-gray-100 mx-10">
              <p class="italic text-blue-darkest leading-normal text-lg">
                質問タイムです❔<br/>
              </p>
              <p class="text-center pt-8 text-grey-darker text-sm">
                みんなの質問を私がランダムで選んでいます<br/>
                {users[current] + "さん"}、お答えください！✨
              </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <img src={robot} width="100px"/>
          </div>


          {users.length === current + 1 ? (
            <>
              <div className="mb-0 mt-3">
                <NextButton path={`/event/?room=${room}`} name="参加者一覧" />
              </div>

              <div className="mb-0 mt-3">
                <BaseButton onClick={(e) => backQuestion(e)} name="前の人" />
              </div>
            </>
          ) : (
            <>
              <div className="mb-0 mt-3">
                <BaseButton onClick={(e) => nextQuestion(e)} name="次の人" />
              </div>
              {!current - 1 < 0 ? (
                <>
                  <div className="mb-0 mt-3">
                    <BaseButton onClick={(e) => backQuestion(e)} name="前の人" />
                  </div>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>

  );
};
export default Questions;
