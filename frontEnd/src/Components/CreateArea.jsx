import React,{useState,useEffect} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[text,setText]=useState({
        title:"",
        content:""
    });
    const [title,setTitle]=useState("Title");
  
     useEffect( ()=>{

        async function getData() {
            const urlName="http://localhost:3000/"
            const response = await fetch(urlName)
            const result = await response.json();
            const strResult=result.message;
            setTitle(strResult);
            }
        getData();
     },[]);
    
    const [zoomy,setZoomy]=useState(false);

    function handleChange(event){
        const {value,name}=event.target;
        setText(prevValue => {
            return {
                ...prevValue,
                [name] : value 
            }
            
         });
         
      }
    function handleZoom(){
        setZoomy(true)
    }

    function handleSubmit(event){
        props.onAdd(text);
        event.preventDefault();
    } 

    return (
        <div>
        
        <form className="create-note">
        
                {zoomy &&  (<input onChange={handleChange} name="title" placeholder={title} value={text.title} />)}
                <textarea onChange={handleChange} onClick={handleZoom} name="content" placeholder="Take a note..." value={text.content} rows={zoomy?3:1} />
                <Zoom in={zoomy} >
                <Fab onClick={handleSubmit}><AddIcon /></Fab>
                </Zoom>

        </form>
        
        </div>
  );
}

export default CreateArea;
