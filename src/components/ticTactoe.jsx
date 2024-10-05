import { useRef, useState } from "react";
import "./ticTacToe.css";
export default function TicTac() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [tictac, seTictac] = useState(0);
  const [lock, setLock] = useState(false);
  const headReaf = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const handl = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  function board(e, num) {

    if (lock) {
      return 0;
    }
    const newData =[...data]
    if (tictac % 2 === 0) {
      e.target.innerHTML = "<span>X</span>";
      newData[num]= "x";
      seTictac(tictac + 1);
    } else {
      e.target.innerHTML = "<span>O</span>";
      newData[num]= "o";
      seTictac(tictac + 1);
    }
    setData(newData);
    checkWinner(newData);
    console.log(newData)
  }

  function  checkWinner(dataa) {

    if (dataa[0] === dataa[1] && dataa[0] === dataa[2] && dataa[0] !== "") {
      fin(dataa[0])
      } else if (dataa[0] === dataa[3] && dataa[0] === dataa[6] && dataa[0] !== "") {
        fin(dataa[0])
      } else if (dataa[0] === dataa[4] && dataa[0] === dataa[8] && dataa[0] !== "") {
        fin(dataa[0])
      } else if (dataa[1] === dataa[4] && dataa[1] === dataa[7] && dataa[1] !== "") {
        fin(dataa[1])
      } else if (dataa[2] === dataa[5] && dataa[2] === dataa[8] && dataa[2] !== "") {
        fin(dataa[2])
      } else if (dataa[2] === dataa[4] && dataa[2] === dataa[6] && dataa[2] !== "") {
        fin(dataa[2])
      }
  }

  function fin(won){
    setLock(true);
    if(won === "x"){
      headReaf.current.innerHTML += "<span>X  wins</span>";
    }else{
      headReaf.current.innerHTML += "O  wins";
    }
  }

  function  reset() {
    setData(["", "", "", "", "", "", "", "", ""]);
    setLock(false)
    seTictac(0);
    handl.map((e)=>{
      e.current.innerHTML="";
    })
    headReaf.current.innerHTML ="Tic Tac Toe:";
  }


  return (
    <div className="container">
      <h1 className="head" ref={headReaf}>Tic Tac Toe:</h1>
      <div className="board">
        <div className="row">
          <div className="box" ref={box1} onClick={(e) => board(e, 0)}></div>
          <div className="box" ref={box2} onClick={(e) => board(e, 1)}></div>
          <div className="box" ref={box3} onClick={(e) => board(e, 2)}></div>
        </div>
        <div className="row">
          <div className="box" ref={box4} onClick={(e) => board(e, 3)}></div>
          <div className="box" ref={box5} onClick={(e) => board(e, 4)}></div>
          <div className="box" ref={box6} onClick={(e) => board(e, 5)}></div>
        </div>
        <div className="row">
          <div className="box"ref={box7} onClick={(e) => board(e, 6)}></div>
          <div className="box" ref={box8} onClick={(e) => board(e, 7)}></div>
          <div className="box" ref={box9} onClick={(e) => board(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}