import react, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Table, Button } from "react-bootstrap";
import FamilyDetails from "./FamilyDetails";
import classes from "./Common.css";
import { useSelector } from "react-redux";

function AddStudentModal(props) {
  const isEditAllowed = useSelector((state) => state.enabled);

  const familyDetails = {
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),    
  };

  let dateOfBirth = "";
  if (props.rowdata.dateOfBirth)
    dateOfBirth = props.rowdata.dateOfBirth.toLocaleString().split("T")[0];

  const [enteredFirstName, setFirstName] = useState(props.rowdata.firstName);
  const [enteredLastName, setLastName] = useState(props.rowdata.lastName);
  const [enteredDOB, setDOB] = useState(dateOfBirth);
  const [nationalities, setNationality] = useState([]);
  const [studentNationality, setStudentNationality] = useState({'ID':1,'Title':'India'});
  const [familyRecord, setFamilyRecord] = useState([familyDetails]);
  

  function getNationality() {
    //Get Student Details
    try{
    const response = fetch("http://localhost:8088/api/Nationalities")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setNationality(data);
      });
    

    const getStudentNationality = fetch(
      "http://localhost:8088/api/Students/" + props.rowdata.ID + "/Nationality"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setStudentNationality(data.nationality);
        console.log('StudentNationality'+data.nationality+studentNationality.nationality)
      });

      const getFamilyDetails = fetch(
        "http://localhost:8088/api/Students/" + props.rowdata.ID + "/FamilyMembers"
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setFamilyRecord(data);
          console.log('FamilyDetails'+data)
        });
  
        

    }catch(error){
      alert("An erorr has occured: "+error)
    }
  }


  //Adding or updating Details
  async function addStudent(studentInfo) {
    let url = "",
      method = "";
    if (props.rowdata.ID === 0) {
      url = "http://localhost:8088/api/Students";
      method = "POST";
    } else {
      url = "http://localhost:8088/api/Students/" + props.rowdata.ID;
      method = "PUT";
    }

    
    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(studentInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      url= 'http://localhost:8088/api/Students/'+data.ID+'/Nationality/'+studentNationality.ID
      if (response.ok){
        
          const response = await fetch(url, {
          method: 'PUT',
          body: '',
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

    }

    } catch (error) {
      alert("An error has occured :" + error);
    }

    alert("saved sucessfully");
    props.onHide();
    props.onSave();
  }

  useEffect(() => {
    getNationality();    
  }, []);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDOB(event.target.value);
  };

  const submitHandler = (event) => {
    console.log("SubmitHandler");
    event.preventDefault();

    const studentDetails = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      dateOfBirth: new Date(enteredDOB),
    };
    debugger;
    console.log("SubmitHandler" + studentDetails);
    addStudent(studentDetails);
  };

  
  function addFamilyClickHandler() {
    setFamilyRecord([...familyRecord, familyRecord]);
    console.log(familyRecord);
  }

  const changeNationality = (event) => {
debugger;
    console.log(event)
    setStudentNationality({'ID':event.target.value,'Title':event.target.value});
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={submitHandler}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Student Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                type="text"
                disabled={props.rowdata.ID === 0 ? false : !isEditAllowed}
                required={true}
                className="form-control"
                value={enteredFirstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input
                type="text"
                disabled={props.rowdata.ID === 0 ? false : !isEditAllowed}
                required={true}
                className="form-control"
                value={enteredLastName}
                onChange={lastNameChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                value={enteredDOB}
                onChange={dateChangeHandler}
                required={true}
                disabled={props.rowdata.ID === 0 ? false : !isEditAllowed}
              />
            </div>
            <div className="col">
              <label>Nationality</label>
              <select
                id="nationality"
                onChange={changeNationality}
                 value={studentNationality.ID}
                className="form-control"
                disabled={props.rowdata.ID === 0 ? false : !isEditAllowed}
              >
                {nationalities.map((nationality) => (
                  <option key={nationality.ID} value={nationality.ID}>
                    {nationality.Title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div></div>
          <div className={classes.AddStudentdiv}>
            
            {
              (props.rowdata.ID === 0 || isEditAllowed)?(
              <button  type="button"
              className="btn btn-primary"
              onClick={addFamilyClickHandler} >              
              Add Family Member
            </button>):""
            }
            {familyRecord.length > 0 &&
              familyRecord.map((expense) => (
                <FamilyDetails familyInfo={expense} ID={props.rowdata.ID}
                  nationalityData={nationalities}
                  key={Math.random()}
                ></FamilyDetails>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {(props.rowdata.ID === 0 || isEditAllowed) ? (
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          ) : ("")}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onHide}
          >
            Close
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddStudentModal;
