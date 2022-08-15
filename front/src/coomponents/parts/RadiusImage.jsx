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
        <div className={style}>
          <img 
            alt="profile" 
            src={`https://avatars.githubusercontent.com/u/90210216?s=200&v=4`}  
            className="rounded-full"
            width="50"
            height="50"
          />
        </div>
      )}
    </div>
  );
};
export default SecTitle;
