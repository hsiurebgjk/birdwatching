const BirdSearch = ({ name }) => {
  return <a href={`https://duckduckgo.com/?q=${name}`}>{name}</a>;
};

export default BirdSearch;
