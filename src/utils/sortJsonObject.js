export default function (array, property) {
  const newArray = [...array.filter((x) => x?.[property])];

  const invert = property === 'rating' ? -1 : 1;

  newArray.sort(
    (a, b) => invert * `${a?.[property]}`.localeCompare(`${b?.[property]}`),
  );
  return [...newArray, ...array.filter((x) => !x?.[property])];
}
