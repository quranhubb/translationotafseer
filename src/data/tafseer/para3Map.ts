export interface Para3AyahDetail {
  arabic: string;
  translationUr: string;
  translationEn: string;
  words: { arabic: string; transliteration?: string; translationEn: string; translationUr: string }[];
  tafseerUr?: string;
  tafseerEn?: string;
}

// Map for Surah 2 (Baqarah) Ayahs 253-286 and Surah 3 (Aal-e-Imran) Ayahs 1-92
export const PARA3_MORE_VERSES_MAP: Record<string, Para3AyahDetail> = {
  // Surah 2 Ayah 254
  '2:254': {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِمَّا رَزَقْنَاكُم مِّن قَبْلِ أَن يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ ۗ وَالْكَافِرُونَ هُمُ الظَّالِمُونَ',
    translationUr: 'اے ایمان والو! جو کچھ ہم نے تمہیں دیا ہے اس میں سے خرچ کرو اس دن کے آنے سے پہلے جس میں نہ کوئی سودا بازی ہوگی، نہ کوئی دوستی کام آئے گی اور نہ کوئی سفارش۔ اور ظالم وہی ہیں جو کفر کرتے ہیں۔',
    translationEn: 'O you who have believed, spend from that which We have provided for you before there comes a Day in which there is no exchange and no friendship and no intercession. And the disbelievers - they are the wrongdoers.',
    words: [
      { arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا', transliteration: 'Ya ayyuhal-latheena amanoo', translationEn: 'O you who have believed', translationUr: 'اے ایمان والو' },
      { arabic: 'أَنفِقُوا', transliteration: 'anfiqoo', translationEn: 'spend', translationUr: 'خرچ کرو' },
      { arabic: 'مِمَّا رَزَقْنَاكُم', transliteration: 'mimma razaqnakum', translationEn: 'from what We provided you', translationUr: 'اس میں سے جو ہم نے رزق دیا تمہیں' },
      { arabic: 'مِّن قَبْلِ', transliteration: 'min qabli', translationEn: 'before', translationUr: 'پہلے اس سے کہ' },
      { arabic: 'أَن يَأْتِيَ يَوْمٌ', transliteration: 'an ya\'tiya yawmun', translationEn: 'there comes a Day', translationUr: 'آئے وہ دن' },
      { arabic: 'لَّا بَيْعٌ فِيهِ', transliteration: 'la bay\'un feeh', translationEn: 'no trade in it', translationUr: 'نہ سوداگری ہوگی جس میں' },
      { arabic: 'وَلَا خُلَّةٌ', transliteration: 'wa la khullatun', translationEn: 'nor friendship', translationUr: 'اور نہ کوئی یاری دوستی' },
      { arabic: 'وَلَا شَفَاعَةٌ', transliteration: 'wa la shafa\'ah', translationEn: 'nor intercession', translationUr: 'اور نہ کوئی سفارش' }
    ]
  },
  // Surah 2 Ayah 257
  '2:257': {
    arabic: 'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ ۖ وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَاتِ ۗ أُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ',
    translationUr: 'اللہ ایمان والوں کا دوست اور مددگار ہے، وہ انہیں تاریکیوں سے نکال کر روشنی کی طرف لاتا ہے، اور جو لوگ کافر ہیں ان کے سرپرست طاغوت (شیطان اور باطل طاقتیں) ہیں جو انہیں روشنی سے نکال کر اندھیروں کی طرف دھکیلتے ہیں، یہی لوگ جہنمی ہیں جو اس میں ہمیشہ رہیں گے۔',
    translationEn: 'Allah is the ally of those who believe. He brings them out from darknesses into the light. And those who disbelieve - their allies are Taghut. They take them out of the light into darknesses. Those are the companions of the Fire; they will abide eternally therein.',
    words: [
      { arabic: 'اللَّهُ وَلِيُّ', transliteration: 'Allahu waliyyu', translationEn: 'Allah is the ally / guardian', translationUr: 'اللہ مددگار ہے' },
      { arabic: 'الَّذِينَ آمَنُوا', transliteration: 'allatheena amanoo', translationEn: 'of those who believe', translationUr: 'ان کا جو ایمان لائے' },
      { arabic: 'يُخْرِجُهُم', transliteration: 'yukhrijuhum', translationEn: 'He brings them out', translationUr: 'وہ نکالتا ہے انہیں' },
      { arabic: 'مِّنَ الظُّلُمَاتِ', transliteration: 'minath-thulumati', translationEn: 'from darknesses', translationUr: 'اندھیروں سے' },
      { arabic: 'إِلَى النُّورِ', transliteration: 'ilan-noor', translationEn: 'into the light', translationUr: 'نور و روشنی کی طرف' }
    ]
  },
  // Surah 2 Ayah 258 (Ibrahim & Nimrud)
  '2:258': {
    arabic: 'أَلَمْ تَرَ إِلَى الَّذِي حَاجَّ إِبْرَاهِيمَ فِي رَبِّهِ أَنْ آتَاهُ اللَّهُ الْمُلْكَ إِذْ قَالَ إِبْرَاهِيمُ رَبِّيَ الَّذِي يُحْيِي وَيُمِيتُ قَالَ أَنَا أُحْيِي وَأُمِيتُ ۖ قَالَ إِبْرَاهِيمُ فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِي كَفَرَ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ',
    translationUr: 'کیا آپ نے اس شخص کو نہیں دیکھا جس نے ابراہیم سے ان کے رب کے بارے میں جھگڑا کیا اس گھمنڈ میں کہ اللہ نے اسے سلطنت دی تھی؟ جب ابراہیم نے کہا کہ میرا رب وہ ہے جو زندہ کرتا ہے اور مارتا ہے، تو وہ بولا میں بھی جلاتا اور مارتا ہوں۔ ابراہیم نے فرمایا کہ اللہ تو سورج کو مشرق سے نکالتا ہے، تو اسے مغرب سے نکال لا! پس وہ کافر ہکا بکا رہ گیا، اور اللہ ظالم قوم کو ہدایت نہیں دیتا۔',
    translationEn: 'Have you not considered the one who argued with Abraham about his Lord because Allah had given him kingship? When Abraham said, "My Lord is the one who gives life and causes death," he said, "I give life and cause death." Abraham said, "Indeed, Allah brings up the sun from the east, so bring it up from the west." So the disbeliever was overwhelmed [by astonishment], and Allah does not guide the wrongdoing people.',
    words: [
      { arabic: 'أَلَمْ تَرَ', transliteration: 'Alam tara', translationEn: 'Have you not seen / considered', translationUr: 'کیا آپ نے نہیں دیکھا' },
      { arabic: 'إِلَى الَّذِي حَاجَّ', transliteration: 'ilal-lathee hajja', translationEn: 'the one who argued with', translationUr: 'اس کو جس نے جھگڑا کیا' },
      { arabic: 'إِبْرَاهِيمَ', transliteration: 'Ibraheema', translationEn: 'Abraham', translationUr: 'ابراہیمؑ سے' },
      { arabic: 'فِي رَبِّهِ', transliteration: 'fee rabbihi', translationEn: 'about his Lord', translationUr: 'ان کے رب کے بارے میں' },
      { arabic: 'فَبُهِتَ الَّذِي كَفَرَ', transliteration: 'fabuhital-lathee kafar', translationEn: 'so the disbeliever was dumbfounded', translationUr: 'پس لاجواب و ششدر رہ گیا کافر' }
    ]
  },
  // Surah 2 Ayah 259 (Uzair and Ruined City)
  '2:259': {
    arabic: 'أَوْ كَالَّذِي مَرَّ عَلَىٰ قَرْيَةٍ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا قَالَ أَنَّىٰ يُحْيِي هَٰذِهِ اللَّهُ بَعْدَ مَوْتِهَا ۖ فَأَمَاتَهُ اللَّهُ مِائَةَ عَامٍ ثُمَّ بَعَثَهُ ۖ قَالَ كَمْ لَبِثْتَ ۖ قَالَ لَبِثْتُ يَوْمًا أَوْ بَعْضَ يَوْمٍ ۖ قَالَ بَل لَّبِثْتَ مِائَةَ عَامٍ',
    translationUr: 'یا اس شخص کی طرح جو ایک ایسی بستی پر سے گزرا جو اپنی چھتوں پر اوندھی گری پڑی تھی، اس نے کہا اللہ اس کے مرنے کے بعد اسے کیسے دوبارہ زندہ کرے گا؟ تو اللہ نے اسے سو سال کے لیے موت دے دی، پھر اسے زندہ کیا اور پوچھا تم کتنا عرصہ رہے؟ اس نے کہا ایک دن یا دن کا کچھ حصہ۔ فرمایا بلکہ تم سو سال تک مردہ رہے ہو۔',
    translationEn: 'Or [consider such an example] as the one who passed by a township which had fallen into ruin. He said, "How will Allah bring this to life after its death?" So Allah caused him to die for a hundred years; then He revived him. He said, "How long have you remained?" The man said, "I have remained a day or part of a day." He said, "Rather, you have remained one hundred years."',
    words: [
      { arabic: 'أَوْ كَالَّذِي مَرَّ', transliteration: 'Aw kal-lathee marra', translationEn: 'Or like the one who passed', translationUr: 'یا اس کی مانند جو گزرا' },
      { arabic: 'عَلَىٰ قَرْيَةٍ', transliteration: '\'ala qaryatin', translationEn: 'by a ruined city / township', translationUr: 'ایک بستی پر' },
      { arabic: 'فَأَمَاتَهُ اللَّهُ', transliteration: 'fa-amatahul-lahu', translationEn: 'so Allah caused him to die', translationUr: 'پس مار دیا اسے اللہ نے' },
      { arabic: 'مِائَةَ عَامٍ', transliteration: 'mi\'ata \'amin', translationEn: 'a hundred years', translationUr: 'سو سال' },
      { arabic: 'ثُمَّ بَعَثَهُ', transliteration: 'thumma ba\'athahu', translationEn: 'then revived him', translationUr: 'پھر زندہ اٹھایا اسے' }
    ]
  },
  // Surah 2 Ayah 260 (Ibrahim and 4 Birds)
  '2:260': {
    arabic: 'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ أَرِنِي كَيْفَ تُحْيِي الْمَوْتَىٰ ۖ قَالَ أَوَلَمْ تُؤْمِن ۖ قَالَ بَلَىٰ وَلَٰكِن لِّيَطْمَئِنَّ قَلْبِي ۖ قَالَ فَخُذْ أَرْبَعَةً مِّنَ الطَّيْرِ فَصُرْهُنَّ إِلَيْكَ ثُمَّ اجْعَلْ عَلَىٰ كُلِّ جَبَلٍ مِّنْهُنَّ جُزْءًا ثُمَّ ادْعُهُنَّ يَأْتِينَكَ سَعْيًا ۚ وَاعْلَمْ أَنَّ اللَّهَ عَزِيزٌ حَكِيمٌ',
    translationUr: 'اور جب ابراہیم نے عرض کیا: اے میرے رب! مجھے دکھا دیجیے کہ آپ مردوں کو کیسے زندہ فرماتے ہیں؟ فرمایا کیا تمہیں یقین نہیں؟ عرض کیا کیوں نہیں! لیکن اس لیے تاکہ میرے دل کو کامل اطمینان حاصل ہو جائے۔ فرمایا چار پرندے لو، انہیں اپنے سے ہلا لو، پھر ہر پہاڑ پر ان کا ایک ایک ٹکڑا رکھ دو، پھر انہیں پکارو، وہ تمہارے پاس دوڑتے ہوئے آئیں گے، اور جان رکھو کہ اللہ زبردست، بڑی حکمت والا ہے۔',
    translationEn: 'And [mention] when Abraham said, "My Lord, show me how You give life to the dead." [Allah] said, "Have you not believed?" He said, "Yes, but [I ask] only that my heart may be satisfied." [Allah] said, "Take four birds and commit them to yourself. Then put on each hill a portion of them; then call them - they will come [flying] to you in haste. And know that Allah is Exalted in Might and Wise."',
    words: [
      { arabic: 'رَبِّ أَرِنِي', transliteration: 'Rabbi arinee', translationEn: 'My Lord show me', translationUr: 'اے میرے رب مجھے دکھا' },
      { arabic: 'كَيْفَ تُحْيِي الْمَوْتَىٰ', transliteration: 'kayfa tuhyil-mawta', translationEn: 'how You give life to dead', translationUr: 'آپ مردوں کو کیسے زندہ کرتے ہیں' },
      { arabic: 'وَلَٰكِن لِّيَطْمَئِنَّ قَلْبِي', transliteration: 'wa lakin liyatma\'inna qalbee', translationEn: 'but to satisfy my heart', translationUr: 'لیکن تاکہ مطمئن ہو جائے میرا دل' },
      { arabic: 'فَخُذْ أَرْبَعَةً مِّنَ الطَّيْرِ', transliteration: 'fakhuth arba\'atan minat-tayr', translationEn: 'take four birds', translationUr: 'پس پکڑ لو چار پرندے' },
      { arabic: 'يَأْتِينَكَ سَعْيًا', transliteration: 'ya\'teenaka sa\'ya', translationEn: 'they will come to you in haste', translationUr: 'وہ آئیں گے تیرے پاس دوڑتے ہوئے' }
    ]
  },
  // Surah 2 Ayah 264 (Charity without Mann & Aza)
  '2:264': {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُبْطِلُوا صَدَقَاتِكُم بِالْمَنِّ وَالْأَذَىٰ كَالَّذِي يُنفِقُ مَالَهُ رِئَاءَ النَّاسِ وَلَا يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ',
    translationUr: 'اے ایمان والو! اپنے صدقات کو احسان جتا کر اور تکلیف پہنچا کر برباد نہ کرو، اس شخص کی طرح جو اپنا مال لوگوں کو دکھانے کے لیے خرچ کرتا ہے اور نہ اللہ پر ایمان رکھتا ہے نہ قیامت کے دن پر۔',
    translationEn: 'O you who have believed, do not invalidate your charities with reminders [or injury] like him who spends his wealth [only] to be seen by the people and does not believe in Allah and the Last Day.',
    words: [
      { arabic: 'لَا تُبْطِلُوا صَدَقَاتِكُم', transliteration: 'la tubtiloo sadaqatikum', translationEn: 'do not invalidate your charities', translationUr: 'برباد نہ کرو اپنے صدقوں کو' },
      { arabic: 'بِالْمَنِّ وَالْأَذَىٰ', transliteration: 'bil-manni wal-atha', translationEn: 'with reminders and harm', translationUr: 'احسان جتا کر اور دکھ دے کر' },
      { arabic: 'رِئَاءَ النَّاسِ', transliteration: 'ri\'a\'an-nas', translationEn: 'to be seen by people', translationUr: 'لوگوں کو دکھانے کے لیے' }
    ]
  },
  // Surah 2 Ayah 267 (Spending Pure Wealth)
  '2:267': {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُم مِّنَ الْأَرْضِ ۖ وَلَا تَيَمَّمُوا الْخَبِيثَ مِنْهُ تُنفِقُونَ',
    translationUr: 'اے ایمان والو! اپنی پاکیزہ اور حلال کمائی میں سے خرچ کرو اور ان چیزوں میں سے بھی جو ہم نے تمہارے لیے زمین سے اگائی ہیں، اور جان بوجھ کر ناپسندیدہ اور گھٹیا مال کا ارادہ نہ کرو کہ اسے راہِ خدا میں دو۔',
    translationEn: 'O you who have believed, spend from the good things which you have earned and from that which We have produced for you from the earth. And do not aim toward the defective therefrom, spending [from that].',
    words: [
      { arabic: 'أَنفِقُوا مِن طَيِّبَاتِ', transliteration: 'anfiqoo min tayyibati', translationEn: 'spend from pure & good things', translationUr: 'خرچ کرو پاکیزہ چیزوں میں سے' },
      { arabic: 'مَا كَسَبْتُمْ', transliteration: 'ma kasabtum', translationEn: 'what you have earned', translationUr: 'جو تم نے کمایا' },
      { arabic: 'وَمِمَّا أَخْرَجْنَا لَكُم', transliteration: 'wa mimma akhrajna lakum', translationEn: 'and from what We brought forth for you', translationUr: 'اور اس میں سے جو ہم نے نکالا تمہارے لیے' },
      { arabic: 'مِّنَ الْأَرْضِ', transliteration: 'minal-ard', translationEn: 'from the earth', translationUr: 'زمین سے' }
    ]
  },
  // Surah 2 Ayah 268 (Shaitan promises poverty vs Allah promises grace)
  '2:268': {
    arabic: 'الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُم بِالْفَحْشَاءِ ۖ وَاللَّهُ يَعِدُكُم مَّغْفِرَةً مِّنْهُ وَفَضْلًا ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ',
    translationUr: 'شیطان تمہیں ناداری اور فقر کا خوف دلاتا ہے اور بے حیائی (بخل) کا حکم دیتا ہے، جبکہ اللہ تم سے اپنی بخشش اور فضل و برکت کا وعدہ فرماتا ہے، اور اللہ وسعت والا، سب کچھ جاننے والا ہے۔',
    translationEn: 'Satan threatens you with poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty. And Allah is all-Encompassing and Knowing.',
    words: [
      { arabic: 'الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ', transliteration: 'Ash-shaytanu ya\'idukumul-faqr', translationEn: 'Satan threatens you with poverty', translationUr: 'شیطان ڈراتا ہے تمہیں فقر و مفلسی سے' },
      { arabic: 'وَيَأْمُرُكُم بِالْفَحْشَاءِ', transliteration: 'wa ya\'murukum bil-fahsha\'', translationEn: 'and orders you to immorality/greed', translationUr: 'اور حکم دیتا ہے بے حیائی و بخل کا' },
      { arabic: 'وَاللَّهُ يَعِدُكُم مَّغْفِرَةً', transliteration: 'wallahu ya\'idukum maghfiratan', translationEn: 'while Allah promises you forgiveness', translationUr: 'اور اللہ وعدہ دیتا ہے تم کو بخشش کا' },
      { arabic: 'وَفَضْلًا', transliteration: 'wa fadla', translationEn: 'and bounty / abundance', translationUr: 'اور فضل و کشادگی کا' }
    ]
  },
  // Surah 2 Ayah 269 (Wisdom - Hikmah)
  '2:269': {
    arabic: 'يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا ۗ وَمَا يَذَّكَّرُ إِلَّا أُولُو الْأَلْبَابِ',
    translationUr: 'وہ جسے چاہتا ہے حکمت و دانائی عطا فرماتا ہے، اور جسے حکمت دی گئی اسے یقیناً بہت بڑی دولت اور خیرِ کثیر عطا کر دی گئی، اور عقل والے ہی نصیحت قبول کرتے ہیں۔',
    translationEn: 'He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good. And none will remember except those of understanding.',
    words: [
      { arabic: 'يُؤْتِي الْحِكْمَةَ', transliteration: 'Yu\'til-hikmata', translationEn: 'He grants wisdom', translationUr: 'وہ عطا فرماتا ہے حکمت' },
      { arabic: 'مَن يَشَاءُ', transliteration: 'man yasha\'', translationEn: 'to whom He wills', translationUr: 'جس کو چاہتا ہے' },
      { arabic: 'فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا', transliteration: 'faqad ootiya khayran katheera', translationEn: 'has been given abundant good', translationUr: 'تو اسے مل گئی بہت بڑی بھلائی' }
    ]
  },
  // Surah 2 Ayah 279 (War against Riba)
  '2:279': {
    arabic: 'فَإِن لَّمْ تَفْعَلُوا فَأْذَنُوا بِحَرْبٍ مِّنَ اللَّهِ وَرَسُولِهِ ۖ وَإِن تُبْتُمْ فَلَكُمْ رُءُوسُ أَمْوَالِكُمْ لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ',
    translationUr: 'پھر اگر تم نے ایسا نہ کیا (سود نہ چھوڑا) تو اللہ اور اس کے رسول کی طرف سے اعلانِ جنگ سن لو، اور اگر تم توبہ کر لو تو تمہارے لیے تمہارے اصل اموال (راس المال) ہیں، نہ تم کسی پر ظلم کرو اور نہ تم پر ظلم کیا جائے۔',
    translationEn: 'And if you do not, then be informed of a war [against you] from Allah and His Messenger. But if you repent, you may have your principal - [thus] you do no wrong, nor are you wronged.',
    words: [
      { arabic: 'فَإِن لَّمْ تَفْعَلُوا', transliteration: 'Fa-illam taf\'aloo', translationEn: 'And if you do not do so', translationUr: 'پس اگر تم نہ کرو گے' },
      { arabic: 'فَأْذَنُوا بِحَرْبٍ', transliteration: 'fa\'thanoo bi-harbin', translationEn: 'then be warned of war', translationUr: 'تو آگاہ ہو جاؤ جنگ کے لیے' },
      { arabic: 'مِّنَ اللَّهِ وَرَسُولِهِ', transliteration: 'minallahi wa rasoolih', translationEn: 'from Allah and His Messenger', translationUr: 'اللہ اور اس کے رسول کی طرف سے' },
      { arabic: 'لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ', transliteration: 'la tathlimoona wa la tuthlamoon', translationEn: 'neither you oppress nor are oppressed', translationUr: 'نہ تم ظلم کرو اور نہ تم پر ظلم ہو' }
    ]
  },
  // Surah 2 Ayah 281 (Final Revealed Verse)
  '2:281': {
    arabic: 'وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ ۖ ثُمَّ تُوَفَّىٰ كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ',
    translationUr: 'اور اس دن سے ڈرو جس میں تم سب اللہ کی طرف لوٹائے جاؤ گے، پھر ہر جان کو اس کے کیے کا پورا پورا بدلہ دیا جائے گا اور ان پر ذرا بھی ظلم نہیں ہوگا۔',
    translationEn: 'And fear a Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be treated unjustly.',
    words: [
      { arabic: 'وَاتَّقُوا يَوْمًا', transliteration: 'Wattaqoo yawman', translationEn: 'And fear a Day', translationUr: 'اور ڈرو اس دن سے' },
      { arabic: 'تُرْجَعُونَ فِيهِ إِلَى اللَّهِ', transliteration: 'turja\'oona feehi ilallah', translationEn: 'when you return to Allah', translationUr: 'جب لوٹائے جاؤ گے تم اس میں اللہ کی طرف' },
      { arabic: 'ثُمَّ تُوَفَّىٰ كُلُّ نَفْسٍ', transliteration: 'thumma tuwaffa kullu nafsin', translationEn: 'then every soul is paid in full', translationUr: 'پھر پورا دیا جائے گا ہر جان کو' },
      { arabic: 'مَّا كَسَبَتْ', transliteration: 'ma kasabat', translationEn: 'what it earned', translationUr: 'جو اس نے کمایا' },
      { arabic: 'وَهُمْ لَا يُظْلَمُونَ', transliteration: 'wa hum la yuthlamoon', translationEn: 'and they will not be wronged', translationUr: 'اور ان پر ظلم نہیں ہوگا' }
    ]
  },
  // Surah 2 Ayah 282 (Ayatud Dayn - Longest verse in Quran)
  '2:282': {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ ۚ وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌ بِالْعَدْلِ ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ اللَّهُ ۚ فَلْيَكْتُبْ وَلْيُمْلِلِ الَّذِي عَلَيْهِ الْحَقُّ وَلْيَتَّقِ اللَّهَ رَبَّهُ وَلَا يَبْخَسْ مِنْهُ شَيْئًا',
    translationUr: 'اے ایمان والو! جب تم آپس میں کسی مقررہ مدت کے لیے ادھار کا لین دین کرو تو اسے لکھ لیا کرو، اور تمہارے درمیان لکھنے والا انصاف کے ساتھ لکھے، اور لکھنے والا لکھنے سے انکار نہ کرے جیسا کہ اللہ نے اسے سکھایا ہے، اور وہ شخص لکھوائے جس پر حق واجب ہے اور وہ اپنے رب اللہ سے ڈرے اور اس میں سے کچھ بھی کم نہ کرے۔',
    translationEn: 'O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write [it] between you in justice. Let no scribe refuse to write as Allah has taught him. So let him write and let the one who has the obligation dictate. And let him fear Allah, his Lord, and not leave anything out of it.',
    words: [
      { arabic: 'إِذَا تَدَايَنتُم بِدَيْنٍ', transliteration: 'itha tadayantum bidaynin', translationEn: 'when you contract a debt', translationUr: 'جب تم لین دین کرو قرض کا' },
      { arabic: 'إِلَىٰ أَجَلٍ مُّسَمًّى', transliteration: 'ila ajalim-musamman', translationEn: 'for a specified term', translationUr: 'ایک مقررہ میعاد تک' },
      { arabic: 'فَاكْتُبُوهُ', transliteration: 'faktubooh', translationEn: 'then write it down', translationUr: 'تو اسے لکھ لیا کرو' },
      { arabic: 'وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌ بِالْعَدْلِ', transliteration: 'walyaktub baynakum katibum-bil-\'adl', translationEn: 'and let a scribe write between you with justice', translationUr: 'اور چاہیے کہ لکھے تمہارے درمیان لکھنے والا انصاف سے' }
    ]
  },

  // Surah 3 (Aal-e-Imran) 1 to 9
  '3:1': {
    arabic: 'الم',
    translationUr: 'الف، لام، میم۔',
    translationEn: 'Alif, Lam, Meem.',
    words: [
      { arabic: 'الم', transliteration: 'Alif-Lam-Meem', translationEn: 'Alif Lam Meem', translationUr: 'الف لام میم' }
    ]
  },
  '3:2': {
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    translationUr: 'اللہ! اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ رہنے والا، تمام کائنات کو قائم رکھنے والا ہے۔',
    translationEn: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.',
    words: [
      { arabic: 'اللَّهُ', transliteration: 'Allahu', translationEn: 'Allah', translationUr: 'اللہ' },
      { arabic: 'لَا إِلَٰهَ إِلَّا هُوَ', transliteration: 'la ilaha illa huwa', translationEn: 'no deity except Him', translationUr: 'نہیں کوئی معبود مگر وہی' },
      { arabic: 'الْحَيُّ الْقَيُّومُ', transliteration: 'al-Hayyul-Qayyoom', translationEn: 'the Ever-Living, the Sustainer', translationUr: 'زندہ جاوید، سب کو سنبھالنے والا' }
    ]
  },
  '3:3': {
    arabic: 'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ',
    translationUr: 'اس نے آپ پر حق کے ساتھ یہ کتاب نازل فرمائی جو اپنے سے پہلے والی کتابوں کی تصدیق کرنے والی ہے، اور اسی نے تورات اور انجیل نازل فرمائی۔',
    translationEn: 'He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.',
    words: [
      { arabic: 'نَزَّلَ عَلَيْكَ الْكِتَابَ', transliteration: 'Nazzala \'alaykal-kitaba', translationEn: 'He sent down to you the Book', translationUr: 'نازل کی آپ پر کتاب' },
      { arabic: 'بِالْحَقِّ', transliteration: 'bil-haqq', translationEn: 'in truth', translationUr: 'سچائی و حق کے ساتھ' },
      { arabic: 'مُصَدِّقًا', transliteration: 'musaddiqan', translationEn: 'confirming', translationUr: 'تصدیق کرنے والی' },
      { arabic: 'التَّوْرَاةَ وَالْإِنجِيلَ', transliteration: 'at-Tawrata wal-Injeel', translationEn: 'the Torah and Gospel', translationUr: 'تورات اور انجیل' }
    ]
  },
  '3:7': {
    arabic: 'هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُّحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ ۖ فَأَمَّا الَّذِينَ فِي قُلُوبِهِمْ زَيْغٌ فَيَتَّبِعُونَ مَا تَشَابَهَ مِنْهُ ابْتِغَاءَ الْفِتْنَةِ وَابْتِغَاءَ تَأْوِيلِهِ ۗ وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ ۗ وَالرَّاسِخُونَ فِي الْعِلْمِ يَقُولُونَ آمَنَّا بِهِ كُلٌّ مِّنْ عِندِ رَبِّنَا ۗ وَمَا يَذَّكَّرُ إِلَّا أُولُو الْأَلْبَابِ',
    translationUr: 'وہی ہے جس نے آپ پر یہ کتاب نازل فرمائی جس میں کچھ آیات "محکم" (واضح اور پختہ) ہیں جو کتاب کی اصل بنیاد ہیں اور دوسری "متشابہ" (جن کے مفہوم میں وسعت و راز ہے) ہیں۔ پس جن کے دلوں میں ٹیڑھا پن ہے وہ فتنہ برپا کرنے اور تاویلیں گھڑنے کے لیے متشابہات کے پیچھے پڑتے ہیں، حالانکہ ان کی اصل حقیقت اللہ کے سوا کوئی نہیں جانتا، اور جو علم میں پختہ کار ہیں وہ کہتے ہیں کہ ہم اس پر ایمان لائے، یہ سب ہمارے رب کی طرف سے ہے، اور نصیحت صرف عقل والے ہی قبول کرتے ہیں۔',
    translationEn: 'It is He who has sent down to you, [O Muhammad], the Book; in it are verses [that are] precise - they are the foundation of the Book - and others unspecific. As for those in whose hearts is deviation [from truth], they will follow that of it which is unspecific, seeking discord and seeking an interpretation [suitable to them]. And none knows its [true] interpretation except Allah. But those firm in knowledge say, "We believe in it. All [of it] is from our Lord." And none will be reminded except those of understanding.',
    words: [
      { arabic: 'آيَاتٌ مُّحْكَمَاتٌ', transliteration: 'ayatun muhkamat', translationEn: 'precise / fundamental verses', translationUr: 'محکم واضح آیات' },
      { arabic: 'هُنَّ أُمُّ الْكِتَابِ', transliteration: 'hunna oomul-kitab', translationEn: 'they are the foundation of the Book', translationUr: 'وہ اصل بنیاد ہیں کتاب کی' },
      { arabic: 'وَأُخَرُ مُتَشَابِهَاتٌ', transliteration: 'wa okharu mutashabihat', translationEn: 'and others allegorical/unspecific', translationUr: 'اور دوسری متشابہ آیات' },
      { arabic: 'وَالرَّاسِخُونَ فِي الْعِلْمِ', transliteration: 'war-rasikhoona fil-\'ilm', translationEn: 'and those grounded in knowledge', translationUr: 'اور پختہ علم والے' },
      { arabic: 'يَقُولُونَ آمَنَّا بِهِ', transliteration: 'yaqooloona amanna bih', translationEn: 'say "We believe in it"', translationUr: 'کہتے ہیں ہم ایمان لائے اس پر' }
    ]
  },
  '3:8': {
    arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
    translationUr: 'اے ہمارے رب! ہمارے دلوں کو ٹیڑھا نہ فرما بعد اس کے کہ تو نے ہمیں سیدھی راہ دکھا دی، اور ہمیں اپنے پاس سے خاص رحمت عطا فرما، بے شک تو ہی سب سے بڑا عطا فرمانے والا ہے۔',
    translationEn: '[Who say], "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower."',
    words: [
      { arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا', transliteration: 'Rabbana la tuzigh quloobana', translationEn: 'Our Lord let not our hearts deviate', translationUr: 'اے ہمارے رب نہ ٹیڑھا کر ہمارے دلوں کو' },
      { arabic: 'بَعْدَ إِذْ هَدَيْتَنَا', transliteration: 'ba\'da ith hadaytana', translationEn: 'after You have guided us', translationUr: 'بعد اس کے کہ ہدایت دی تو نے ہمیں' },
      { arabic: 'وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً', transliteration: 'wa hab lana min ladunka rahmah', translationEn: 'and grant us from Yourself mercy', translationUr: 'اور عطا فرما ہمیں اپنے پاس سے رحمت' },
      { arabic: 'إِنَّكَ أَنتَ الْوَهَّابُ', transliteration: 'innaka antal-wahhab', translationEn: 'indeed You are the Bestower', translationUr: 'بے شک تو ہی بڑا داتا ہے' }
    ]
  },
  '3:14': {
    arabic: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ وَالْخَيْلِ الْمُسَوَّمَةِ وَالْأَنْعَامِ وَالْحَرْثِ ۗ ذَٰلِكَ مَتَاعُ الْحَيَاةِ الدُّنْيَا ۖ وَاللَّهُ عِندَهُ حُسْنُ الْمَآبِ',
    translationUr: 'لوگوں کے لیے مرغوب چیزوں کی محبت خوشنما بنا دی گئی ہے، جیسے عورتیں، بیٹے، سونے اور چاندی کے لگے ہوئے ڈھیر، نشان لگے ہوئے گھوڑے، مویشی اور کھیتی۔ یہ سب تو دنیا کی چند روزہ زندگی کا سامان ہے، اور اچھا ٹھکانا تو اللہ ہی کے پاس ہے۔',
    translationEn: 'Beautified for people is the love of that which they desire - of women and sons, heaped-up sums of gold and silver, fine branded horses, and cattle and tilled land. That is the enjoyment of worldly life, but Allah has with Him the best return.',
    words: [
      { arabic: 'زُيِّنَ لِلنَّاسِ', transliteration: 'Zuyyina lin-nasi', translationEn: 'Beautified for mankind', translationUr: 'خوشنما بنا دی گئی لوگوں کے لیے' },
      { arabic: 'حُبُّ الشَّهَوَاتِ', transliteration: 'hubbush-shahawat', translationEn: 'the love of desires', translationUr: 'خواہشات کی محبت' },
      { arabic: 'مَتَاعُ الْحَيَاةِ الدُّنْيَا', transliteration: 'mata\'ul-hayatid-dunya', translationEn: 'enjoyment of worldly life', translationUr: 'دنیا کی زندگی کا سامان' },
      { arabic: 'وَاللَّهُ عِندَهُ حُسْنُ الْمَآبِ', transliteration: 'wallahu \'indahu husnul-ma\'ab', translationEn: 'and Allah has with Him best return', translationUr: 'اور اللہ کے پاس بہترین ٹھکانا ہے' }
    ]
  },
  '3:19': {
    arabic: 'إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ ۗ وَمَا اخْتَلَفَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ',
    translationUr: 'بے شک اللہ کے نزدیک سچا دین صرف اسلام ہی ہے۔ اور جنہیں کتاب دی گئی تھی انہوں نے علم آ جانے کے بعد محض باہمی ضد اور حسد کی بنا پر اختلاف کیا۔',
    translationEn: 'Indeed, the religion in the sight of Allah is Islam. And those who were given the Scripture did not differ except after knowledge had come to them - out of jealous animosity between themselves.',
    words: [
      { arabic: 'إِنَّ الدِّينَ', transliteration: 'Innad-deena', translationEn: 'Indeed the religion', translationUr: 'بے شک دین' },
      { arabic: 'عِندَ اللَّهِ الْإِسْلَامُ', transliteration: '\'indallahil-Islam', translationEn: 'with Allah is Islam', translationUr: 'اللہ کے نزدیک صرف اسلام ہے' }
    ]
  },
  '3:26': {
    arabic: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translationUr: 'آپ عرض کیجیے: اے اللہ! تمام ملک و سلطنت کے مالک! تو جسے چاہے بادشاہت عطا فرماتا ہے اور جس سے چاہے سلطنت چھین لیتا ہے، اور تو جسے چاہے عزت بخشتا ہے اور جسے چاہے ذلیل کر دیتا ہے، تمام تر بھلائی تیرے ہی دستِ قدرت میں ہے، یقیناً تو ہر چیز پر کامل قدرت رکھنے والا ہے۔',
    translationEn: 'Say, "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent."',
    words: [
      { arabic: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ', transliteration: 'Qulil-lahumma Malikal-Mulk', translationEn: 'Say O Allah Owner of Dominion', translationUr: 'کہہ دیجیے اے اللہ بادشاہی کے مالک' },
      { arabic: 'تُؤْتِي الْمُلْكَ مَن تَشَاءُ', transliteration: 'tu\'til-mulka man tasha\'', translationEn: 'You give power to whom You will', translationUr: 'تو دیتا ہے حکومت جسے چاہے' },
      { arabic: 'وَتُعِزُّ مَن تَشَاءُ', transliteration: 'wa tu\'izzu man tasha\'', translationEn: 'and You honor whom You will', translationUr: 'اور تو عزت دیتا ہے جسے چاہے' },
      { arabic: 'وَتُذِلُّ مَن تَشَاءُ', transliteration: 'wa tudhillu man tasha\'', translationEn: 'and You humble whom You will', translationUr: 'اور تو ذلیل کرتا ہے جسے چاہے' },
      { arabic: 'بِيَدِكَ الْخَيْرُ', transliteration: 'biyadikal-khayr', translationEn: 'in Your hand is all good', translationUr: 'تیرے ہاتھ میں ہے ہر بھلائی' }
    ]
  },
  '3:38': {
    arabic: 'هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ ۖ قَالَ رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
    translationUr: 'اسی جگہ زکریا نے اپنے رب سے دعا مانگی، عرض کیا: اے میرے پروردگار! مجھے اپنی جناب سے پاکیزہ اور نیک اولاد عطا فرما، بے شک تو ہی دعا کا خوب سننے والا ہے۔',
    translationEn: 'At that, Zechariah called upon his Lord, saying, "My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication."',
    words: [
      { arabic: 'دَعَا زَكَرِيَّا رَبَّهُ', transliteration: 'da\'a Zakariyya Rabbah', translationEn: 'Zakariyya prayed to his Lord', translationUr: 'دعا مانگی زکریاؑ نے اپنے رب سے' },
      { arabic: 'رَبِّ هَبْ لِي', transliteration: 'Rabbi hab lee', translationEn: 'My Lord grant me', translationUr: 'اے میرے رب عطا فرما مجھے' },
      { arabic: 'ذُرِّيَّةً طَيِّبَةً', transliteration: 'thurriyyatan tayyibah', translationEn: 'a good pure offspring', translationUr: 'پاکیزہ و نیک اولاد' },
      { arabic: 'إِنَّكَ سَمِيعُ الدُّعَاءِ', transliteration: 'innaka samee\'ud-du\'a', translationEn: 'indeed You hear supplication', translationUr: 'بے شک تو دعا سننے والا ہے' }
    ]
  },
  '3:59': {
    arabic: 'إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ ۖ خَلَقَهُ مِن تُرَابٍ ثُمَّ قَالَ لَهُ كُن فَيَكُونُ',
    translationUr: 'بے شک عیسیٰ کی مثال اللہ کے نزدیک آدم کی مانند ہے، اسے مٹی سے پیدا فرمایا پھر اسے فرمایا "ہو جا" تو وہ ہو گیا۔',
    translationEn: 'Indeed, the example of Jesus to Allah is like that of Adam. He created him from dust; then He said to him, "Be," and he was.',
    words: [
      { arabic: 'إِنَّ مَثَلَ عِيسَىٰ', transliteration: 'Inna mathala \'Isa', translationEn: 'Indeed the example of Jesus', translationUr: 'بے شک عیسیٰؑ کی مثال' },
      { arabic: 'كَمَثَلِ آدَمَ', transliteration: 'kamathali Adam', translationEn: 'is like that of Adam', translationUr: 'آدمؑ کی مثال کی طرح ہے' },
      { arabic: 'خَلَقَهُ مِن تُرَابٍ', transliteration: 'khalaqahu min turab', translationEn: 'He created him from dust', translationUr: 'اسے پیدا کیا مٹی سے' },
      { arabic: 'ثُمَّ قَالَ لَهُ كُن فَيَكُونُ', transliteration: 'thumma qala lahu kun fa-yakoon', translationEn: 'then said to him "Be" and he was', translationUr: 'پھر فرمایا ہو جا تو وہ ہو گیا' }
    ]
  },
  '3:64': {
    arabic: 'قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا اللَّهَ وَلَا نُشْرِكَ بِهِ شَيْئًا وَلَا يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِّن دُونِ اللَّهِ ۚ فَإِن تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ',
    translationUr: 'آپ فرما دیجیے: اے اہل کتاب! آؤ ایک ایسی بات کی طرف جو ہمارے اور تمہارے درمیان برابر اور متفق علیہ ہے کہ ہم اللہ کے سوا کسی کی عبادت نہ کریں اور نہ کسی چیز کو اس کا شریک ٹھہرائیں اور نہ ہم میں سے کوئی اللہ کو چھوڑ کر ایک دوسرے کو رب بنائے، پھر اگر وہ منہ موڑیں تو کہہ دو کہ تم گواہ رہو کہ ہم تو مسلمان ہیں۔',
    translationEn: 'Say, "O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah." But if they turn away, then say, "Bear witness that we are Muslims [submitting to Him]."',
    words: [
      { arabic: 'قُلْ يَا أَهْلَ الْكِتَابِ', transliteration: 'Qul ya ahlal-kitab', translationEn: 'Say O People of Scripture', translationUr: 'فرما دیجیے اے اہل کتاب' },
      { arabic: 'تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ', transliteration: 'ta\'alaw ila kalimatin sawa\'', translationEn: 'come to a common / equitable word', translationUr: 'آؤ ایک ایسی بات کی طرف جو برابر ہے' },
      { arabic: 'أَلَّا نَعْبُدَ إِلَّا اللَّهَ', transliteration: 'alla na\'buda illallah', translationEn: 'that we worship none but Allah', translationUr: 'کہ ہم نہ عبادت کریں مگر اللہ کی' },
      { arabic: 'اشْهَدُوا بِأَنَّا مُسْلِمُونَ', transliteration: 'ish-hadoo bi-anna muslimoon', translationEn: 'bear witness that we are Muslims', translationUr: 'گواہ رہو کہ ہم مسلمان ہیں' }
    ]
  },
  '3:85': {
    arabic: 'وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ',
    translationUr: 'اور جو شخص اسلام کے سوا کوئی اور دین تلاش کرے گا تو وہ اس سے ہرگز قبول نہیں کیا جائے گا، اور وہ آخرت میں سخت نقصان اٹھانے والوں میں سے ہوگا۔',
    translationEn: 'And whoever desires other than Islam as religion - never will it be accepted from him, and he, in the Hereafter, will be among the losers.',
    words: [
      { arabic: 'وَمَن يَبْتَغِ', transliteration: 'Wa man yabtaghi', translationEn: 'And whoever seeks', translationUr: 'اور جو کوئی تلاش کرے گا' },
      { arabic: 'غَيْرَ الْإِسْلَامِ دِينًا', transliteration: 'ghayral-Islami deenan', translationEn: 'other than Islam as religion', translationUr: 'اسلام کے سوا کوئی دین' },
      { arabic: 'فَلَن يُقْبَلَ مِنْهُ', transliteration: 'falan yuqbala minh', translationEn: 'never will it be accepted from him', translationUr: 'تو ہرگز قبول نہیں کیا جائے گا اس سے' },
      { arabic: 'مِنَ الْخَاسِرِينَ', transliteration: 'minal-khasireen', translationEn: 'among the losers', translationUr: 'نقصان پانے والوں میں سے' }
    ]
  }
};
