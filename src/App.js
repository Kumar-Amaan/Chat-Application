// import { ChatEngine } from "react-chat-engine";
// import "./App.css";
// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';

// const App = () => {
// if(!localStorage.getItem('username')) return <LoginForm />



//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="c3f9a6c6-cdc4-4dfa-ae93-00823d24583d"
//       userName="Singhalaman"
//       userSecret="Amankumar"
//       renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
//       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//     />
//   );
// };

// export default App;
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = "c3f9a6c6-cdc4-4dfa-ae93-00823d24583d";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Singhalaman"
      userSecret="Amankumar"
      // userName={localStorage.getItem('username')}
      // userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

