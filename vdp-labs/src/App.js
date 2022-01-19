import './App.css';
import TabList from './components/TabList';

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h2>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</h2>
        <h2>З ДИСЦИПЛІНИ "ОСНОВИ ПРОГРАМУВАННЯ"</h2>
        <div className="row"><span>БРИГАДА №</span> <span>СТУДЕНТИ:</span></div>
        <TabList/>
      </div>


    </div>
  );
}

export default App;
