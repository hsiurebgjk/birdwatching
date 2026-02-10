const DuckLink = ({ name }) => {
  return (
    <a href={`https://duckduckgo.com/?q=${name}`} target="_blank">
      <img src="ddg.png" width="16px" height="16px" />
    </a>
  );
};

export default DuckLink;
