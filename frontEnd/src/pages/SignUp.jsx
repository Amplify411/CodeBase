import React,{useState} from 'react';
import "../CSSfiles/SignUp.css";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
function SignUp(){
    
    const [isMousedOver, setMouseOver] = useState(false);
    const [userDetail,setUserDetail]=useState({
     username:"",
     password:""
    });


    function handleMouseOver() {
      setMouseOver(true);
    }
    function handleMouseOut() {
      setMouseOver(false);
    }

    function handleChange(event){
      const { value, name } = event.target;
      setUserDetail(prevValue => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value
        };
      }
    });
    console.log(userDetail);
    }

    function handleSubmit(event){
      
    }
    return (
        <>
        <Header />
        <div className="signUp">
        <input onChange={handleChange} className='sign_ip' type="text" placeholder='Username' name="username" value={userDetail.username}   />
        <input onChange={handleChange} className='sign_ip' type="text" placeholder='Password' name="password" value={userDetail.password}  />
        <button
        className='sign_button'
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleSubmit}
      >
        Submit
      </button>
      </div>
        <Footer />
    
    </>)
}

export default SignUp;