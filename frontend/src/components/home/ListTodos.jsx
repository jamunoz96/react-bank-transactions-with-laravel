// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Todo from "./Todo";
// import { getTodos } from "../../store/actions/transactionActions";



// const ListTodos = ({ todo, setTodo }) => {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTodos());
//   }, [todo._id, dispatch]);

//   return (
//     <>
//       <div >
//         <h1>
//           <b>{todos.length > 0 ? "List Todo" : "Empty Todo;"}</b>
//         </h1>
//         {todos &&
//           todos.map((todo) => {
//             return (
//               <Todo
//                 todo={todo}
//                 key={todo._id}
//                 setTodo={setTodo}
//                 todos={todos}
//               />
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default ListTodos;
