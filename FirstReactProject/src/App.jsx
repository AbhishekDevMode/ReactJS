import React from "react";
import StyleCard from "./components/StyleCard";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import Counter from "./components/Counter";
import { DiVim } from "react-icons/di";
import ToDoList from "./components/ToDoList";

// const App=()=>{
//   return (
//     <section>
//       <h1 style={{color:"green"}}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };

// const App=()=>{
//   // return (<section>
//   //   <h1>Separate File for Styling</h1>
//   //   <FaCartArrowDown />
//   // </section>
//   // );
//   return <section>
//     <StyleCard/>
//   </section>
// };

// export default App;
// const App=()=>{

//   const styles={color:"white",backgroundColor:"teal",padding:"2rem"};
//   return (
//     <section>
//       <h1 style={styles}>
//         Abhishek Vishwakarma
//       </h1>
//     </section>
//   );
// return <section></section>;
// };

// export default App;
// const Move=()=>{
//   function moveHandler(){

//     alert("Mouse move event fired")
//     console.log("Mouse move event fired")
//   }
//   return (
//     <p></p>
//   )
// }
// const Copy = () => {
//   const copyHandler=()=>{
//     console.log("Stop stealing my content");
//   };

//   return (
//     <p onCopy={copyHandler}>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//       praesentium quod cum nihil fugit officia nulla obcaecati esse sapiente
//       explicabo, dicta delectus inventore quasi culpa nobis ex odio omnis
//       aliquid.
//     </p>
//   );
// };
// const Button = () => {
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };
// const App = () => {
//   return (
//     <section>
//       {/* <Button /> */}
//      {/* <Copy/> */}
//      <Move/>
//     </section>
//   );
// };
// import { useState } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   // const counter=useState("Abhishek Vishwakarma");

//   // console.log(counter)
//   const increment=()=>setCount(count+1);

//   return (
//     <section>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//     </section>
//   );
// };

// import { useState } from "react";

// const App = () => {
//   const[movies,setMovies]=useState([{id:1,title:"Spider Man",ratings:3},{id:2,title:"Superman",ratings:6},]);

// const handleClick=()=>{

//   setMovies(movies.map((m)=>(m.id==1?{...movies,tile:"John Wick 5"}:m)));

// };
// return (
// <section>
// <ExampleOne/>
// {/* {movies.map(m=>(<li key={Math.random()}>{m.title}</li>))} */}
// </section>);
// };
// const App=()=>{

//   return ( <div> <ExampleOne/> <div>
//     );
// };
// export default App
import Profile from "./components/Profile";
import Shopping from "./components/Shopping";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
// const App = () => {
// return (
// <div>
{
  /* <ExampleOne/>  */
}
{
  /* <ExampleTwo/>  */
}
{
  /* <ExampleThree/>  */
}
{
  /* <Counter/> */
}
{
  /* <ToDoList/> */
}
{
  /* <Profile/> */
}
{
  /* <Shopping/> */
}
{
  /* <CopyInput/> */
}
{
  /* <Switcher /> */
}
// </div>
// );
// };

//we  setup useEffect hook to run some code when copmonent render for the first time
//& whenever it re-renders
//& some data in our component changed
import { useState, useEffect } from "react";
import { Lia500Px } from "react-icons/lia";

// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//   if (value > 0) {
//       console.log("call useEffect");
//       document.title = `Increment ${value}`;
//     }}, [value]);

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click Me </button>
//       <button onClick={() => setSomething()}>Incerement by something </button>
//     </div>
//   );
// };
//fetching the data
const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.title}</li>
            <li>Body:{todo.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default App;
