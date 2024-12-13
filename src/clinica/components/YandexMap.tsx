import React, { useEffect, useRef, useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface YandexMapProps {
  onSelectPoint: (coords: Coordinates) => void;
}

const YandexMap: React.FC<YandexMapProps> = ({ onSelectPoint }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);

  // useEffect(() => {
  //   const initializeMap = async () => {
  //     const ymaps = (window as any).ymaps;

  //     await ymaps.ready()

  //     const mapInstance = new ymaps.Map(
  //       mapRef.current,
  //       {
  //         center: [41.311081, 69.24056],
  //         zoom: 10,
  //       }
  //     );

  //     setMap(mapInstance);
  //   };

  //   initializeMap();
  // }, []);

  useEffect(() => {
    const initializeMap = () => {
      const ymaps = (window as any).ymaps;

      ymaps.ready(() => {
        const mapInstance = new ymaps.Map(mapRef.current, {
          center: [41.311081, 69.24056],
          zoom: 10,
        });

        setMap(mapInstance);
      });
    };

    initializeMap();
  }, []);
  const handleMapClick = (event: any) => {
    const coords = event.get('coords');
    if (marker) {
      map.geoObjects.remove(marker);
    }

    const newMarker = new (window as any).ymaps.GeoObject(
      {
        geometry: {
          type: 'Point',
          coordinates: coords,
        },
      },
      {
        preset: 'islands#greenDotIcon',
      }
    );

    map.geoObjects.add(newMarker);
    setMarker(newMarker);

    onSelectPoint({
      lat: coords[0],
      lng: coords[1],
    });
  };

  useEffect(() => {
    if (map) {
      map.events.add('click', handleMapClick);
    }

    return () => {
      if (map) {
        map.events.remove('click', handleMapClick)
      }
    };
  }, [map, marker]);

  return (
    <div
      ref={mapRef}
      className='absolute top-[-470px]'
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default YandexMap;
