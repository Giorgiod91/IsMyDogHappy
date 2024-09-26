import { div, p } from "framer-motion/client";
import { DogRaces } from "../utils/DogRace";
//fixing error with making sure to allways return a string
const difference = (
  time: number,
  dog: { name: string; need: number },
): string => {
  if (time > dog.need) {
    const isHappy = "That Dog Is Happy!";

    return isHappy;
  } else {
    const isNotHappy = "That Dog is not Happy!";
    return isNotHappy;
  }
};

export default difference;
