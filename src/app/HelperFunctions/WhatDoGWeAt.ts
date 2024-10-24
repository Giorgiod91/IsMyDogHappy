import { DogRaces } from "../utils/DogRace";
// set the current index is a function that accepts a number and returns void

type SetCurrentIndex = (
  index: number | ((prevIndex: number) => number),
) => void;

const WhatDogWeAt = (
  currentIndex: number,
  setCurrentIndex: SetCurrentIndex,
) => {
  const slidePictures = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === DogRaces.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return slidePictures;
};

export default WhatDogWeAt;
