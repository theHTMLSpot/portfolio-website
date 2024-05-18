
import './App.css';
import NavMenu from './components/navmenu'
import ContentMenu from './components/Contentmenu'
import Paragraph from './components/Paragraph';
import MySkills from './components/MySkills'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMenu />
        <ContentMenu />
        <Paragraph />
        <MySkills />
      </header>
    </div>
  );
}

export default App;
