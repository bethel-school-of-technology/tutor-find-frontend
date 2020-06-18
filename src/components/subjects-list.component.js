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
        
        <table className="table" style={{ justifyContent: "right" }}>
      
         
        <tr className="thead-light">
            <tr>

              <th> Subject </th> 
              <th>  <select
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            >
              <option selected>Choose...</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="English">English</option>
              <option value="Music"> Music </option>
            </select></th>
             
              <th>Duration</th>
              <th>  
                <select
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            >
              <option selected>Choose...</option>
             
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
            </th>
              </tr>
            </tr>
          <tbody>{this.subjectList()}</tbody>
        </table>
        <div className="subject-btn"><button id="myBtn" onclick="javascript:alert('Hello World!')">Submit</button></div>
      </div>
    );
  }
}
