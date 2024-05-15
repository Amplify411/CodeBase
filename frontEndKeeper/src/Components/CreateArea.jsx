import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[text,setText]=useState({
        title:"",
        content:""
    });
    
    const [zoomy,setZoomy]=useState(false);

    function handleChange(event){
        const {value,name}=event.target;
        setText(prevValue => {
            return {
                ...prevValue, //we are useing the spread operator here to minimize the code instead of having long if/else statements
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
        
                {zoomy &&  (<input onChange={handleChange} name="title" placeholder={props.nodeStr} value={text.title} />)}
                <textarea onChange={handleChange} onClick={handleZoom} name="content" placeholder="Take a note..." value={text.content} rows={zoomy?3:1} />
                <Zoom in={zoomy} >
                <Fab onClick={handleSubmit}><AddIcon /></Fab>
                </Zoom>

        </form>
        
        </div>
  );
}

export default CreateArea;
