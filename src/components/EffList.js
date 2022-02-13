import React from "react";
import EffButton from "./EffButton";

const EffList = (props) => {
  return (
    <div className={props.effList}>
      <EffButton eff="0" effValue="no_damage_to" effCheck={props.effCheck} />
      <EffButton
        eff="0.5"
        effValue="half_damage_to"
        effCheck={props.effCheck}
      />
      <EffButton
        eff="1"
        effValue="normal_damage_to"
        effCheck={props.effCheck}
      />
      <EffButton
        eff="2"
        effValue="double_damage_to"
        effCheck={props.effCheck}
      />
    </div>
  );
};

export default EffList;
