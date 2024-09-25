import { div, p } from "framer-motion/client";
import { DogRaces } from "../utils/DogRace";
//fixing error with making sure to allways return a string
const difference = (
  time: number,
  dog: { name: string; need: number },
): string => {
  if (time > dog.need) {
    return "That Dog Is Happy!";
  } else {
    return "That Dog needs more time!";
  }
};

export default difference;
