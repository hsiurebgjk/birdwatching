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

  return {
    ready: true,
    birds,
    setBirds,
  };
}

export default useBirdData;
