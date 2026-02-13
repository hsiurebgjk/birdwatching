const DuckLink = ({ name }) => {
  return (
    <a href={`https://duckduckgo.com/?q=${name}`} target="_blank">
      <img src="ddg.png" className="icon" alt="DuckDuckGo logo" />
    </a>
  );
};

export default DuckLink;
