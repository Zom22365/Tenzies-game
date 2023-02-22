import React, { useState } from "react";

const Screen = () => {
  const [mark, setMark] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [status, setStatus] = useState("Roll");
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let temp = Math.floor(Math.random() * 6) + 1;
    arr.push(temp);
  }
  const [card, setCard] = useState(arr);

  function handleClick(e) {
    for (let i = 0; i < mark.length; i++) {
      if (i === Number(e.target.id)) {
        mark[i] = 1;
        e.target.classList.add("checked");
        console.log(mark);
        setMark(mark);
      }
    }
    if (!mark.includes(0)) {
      setStatus("Reset Game");
    }
  }

  function rollChange() {
    if (mark.includes(0)) {
      let brr = [];
      for (let i = 0; i < mark.length; i++) {
        if (mark[i] === 0) {
          brr[i] = Math.floor(Math.random() * 6) + 1;
        } else {
          brr[i] = card[i];
        }
      }
      console.log(brr);
      setCard(brr);
    } else {
      setMark([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setStatus("Roll");
      let elems = document.getElementsByClassName("btn checked");
      for (let i = 0; i < 10; i++) {
        elems[0].classList.remove("checked");
        console.log(i);
      }

      let brr = [];
      for (let i = 0; i < mark.length; i++) {
        brr[i] = Math.floor(Math.random() * 6) + 1;
      }
      setCard(brr);
    }
  }

  const numbers = card.map((item, index) => {
    return (
      <button className="btn" key={index} id={index} onClick={handleClick}>
        {item}
      </button>
    );
  });

  return (
    <div className="screen">
      <h1 className="title">Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className="block__number">
        <ul>{numbers}</ul>
      </div>
      <div>
        <button className="btn__roll" onClick={rollChange}>
          {status}
        </button>
      </div>
    </div>
  );
};

export default Screen;
