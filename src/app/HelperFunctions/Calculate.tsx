import { div, p } from "framer-motion/client";
import { DogRaces } from "../utils/DogRace";

const difference = (dog: any, time: number) => {
  if (time < dog.need) {
    return (
      <div>
        <p>That Dog Is Happy!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>That Dog needs more !</p>
      </div>
    );
  }
};

export default difference;
