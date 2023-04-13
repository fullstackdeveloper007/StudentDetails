import React, { useState, useEffect } from "react";
import classes from './FamilyDetails.module.css'
import { useSelector } from "react-redux";

function FamilyDetails(props) {
  const isEditAllowed = useSelector((state) => state.enabled);

  const studentDetails = {
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    id:Math.random().toString()
  };

//console.log('props.familyInfo.firstName'+ props.familyInfo.firstName);
  const [nationalities, setNaionality] = useState([]);  
  const [addfamilyDetails,setFamilyDetails]=useState([studentDetails])
  const[fFirstName,setfFirstName]=useState(props.familyInfo.firstName)
  const[fLastName,setfLastName]=useState(props.familyInfo.lastName)
  const[fRelation,setfRelation]=useState('')
  const[fNationality,setfNationality]=useState('')
  let addfamilyDetails1=[]

  const firstNameChangeHandler=(event)=>{   
    setfFirstName(event.target.value);
  }

  const lastNameChangeHandler=(event)=>{   
    setfLastName(event.target.value);
  }

  return (
      <>          <div className={classes.familyDetails} >
      <div >
      <table>
      <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="familyFName"
                className="form-control"
                placeholder="First Name"
                 value={fFirstName}
                onChange={firstNameChangeHandler}
                disabled={props.ID === 0 ? false : !isEditAllowed}
              ></input>
            </td>
            <td>
              <input
                type="text"
                id="familyLName"
                className="form-control"
                placeholder="Last Name"
                value={fLastName}
                onChange={lastNameChangeHandler}
                disabled={props.ID === 0 ? false : !isEditAllowed}
              ></input>
            </td>
            <td>             
              
            </td>
            <td>             
            <select id="nationality" className="form-control" disabled={props.ID === 0 ? false : !isEditAllowed}>
                  {
                    props.nationalityData.map((nationality)=>(                      
                      <option key={Math.random()} value={nationality.Title}>{nationality.Title}</option>              
                    ))
                  }
                </select>
            </td>
            <td>
              {(props.ID === 0 || isEditAllowed  )?  <button type="button" className="btn btn-primary" >save</button>:""}
            </td>
            <td>
              {(props.ID === 0 || isEditAllowed  )?  <button type="button" className="btn btn-primary" >Edit</button>:""}              
            </td>
            <td>
              
              {(props.ID === 0 || isEditAllowed  )?  <button type="button" className="btn btn-danger" >Delete</button>:""}              
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default FamilyDetails;
