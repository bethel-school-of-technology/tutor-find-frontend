import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactSearchBox from 'react-search-box';

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
      <div>
        <h3>Subjects List</h3>
        <table className="table">
       
          <thead className="thead-light">
            <ul>
              <th> Username </th>
              <th>
                <ReactSearchBox
                  placeholder="search user"
                  value=""
                  data={this.data}
                  callback={record => console.log(record)} />
              </th>
              <th> Subject </th>
              <th>
                <ReactSearchBox
                  placeholder="search subject"
                  value=""
                  data={this.data}
                  callback={record => console.log(record)} />

              </th>
              <th> Duration</th>
              <th>
                <ReactSearchBox
                  placeholder="search duration"
                  value=""
                  data={this.data}
                  callback={record => console.log(record)} />
              </th>

              {/* <th>Date</th>
              <th>Actions</th> */}
            </ul>
          </thead>
          <tbody>{this.subjectList()}</tbody>
          
        </table>
      </div>

    );
  }
}
