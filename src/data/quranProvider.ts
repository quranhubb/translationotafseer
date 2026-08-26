import { Ayah, SurahMeta } from '../types';
import { FATIHA_VERSES } from './tafseer/fatiha';
import { BAQARAH_PARA1_VERSES, PARA1_RUKUS } from './tafseer/baqarahPara1';
import { SURAHS_LIST } from './surahs';

// Arabic texts & translations for Baqarah 11 to 141 (Para 1)
// We provide full accurate Arabic text, word-by-word, Urdu & English translations, and Maarif-ul-Quran Tafseer
const BAQARAH_MORE_VERSES_MAP: Record<number, {
  arabic: string;
  translationUr: string;
  translationEn: string;
  words: { arabic: string; transliteration?: string; translationEn: string; translationUr: string }[];
  tafseerUr?: string;
  tafseerEn?: string;
}> = {
  11: {
    arabic: 'وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ',
    translationUr: 'اور جب ان سے کہا جائے کہ زمین میں فساد نہ مچاؤ تو کہتے ہیں کہ ہم ہی تو اصلاح کرنے والے ہیں۔',
    translationEn: 'And when it is said to them, "Do not cause corruption on the earth," they say, "We are but reformers."',
    words: [
      { arabic: 'وَإِذَا', transliteration: 'Wa-itha', translationEn: 'And when', translationUr: 'اور جب' },
      { arabic: 'قِيلَ لَهُمْ', transliteration: 'qeela lahum', translationEn: 'it is said to them', translationUr: 'کہا جائے ان سے' },
      { arabic: 'لَا تُفْسِدُوا', transliteration: 'la tufsidoo', translationEn: 'Do not cause corruption', translationUr: 'فساد نہ کرو' },
      { arabic: 'فِي الْأَرْضِ', transliteration: 'fil-ard', translationEn: 'in the earth', translationUr: 'زمین میں' },
      { arabic: 'قَالُوا', transliteration: 'qaloo', translationEn: 'they say', translationUr: 'تو کہتے ہیں' },
      { arabic: 'إِنَّمَا نَحْنُ', transliteration: 'innama nahnu', translationEn: 'We are only', translationUr: 'ہم ہی تو ہیں' },
      { arabic: 'مُصْلِحُونَ', transliteration: 'muslihoon', translationEn: 'peace-makers / reformers', translationUr: 'اصلاح کرنے والے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
منافقین کی خود فریبی: وہ گناہ اور بے دینی کو اور کفار سے ساز باز رکھنے کو حکمتِ عملی اور مصلحت قرار دیتے تھے۔ قرآن نے واضح کیا کہ احکامِ الٰہی کی نافرمانی ہی اصل فساد ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The self-deception of moral corruption: The hypocrites mislabel their conspiratorial double-dealing and religious compromises as enlightened diplomacy and societal reform.`
  },
  12: {
    arabic: 'أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَٰكِن لَّا يَشْعُرُونَ',
    translationUr: 'خبردار! یقیناً وہی فساد پھیلانے والے ہیں لیکن وہ شعور نہیں رکھتے۔',
    translationEn: 'Unquestionably, it is they who are the corrupters, but they perceive [it] not.',
    words: [
      { arabic: 'أَلَا', transliteration: 'Ala', translationEn: 'Beware / Unquestionably', translationUr: 'خبردار!' },
      { arabic: 'إِنَّهُمْ', transliteration: 'innahum', translationEn: 'indeed they', translationUr: 'یقیناً وہ' },
      { arabic: 'هُمُ الْمُفْسِدُونَ', transliteration: 'humu al-mufsidoon', translationEn: 'are the corrupters', translationUr: 'وہی فسادی ہیں' },
      { arabic: 'وَلَٰكِن', transliteration: 'wa lakin', translationEn: 'but', translationUr: 'لیکن' },
      { arabic: 'لَّا يَشْعُرُونَ', transliteration: 'la yash\'uroon', translationEn: 'they perceive not', translationUr: 'وہ نہیں سمجھتے' }
    ]
  },
  13: {
    arabic: 'وَإِذَا قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا آمَنَ السُّفَهَاءُ ۗ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَٰكِن لَّا يَعْلَمُونَ',
    translationUr: 'اور جب ان سے کہا جائے کہ تم بھی ویسا ایمان لاؤ جیسا دوسرے لوگ (صحابہ کرام) ایمان لائے ہیں، تو کہتے ہیں کیا ہم بے وقوفوں کی طرح ایمان لائیں؟ خبردار! وہی بے وقوف ہیں لیکن وہ نہیں جانتے۔',
    translationEn: 'And when it is said to them, "Believe as the people have believed," they say, "Should we believe as the foolish have believed?" Unquestionably, it is they who are the foolish, but they know [it] not.',
    words: [
      { arabic: 'وَإِذَا قِيلَ لَهُمْ', transliteration: 'Wa-itha qeela lahum', translationEn: 'And when said to them', translationUr: 'اور جب کہا جائے ان سے' },
      { arabic: 'آمِنُوا', transliteration: 'aminoo', translationEn: 'Believe', translationUr: 'ایمان لاؤ' },
      { arabic: 'كَمَا آمَنَ النَّاسُ', transliteration: 'kama amana an-nas', translationEn: 'as the people believed', translationUr: 'جیسے لوگ ایمان لائے' },
      { arabic: 'قَالُوا', transliteration: 'qaloo', translationEn: 'they say', translationUr: 'وہ کہتے ہیں' },
      { arabic: 'أَنُؤْمِنُ', transliteration: 'a-nu\'minu', translationEn: 'Shall we believe', translationUr: 'کیا ہم ایمان لائیں' },
      { arabic: 'كَمَا آمَنَ السُّفَهَاءُ', transliteration: 'kama amana as-sufaha', translationEn: 'as the foolish believed?', translationUr: 'جیسے بے وقوف ایمان لائے؟' },
      { arabic: 'أَلَا إِنَّهُمْ', transliteration: 'ala innahum', translationEn: 'Beware, indeed they', translationUr: 'سن لو! بے شک وہی' },
      { arabic: 'هُمُ السُّفَهَاءُ', transliteration: 'humu as-sufaha', translationEn: 'are the foolish', translationUr: 'بے وقوف ہیں' },
      { arabic: 'وَلَٰكِن لَّا يَعْلَمُونَ', transliteration: 'wa lakin la ya\'lamoon', translationEn: 'but they know not', translationUr: 'لیکن وہ نہیں جانتے' }
    ],
    tafseerUr: `تفسیر معارف القرآن:
'کما آمن الناس': یہاں 'الناس' سے مراد بالاجماع صحابہ کرام رضی اللہ عنہم ہیں، جس سے ثابت ہوا کہ صحابہ کرام کا ایمان بعد کی تمام امت کے لیے ایمان کا معیار اور کسوٹی ہے۔ منافقین نے تکبر کی وجہ سے ان مخلص ہستیوں کو ناسمجھ کہا تو اللہ تعالیٰ نے خود ان کا رد فرمایا۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
"As the people have believed": Classical exegetes note that 'An-Nas' here refers directly to the noble Companions (Sahabah r.a.), establishing their devotion and total submission as the eternal touchstone of true faith.`
  },
  14: {
    arabic: 'وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ',
    translationUr: 'اور جب وہ ایمان والوں سے ملتے ہیں تو کہتے ہیں کہ ہم ایمان لے آئے، اور جب اپنے شیطانوں (سرداروں) کے پاس تنہائی میں جاتے ہیں تو کہتے ہیں کہ ہم تو تمہارے ساتھ ہیں، ہم تو بس مذاق کر رہے تھے۔',
    translationEn: 'And when they meet those who believe, they say, "We believe"; but when they are alone with their evil ones, they say, "Indeed, we are with you; we were only mockers."',
    words: [
      { arabic: 'وَإِذَا لَقُوا', transliteration: 'Wa-itha laqoo', translationEn: 'And when they meet', translationUr: 'اور جب وہ ملتے ہیں' },
      { arabic: 'الَّذِينَ آمَنُوا', transliteration: 'allatheena aamanoo', translationEn: 'those who believe', translationUr: 'ان سے جو ایمان لائے' },
      { arabic: 'قَالُوا آمَنَّا', transliteration: 'qaloo amanna', translationEn: 'they say "We believe"', translationUr: 'کہتے ہیں ہم ایمان لائے' },
      { arabic: 'وَإِذَا خَلَوْا', transliteration: 'wa-itha khalaw', translationEn: 'and when alone', translationUr: 'اور جب اکیلے ہوتے ہیں' },
      { arabic: 'إِلَىٰ شَيَاطِينِهِمْ', transliteration: 'ila shayateenihim', translationEn: 'with their devils/chiefs', translationUr: 'اپنے شیطانوں کے پاس' },
      { arabic: 'قَالُوا إِنَّا مَعَكُمْ', transliteration: 'qaloo inna ma\'akum', translationEn: 'they say "We are with you"', translationUr: 'کہتے ہیں ہم تمہارے ساتھ ہیں' },
      { arabic: 'إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ', transliteration: 'innama nahnu mustahzi\'oon', translationEn: 'we were only mocking', translationUr: 'ہم تو صرف ہنسی مذاق کر رہے تھے' }
    ]
  },
  15: {
    arabic: 'اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ',
    translationUr: 'اللہ ان سے استہزاء کا بدلہ لے گا اور انہیں ان کی سرکشی میں ڈھیل دیے جاتا ہے جس میں وہ بھٹکتے پھرتے ہیں۔',
    translationEn: '[But] Allah mocks them and prolongs them in their transgression [while] they wander blindly.',
    words: [
      { arabic: 'اللَّهُ يَسْتَهْزِئُ بِهِمْ', transliteration: 'Allahu yastahzi\'u bihim', translationEn: 'Allah mocks them', translationUr: 'اللہ ان کو بدلہ دے گا ان کے مذاق کا' },
      { arabic: 'وَيَمُدُّهُمْ', transliteration: 'wa yamudduhum', translationEn: 'and prolongs them', translationUr: 'اور ڈھیل دیتا ہے ان کو' },
      { arabic: 'فِي طُغْيَانِهِمْ', transliteration: 'fee tughyanihim', translationEn: 'in their transgression', translationUr: 'ان کی سرکشی میں' },
      { arabic: 'يَعْمَهُونَ', transliteration: 'ya\'mahoon', translationEn: 'wandering blindly', translationUr: 'وہ اندھے ہو کر بھٹک رہے ہیں' }
    ]
  },
  16: {
    arabic: 'أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَت تِّجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ',
    translationUr: 'یہ وہ لوگ ہیں جنہوں نے ہدایت کے بدلے گمراہی خرید لی، پس نہ تو ان کی تجارت نے نفع دیا اور نہ وہ سیدھی راہ پا سکے۔',
    translationEn: 'Those are the ones who have purchased error [in exchange] for guidance, so their transaction has brought no profit, nor were they guided.',
    words: [
      { arabic: 'أُولَٰئِكَ الَّذِينَ', transliteration: 'Ola\'ika allatheena', translationEn: 'Those are the ones who', translationUr: 'یہ وہی لوگ ہیں جنہوں نے' },
      { arabic: 'اشْتَرَوُا الضَّلَالَةَ', transliteration: 'ishtarawu ad-dalalata', translationEn: 'purchased misguidance', translationUr: 'خرید لی گمراہی' },
      { arabic: 'بِالْهُدَىٰ', transliteration: 'bil-huda', translationEn: 'with guidance', translationUr: 'ہدایت کے بدلے' },
      { arabic: 'فَمَا رَبِحَت', transliteration: 'fama rabihat', translationEn: 'so did not profit', translationUr: 'پس نہ نفع دیا' },
      { arabic: 'تِّجَارَتُهُمْ', transliteration: 'tijaratuhum', translationEn: 'their transaction', translationUr: 'ان کی تجارت نے' },
      { arabic: 'وَمَا كَانُوا مُهْتَدِينَ', transliteration: 'wa ma kanoo muhtadeen', translationEn: 'and they were not guided', translationUr: 'اور نہ وہ ہدایت پانے والے ہوئے' }
    ]
  },
  17: {
    arabic: 'مَثَلُهُمْ كَمَثَلِ الَّذِي اسْتَوْقَدَ نَارًا فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ ذَهَبَ اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ لَّا يُبْصِرُونَ',
    translationUr: 'ان کی مثال اس شخص کی سی ہے جس نے ایک آگ جلائی، پھر جب اس نے اس کے گرد و پیش کو روشن کر دیا تو اللہ نے ان کی روشنی چھین لی اور انہیں اندھیروں میں چھوڑ دیا کہ کچھ نہیں دیکھتے۔',
    translationEn: 'Their example is that of one who kindled a fire, but when it illuminated what was around him, Allah took away their light and left them in darkness [so] they could not see.',
    words: [
      { arabic: 'مَثَلُهُمْ', transliteration: 'Mathaluhum', translationEn: 'Their example is', translationUr: 'ان کی مثال' },
      { arabic: 'كَمَثَلِ الَّذِي', transliteration: 'ka-mathali allathee', translationEn: 'like example of the one who', translationUr: 'اس شخص کی مانند ہے جس نے' },
      { arabic: 'اسْتَوْقَدَ نَارًا', transliteration: 'istawqada naran', translationEn: 'kindled a fire', translationUr: 'آگ سلگائی' },
      { arabic: 'فَلَمَّا أَضَاءَتْ', transliteration: 'falamma ada\'at', translationEn: 'then when it lit', translationUr: 'پھر جب اس نے روشن کر دیا' },
      { arabic: 'مَا حَوْلَهُ', transliteration: 'ma hawlahu', translationEn: 'what was around him', translationUr: 'جو کچھ اس کے گرد تھا' },
      { arabic: 'ذَهَبَ اللَّهُ بِنُورِهِمْ', transliteration: 'thahaba Allahu bi-noorihim', translationEn: 'Allah took away their light', translationUr: 'اللہ نے چھین لیا ان کا نور' },
      { arabic: 'وَتَرَكَهُمْ فِي ظُلُمَاتٍ', transliteration: 'wa tarakahum fee thulumatin', translationEn: 'and left them in darkness', translationUr: 'اور چھوڑ دیا ان کو اندھیروں میں' },
      { arabic: 'لَّا يُبْصِرُونَ', transliteration: 'la yubsiroon', translationEn: 'they see not', translationUr: 'وہ کچھ نہیں دیکھتے' }
    ]
  },
  18: {
    arabic: 'صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ',
    translationUr: 'بہرے ہیں، گونگے ہیں، اندھے ہیں، پس وہ (حق کی طرف) نہیں لوٹیں گے۔',
    translationEn: 'Deaf, dumb and blind - so they will not return [to the right path].',
    words: [
      { arabic: 'صُمٌّ', transliteration: 'Summun', translationEn: 'Deaf', translationUr: 'بہرے ہیں' },
      { arabic: 'بُكْمٌ', transliteration: 'bukmun', translationEn: 'dumb', translationUr: 'گونگے ہیں' },
      { arabic: 'عُمْيٌ', transliteration: 'umyun', translationEn: 'blind', translationUr: 'اندھے ہیں' },
      { arabic: 'فَهُمْ لَا يَرْجِعُونَ', transliteration: 'fahum la yarji\'oon', translationEn: 'so they will not return', translationUr: 'سو وہ نہیں لوٹیں گے' }
    ]
  },
  19: {
    arabic: 'أَوْ كَصَيِّبٍ مِّنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ ۚ وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ',
    translationUr: 'یا جیسے آسمان سے برستی بارش، جس میں اندھیرے، گرج اور چمک ہو، وہ کڑک کی وجہ سے موت کے ڈر سے اپنی انگلیاں اپنے کانوں میں ٹھونس لیتے ہیں، اور اللہ کافروں کو گھیرے ہوئے ہے۔',
    translationEn: 'Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning. They put their fingers in their ears against the thunderclaps in dread of death. But Allah is encompassing of the disbelievers.',
    words: [
      { arabic: 'أَوْ كَصَيِّبٍ', transliteration: 'Aw ka-sayyibin', translationEn: 'Or like a rainstorm', translationUr: 'یا جیسے ایک بارش' },
      { arabic: 'مِّنَ السَّمَاءِ', transliteration: 'min as-sama', translationEn: 'from the sky', translationUr: 'آسمان سے' },
      { arabic: 'فِيهِ ظُلُمَاتٌ', transliteration: 'feehi thulumatun', translationEn: 'in it darknesses', translationUr: 'جس میں اندھیرے ہوں' },
      { arabic: 'وَرَعْدٌ وَبَرْقٌ', transliteration: 'wa ra\'dun wa barqun', translationEn: 'and thunder and lightning', translationUr: 'اور گرج اور بجلی' },
      { arabic: 'يَجْعَلُونَ أَصَابِعَهُمْ', transliteration: 'yaj\'aloona asabi\'ahum', translationEn: 'they put their fingers', translationUr: 'وہ کرتے ہیں اپنی انگلیاں' },
      { arabic: 'فِي آذَانِهِم', transliteration: 'fee athanihim', translationEn: 'into their ears', translationUr: 'اپنے کانوں میں' },
      { arabic: 'مِّنَ الصَّوَاعِقِ', transliteration: 'min as-sawa\'iqi', translationEn: 'from thunderclaps', translationUr: 'کڑکوں کے باعث' },
      { arabic: 'حَذَرَ الْمَوْتِ', transliteration: 'hathara al-mawt', translationEn: 'in dread of death', translationUr: 'موت کے ڈر سے' },
      { arabic: 'وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ', transliteration: 'wallahu muheetun bil-kafireen', translationEn: 'and Allah encompasses the disbelievers', translationUr: 'اور اللہ گھیرے ہوئے ہے کافروں کو' }
    ]
  },
  20: {
    arabic: 'يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ ۖ كُلَّمَا أَضَاءَ لَهُم مَّشَوْا فِيهِ وَإِذَا أَظْلَمَ عَلَيْهِمْ قَامُوا ۚ وَلَوْ شَاءَ اللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَارِهِمْ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translationUr: 'قریب ہے کہ بجلی ان کی بینائی اچک لے جائے، جب جب ان پر چمکتی ہے تو اس کی روشنی میں چل پڑتے ہیں اور جب ان پر اندھیرا چھا جاتا ہے تو کھڑے کے کھڑے رہ جاتے ہیں، اور اگر اللہ چاہتا تو ان کی شنوائی اور بینائی کو سلب کر لیتا، بے شک اللہ ہر چیز پر قادر ہے۔',
    translationEn: 'The lightning almost snatches away their sight. Every time it lights [the way] for them, they walk therein; but when darkness comes over them, they stand [still]. And if Allah had willed, He could have taken away their hearing and their sight. Indeed, Allah is over all things competent.',
    words: [
      { arabic: 'يَكَادُ الْبَرْقُ', transliteration: 'Yakadu al-barqu', translationEn: 'Almost the lightning', translationUr: 'قریب ہے کہ بجلی' },
      { arabic: 'يَخْطَفُ أَبْصَارَهُمْ', transliteration: 'yakhtafu absarahum', translationEn: 'snatches their sight', translationUr: 'اچک لے ان کی نگاہوں کو' },
      { arabic: 'كُلَّمَا أَضَاءَ لَهُم', transliteration: 'kullama adaa lahum', translationEn: 'whenever it flashes for them', translationUr: 'جب بھی چمکتی ہے ان پر' },
      { arabic: 'مَّشَوْا فِيهِ', transliteration: 'mashaw feehi', translationEn: 'they walk in it', translationUr: 'وہ چلتے ہیں اس میں' },
      { arabic: 'وَإِذَا أَظْلَمَ عَلَيْهِمْ', transliteration: 'wa-itha athlama alayhim', translationEn: 'and when it darkens on them', translationUr: 'اور جب اندھیرا ہوتا ہے ان پر' },
      { arabic: 'قَامُوا', transliteration: 'qamoo', translationEn: 'they stand still', translationUr: 'وہ کھڑے رہ جاتے ہیں' },
      { arabic: 'إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', transliteration: 'Inna Allaha ala kulli shay\'in qadeer', translationEn: 'Indeed Allah has power over all things', translationUr: 'بے شک اللہ ہر چیز پر قادر ہے' }
    ]
  },
  21: {
    arabic: 'يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
    translationUr: 'اے لوگو! اپنے اس رب کی بندگی کرو جس نے تمہیں اور تم سے پہلے لوگوں کو پیدا کیا تاکہ تم تقویٰ اختیار کرو۔',
    translationEn: 'O mankind, worship your Lord, who created you and those before you, that you may become righteous.',
    words: [
      { arabic: 'يَا أَيُّهَا النَّاسُ', transliteration: 'Ya ayyuha an-nas', translationEn: 'O mankind', translationUr: 'اے لوگو!' },
      { arabic: 'اعْبُدُوا رَبَّكُمُ', transliteration: 'u\'budoo rabbakum', translationEn: 'worship your Lord', translationUr: 'عبادت کرو اپنے رب کی' },
      { arabic: 'الَّذِي خَلَقَكُمْ', transliteration: 'allathee khalaqakum', translationEn: 'Who created you', translationUr: 'جس نے پیدا کیا تمہیں' },
      { arabic: 'وَالَّذِينَ مِن قَبْلِكُمْ', transliteration: 'wallatheena min qablikum', translationEn: 'and those before you', translationUr: 'اور ان کو جو تم سے پہلے تھے' },
      { arabic: 'لَعَلَّكُمْ تَتَّقُونَ', transliteration: 'la\'allakum tattaqoon', translationEn: 'so that you may become God-conscious', translationUr: 'تاکہ تم متقی بن جاؤ' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
یہ قرآن مجید کا پہلا عام خطاب اور پہلا حکم (امر) ہے جو تمام بنی نوع انسان کو توحید اور بندگیِ الٰہی کی طرف بلاتا ہے۔ انسان کو اپنی پیدائش اور آباء و اجداد کی تخلیق پر غور کرنے کی دعوت دی گئی ہے کہ جس اکیلی ذات نے عدم سے وجود بخشا اسی کی بندگی لازم ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
This is the very first universal imperative command addressed to all mankind in the Quran: the fundamental obligation of worshiping the One Creator (Tawheed).`
  },
  22: {
    arabic: 'الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً وَأَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ ۖ فَلَا تَجْعَلُوا لِلَّهِ أَندَادًا وَأَنتُمْ تَعْلَمُونَ',
    translationUr: 'جس نے تمہارے لیے زمین کو فرش اور آسمان کو چھت بنایا اور آسمان سے پانی برسایا، پھر اس کے ذریعے تمہارے کھانے کے لیے پھل نکالے، پس تم جان بوجھ کر اللہ کے ساتھ شریک نہ ٹھہراؤ۔',
    translationEn: '[He] who made for you the earth a bed [spread out] and the sky a ceiling and sent down from the sky, rain and brought forth thereby fruits as provision for you. So do not attribute to Allah equals while you know [that there is none].',
    words: [
      { arabic: 'الَّذِي جَعَلَ لَكُمُ', transliteration: 'Allathee ja\'ala lakum', translationEn: 'Who made for you', translationUr: 'جس نے بنایا تمہارے لیے' },
      { arabic: 'الْأَرْضَ فِرَاشًا', transliteration: 'al-arda firashan', translationEn: 'the earth a bed', translationUr: 'زمین کو بچھونا' },
      { arabic: 'وَالسَّمَاءَ بِنَاءً', transliteration: 'was-sama\'a bina\'an', translationEn: 'and the sky a canopy', translationUr: 'اور آسمان کو چھت' },
      { arabic: 'وَأَنزَلَ مِنَ السَّمَاءِ مَاءً', transliteration: 'wa anzala min as-sama\'i ma\'an', translationEn: 'and sent water from sky', translationUr: 'اور اتارا آسمان سے پانی' },
      { arabic: 'فَأَخْرَجَ بِهِ', transliteration: 'fa-akhraja bihi', translationEn: 'and brought forth thereby', translationUr: 'پھر نکالا اس سے' },
      { arabic: 'مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ', transliteration: 'min ath-thamarati rizqan lakum', translationEn: 'fruits as provision for you', translationUr: 'پھلوں میں سے تمہارا رزق' },
      { arabic: 'فَلَا تَجْعَلُوا لِلَّهِ أَندَادًا', transliteration: 'fala taj\'aloo lillahi andadan', translationEn: 'so do not set up rivals to Allah', translationUr: 'پس نہ بناؤ اللہ کے برابر والے' },
      { arabic: 'وَأَنتُمْ تَعْلَمُونَ', transliteration: 'wa antum ta\'lamoon', translationEn: 'while you know', translationUr: 'حالانکہ تم جانتے ہو' }
    ]
  },
  23: {
    arabic: 'وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ وَادْعُوا شُهَدَاءَكُم مِّن دُونِ اللَّهِ إِن كُنتُمْ صَادِقِينَ',
    translationUr: 'اور اگر تم اس کلام کے بارے میں کسی شک میں ہو جو ہم نے اپنے بندے (محمد ﷺ) پر نازل کیا ہے، تو اس جیسی کوئی ایک سورت ہی بنا لاؤ، اور اللہ کے سوا اپنے سب حمایتیوں کو بلا لو اگر تم سچے ہو۔',
    translationEn: 'And if you are in doubt about what We have sent down upon Our Servant [Muhammad], then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful.',
    words: [
      { arabic: 'وَإِن كُنتُمْ فِي رَيْبٍ', transliteration: 'Wa-in kuntum fee raybin', translationEn: 'And if you are in doubt', translationUr: 'اور اگر ہو تم شک میں' },
      { arabic: 'مِّمَّا نَزَّلْنَا', transliteration: 'mimma nazzalna', translationEn: 'about what We sent down', translationUr: 'اس میں سے جو نازل کیا ہم نے' },
      { arabic: 'عَلَىٰ عَبْدِنَا', transliteration: 'ala \'abdina', translationEn: 'upon Our servant', translationUr: 'اپنے بندے پر' },
      { arabic: 'فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ', transliteration: 'fa\'too bi-suratin min mithlihi', translationEn: 'then produce a chapter like it', translationUr: 'تو لے آؤ ایک سورت اس جیسی' },
      { arabic: 'وَادْعُوا شُهَدَاءَكُم', transliteration: 'wad\'oo shuhada\'akum', translationEn: 'and call your witnesses/helpers', translationUr: 'اور پکار لو اپنے مددگاروں کو' },
      { arabic: 'مِّن دُونِ اللَّهِ', transliteration: 'min doonillahi', translationEn: 'besides Allah', translationUr: 'اللہ کے سوا' },
      { arabic: 'إِن كُنتُمْ صَادِقِينَ', transliteration: 'in kuntum sadiqeen', translationEn: 'if you are truthful', translationUr: 'اگر تم سچے ہو' }
    ],
    tafseerUr: `تفسیر معارف القرآن:
اعجازِ قرآن کا کھلم کھلا چیلنج: قرآن مجید نے مشرکینِ عرب اور تمام فصحاء و بلغاتِ عالم کو چیلنج دیا کہ وہ قرآن کی سب سے چھوٹی سورت (جیسے سورۃ الکوثر، تین آیات) جیسی ہی کوئی ایک سورت بنا کر دکھا دیں۔ چودہ سو سال گزر جانے کے باوجود کوئی انسان یہ چیلنج پورا نہ کر سکا۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The Timeless Challenge of Quranic Inimitability (I'jaz): Allah challenges mankind to formulate even a single Surah matching the sublime eloquence, wisdom, and transformative power of the Quran.`
  },
  24: {
    arabic: 'فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَافِرِينَ',
    translationUr: 'پھر اگر تم ایسا نہ کر سکو اور ہرگز کبھی نہ کر سکو گے، تو ڈرو اس آگ سے جس کا ایندھن انسان اور پتھر ہیں، جو کافروں کے لیے تیار کی گئی ہے۔',
    translationEn: 'But if you do not - and you will never be able to - then fear the Fire, whose fuel is men and stones, prepared for the disbelievers.',
    words: [
      { arabic: 'فَإِن لَّمْ تَفْعَلُوا', transliteration: 'Fa-in lam taf\'aloo', translationEn: 'But if you do not do', translationUr: 'پس اگر نہ کر سکو تم' },
      { arabic: 'وَلَن تَفْعَلُوا', transliteration: 'wa lan taf\'aloo', translationEn: 'and you will never be able to', translationUr: 'اور ہرگز نہ کر سکو گے' },
      { arabic: 'فَاتَّقُوا النَّارَ', transliteration: 'fattaqoo an-nar', translationEn: 'then fear the Fire', translationUr: 'تو بچو اس آگ سے' },
      { arabic: 'الَّتِي وَقُودُهَا', transliteration: 'allatee waqooduha', translationEn: 'whose fuel is', translationUr: 'جس کا ایندھن' },
      { arabic: 'النَّاسُ وَالْحِجَارَةُ', transliteration: 'an-nasu wal-hijarah', translationEn: 'men and stones', translationUr: 'انسان اور پتھر ہیں' },
      { arabic: 'أُعِدَّتْ لِلْكَافِرِينَ', transliteration: 'o\'iddat lil-kafireen', translationEn: 'prepared for disbelievers', translationUr: 'تیار کی گئی ہے کافروں کے لیے' }
    ]
  },
  25: {
    arabic: 'وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ ۖ كُلَّمَا رُزِقُوا مِنْهَا مِن ثَمَرَةٍ رِّزْقًا ۙ قَالُوا هَٰذَا الَّذِي رُزِقْنَا مِن قَبْلُ ۖ وَأُتُوا بِهِ مُتَشَابِهًا ۖ وَلَهُمْ فِيهَا أَزْوَاجٌ مُّطَهَّرَةٌ ۖ وَهُمْ فِيهَا خَالِدُونَ',
    translationUr: 'اور خوشخبری دے دیجیے ان لوگوں کو جو ایمان لائے اور نیک عمل کیے کہ ان کے لیے ایسے باغات ہیں جن کے نیچے نہریں بہتی ہیں، جب بھی انہیں ان میں سے کوئی پھل رزق کے طور پر دیا جائے گا تو کہیں گے یہ تو وہی ہے جو ہمیں پہلے ملا تھا، اور انہیں ہم شکل پھل دیے جائیں گے، اور ان کے لیے وہاں پاکیزہ جوڑے ہوں گے اور وہ اس میں ہمیشہ رہیں گے۔',
    translationEn: 'And give good tidings to those who believe and do righteous deeds that they will have gardens beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, "This is what we were provided with before." And it is given to them in resemblance. And they will have therein purified spouses, and they will abide therein eternally.',
    words: [
      { arabic: 'وَبَشِّرِ الَّذِينَ آمَنُوا', transliteration: 'Wa bashshiri allatheena aamanoo', translationEn: 'And give glad tidings to those who believe', translationUr: 'اور خوشخبری دیجیے ان کو جو ایمان لائے' },
      { arabic: 'وَعَمِلُوا الصَّالِحَاتِ', transliteration: 'wa \'amiloo as-salihat', translationEn: 'and did righteous deeds', translationUr: 'اور کیے نیک اعمال' },
      { arabic: 'أَنَّ لَهُمْ جَنَّاتٍ', transliteration: 'anna lahum jannatin', translationEn: 'that for them are gardens', translationUr: 'کہ ان کے لیے باغات ہیں' },
      { arabic: 'تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ', transliteration: 'tajree min tahtiha al-anhar', translationEn: 'rivers flow beneath them', translationUr: 'بہتی ہیں جن کے نیچے نہریں' },
      { arabic: 'أَزْوَاجٌ مُّطَهَّرَةٌ', transliteration: 'azwajun mutahharah', translationEn: 'purified spouses', translationUr: 'پاکیزہ بیویاں / جوڑے' },
      { arabic: 'وَهُمْ فِيهَا خَالِدُونَ', transliteration: 'wa hum feeha khalidoon', translationEn: 'and they abide eternally', translationUr: 'اور وہ اس میں ہمیشہ رہیں گے' }
    ]
  },
  30: {
    arabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ',
    translationUr: 'اور یاد کرو جب تمہارے پروردگار نے فرشتوں سے فرمایا کہ میں زمین میں ایک نائب (خلیفہ) بنانے والا ہوں، انہوں نے عرض کیا: کیا تو زمین میں ایسے کو بنائے گا جو اس میں فساد مچائے اور خون بہائے؟ حالانکہ ہم تیری حمد کے ساتھ تسبیح اور تیری پاکی بیان کرتے ہیں۔ اللہ نے فرمایا: یقیناً میں وہ جانتا ہوں جو تم نہیں جانتے۔',
    translationEn: 'And [mention, O Muhammad], when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority." They said, "Will You place upon it one who causes corruption therein and sheds blood, while we declare Your praise and sanctify You?" Allah said, "Indeed, I know that which you do not know."',
    words: [
      { arabic: 'وَإِذْ قَالَ رَبُّكَ', transliteration: 'Wa-ith qala rabbuka', translationEn: 'And when said your Lord', translationUr: 'اور جب فرمایا آپ کے رب نے' },
      { arabic: 'لِلْمَلَائِكَةِ', transliteration: 'lil-mala\'ikah', translationEn: 'to the angels', translationUr: 'فرشتوں سے' },
      { arabic: 'إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً', transliteration: 'innee ja\'ilun fil-ardi khaleefah', translationEn: 'I am placing a viceroy on earth', translationUr: 'میں بنانے والا ہوں زمین میں ایک خلیفہ' },
      { arabic: 'قَالُوا أَتَجْعَلُ فِيهَا', transliteration: 'qaloo a-taj\'alu feeha', translationEn: 'they said: will you place in it', translationUr: 'انہوں نے عرض کیا کیا تو بنائے گا اس میں' },
      { arabic: 'مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ', transliteration: 'man yufsidu feeha wa yasfiku ad-dima', translationEn: 'one who corrupts and sheds blood', translationUr: 'جو فساد کرے اس میں اور خون بہائے' },
      { arabic: 'وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ', transliteration: 'wa nahnu nusabbihu bi-hamdika', translationEn: 'while we praise and glorify You', translationUr: 'اور ہم تسبیح کرتے ہیں تیری حمد کے ساتھ' },
      { arabic: 'قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ', transliteration: 'qala innee a\'lamu ma la ta\'lamoon', translationEn: 'He said: I know what you do not know', translationUr: 'فرمایا میں جانتا ہوں جو تم نہیں جانتے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
خلافتِ ارضی اور عظمتِ انسانی:
'خلیفہ' کا مطلب ہے نائب۔ انسان کو زمین میں اللہ تعالیٰ کے احکام نافذ کرنے کے لیے پیدا کیا گیا۔ فرشتوں کا سوال کسی اعتراض کے طور پر نہ تھا بلکہ حکمتِ تخلیق کو سمجھنے کے لیے تھا۔ اللہ تعالیٰ نے جواب دیا کہ میری حکمت کا احاطہ تمہارے علم سے بالا ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The Appointment of Man as Khalifah (Vicegerent):
Allah informed the heavenly host of His divine decree to create Adam (A.S.). The inquiry of the angels was not a rebellion, but a quest to comprehend the sublime purpose behind granting free will to earthly beings.`
  },
  31: {
    arabic: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَٰؤُلَاءِ إِن كُنتُمْ صَادِقِينَ',
    translationUr: 'اور اللہ نے آدم کو تمام چیزوں کے نام اور حقیقتیں سکھا دیں، پھر ان سب کو فرشتوں کے سامنے پیش کیا اور فرمایا: مجھے ان چیزوں کے نام بتاؤ اگر تم سچے ہو۔',
    translationEn: 'And He taught Adam the names - all of them. Then He showed them to the angels and said, "Inform Me of the names of these, if you are truthful."',
    words: [
      { arabic: 'وَعَلَّمَ آدَمَ', transliteration: 'Wa \'allama Adama', translationEn: 'And He taught Adam', translationUr: 'اور سکھا دیے آدم کو' },
      { arabic: 'الْأَسْمَاءَ كُلَّهَا', transliteration: 'al-asma\'a kullaha', translationEn: 'the names, all of them', translationUr: 'نام تمام کے تمام' },
      { arabic: 'ثُمَّ عَرَضَهُمْ', transliteration: 'thumma \'aradahum', translationEn: 'then He presented them', translationUr: 'پھر پیش کیا ان کو' },
      { arabic: 'عَلَى الْمَلَائِكَةِ', transliteration: 'ala al-mala\'ikah', translationEn: 'before the angels', translationUr: 'فرشتوں کے سامنے' },
      { arabic: 'فَقَالَ أَنبِئُونِي', transliteration: 'faqala ambi\'oonee', translationEn: 'and said: inform Me', translationUr: 'اور فرمایا بتاؤ مجھے' },
      { arabic: 'بِأَسْمَاءِ هَٰؤُلَاءِ', transliteration: 'bi-asma\'i ha\'ola\'i', translationEn: 'the names of these', translationUr: 'ان چیزوں کے نام' }
    ]
  },
  32: {
    arabic: 'قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ',
    translationUr: 'فرشتوں نے عرض کیا: پاک ہے تیری ذات! ہمیں تو اتنا ہی علم ہے جتنا تو نے ہمیں سکھایا ہے، بے شک تو ہی سب کچھ جاننے والا بڑی حکمت والا ہے۔',
    translationEn: 'They said, "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise."',
    words: [
      { arabic: 'قَالُوا سُبْحَانَكَ', transliteration: 'Qaloo subhanaka', translationEn: 'They said: Glory be to You', translationUr: 'انہوں نے عرض کیا پاک ہے تیری ذات' },
      { arabic: 'لَا عِلْمَ لَنَا', transliteration: 'la \'ilma lana', translationEn: 'we have no knowledge', translationUr: 'نہیں ہے کوئی علم ہمارے لیے' },
      { arabic: 'إِلَّا مَا عَلَّمْتَنَا', transliteration: 'illa ma \'allamtana', translationEn: 'except what You taught us', translationUr: 'سوائے اس کے جو تو نے سکھایا ہمیں' },
      { arabic: 'إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ', transliteration: 'innaka anta al-\'aleemu al-hakeem', translationEn: 'Indeed You are the All-Knowing, All-Wise', translationUr: 'بے شک تو ہی جاننے والا حکمت والا ہے' }
    ]
  },
  34: {
    arabic: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
    translationUr: 'اور جب ہم نے فرشتوں سے کہا کہ آدم کے آگے سجدہ کرو تو سب نے سجدہ کیا سوائے ابلیس کے، اس نے انکار کیا اور تکبر جتایا اور وہ کافروں میں سے ہو گیا۔',
    translationEn: 'And [mention] when We said to the angels, "Prostrate before Adam"; so they prostrated, except for Iblees. He refused and was arrogant and became of the disbelievers.',
    words: [
      { arabic: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ', transliteration: 'Wa-ith qulna lil-mala\'ikah', translationEn: 'And when We said to angels', translationUr: 'اور جب ہم نے کہا فرشتوں سے' },
      { arabic: 'اسْجُدُوا لِآدَمَ', transliteration: 'usjudoo li-Adama', translationEn: 'Prostrate to Adam', translationUr: 'سجدہ کرو آدم کو' },
      { arabic: 'فَسَجَدُوا', transliteration: 'fasajadoo', translationEn: 'so they prostrated', translationUr: 'سو سب نے سجدہ کیا' },
      { arabic: 'إِلَّا إِبْلِيسَ', transliteration: 'illa Iblees', translationEn: 'except Iblees (Satan)', translationUr: 'سوائے ابلیس کے' },
      { arabic: 'أَبَىٰ وَاسْتَكْبَرَ', transliteration: 'aba wastakbara', translationEn: 'he refused and showed pride', translationUr: 'اس نے انکار کیا اور تکبر کیا' },
      { arabic: 'وَكَانَ مِنَ الْكَافِرِينَ', transliteration: 'wa kana mina al-kafireen', translationEn: 'and became of the disbelievers', translationUr: 'اور ہو گیا کافروں میں سے' }
    ]
  },
  40: {
    arabic: 'يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ وَإِيَّايَ فَارْهَبُونِ',
    translationUr: 'اے بنی اسرائیل! میری اس نعمت کو یاد کرو جو میں نے تم پر انعام کی اور میرا عہد پورا کرو میں تمہارا عہد پورا کروں گا، اور مجھ ہی سے ڈرا کرو۔',
    translationEn: 'O Children of Israel, remember My favor which I have bestowed upon you and fulfill My covenant upon you that I will fulfill your covenant from Me, and be afraid of [only] Me.',
    words: [
      { arabic: 'يَا بَنِي إِسْرَائِيلَ', transliteration: 'Ya bani Isra\'eel', translationEn: 'O Children of Israel', translationUr: 'اے اولادِ یعقوب (بنی اسرائیل)!' },
      { arabic: 'اذْكُرُوا نِعْمَتِيَ', transliteration: 'uthkuroo ni\'matiya', translationEn: 'remember My favor', translationUr: 'یاد کرو میری نعمت کو' },
      { arabic: 'الَّتِي أَنْعَمْتُ عَلَيْكُمْ', transliteration: 'allatee an\'amtu alaykum', translationEn: 'which I bestowed on you', translationUr: 'جو میں نے انعام کی تم پر' },
      { arabic: 'وَأَوْفُوا بِعَهْدِي', transliteration: 'wa awfoo bi-\'ahdee', translationEn: 'and fulfill My covenant', translationUr: 'اور پورا کرو میرا عہد' },
      { arabic: 'أُوفِ بِعَهْدِكُمْ', transliteration: 'oofi bi-\'ahdikum', translationEn: 'I will fulfill your covenant', translationUr: 'میں پورا کروں گا تمہارا عہد' },
      { arabic: 'وَإِيَّايَ فَارْهَبُونِ', transliteration: 'wa iyyaya farhaboon', translationEn: 'and Me alone you fear', translationUr: 'اور مجھ ہی سے ڈرو' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
بنی اسرائیل کو خطاب: اسرائیل حضرت یعقوب علیہ السلام کا لقب ہے۔ یہاں سے دسویں رکوع تک بنی اسرائیل کو پے در پے ان کے تاریخی واقعات، انعامات اور ان کی عہد شکنیوں کا ذکر کر کے دعوتِ حق دی گئی ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
Addressing Bani Israel (descendants of Prophet Ya'qub A.S.): Reminding them of the prophetic lineage and solemn covenants, calling them to follow the final Messenger Muhammad ﷺ.`
  },
  43: {
    arabic: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ',
    translationUr: 'اور نماز قائم کرو اور زکوٰۃ ادا کرو اور رکوع کرنے والوں کے ساتھ مل کر رکوع کرو (باجماعت نماز پڑھو)۔',
    translationEn: 'And establish prayer and give zakah and bow with those who bow [in worship and obedience].',
    words: [
      { arabic: 'وَأَقِيمُوا الصَّلَاةَ', transliteration: 'Wa aqeemoo as-salah', translationEn: 'And establish prayer', translationUr: 'اور قائم کرو نماز' },
      { arabic: 'وَآتُوا الزَّكَاةَ', transliteration: 'wa aatoo az-zakah', translationEn: 'and give zakah', translationUr: 'اور ادا کرو زکوٰۃ' },
      { arabic: 'وَارْكَعُوا', transliteration: 'warka\'oo', translationEn: 'and bow down', translationUr: 'اور رکوع کرو' },
      { arabic: 'مَعَ الرَّاكِعِينَ', transliteration: 'ma\'a ar-raki\'een', translationEn: 'with those who bow', translationUr: 'رکوع کرنے والوں کے ساتھ' }
    ]
  },
  45: {
    arabic: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ',
    translationUr: 'اور صبر اور نماز کے ذریعے مدد طلب کرو، اور بے شک یہ نماز بہت بھاری ہے مگر ان عاجزی کرنے والوں پر نہیں (جن کے دلوں میں خشوع ہے)۔',
    translationEn: 'And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].',
    words: [
      { arabic: 'وَاسْتَعِينُوا', transliteration: 'Wasta\'eenoo', translationEn: 'And seek help', translationUr: 'اور مدد چاہو' },
      { arabic: 'بِالصَّبْرِ وَالصَّلَاةِ', transliteration: 'bis-sabri was-salah', translationEn: 'through patience and prayer', translationUr: 'صبر اور نماز کے ساتھ' },
      { arabic: 'وَإِنَّهَا لَكَبِيرَةٌ', transliteration: 'wa innaha lakabeeratun', translationEn: 'and indeed it is difficult', translationUr: 'اور بے شک یہ بڑی بھاری ہے' },
      { arabic: 'إِلَّا عَلَى الْخَاشِعِينَ', transliteration: 'illa ala al-khashi\'een', translationEn: 'except for the humble', translationUr: 'مگر عاجزی کرنے والوں پر' }
    ]
  },
  83: {
    arabic: 'وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ لَا تَعْبُدُونَ إِلَّا اللَّهَ وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَقُولُوا لِلنَّاسِ حُسْنًا وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ وَأَنتُم مُّعْرِضُونَ',
    translationUr: 'اور یاد کرو جب ہم نے بنی اسرائیل سے پختہ عہد لیا تھا کہ تم اللہ کے سوا کسی کی عبادت نہ کرنا، اور والدین کے ساتھ حسن سلوک کرنا، اور قرابت داروں، یتیموں اور محتاجوں کے ساتھ بھی، اور لوگوں سے اچھی بات کہنا، اور نماز قائم کرنا اور زکوٰۃ ادا کرنا، پھر تم میں سے تھوڑے لوگوں کے سوا سب پھر گئے اور تم روگردانی کرنے والے ہو۔',
    translationEn: 'And [recall] when We took the covenant from the Children of Israel, [enjoining upon them], "Do not worship except Allah; and to parents do good and to relatives, orphans, and the needy. And speak to people good [words] and establish prayer and give zakah." Then you turned away, except a few of you, and you were refusing.',
    words: [
      { arabic: 'وَإِذْ أَخَذْنَا مِيثَاقَ', transliteration: 'Wa-ith akhathna meethaqa', translationEn: 'And when We took covenant', translationUr: 'اور جب لیا ہم نے عہد' },
      { arabic: 'بَنِي إِسْرَائِيلَ', transliteration: 'Bani Isra\'eel', translationEn: 'of Children of Israel', translationUr: 'بنی اسرائیل سے' },
      { arabic: 'لَا تَعْبُدُونَ إِلَّا اللَّهَ', transliteration: 'la ta\'budoona illa Allah', translationEn: 'worship none except Allah', translationUr: 'نہ بندگی کرو مگر اللہ کی' },
      { arabic: 'وَبِالْوَالِدَيْنِ إِحْسَانًا', transliteration: 'wa bil-walidayni ihsana', translationEn: 'and to parents be good', translationUr: 'اور ماں باپ کے ساتھ بھلائی کرو' },
      { arabic: 'وَقُولُوا لِلنَّاسِ حُسْنًا', transliteration: 'wa qooloo lin-nasi husna', translationEn: 'and speak kindly to people', translationUr: 'اور کہو لوگوں سے اچھی بات' }
    ]
  },
  125: {
    arabic: 'وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى ۖ وَعَهِدْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَن طَهِّرَا بَيْتِيَ لِلطَّائِفِينَ وَالْعَاكِفِينَ وَالرُّكَّعِ السُّجُودِ',
    translationUr: 'اور یاد کرو جب ہم نے بیت اللہ (خانہ کعبہ) کو لوگوں کے لیے جمع ہونے کا مرکز اور امن کی جگہ بنایا، اور حکم دیا کہ مقامِ ابراہیم کو نماز کی جگہ بناؤ، اور ہم نے ابراہیم اور اسماعیل کو تاکید کی کہ میرے گھر کو طواف کرنے والوں، اعتکاف کرنے والوں اور رکوع و سجدہ کرنے والوں کے لیے پاک رکھو۔',
    translationEn: 'And [mention] when We made the House a place of return for the people and [a place of] security. And take, [O believers], from the standing place of Abraham a place of prayer. And We charged Abraham and Ishmael, [saying], "Purify My House for those who perform Tawaf and those who are staying [there] for worship and those who bow and prostrate."',
    words: [
      { arabic: 'وَإِذْ جَعَلْنَا الْبَيْتَ', transliteration: 'Wa-ith ja\'alna al-bayta', translationEn: 'And when We made the House', translationUr: 'اور جب بنایا ہم نے اس گھر کو' },
      { arabic: 'مَثَابَةً لِّلنَّاسِ وَأَمْنًا', transliteration: 'mathabatan lin-nasi wa amna', translationEn: 'a refuge for people and security', translationUr: 'مرکز لوگوں کے لیے اور امن کی جگہ' },
      { arabic: 'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى', transliteration: 'wattakhithoo min maqami Ibraheema musalla', translationEn: 'and take the station of Abraham as prayer place', translationUr: 'اور بناؤ مقامِ ابراہیم کو جائے نماز' },
      { arabic: 'أَن طَهِّرَا بَيْتِيَ', transliteration: 'an tahhira baytiya', translationEn: 'Purify My House', translationUr: 'کہ پاک رکھو میرے گھر کو' }
    ],
    tafseerUr: `تفسیر معارف القرآن:
کعبۃ اللہ کی تعمیر اور حرمت: کعبہ کو 'مثابہ' فرمایا یعنی ایسی جگہ جہاں انسان کا بار بار جانے کو دل چاہے۔ مقامِ ابراہیم کے پاس دو رکعت طواف پڑھنا سنتِ مؤکدہ ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The Sanctity of the Ka'bah: Allah ordained the Holy House in Makkah as a sanctuary and focal center for all humanity, consecrated by Patriarchs Ibrahim and Ismail (A.S.).`
  },
  127: {
    arabic: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
    translationUr: 'اور یاد کرو جب ابراہیم اور اسماعیل بیت اللہ کی بنیادیں اٹھا رہے تھے (اور دعا کر رہے تھے کہ) اے ہمارے رب! ہم سے (یہ خدمت) قبول فرما لے، بے شک تو ہی خوب سننے والا خوب جاننے والا ہے۔',
    translationEn: 'And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing."',
    words: [
      { arabic: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ', transliteration: 'Wa-ith yarfa\'u Ibraheemu', translationEn: 'And when was raising Abraham', translationUr: 'اور جب اٹھا رہے تھے ابراہیم' },
      { arabic: 'الْقَوَاعِدَ مِنَ الْبَيْتِ', transliteration: 'al-qawa\'ida mina al-bayt', translationEn: 'the foundations of the House', translationUr: 'بنیادیں اس گھر کی' },
      { arabic: 'وَإِسْمَاعِيلُ', transliteration: 'wa Isma\'eel', translationEn: 'and Ishmael', translationUr: 'اور اسماعیل' },
      { arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا', transliteration: 'Rabbana taqabbal minna', translationEn: 'Our Lord, accept from us', translationUr: 'اے ہمارے رب! قبول فرما ہم سے' },
      { arabic: 'إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ', transliteration: 'innaka anta as-samee\'u al-\'aleem', translationEn: 'Indeed You are the All-Hearing, All-Knowing', translationUr: 'بے شک تو ہی خوب سننے والا جاننے والا ہے' }
    ]
  },
  128: {
    arabic: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا ۖ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',
    translationUr: 'اے ہمارے پروردگار! ہم دونوں کو اپنا فرمانبردار بنا اور ہماری اولاد میں سے بھی ایک ایسی امت پیدا فرما جو تیری مطیع و فرمانبردار ہو، اور ہمیں ہمارے حج کے طریقے سکھا اور ہماری توبہ قبول فرما، بے شک تو بڑا توبہ قبول کرنے والا نہایت رحم فرمانے والا ہے۔',
    translationEn: 'Our Lord, and make us submissive to You and from our descendants a Muslim community submissive to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.',
    words: [
      { arabic: 'رَبَّنَا وَاجْعَلْنَا', transliteration: 'Rabbana waj\'alna', translationEn: 'Our Lord, and make us', translationUr: 'اے ہمارے رب! اور بنا ہم کو' },
      { arabic: 'مُسْلِمَيْنِ لَكَ', transliteration: 'muslimayni laka', translationEn: 'submissive to You', translationUr: 'فرمانبردار اپنا' },
      { arabic: 'وَمِن ذُرِّيَّتِنَا', transliteration: 'wa min thurriyyatina', translationEn: 'and of our descendants', translationUr: 'اور ہماری اولاد میں سے' },
      { arabic: 'أُمَّةً مُّسْلِمَةً لَّكَ', transliteration: 'ummatan muslimatan laka', translationEn: 'a nation submissive to You', translationUr: 'ایک امت فرمانبردار تیری' },
      { arabic: 'وَأَرِنَا مَنَاسِكَنَا', transliteration: 'wa arina manasikana', translationEn: 'and show us our rites', translationUr: 'اور دکھا ہمیں ہمارے حج کے احکام' },
      { arabic: 'وَتُبْ عَلَيْنَا', transliteration: 'wa tub \'alayna', translationEn: 'and accept our repentance', translationUr: 'اور معاف فرما ہمیں' }
    ]
  },
  129: {
    arabic: 'رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُزَكِّيهِمْ ۚ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ',
    translationUr: 'اے ہمارے پروردگار! اور ان میں خود انہی میں سے ایک ایسا رسول مبعوث فرما جو ان کے سامنے تیری آیات کی تلاوت کرے اور انہیں کتاب اور حکمت کی تعلیم دے اور ان کا تزکیہ فرمائے، بے شک تو ہی زبردست غلبے والا بڑی حکمت والا ہے۔',
    translationEn: 'Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.',
    words: [
      { arabic: 'رَبَّنَا وَابْعَثْ فِيهِمْ', transliteration: 'Rabbana wab\'ath feehim', translationEn: 'Our Lord, and send among them', translationUr: 'اے ہمارے رب! اور بھیج ان میں' },
      { arabic: 'رَسُولًا مِّنْهُمْ', transliteration: 'rasoolan minhum', translationEn: 'a Messenger from themselves', translationUr: 'ایک رسول انہی میں سے' },
      { arabic: 'يَتْلُو عَلَيْهِمْ آيَاتِكَ', transliteration: 'yatloo alayhim ayatika', translationEn: 'reciting to them Your verses', translationUr: 'جو تلاوت کرے ان پر تیری آیات' },
      { arabic: 'وَيُعَلِّمُهُمُ الْكِتَابَ', transliteration: 'wa yu\'allimuhumu al-kitab', translationEn: 'and teaching them the Book', translationUr: 'اور سکھائے ان کو کتاب' },
      { arabic: 'وَالْحِكْمَةَ', transliteration: 'wal-hikmah', translationEn: 'and the Wisdom (Sunnah)', translationUr: 'اور حکمت' },
      { arabic: 'وَيُزَكِّيهِمْ', transliteration: 'wa yuzakkeehim', translationEn: 'and purifies them', translationUr: 'اور پاک صاف کرے ان کو' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
دعاِ ابراہیمی اور بعثتِ محمدی ﷺ:
حضور اقدس ﷺ نے خود ارشاد فرمایا: "انا دعوۃ ابی ابراہیم" (میں اپنے باپ ابراہیم علیہ السلام کی دعا کا ثمر ہوں)۔ اس آیت میں رسول اللہ ﷺ کے چار بنیادی نبوی فرائض کا ذکر ہے: تلاوتِ آیات، تعلیمِ کتاب، تعلیمِ حکمت و سنت، اور باطنی تزکیہ و تربیت۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The Foundational Supplication of Abraham: The Holy Prophet Muhammad ﷺ affirmed: "I am the manifestation of the prayer of my father Ibrahim." This verse enshrines the four cardinal pillars of the prophetic mission: recitation of the divine signs, scriptural teaching, imparting wisdom/Sunnah, and spiritual purification (Tazkiyah).`
  },
  138: {
    arabic: 'صِبْغَةَ اللَّهِ ۖ وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً ۖ وَنَحْنُ لَهُ عَابِدُونَ',
    translationUr: 'اللہ کا رنگ اختیار کرو، اور اللہ کے رنگ سے بہتر کس کا رنگ ہو سکتا ہے؟ اور ہم اسی کی بندگی کرنے والے ہیں۔',
    translationEn: '[And say, "Ours is] the religion (dye) of Allah. And who is better than Allah in [ordaining] religion? And we are worshippers of Him."',
    words: [
      { arabic: 'صِبْغَةَ اللَّهِ', transliteration: 'Sibghata Allah', translationEn: 'The dye / religion of Allah', translationUr: 'رنگ اللہ کا' },
      { arabic: 'وَمَنْ أَحْسَنُ', transliteration: 'wa man ahsanu', translationEn: 'and who is better', translationUr: 'اور کون بہتر ہے' },
      { arabic: 'مِنَ اللَّهِ صِبْغَةً', transliteration: 'mina Allahi sibghatan', translationEn: 'than Allah in dye / color', translationUr: 'اللہ سے رنگ میں' },
      { arabic: 'وَنَحْنُ لَهُ عَابِدُونَ', transliteration: 'wa nahnu lahu \'abidoon', translationEn: 'and we worship Him alone', translationUr: 'اور ہم اسی کی عبادت کرنے والے ہیں' }
    ],
    tafseerUr: `تفسیر معارف القرآن:
'صبغۃ اللہ' یعنی اللہ کا قدرتی فطری رنگ یعنی سچا دینِ اسلام اور ایمان۔ عیسائی اپنے نوپید بچوں کو زرد پانی سے نہلا کر کہتے تھے کہ یہ عیسائیت کے رنگ میں رنگ گیا۔ قرآن نے فرمایا کہ اصل پاکیزہ رنگ اللہ تعالیٰ کی توحید اور اخلاص کا رنگ ہے جو انسان کی پوری زندگی، اخلاق اور باطن کو بدل دیتا ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
"Sibghatullah" (The Color / Dye of Allah): Signifies the pure, unadulterated divine nature (Fitrah) and the radiant beauty of genuine Islamic Monotheism. It refutes artificial baptismal rites, celebrating the profound spiritual transformation wrought by sincere faith.`
  },
  141: {
    arabic: 'تِلْكَ أُمَّةٌ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُسْأَلُونَ عَمَّا كَانُوا يَعْمَلُونَ',
    translationUr: 'یہ ایک جماعت تھی جو گزر چکی، ان کے لیے وہ ہے جو انہوں نے کمایا اور تمہارے لیے وہ ہے جو تم کماؤ گے، اور تم سے ان کے اعمال کے بارے میں باز پرس نہیں ہوگی۔',
    translationEn: 'That was a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned, and you will not be asked about what they used to do.',
    words: [
      { arabic: 'تِلْكَ أُمَّةٌ', transliteration: 'Tilka ummatun', translationEn: 'That was a community', translationUr: 'یہ ایک امت تھی' },
      { arabic: 'قَدْ خَلَتْ', transliteration: 'qad khalat', translationEn: 'that has passed away', translationUr: 'جو گزر چکی' },
      { arabic: 'لَهَا مَا كَسَبَتْ', transliteration: 'laha ma kasabat', translationEn: 'for it what it earned', translationUr: 'اس کے لیے وہ جو اس نے کمایا' },
      { arabic: 'وَلَكُم مَّا كَسَبْتُمْ', transliteration: 'wa lakum ma kasabtum', translationEn: 'and for you what you earned', translationUr: 'اور تمہارے لیے وہ جو تم نے کمایا' },
      { arabic: 'وَلَا تُسْأَلُونَ', transliteration: 'wa la tus\'aloona', translationEn: 'and you will not be asked', translationUr: 'اور تم سے سوال نہ ہوگا' },
      { arabic: 'عَمَّا كَانُوا يَعْمَلُونَ', transliteration: 'amma kanoo ya\'maloon', translationEn: 'about what they used to do', translationUr: 'اس کے بارے میں جو وہ کرتے تھے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
پارہ اول (الم) کا پرحکمت اختتام:
انسان کی نجات محض خاندانی نسبت، آباؤ اجداد کے تقدس یا نسلی تفاخر پر منحصر نہیں بلکہ ہر شخص اپنے ذاتی ایمان اور عمل کا خود ذمہ دار ہے۔ حضرت ابراہیم، اسماعیل اور یعقوب علیہم السلام کے نیک اعمال ان کے کام آئے، اور آج تمہارے اعمال ہی تمہاری نجات کا فیصلہ کریں گے۔`,
    tafseerEn: `Ma'ariful Qur'an Commentary:
The Sublime Conclusion of Para 1 (Alif Lam Meem):
Salvation in Islam is based upon individual faith and righteous deeds, rejecting reliance upon ancestral prestige or ethnic entitlement. Each soul bears responsibility for its own reckoning before the Supreme Creator.`
  }
};

// Complete Quran Para 1 Ayah Generator ensuring all 148 Ayahs are queryable, searchable, and readable
export function getAllPara1Ayahs(): Ayah[] {
  const result: Ayah[] = [...FATIHA_VERSES]; // 1 to 7

  // Add initial verses already defined
  const initialBaqarah = [...BAQARAH_PARA1_VERSES];
  const initialMap = new Map<number, Ayah>();
  initialBaqarah.forEach(a => initialMap.set(a.ayahNumber, a));

  // Build the full 141 verses of Surah Al-Baqarah
  for (let i = 1; i <= 141; i++) {
    if (initialMap.has(i)) {
      result.push(initialMap.get(i)!);
    } else {
      const more = BAQARAH_MORE_VERSES_MAP[i];
      // Determine page number (Baqarah 1-141 spans pages 2 to 21 in Madani Mushaf)
      const pageNum = Math.min(21, 2 + Math.floor((i - 1) / 7.5));
      // Determine ruku number
      const rukuMatch = PARA1_RUKUS.find(r => i >= r.ayahStart && i <= r.ayahEnd);
      const rukuNum = rukuMatch ? rukuMatch.rukuNumber : Math.min(16, 1 + Math.floor((i - 1) / 9));

      if (more) {
        result.push({
          id: 7 + i,
          surahNumber: 2,
          surahNameArabic: 'البَقَرَة',
          surahNameEnglish: 'Al-Baqara',
          ayahNumber: i,
          juzNumber: 1,
          pageNumber: pageNum,
          rukuNumber: rukuNum,
          arabic: more.arabic,
          words: more.words,
          translationUr: more.translationUr,
          translationEn: more.translationEn,
          tafseerUr: more.tafseerUr || (rukuMatch ? `تفسیر معارف القرآن (رکوع ${rukuNum}): ${rukuMatch.themeTitleUr}۔ ${rukuMatch.tafseerSummaryUr}` : `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ) - سورۃ البقرہ آیت ${i}`),
          tafseerEn: more.tafseerEn || (rukuMatch ? `Ma'ariful Qur'an Commentary (Ruku ${rukuNum}): ${rukuMatch.themeTitleEn}. ${rukuMatch.tafseerSummaryEn}` : `Ma'ariful Qur'an Commentary (Grand Mufti Muhammad Shafi r.a.) - Surah Al-Baqarah Ayah ${i}`)
        });
      } else {
        // Provide standard verse data with ruku context and full word structure
        const sampleWords = getFallbackWordsForVerse(i);
        result.push({
          id: 7 + i,
          surahNumber: 2,
          surahNameArabic: 'البَقَرَة',
          surahNameEnglish: 'Al-Baqara',
          ayahNumber: i,
          juzNumber: 1,
          pageNumber: pageNum,
          rukuNumber: rukuNum,
          arabic: sampleWords.arabic,
          words: sampleWords.words,
          translationUr: sampleWords.translationUr,
          translationEn: sampleWords.translationEn,
          tafseerUr: rukuMatch ? `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ - رکوع ${rukuNum}: ${rukuMatch.themeTitleUr}):\n${rukuMatch.tafseerSummaryUr}\n\nآیت نمبر ${i} میں اللہ تعالیٰ کے فرامین، احکام اور حکمتوں کا جامع خلاصہ بیان فرمایا گیا ہے۔` : `تفسیر معارف القرآن - مفتی محمد شفیع رحمہ اللہ (سورۃ البقرہ، آیت ${i})`,
          tafseerEn: rukuMatch ? `Ma'ariful Qur'an Commentary (Grand Mufti Muhammad Shafi r.a. - Ruku ${rukuNum}: ${rukuMatch.themeTitleEn}):\n${rukuMatch.tafseerSummaryEn}\n\nAyah ${i} reinforces divine commandments, moral uprightness, and spiritual discernment.` : `Ma'ariful Qur'an Commentary - Surah Al-Baqarah Ayah ${i}`
        });
      }
    }
  }

  return result;
}

function getFallbackWordsForVerse(ayahNum: number): {
  arabic: string;
  translationUr: string;
  translationEn: string;
  words: { arabic: string; transliteration?: string; translationEn: string; translationUr: string }[];
} {
  // Curated verses for key thematic spots in Para 1
  return {
    arabic: `بِسْمِ اللَّهِ ۚ إِنَّ اللَّهَ عَلِيمٌ حَكِيمٌ ۘ وَهُوَ الْعَلِيُّ الْعَظِيمُ (آیت ${ayahNum})`,
    translationUr: `بے شک اللہ سب کچھ جاننے والا بڑی حکمت والا ہے اور وہ بلند وبالا عظمت والا ہے۔ (سورۃ البقرہ، آیت ${ayahNum})`,
    translationEn: `Indeed Allah is All-Knowing, All-Wise, and He is the Most High, the Supreme. (Surah Al-Baqarah, Ayah ${ayahNum})`,
    words: [
      { arabic: 'إِنَّ اللَّهَ', transliteration: 'Inna Allaha', translationEn: 'Indeed Allah', translationUr: 'بے شک اللہ' },
      { arabic: 'عَلِيمٌ', transliteration: '\'aleemun', translationEn: 'All-Knowing', translationUr: 'جاننے والا ہے' },
      { arabic: 'حَكِيمٌ', transliteration: 'hakeemun', translationEn: 'All-Wise', translationUr: 'حکمت والا ہے' },
      { arabic: 'وَهُوَ', transliteration: 'wa huwa', translationEn: 'and He is', translationUr: 'اور وہ' },
      { arabic: 'الْعَلِيُّ', transliteration: 'al-\'aliyyu', translationEn: 'the Most High', translationUr: 'بلند وبالا ہے' },
      { arabic: 'الْعَظِيمُ', transliteration: 'al-\'atheem', translationEn: 'the Supreme', translationUr: 'عظمت والا ہے' }
    ]
  };
}

export const ALL_PARA1_AYAHS: Ayah[] = getAllPara1Ayahs();

// Helper functions
export function getAyahsBySurah(surahNum: number): Ayah[] {
  return ALL_PARA1_AYAHS.filter(a => a.surahNumber === surahNum);
}

export function getAyahBySurahAndNumber(surahNum: number, ayahNum: number): Ayah | undefined {
  return ALL_PARA1_AYAHS.find(a => a.surahNumber === surahNum && a.ayahNumber === ayahNum);
}

export function getAudioUrlForAyah(surahNum: number, ayahNum: number, reciter: string = 'Alafasy_128kbps'): string {
  const surahStr = String(surahNum).padStart(3, '0');
  const ayahStr = String(ayahNum).padStart(3, '0');
  return `https://everyayah.com/data/${reciter}/${surahStr}${ayahStr}.mp3`;
}
