import React from "react";

const SecTitle = ({ img, name }) => {
  return (
    <div className="radius-full w-[150px] h-[150px] overflow-hidden">
      {img ? (
        <div>
          <img src={img} alt={name} />
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default SecTitle;
