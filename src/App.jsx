import './App.css';
import sortJsonObject from './utils/sortJsonObject';
import Size from './components/Size';
import useBirdData from './hooks/useBirdData';
import NzBirdOnline from './components/NzBirdOnline';
import DuckLink from './components/DuckLink';
import OsmLink from './components/OsmLink';

const App = () => {
  const { ready, birds, setBirds } = useBirdData();

  const sort = (property) => setBirds(sortJsonObject(birds, property));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Links</th>
            <th onClick={() => sort('teReoName')}>Te Reo Name</th>
            <th onClick={() => sort('name')}>Name</th>
            <th onClick={() => sort('rarity')}>Rarity</th>
            <th onClick={() => sort('origin')}>Origin</th>
            <th>Size</th>
            <th>Weight</th>
            <th onClick={() => sort('rating')}>Rating</th>
            <th onClick={() => sort('location')}>Where</th>
            <th onClick={() => sort('comment')}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {ready &&
            birds &&
            birds.map(
              (
                {
                  name,
                  nzBirdName,
                  scientificName,
                  teReoName,
                  origin,
                  rarity,
                  rating,
                  comment,
                  size,
                  weight,
                  location,
                },
                index,
              ) => {
                return (
                  <tr key={index}>
                    <td>
                      {<DuckLink name={name} />}
                      &nbsp;
                      {<NzBirdOnline nzBirdName={nzBirdName} name={name} />}
                    </td>
                    <td>{teReoName}</td>
                    <td>
                      {name}
                      &nbsp;
                      <a title={scientificName}>&#9432;</a>
                    </td>
                    <td>{rarity}</td>
                    <td>{origin}</td>
                    <td>{<Size value={size} unit="cm" />}</td>
                    <td>{<Size value={weight} unit="g" />}</td>
                    <td>
                      {[...new Array(rating)].map((_) => '★').join('') || '-'}
                    </td>
                    <td>
                      {location || 'Not yet :('}
                      &nbsp;
                      <OsmLink location={location} />
                    </td>
                    <td>{comment}</td>
                  </tr>
                );
              },
            )}
        </tbody>
      </table>
      <a href="https://github.com/hsiurebgjk/birdwatching">Sources</a>
    </>
  );
};

export default App;
