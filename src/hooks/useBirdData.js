import { useState, useEffect } from 'react';
import Birds from '../data/birds.json';
import Sightings from '../data/sightings.json';

function useBirdData() {
  const [birds, setBirds] = useState(null);

  useEffect(() => {
    const combined = Birds.map((bird) => {
      return {
        ...bird,
        ...(Sightings.find((x) => x.name === bird.name) ?? { rating: 0 }),
      };
    });
    setBirds(combined);
  }, []);

  return {
    ready: !!birds,
    birds: birds ?? [],
    setBirds,
  };
}

export default useBirdData;
