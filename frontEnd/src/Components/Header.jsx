import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import NotesIcon from '@mui/icons-material/Notes';
import "./CSSfiles/style.css"

function Header(){
    return <header className="head">
                <h1 ><NotesIcon/> My Notes </h1>
                <button class="top-left-button" type="submit"><LoginIcon /></button>
            </header>
};

export default Header;