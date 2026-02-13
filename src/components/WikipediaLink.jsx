const WikipediaLink = ({ name }) => {
  return (
    <a
      href={`https://en.wikipedia.org/wiki/Special:Search?search=${name}&go=Go&ns0=1`}
      target="_blank"
    >
      <img src="wikipedia.ico" className="icon" alt="Wikipedia logo" />
    </a>
  );
};

export default WikipediaLink;
