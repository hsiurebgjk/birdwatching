import './App.css';
import { useState, useEffect } from 'react';
import { getBirds } from './utils/getBirds';
import sortJsonObject from './utils/sortJsonObject';
import BirdSearch from './components/BirdSearch';

const App = () => {
  const [birds, setBirds] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBirds(null);
    getBirds().then((result) => {
      if (!ignore) {
        setBirds(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const sort = (property) => setBirds(sortJsonObject(birds, property));

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sort('teReoName')}>Te Reo Name</th>
          <th onClick={() => sort('name')}>Name</th>
          <th onClick={() => sort('scientificName')}>Scientific Name</th>
          <th onClick={() => sort('rarity')}>Rarity</th>
          <th onClick={() => sort('origin')}>Origin</th>
          <th>Size</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {birds &&
          birds.map(
            (
              { name, scientificName, teReoName, origin, rarity, size, weight },
              index,
            ) => {
              return (
                <tr key={index}>
                  <td>{teReoName}</td>
                  <td>{<BirdSearch name={name} />}</td>
                  <td>{scientificName}</td>
                  <td>{rarity}</td>
                  <td>{origin}</td>
                  <td>{JSON.stringify(size)}</td>
                  <td>{JSON.stringify(weight)}</td>
                </tr>
              );
            },
          )}
      </tbody>
    </table>
  );
};

export default App;
