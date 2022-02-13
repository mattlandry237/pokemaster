import React from "react";

// const TypeCard = ({ type1, type2 }) => {
//   console.log(type1, type2);
//     if (!type1 && !type2) return <div></div>;
//   if (type2) {
//     return (
//       <div>
//         <img src={types[`${type1}.png`]} />
//         <img src={types[`${type2}.png`]} />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <img src={types[`${type1}.png`]} />
//       </div>
//     );
//   }
//   return <img src={types["bug.png"]} />;
// };

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const typeImg = importAll(
  require.context("../images/type", false, /\.(png|jpe?g|svg)$/)
);

// const types = {
//   0: "normal",
//   1: "fire",
//   2: "water",
//   3: "electric",
//   4: "grass",
//   5: "ice",
//   6: "fighting",
//   8: "poison",
//   9: "ground",
//   10: "flying",
//   11: "psychic",
//   12: "bug",
//   13: "rock",
//   14: "ghost",
//   15: "dragon",
//   16: "dark",
//   17: "steel",
//   18: "fairy",
// };

const TypeCard = (props) => {
  if (!props.type) return <div> </div>;
  return (
    <div>
      <h4>{props.stance}</h4>
      <img alt={props.type.name} src={typeImg[`${props.type.name}.png`]} />
    </div>
  );
};

export default TypeCard;
