import '../css/App.css';

import NavBar from './Layout/NavBar';
import FlashMessages from './Generic/FlashMessages';

function App(props) {
  const { children } = props;
  return (
    <div className="App container">
      <FlashMessages />
      <NavBar />
      {children}
    </div>
  );
}

export default App;
