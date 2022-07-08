import {React, useState} from "react";
// import Select from 'react-select';

const CreateRoom = () =>  {
  const [count, setCount] = useState(0);
  
  const CountUp = () => {
    setCount(count+1)
  }

  const CountDown = () => {
    if (count>0){
      setCount(count-1);
    }
  }

  return (
    <div>
      <div align="center">
        <h1 className="text-5xl mt-28">ルーム作成</h1>
      </div>
      <div align="center" className="text-4xl mt-24">人数</div>
      <div align="center" className="text-5xl mt-10 flex justify-center">
        <button onClick={CountDown} className="flex-grow-0 bg-grey text-white w-12 h-12 text-lg shadow-lg rounded-full mr-4 hover:bg-thick-grey hover:shadow-sm hover:translate-y-0.5 transform transition">ー</button>
        <div className="flex-grow-0 px-20 py-1 bg-purple text-lg text-white rounded-full">{count}</div>
        <button onClick={CountUp} className="flex-grow-0 bg-grey text-white w-12 h-12 text-lg shadow-lg rounded-full ml-4 hover:bg-thick-grey hover:shadow-sm hover:translate-y-0.5 transform transition">＋</button>
      </div>
    </div>
    );
}


export default CreateRoom;