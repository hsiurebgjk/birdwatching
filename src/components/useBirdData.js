import { getBirds, getSightings } from '../utils/getBirds';
import { useState, useEffect } from 'react';

function useBirdData() {
  const [birds, setBirds] = useState(null);
  const [sightings, setSightings] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBirds(null);
    getBirds().then((result) => {
      if (!ignore) {
        setBirds(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    setBirds(null);
    getSightings().then((result) => {
      if (!ignore) {
        setSightings(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  if (!birds || !sightings) {
    return {
      ready: false,
      birds: [],
      setBirds,
    };
  }

  const combined = birds.map((bird) => {
    return {
      ...bird,
      ...(sightings.find((x) => x.name === bird.name) ?? { rating: 0 }),
    };
  });

  combined.sort((a, b) => a.rating - b.rating);

  return {
    ready: true,
    birds: combined,
    setBirds,
  };
}

export default useBirdData;
