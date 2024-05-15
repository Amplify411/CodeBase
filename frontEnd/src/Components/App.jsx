import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]=useState([]);
  
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
          onDelete={deleteItem}/>)
      })}
      <Footer />
    </div>
  );
}

export default App;