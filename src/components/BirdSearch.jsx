const BirdSearch = ({ name }) => {
  return (
    <a href={`https://duckduckgo.com/?q=${name}`} target="_blank">
      {name}
    </a>
  );
};

export default BirdSearch;
