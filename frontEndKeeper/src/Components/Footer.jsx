import React from 'react'
import "./CSSfiles/style.css"

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer(){
    return <div>
                <footer>
                    <p className="foot">Copyright ⓒ {currentYear}</p>
                </footer>
            </div>
};

export default Footer;