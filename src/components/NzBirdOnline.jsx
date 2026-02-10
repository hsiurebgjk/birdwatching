const NzBirdOnline = ({ name, nzBirdName }) => {
  name = [' -', 'āa', 'ēe', 'īi', 'ōo', 'ūu'].reduce(
    (formatted, pair) => formatted.replaceAll(pair[0], pair[1]),
    name.toLowerCase(),
  );

  return (
    <a
      href={`https://www.nzbirdsonline.org.nz/species/${nzBirdName || name}`}
      target="_blank"
    >
      <img src="nzbird.ico" width="16px" height="16px" />
    </a>
  );
};

export default NzBirdOnline;
