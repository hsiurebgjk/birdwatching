import Locations from '../data/locations.json';

const OsmLink = ({ location }) => {
  if (!location || location === 'EVERYWHERE' || location === 'Forests') {
    return <></>;
  }
  const base = 'https://www.openstreetmap.org/search?query=';
  const text = '🌏';

  const locationDetail = Locations[location];
  if (locationDetail) {
    return (
      <a
        href={`${base}${locationDetail.latitude},${locationDetail.longitude}`}
        target="_blank"
      >
        {text}
      </a>
    );
  }

  return (
    <a href={`${base}${location} NZ`} target="_blank">
      {text}
    </a>
  );
};

export default OsmLink;
