import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Diaglogbox.css'; 

function DialogBox() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleloginbutton = () => {
    setOpen(false);
    navigate('./login')
}
const handlesignupbutton = () => {
  setOpen(false);
    navigate('./signup')
}


  return (
    <>

      <div className='dialog'
        open={open}
        onClose={handleClose}

      >
        <div className="diaglog-content">
          <div className="header">
            <h2>To Publish the article you have to Login First</h2>
            <p></p>
          </div>
          <div>

            <div className="login-signup-btns">
                    <button onClick={() => handleloginbutton()} className="login-btn">Login</button>
                    <button onClick={() => handlesignupbutton()} className="signup-btn">SignUp</button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogBox;
