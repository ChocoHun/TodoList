import "./App.css";
import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";
import { useState, useRef } from "react";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React  공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "잠자기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor on_Create={onCreate} />
      <List listTodos={todos} />
    </div>
  );
}

export default App;
