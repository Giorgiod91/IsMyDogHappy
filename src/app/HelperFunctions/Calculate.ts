import { DogRaces } from "../utils/DogRace";

const difference = (DogRaces: any[], time: number) => {
  DogRaces.forEach((dog) => {
    if (time < dog.need) {
      console.log("your dog needs more !");
    } else {
      console.log("your dog is happy !");
    }
  });
};

export default difference;
