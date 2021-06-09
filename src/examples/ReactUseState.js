// https://www.react.express/hooks/usestate
import React, { useState } from "react";

// Tạo hàm random cho dice roll
const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1; // 0 * 6 + 1
};

export default function ReactUseState() {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3]); // Khai báo state gồm mảng 1, 2, 3

  return (
    <div>
      <button
        onClick={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()]); // Khi bấm vào Button sẽ gọi đến hàm random cho dice roll
        }}
      >
        Roll Dice
      </button>
      <ul>
        {diceRolls.map((diceRoll, index) => (
          <li key={index}>{diceRoll}</li> // Hiển thị giá trị dice roll
        ))}
      </ul>
    </div>
  );
}
