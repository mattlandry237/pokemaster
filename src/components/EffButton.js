import React from "react";

const EffButton = (props) => {
  return (
    <button value={props.eff} onClick={() => props.effCheck(props.effValue)}>
      {props.eff}
    </button>
  );
};

export default EffButton;
