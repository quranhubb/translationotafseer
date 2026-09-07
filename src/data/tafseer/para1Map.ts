// Comprehensive Tafseer and Word-by-Word Mapping for Para 1 (Surah Al-Baqarah Verses 1 to 141)
// Aggregates Part 1 (1-20), Part 2 (21-40), Part 3 (41-70), Part 4 (71-105), and Part 5 (106-141)

import { Para1AyahDetail, PARA1_VERSES_PART1 } from './para1Map_part1';
import { PARA1_VERSES_PART2 } from './para1Map_part2';
import { PARA1_VERSES_PART3 } from './para1Map_part3';
import { PARA1_VERSES_PART4 } from './para1Map_part4';
import { PARA1_VERSES_PART5 } from './para1Map_part5';

export type { Para1AyahDetail };

export const PARA1_TAFSEER_MAP: Record<number, Para1AyahDetail> = {
  ...PARA1_VERSES_PART1,
  ...PARA1_VERSES_PART2,
  ...PARA1_VERSES_PART3,
  ...PARA1_VERSES_PART4,
  ...PARA1_VERSES_PART5,
};
