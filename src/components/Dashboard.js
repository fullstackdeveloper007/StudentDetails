import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import AddStudentModal from "./AddStudentModal";
import { useSelector  } from 'react-redux';

const DashBoard = () => {  
  const isEditAllowed = useSelector(state => state.enabled);
  const [page, setPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [editStudent, setEditStudent] = useState("");
  
let rowNumber=0
  function getRowNumber() {    
    rowNumber=rowNumber+1;
    return rowNumber 
  }

  function getStudentDetails() {
    try{
    const response = fetch("http://localhost:8088/api/Students")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setStudentList(data);
      });
    }catch(error){
      alert('An error has occured while getting the data:'+error)
    }
  }

  useEffect(() => {
    getStudentDetails();    
  }, []);

  const clickHandler = () => {
    setModalShow(true);
  };

  function fetchDetails(student) {  
    console.log('Redux--'+isEditAllowed);
    //console.log(student);
    setEditStudent(student);
    //console.log("EditStudent" + editStudent.firstName);
    setModalShow(true);
  }

  return (
    <div className={classes.Dashboard}>
      <AddStudentModal  key={Math.random()}
        rowdata={editStudent}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={getStudentDetails}        
      />
      <Button className={classes.buttonSt} onClick={() => fetchDetails({ID:0,firstName:"",lastName:"",dateOfBirth:new Date().toISOString().split('T')[0]})}>
        Add Student{" "}
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {studentList.length > 0 &&
            studentList.map((student) => {
              return (
                <tr key={Math.random()} onClick={() => fetchDetails(student)}>
                  <td>{getRowNumber()}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.dateOfBirth.toLocaleString().split("T")[0]}</td>
                </tr>
              );
            })}          
        </tbody>
      </Table>
    </div>
  );
};
export default DashBoard;
