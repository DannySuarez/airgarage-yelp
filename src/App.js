import React from "react";
import { Search } from "./containers/Search/Search.js";
import { Results } from "./containers/Results/Results.js";

function App() {
  const [data, setData] = React.useState(null);
  return (
    <div>
      <Search setData={setData} />
      {data &&
        data
          .sort((a, b) => (a.score > b.score ? 1 : -1))
          .map((result) => <Results key={result.id} {...result} />)}
    </div>
  );
}

export default App;
