import React from "react";

const SecTitle = ({style, github, name }) => {
  return (
    <div>
      {github ? (
        <div className={style}>
          <img
            src={`https://github.com/${github}.png`}
            alt={name}
            width="50"
            height="50"
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="ounded-full w-[50px] h-[50px] bg-purple"></div>
      )}
    </div>
  );
};
export default SecTitle;
