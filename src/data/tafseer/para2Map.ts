// Comprehensive Tafseer and Word-by-Word Mapping for Para 2 (Surah Al-Baqarah Verses 142 to 252)
// Aggregates Part 1 (142-163) and subsequent parts

import { Para2AyahDetail, PARA2_VERSES_PART1 } from './para2Map_part1';
import { PARA2_VERSES_PART2 } from './para2Map_part2';
import { PARA2_VERSES_PART3 } from './para2Map_part3';
import { PARA2_VERSES_PART4 } from './para2Map_part4';

export type { Para2AyahDetail };

export const PARA2_TAFSEER_MAP: Record<number, Para2AyahDetail> = {
  ...PARA2_VERSES_PART1,
  ...PARA2_VERSES_PART2,
  ...PARA2_VERSES_PART3,
  ...PARA2_VERSES_PART4,
};
