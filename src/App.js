import './App.css';
import pokemon from './pokemon.json';

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
              <th>Name</th>
              <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0,20).map(pokemon => (
            //slice to get the first 20 pokemon
          <tr
            //Key needs to be unique to all it's sibling
            //can join multiple items e.g.
            //{[pokemon.id,pokemon.name.english].join(':')}
            key = {pokemon.id}
          >
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(', ')}</td>
          </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
