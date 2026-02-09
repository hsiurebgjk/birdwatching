export default function (array, property) {
  const newArray = [...array.filter((x) => x?.[property])];

  newArray.sort((a, b) => `${a?.[property]}`.localeCompare(`${b?.[property]}`));
  return [...newArray, ...array.filter((x) => !x?.[property])];
}
