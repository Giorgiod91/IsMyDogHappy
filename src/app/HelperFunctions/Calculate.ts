import { DogRaces } from "../utils/DogRace";

const difference = (dog: any, time: number, happy: string, sad: string) => {
  if (time < dog.need) {
    return happy;
  } else {
    return sad;
  }
};

export default difference;
