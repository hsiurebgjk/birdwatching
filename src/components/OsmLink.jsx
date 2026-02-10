const OsmLink = ({ location }) => {
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
