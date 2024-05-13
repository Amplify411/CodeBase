import React from 'react'
import HighlightIcon from "@mui/icons-material/Highlight";
import NotesIcon from '@mui/icons-material/Notes';
import "./CSSfiles/style.css"

function Header(){
    return <header className="head">
                    <h1 ><NotesIcon/> My Notes </h1>
                </header>
};

export default Header;