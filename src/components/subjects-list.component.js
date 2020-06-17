import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subject = (props) => (
  <tr>
    <td>{props.subject.username}</td>
    <td>{props.subject.description}</td>
    <td>{props.subject.duration}</td>
    <td>{props.subject.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.subject._id}>edit</Link> |{" "}
      <button
        onClick={() => {
          props.deleteSubject(props.subject._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class SubjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteSubject = this.deleteSubject.bind(this);

    this.state = { subjects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/subjects/")
      .then((response) => {
        this.setState({ subjects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSubject(id) {
    axios
      .delete("http://localhost:4000/subjects/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      subjects: this.state.subjects.filter((el) => el._id !== id),
    });
  }

  subjectList() {
    return this.state.subjects.map((currentsubject) => {
      return (
        <Subject
          subject={currentsubject}
          deleteSubject={this.deleteSubject}
          key={currentsubject._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="page">
        <h3 style= {{ textAlign: "center"}}>Search for Tutor Services</h3>
        
        <table className="table" style={{ justifyContent: "center" }}>
         
        <tr className="thead-light">
            <tr>

              <th> Subject </th>
              <th><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for subject..." title="Type in a subject"></input></th>
             
              <th>Duration</th>
              <th><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for duration.." title="Type in duration"></input></th>

              {/* <th>Date</th>
              <th>Actions</th> */}
              </tr>
            </tr>
          <tbody>{this.subjectList()}</tbody>
        </table>
        <div className="subject-btn"><button id="myBtn" onclick="javascript:alert('Hello World!')">Submit</button></div>
      </div>
    );
  }
}
