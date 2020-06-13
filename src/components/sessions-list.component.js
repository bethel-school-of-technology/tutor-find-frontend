import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subject = props => (
  <tr>
    <td>{props.subject.username}</td>
    <td>{props.subject.subject}</td>
    <td>{props.subject.description}</td>
    <td>{props.subject.duration}</td>
    <td>
      <Link to={"/edit/" + props.subject._id}>edit</Link> |
      <a href="#" onClick={() => { props.deleteSubject(props.subject._id) }}>delete
      </a>
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
      .get("http://localhost:7000/subjects/")
      .then(response => {
        this.setState({ subjects: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSubject(id) {
    axios
      .delete("http://localhost:7000/subjects/" + id)
      .then(res => console.log(res.data));

    this.setState({
      subjects: this.state.subjects.filter(el => el._id !== id),
    });
  }

  subjectsList() {
    return this.state.subjects.map(currentSubject => {
      return (
        <Subject
          subject={currentSubject}
          deleteSessions={this.deleteSubjects}
          key={currentSubject._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Subjects List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th> Username </th>
              <th> Subject</th>
              <th> Description </th>
              <th> Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
            <tbody>
              {this.subjectsList()}
            </tbody>
        </table>
      </div>
    );
  }
}