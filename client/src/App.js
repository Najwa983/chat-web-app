import './App.css';
import socketClient from "socket.io-client";
import { Chat } from './chat/Chat';

const SERVER = "http://127.0.0.1:8080";

function App() {

  var socket = socketClient (SERVER);
  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});

  return (
    
    <Chat></Chat>
  );
}

export default App;
