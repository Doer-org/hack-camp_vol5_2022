import React  from "react";
import { useState } from "react";
import SecTitle from "../parts/SecTitle";

const InputImage = ({ title, id, name }) => {
  const [preview, setPreview] = useState("");
  const handleChangeFile = (e) => {
    const { files } = e.target;
    setPreview(window.URL.createObjectURL(files[0]));
  };
  const handleDeleteFile = () => {
    setPreview("");
  }

  return (
    <div className="my-4">
      <SecTitle title={title} />
      {!preview ? (
        <form className="text-center" method="post">
          <label className="w-[200px] h-[200px] rounded-full overflow-hidden bg-thin-purple border inline-block relative">
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleChangeFile}
            />
            <div className="flex just items-center h-full justify-center text-slate-600">画像選択</div>
          </label>
        </form>
      ) : (
        <>
          <div className="w-[200px] mx-auto relative">
            <button className="absolute top-0 right-0 z-10 text-2xl" onClick={handleDeleteFile}>×</button>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-thin-purple border inline-block">
              <img className="w-[200px] h-auto" src={preview} alt={preview} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default InputImage;
