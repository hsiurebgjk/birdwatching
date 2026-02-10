const OsmLink = ({ location }) => {
  if (!location || location === 'EVERYWHERE' || location === 'Forests') {
    return <></>;
  }

  return (
    <a
      href={`https://www.openstreetmap.org/search?query=${location} NZ`}
      target="_blank"
    >
      🌏
    </a>
  );
};

export default OsmLink;
