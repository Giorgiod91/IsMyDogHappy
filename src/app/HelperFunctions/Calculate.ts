import { DogRaces } from "../utils/DogRace";

let susge = "";
let susge2 = "";

const difference = (
  DogRaces: any[],
  time: number,
  setSusge: React.Dispatch<React.SetStateAction<string>>,
  setSusge2: React.Dispatch<React.SetStateAction<string>>,
) => {
  DogRaces.forEach((dog) => {
    if (time < dog.need) {
      setSusge("Dog needs more attention!");
      setSusge2("");
    } else {
      setSusge2("Dog is happy!");
      setSusge("");
    }
  });
};

export default difference;
