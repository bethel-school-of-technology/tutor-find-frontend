import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Chatkit from "@pusher/chatkit";
import Navbar from "./components/navbar.component";
import SubjectList from "./components/subjects-list.component";
import EditSubject from "./components/edit-subjects.components";
import CreateSubject from "./components/create-subject.component";
import HomePage from "./components/HomePage";
import SessionsList from "./components/sessions-list.component";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/auth";
import MessageList from "./chat/MessageList";
import SendMessageForm from "./chat/SendMessageForm";
import RoomList from "./chat/RoomList";
import NewRoomForm from "./chat/NewRoomForm";

import { tokenUrl, instanceLocator } from "./config";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/subjects-list" component={SubjectList} />
        <PrivateRoute path="/edit/:id" component={EditSubject} />
        <PrivateRoute path="/create" component={CreateSubject} />
        <Route path="/sessions" exact component={SessionsList} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>

    </AuthContext.Provider>
  );
}

// class Chat extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentRoomId: null,
//       joinableRooms: [],
//       joinedRooms: [],
//       messages: [],
//     };
//     this.subscribeToRoom = this.subscribeToRoom.bind(this);
//     this.sendMessage = this.sendMessage.bind(this);
//     this.subscribeToRoom = this.subscribeToRoom.bind(this);
//   }

//   componentDidMount() {
//     const chatManager = new Chatkit.ChatManager({
//       instanceLocator: instanceLocator,
//       userId: "perborgen",
//       tokenProvider: new Chatkit.TokenProvider({
//         url: tokenUrl,
//       }),
//     });

//     chatManager
//       .connect()
//       .then((currentUser) => {
//         this.currentUser = currentUser;
//         return this.currentUser.getJoinableRooms().then((joinableRooms) => {
//           this.setState({
//             joinableRooms,
//             joinedRooms: this.currentUser.rooms,
//           });
//         });
//       })
//       .catch((err) => console.log("error connecting: ", err));
//   }

//   sendMessage(text) {
//     this.currentUser.sendMessage({
//       text,
//       roomId: this.state.currentRoomId,
//     });
//   }

//   createRoom(name) {
//     this.currentUser
//       .createRoom({
//         name,
//       })
//       .then((room) => this.subscribeToRoom(room.id))
//       .catch((err) => console.log(err));
//   }

//   subscribeToRoom(roomId) {
//     this.setState({
//       messages: [],
//     });
//     this.currentUser
//       .subscribeToRoom({
//         roomId: roomId,
//         hooks: {
//           onNewMessage: (message) => {
//             this.setState({
//               messages: [...this.state.messages, message],
//             });
//           },
//         },
//       })
//       .then((currentRoom) => {
//         this.setState({ currentRoomId: currentRoom.id });
//         return this.currentUser.getJoinableRooms().then((joinableRooms) => {
//           this.setState({
//             joinableRooms,
//             joinedRooms: this.currentUser.rooms,
//           });
//         });
//       })
//       .catch((err) => console.log("error on subscribing: ", err));
//   }

//   render() {
//     return (
//       <div className="chat">
//         <RoomList
//           rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
//           subscribeToRoom={this.subscribeToRoom}
//           currentRoomId={this.state.currentRoomId}
//         />
//         <MessageList
//           currentRoomId={this.state.currentRoomId}
//           messages={this.state.messages}
//         />
//         <NewRoomForm onSubmit={this.createRoom.bind(this)} />
//         <SendMessageForm
//           sendMessage={this.sendMessage}
//           disabled={!this.state.currentRoomId}
//         />
//       </div>
//     );
//   }
// }

export default App;
