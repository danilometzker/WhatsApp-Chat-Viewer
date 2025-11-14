import viteLogo from '/logo.svg';
import './App.css';
import ChatMenu from './Components/ChatMenu';

function App() {
  return (
    <>
      <ChatMenu />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>WhatsApp Chat Viewer</h1>
    </>
  );
}

export default App;
