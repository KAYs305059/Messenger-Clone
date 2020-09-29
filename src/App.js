import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run once when the app component loads
   db.collection('messages').onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => doc.data()));
   });
  }, [input])

  useEffect(() => {
    //run code here...if its blank inside dependencies [] this code will run ONCE when the app component loads
    setUsername(prompt('Please enter your name'));
  }, []) // condition

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([
      ...messages,{username: username, text: input}
    ]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello Welcome Fam</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} />
            <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >Send message</Button>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;
