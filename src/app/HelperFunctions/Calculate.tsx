import { div, p } from "framer-motion/client";
import { DogRaces } from "../utils/DogRace";

const difference = (dog: any, time: number, happy: string, sad: string) => {
  if (time < dog.need) {
    return <div></div>;
  } else {
    return sad;
  }
};

export default difference;
