// function randomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function Game(){
//   const [score, setScore] = useState(0);
//   const [num1, setNum1] = useState(randomNumberInRange(0,50));
//   const [num2, setNum2] = useState(randomNumberInRange(0,50));
//   const [answer, setAnswer] = useState("");
//   const [mystyle, setStyle] = useState({color: "black"});

//   if(score >=3){
//     return renderWin();
//   }else{
//     return renderGame();
//   }


//   function renderGame(){
//     return (
//       <>
//       <h1 style={mystyle}>{num1} + {num2} </h1>
//       <input onKeyPress={inputKeyPressed} onChange={updateAnswer} type="number" value={answer}/>
//       <h3>score: {score}</h3>
//       <button onClick={reset}>reset</button>
//       </>
//     );
//   }


//   function renderWin(){
//     return (
//       <h1>Congratulation You Won!!!</h1>
//     );
//   }

//   function reset(){
//     setNum1(randomNumberInRange(0,50));
//     setNum2(randomNumberInRange(0,50));
//     setAnswer("");
//   }

//   function updateAnswer(e){
//     setAnswer(e.target.value);
//   }

//   function inputKeyPressed(e){
//     if(e.key === "Enter"){
//       if(num1 + num2 === parseInt(answer)){
//         setScore(score + 1);
//         setStyle({color: "Black"});
//         reset();
//       }else{
//         setStyle({color: "red"});
//         setAnswer("");
//       }
//     }
//   } 
// }
