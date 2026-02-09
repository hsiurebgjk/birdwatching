import './App.css';
import sortJsonObject from './utils/sortJsonObject';
import BirdSearch from './components/BirdSearch';
import Size from './components/Size';
import useBirdData from './components/useBirdData';
import NzBirdOnline from './components/NzBirdOnline';

const App = () => {
  const { ready, birds, setBirds } = useBirdData();

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
        {ready &&
          birds &&
          birds.map(
            (
              { name, scientificName, teReoName, origin, rarity, size, weight },
              index,
            ) => {
              return (
                <tr key={index}>
                  <td>{<NzBirdOnline teReoName={teReoName} name={name} />}</td>{' '}
                  <td>{<BirdSearch name={name} />}</td>
                  <td>{scientificName}</td>
                  <td>{rarity}</td>
                  <td>{origin}</td>
                  <td>{<Size value={size} unit="cm" />}</td>
                  <td>{<Size value={weight} unit="g" />}</td>
                </tr>
              );
            },
          )}
      </tbody>
    </table>
  );
};

export default App;
