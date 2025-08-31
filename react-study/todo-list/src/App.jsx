import { useRef, useState } from "react"
import Layout from "./components/Layout"
import SearchBar from "./components/SearchBar"
import Title from "./components/Title"
import ToDoList from "./components/ToDoList"

function App() {
  const [list, setList] = useState([]);

  const idRef = useRef(0);
  const handleSubmit = (value) => {
      setList((prevList) => prevList.concat( {
          id: (idRef.current +=1),
          text: value,
          completed: false
      }))
  }

  const handleToggle = (id) => {
    setList(prevList => prevList.map (item =>
      if(item.id === id){
        return (...item, completed: !item.completed)
      }
        reutrn item;
    ))
  }
  return (
    <div>
      <Layout>
        <Title />
        <SearchBar onSubmit={handleSubmit}/>
        <ToDoList data={list}/>
      </Layout>

    </div>
  )
}

export default App
