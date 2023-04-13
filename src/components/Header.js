import classes from './Header.module.css';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const Header = () => {
  const dispatch = useDispatch();

  const selectOnChange=(event)=>{
    console.log('EVENT:'+event.target.value)    
    if (event.target.value==='Admin'){
      dispatch({ type: 'Admin'});
    }else{
      dispatch({ type: 'Registrars' });
    }
  }

  
  return (
    <header className={classes.header}>
      <h1>Interview Project</h1>      
        <select  onChange={selectOnChange} aria-label="Default select example" name="AuthType" id="selectAuthType">
          <option value="Admin">Admin</option>
          <option value="Registrars">Registrars</option>       
      </select>    
    </header>
  );
};

export default Header;
