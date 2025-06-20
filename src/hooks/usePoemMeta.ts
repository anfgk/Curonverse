import { poemData } from "@/data/poemData";
import { RhythmName } from "@/data/types";

export const usePoemMeta = (rhythmName: RhythmName) => {
  const poemInfo = poemData[rhythmName];

  return {
    poemTag: poemInfo.tag,
    poemColor: poemInfo.color,
    poemContent: poemInfo.content,
    poemSource: poemInfo.source,
  };
}