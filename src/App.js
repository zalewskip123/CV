import LeftSide from './components/layout/LeftSide/LeftSide';
import RightSide from './components/layout/RightSide/RightSide';
import Main from './components/layout/Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main>
        <LeftSide />
        <RightSide />
      </Main>
    </div>
  );
}

export default App;
