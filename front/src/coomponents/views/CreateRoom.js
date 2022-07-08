import React from "react";
import Select from 'react-select';

const CreateRoom = () =>  {
  const options = [
    { value: 'pikachu', label: 'ピカチュウ' },
    { value: 'bulbasaur', label: 'フシギダネ' },
    { value: 'charmander', label: 'ヒトカゲ' },
    { value: 'squirtle', label: 'ゼニガメ' },
  ]
    return (
      <div>
        <div align="center">
          <h1 className="text-5xl mt-28">ルーム作成</h1>
        </div>

        <div className="w-72" align="center">
        <Select options={options} label="人数"/>
        </div> 
      </div>
    );
}


export default CreateRoom;