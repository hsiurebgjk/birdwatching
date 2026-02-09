const NzBirdOnline = ({ name, teReoName }) => {
  let formatted = name.toLowerCase();
  formatted = formatted.replaceAll(' ', '-');
  formatted = formatted.replaceAll('ā', 'a');
  formatted = formatted.replaceAll('ē', 'e');
  formatted = formatted.replaceAll('ī', 'i');
  formatted = formatted.replaceAll('ō', 'o');
  formatted = formatted.replaceAll('ū', 'u');
  return (
    <a
      href={`https://www.nzbirdsonline.org.nz/species/${formatted}`}
      target="_blank"
    >
      {teReoName}
    </a>
  );
};

export default NzBirdOnline;
