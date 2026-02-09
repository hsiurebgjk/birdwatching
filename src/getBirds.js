const prefix =
  'https://raw.githubusercontent.com/hsiurebgjk/birdwatching/refs/heads/main/data/';

const urls = {
  birds: `${prefix}birds.json`,
  sightings: `${prefix}sightings.json`,
};

async function fetchFile(url) {
  const response = await fetch(url);
  return await response.json();
}

function getBirds() {
  return fetchFile(urls.birds);
}

function getSightings() {
  return fetchFile(urls.sightings);
}

export { getBirds, getSightings };
