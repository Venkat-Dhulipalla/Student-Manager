import axios from "axios";
import { useEffect, useState } from "react";
import "./student.css"; // Import CSS file for styling

function Student() {
  const [studentid, setId] = useState("");
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/v1/student/getall"
      );
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/student/save", {
        studentname,
        studentaddress,
        mobile,
      });
      alert("Student Registration Successful");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      Load();
    } catch (error) {
      alert("Student Registration Failed");
      console.error("Error saving student:", error);
    }
  }

  async function editStudent(student) {
    setName(student.studentname);
    setAddress(student.studentaddress);
    setMobile(student.mobile);
    setId(student._id);
  }

  async function deleteStudent(studentId) {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/student/delete/${studentId}`
      );
      alert("Student deleted successfully");
      Load();
    } catch (error) {
      alert("Failed to delete student");
      console.error("Error deleting student:", error);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/v1/student/edit/${studentid}`,
        {
          studentname,
          studentaddress,
          mobile,
        }
      );
      alert("Registration Updated Successfully");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      Load();
    } catch (error) {
      alert("Failed to update registration");
      console.error("Error updating registration:", error);
    }
  }

  return (
    <div className="main-container">
      <div className="student-container">
        <h1>Student Details</h1>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Student Name</label>
              <input
                type="text"
                className="form-control"
                value={studentname}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Student Address</label>
              <input
                type="text"
                className="form-control"
                value={studentaddress}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
            </div>
            <div className="button-group">
              <button className="btn btn-primary" onClick={save}>
                Register
              </button>
              <button className="btn btn-warning" onClick={update}>
                Update
              </button>
            </div>
          </form>
        </div>
        <table className="table thead-light table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Address</th>
              <th>Student Mobile</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
