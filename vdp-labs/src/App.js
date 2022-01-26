import './App.css';
import TabList from './components/TabList';

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h2>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</h2>
        <h2>З ДИСЦИПЛІНИ "ОСНОВИ ПРОГРАМУВАННЯ"</h2>
        <div className="row"><span>БРИГАДА №7 </span> <span style={{paddingLeft:20}}>СТУДЕНТИ:  Маляренко О.І., Дмитренко М.В., Дмитренко Р.А.</span></div>
        <TabList/>
      </div>
    </div>
  );
}

export default App;
