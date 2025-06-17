import { RHYTHM_COLORS, temperatureData } from "@/data/temperatureData";
import { RhythmName } from "@/data/types";

export const useTemperatureMeta = (rhythmName: RhythmName) => {
  return {
    temperatureInfo: temperatureData[rhythmName],
    rhythmColor: RHYTHM_COLORS[rhythmName],
  };
};
