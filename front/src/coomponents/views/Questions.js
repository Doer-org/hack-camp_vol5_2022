import React, { useState } from "react";
import SecTitle from "../parts/SecTitle";
import QuestionCard from "../parts/QuestionCard";
import BaseButton from "../parts/BaseButton";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Questions = () => {
  // query paramの取得
  // const search = useLocation().search;
  // const query = new URLSearchParams(search);
  // const room = query.get("room");

  const room =
    "46e96c86ab6db490de247c05b95a905e19eee8985f341856cb162b1e84d73241";
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);

  axios
    .get(`https://go-server-doer-vol5.herokuapp.com/member/all?room=${room}`)
    .then((response) => {
      const data = response.data;
      //参加者名
      const users = data.map((user) => {
        return user.name;
      });
      setUsers(users);
      console.log(users)
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
      console.log(questions);
    })
    .catch((err) => {
      console.log(err);
    });

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
    <div className="w-10/12 mx-auto">
      <div className="text-center">
        <div className="mt-10 mb-7">
          <p className="text-3xl">回答者は</p>
          <h2 className="text-3xl">{users[current] + "さん"}</h2>
        </div>
        <SecTitle title="質問内容" />
        <QuestionCard content={questions[current].question} />
        {users.length === current + 1 ? (
          <>
            <div className="mb-0 mt-3">
              <BaseButton name="参加者一覧" />
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
  );
};
export default Questions;
