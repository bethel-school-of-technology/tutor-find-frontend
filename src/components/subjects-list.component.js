import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subject = props => (
  <tr>
    <td>{props.subject.username}</td>
    <td>{props.subject.email}</td>
    <td>{props.subject.subject}</td>
    <td>{props.subject.description}</td>
    <td>{props.subject.duration}</td>
    <td>
      <Link to={"/edit/" + props.subject._id}>Edit</Link>&nbsp;|&nbsp;
      <a href="#"
      onClick={() => { props.deleteSubjects(props.subject._id) 
      }}>
        Delete
      </a>
    </td>
  </tr>
);

export default class SubjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteSubjects = this.deleteSubjects.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    

    this.state = { 
      subjects: [], 
      subject: "" ,
      duration: ""
    };
    
    

    
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

  searchSubject(subj, dur) {
    axios
      .get("http://localhost:7000/subjects/")
      .then(response => {
        this.setState({ subjects: response.data });
        console.log(response.data);
        console.log(subj, dur);
        this.setState({
        subjects: this.state.subjects.filter(el => {
          return (
          el.subject === subj
          && 
          el.duration === dur
        )})
      });
      })

      
  }

  deleteSubjects(id) {
    axios
      .delete("http://localhost:7000/subjects/" + id)
      .then(res => console.log(res.data));

    this.setState({
      subjects: this.state.subjects.filter(el => el._id !== id),
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    }, () => {
      console.log(this.state.subject)}
      );
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    }, () => {
      console.log(this.state.duration)}
      );
  }

  buttonClick() {
    this.searchSubject(this.state.subject, this.state.duration);

  }

  /*buttonClick() {
    this.state({
      searchSubject(subject);
    })
    this.searchSubject(this.state.subject);
  }*/
  

  subjectsList() {
    return this.state.subjects.map(currentSubject => {
      return (
        <Subject
          subject={currentSubject}
          deleteSubjects={this.deleteSubjects}
          key={currentSubject._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="page">
        <h3 style= {{ textAlign: "center"}}>Search for Tutor Services</h3>
        
        <table className="table">
      
         
        <tr className="thead-light">

          
            <th>
            <div className="form-group">
            <label>Subject: </label>
            <select

              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            >
              <option selected>Choose...</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="English">English</option>

              <option value="Music"> Music</option>
            </select>
            </div>
            <div className="form-group">
            <label>Duration: </label>
            <select
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            >
              <option selected>Choose...</option>
             
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
            </div>
            <div style={{textAlign: "center"}}>
              <button onClick={this.buttonClick} className="searchButton">Submit</button>
              </div>
              </th>
            </tr>
            <div>
            <br></br>
            <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th> Subject</th>
                <th> Description </th>
                <th> Minutes</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tbody>
                {this.subjectsList()}
              </tbody>
          </table>
        </div></table>
      </div>
    )
  }
}

      