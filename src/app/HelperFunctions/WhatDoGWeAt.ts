import { DogRaces } from "../utils/DogRace";

const WhatDogWeAt = (currentIndex: number, setCurrentIndex: any) => {
  const slidePictures = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === DogRaces.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return slidePictures;
};

export default WhatDogWeAt;
