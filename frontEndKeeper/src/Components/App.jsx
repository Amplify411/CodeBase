import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"

function App() {

  const [notes,setNotes]=useState([]);
  const [title,setTitle]=useState("Dummy Title");

  function handleAdd(text){
    setNotes(prevNotes=>{
            return [...prevNotes,text]})
    console.log(notes);
  }

  function deleteItem(id){
    setNotes( (prevNotes)=>{
      return prevNotes.filter((items,index)=>{ 
        return index !== id

      })
    } )
  }
  async function getData(){
    const urlName="http://localhost:3000/"
    const response= await axios.get(urlName)
    const result = response.data;
    const strResult=JSON.stringify(result);
    setTitle(strResult);
 }
  getData();
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={handleAdd}/>
      {notes.map((items,index)=>{
        return (<Note 
          key={index} 
          id={index}
          title={items.title} 
          content={items.content}
          nodeStr={title}
          onDelete={deleteItem}/>)
      })}
      <Footer />
    </div>
  );
}

export default App;