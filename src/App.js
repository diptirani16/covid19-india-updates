import { useEffect, useState } from 'react';
import './App.css';
import LastRefreshed from './components/LastRefreshed';
import Search from './components/Search';
import StatewiseList from './components/StatewiseList';
import Summary from './components/Summary';

function App() {
  const [states, setStates] = useState([]);

  const [totalConfirmed, setTotalConfirmed] = useState("");
  const [totalRecovered, setTotalRecovered] = useState("");
  const [totalDeceased, setTotalDeceased] = useState("");
  const [totalActive, setTotalActive] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [regional, setRegional] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/states')
      .then(res => res.json())
      .then(res => setStates(Object.values(res)))
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/latest')
      .then(res => res.json())
      .then(res => {
        setTotalConfirmed(res.totalConfirmed);
        setTotalRecovered(res.totalRecovered);
        setTotalDeceased(res.totalDeceased);
        setTotalActive(res.totalActive);
        // setLastUpdated(res.lastUpdated);
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/regional')
      .then(res => res.json())
      .then(res => setRegional(res))
  }, [])

  return (
    <div className="App">
      <Search states={states} />
      {/* <LastRefreshed lastUpdated={lastUpdated} /> */}
      <Summary 
        totalConfirmed={totalConfirmed} 
        totalRecovered={totalRecovered}
        totalDeceased={totalDeceased} 
        totalActive={totalActive}
        />
      <StatewiseList regional={regional} />
    </div>
  );
}

export default App;
