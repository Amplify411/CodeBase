import React,{useState} from "react";
import {Link} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Note from "../Components/Note";
import CreateArea from "../Components/CreateArea";
import LoginIcon from '@mui/icons-material/Login';

function Home() {
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
    } )}
  return (
    <div>
      <Header />
      <button class="top-left-button" type="submit" ><Link to="/signup"><LoginIcon /></Link></button>
      <CreateArea 
      onAdd={handleAdd}/>
      {notes.map((items,index)=>{return (
      <Note 
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

export default Home;