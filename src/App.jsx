import './App.css';
import sortJsonObject from './utils/sortJsonObject';
import Size from './components/Size';
import useBirdData from './hooks/useBirdData';
import NzBirdOnline from './components/NzBirdOnline';
import DuckLink from './components/DuckLink';
import OsmLink from './components/OsmLink';
import WikipediaLink from './components/WikipediaLink';

const App = () => {
  const { ready, birds, setBirds } = useBirdData();

  const sort = (property) => setBirds(sortJsonObject(birds, property));

  return (
    <>
      <a href="https://github.com/hsiurebgjk/birdwatching">Sources</a> |
      <img src="ddg.png" className="icon" alt="DuckDuckGo logo" /> DuckDuckGo |
      <img src="wikipedia.ico" className="icon" alt="Wikipedia logo" /> Wikipedia | 🌏
      OpenStreetMap | <img src="nzbird.ico" className="icon" alt="New
      Zealand Birds Online Logo" /> New
      Zealand Birds Online
      <hr />
      <table>
        <thead>
          <tr>
            <th>Links</th>
            <th>Image</th>
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
                      <DuckLink name={name} />
                      <br />
                      <NzBirdOnline nzBirdName={nzBirdName} name={name} />
                      <br />
                      <WikipediaLink name={name} />
                    </td>
                    <td>
                      <div
                        style={{
                          width: '150px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-block',
                            position: 'relative',
                            right: '-50%',
                          }}
                        >
                          <img
                            style={{
                              left: '-50%',
                              position: 'relative',
                            }}
                            src={`birds/${name}.jpg`}
                            height="100px"
                            alt="A bird"
                          />
                        </div>
                      </div>
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
    </>
  );
};

export default App;
