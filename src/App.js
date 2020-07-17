import React from 'react';
import * as stateAbbr from "datasets-us-states-abbr";

function App() {
  const [activeQuery, setActiveQuery] = useState("NY")
  const [stateData, setStateData] = useState({})

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://covidtracking.com/api/states?state=${activeQuery}`
      );
      const data = await res.join();
      setStateData(data);
    }
    getData();
  }, [activeQuery]);

  console.log(stateData);

  return (
    <div style={{width:"600px", textAlign:"center"}}>
      <h1>COVID-19 Test Tracker</h1>
      <form>
        <label>
          Select a state:
          <select value={activeQuery} onChange={e => setActiveQuery(e.target.value)}>
            {Object.values(stateAbbr).map(abbr => {
              return (
                <option key={abbr} value={abbr}>
                  {abbr}
                </option>
              )
            })}
        </label>
      </form>
    </div>
  );
}

export default App;
