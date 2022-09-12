
// function Todo(){
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [numberOfTask, setNumberOfTask] = useState(0);

//   return (
//     <>
//     <h1>Todo List</h1>
//     <input onKeyPress={updateInput} type="text" value={input} onChange={updateInput}/>
//     <button onClick={addTodo}>Add Todo</button>
//     <h3>Number of Task: {numberOfTask}</h3>
//     <ul>
//       {todos.map((todo, index) => {
//         return (
//         <>
//         <li key={index}>{todo} <button onClick={() => deleteTodo(index)}>Remove</button></li>
//         </>)
//       })}
//     </ul>
//     </>
//   );
//   function deleteTodo(index) {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     setNumberOfTask(numberOfTask - 1);
//   }
//   function updateInput(value) {
//     setInput(value.target.value);
//     if(value.key === "Enter"){
//       addTodo();
//     }
//   }
//   function addTodo(){
//     if(input !== ""){
//     setTodos([...todos, input]);
//     setInput("");
//     setNumberOfTask(numberOfTask+1);
//     }else{
//       alert("Please enter a todo");
//     }
//   }
// }
