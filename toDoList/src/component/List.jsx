import "./List.css";
import TodoItem from "./TodoItem";
const List = ({ listTodos }) => {
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {listTodos.map((todos) => {
          return <div>{todos.content} </div>;
        })}
      </div>
    </div>
  );
};
export default List;
