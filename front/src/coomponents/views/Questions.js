import React, { useState } from "react";
import SecTitle from "../parts/SecTitle";
import QuestionCard from "../parts/QuestionCard";
import { questions } from "../../data/questions";
import BaseButton from "../parts/BaseButton";

const Questions = () => {
  const yousers = [
    {
      name: "太朗",
    },
    {
      name: "二郎",
    },
    {
      name: "三太郎",
    },
  ];
  const [current, setCurrent] = useState(0);
  const nextQuestion = () => {
    setCurrent(current + 1);
    console.log(current)
  };
  const backQuestion = () => {
    setCurrent(current - 1);
    console.log(current)
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center">
        <div className="mt-10 mb-7">
          <p className="text-3xl">回答者は</p>
          <h2 className="text-3xl">{yousers[current].name + "さん"}</h2>
        </div>
        <SecTitle title="質問内容" />
        <QuestionCard content={questions[current]} />
        {yousers.length === current +1 ? (
          <>
            <div className="mb-0 mt-3">
              <BaseButton name="参加者一覧"/>
            </div>
            
            <div className="mb-0 mt-3">
              <BaseButton onClick={(e) => backQuestion(e)} name="前の人"/>
            </div>
          </>
        ) : (
          <>
            <div className="mb-0 mt-3">
              <BaseButton onClick={(e) => nextQuestion(e) } name="次の人"/>
            </div>
            {!current - 1 < 0 ? (
              <>
                <div className="mb-0 mt-3">
                  <BaseButton onClick={(e) => backQuestion(e)} name="前の人"/>
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
