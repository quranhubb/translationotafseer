// Comprehensive Tafseer & Verse Analysis for Para 2 (Surah Al-Baqarah Verses 142 to 163)
// Based on Tafseer Maarif-ul-Quran (Grand Mufti Muhammad Shafi رحمہ اللہ) and classical exegesis

export interface Para2AyahDetail {
  arabic: string;
  translationUr: string;
  translationEn: string;
  words: { arabic: string; transliteration?: string; translationEn: string; translationUr: string }[];
  tafseerUr: string;
  tafseerEn: string;
}

export const PARA2_VERSES_PART1: Record<number, Para2AyahDetail> = {
  142: {
    arabic: '۞ سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ مَا وَلَّاهُمْ عَن قِبْلَتِهِمُ الَّتِي كَانُوا عَلَيْهَا ۚ قُل لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
    translationUr: 'عنقریب نادان لوگ کہیں گے کہ ان (مسلمانوں) کو ان کے اس قبلہ سے کس چیز نے پھیر دیا جس پر وہ پہلے تھے؟ آپ فرما دیجیے کہ مشرق اور مغرب سب اللہ ہی کے ہیں، وہ جسے چاہتا ہے صراطِ مستقیم کی ہدایت عطا فرماتا ہے۔',
    translationEn: 'The foolish among the people will say, "What has turned them away from their Qiblah which they used to face?" Say, "To Allah belongs the east and the west. He guides whom He wills to a straight path."',
    words: [
      { arabic: '۞ سَيَقُولُ', transliteration: 'Sayaqoolu', translationEn: 'Will say', translationUr: 'عنقریب کہیں گے' },
      { arabic: 'السُّفَهَاءُ', transliteration: 'as-sufaha\'u', translationEn: 'the foolish', translationUr: 'بے وقوف و نادان لوگ' },
      { arabic: 'مِنَ النَّاسِ', transliteration: 'mina an-nas', translationEn: 'among the people', translationUr: 'لوگوں میں سے' },
      { arabic: 'مَا وَلَّاهُمْ', transliteration: 'ma wallahum', translationEn: 'What has turned them', translationUr: 'کس چیز نے پھیر دیا ان کو' },
      { arabic: 'عَن قِبْلَتِهِمُ', transliteration: '\'an qiblatihimu', translationEn: 'from their Qiblah', translationUr: 'ان کے قبلہ سے' },
      { arabic: 'الَّتِي كَانُوا عَلَيْهَا', transliteration: 'allatee kanoo \'alayha', translationEn: 'which they used to face', translationUr: 'جس پر وہ پہلے قائم تھے' },
      { arabic: 'قُل لِّلَّهِ', transliteration: 'Qul lillahi', translationEn: 'Say: To Allah belongs', translationUr: 'آپ فرما دیجیے: اللہ ہی کی ملکیت ہے' },
      { arabic: 'الْمَشْرِقُ وَالْمَغْرِبُ', transliteration: 'al-mashriqu wal-maghrib', translationEn: 'the east and the west', translationUr: 'مشرق اور مغرب' },
      { arabic: 'يَهْدِي مَن يَشَاءُ', transliteration: 'yahdee man yasha\'u', translationEn: 'He guides whom He wills', translationUr: 'وہ ہدایت دیتا ہے جسے چاہتا ہے' },
      { arabic: 'إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ', transliteration: 'ila siratin mustaqeem', translationEn: 'to a straight path', translationUr: 'سیدھے راستے کی طرف' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۲ - تحویلِ قبلہ کا پس منظر اور نادانوں کے اعتراضات کا رد

۱. تحویلِ قبلہ کی تاریخی حقیقت:
ہجرتِ مدینہ کے بعد تقریباً ۱۶ یا ۱۷ ماہ تک رسول اللہ ﷺ اور صحابہ کرام بیت المقدس (مسجدِ اقصیٰ) کی طرف رخ کر کے نماز ادا فرماتے رہے۔ رسول اللہ ﷺ کے دل میں حضرت ابراہیم علیہ السلام کے تعمیر کردہ کعبہ کی طرف رخ کرنے کی شدید قلبی تمنا تھی، کیونکہ کعبہ تمام انسانیت کا اولین عبادت خانہ تھا۔

۲. غیب کی پیشین گوئی اور مخالفین کا رد:
اللہ تعالیٰ نے واقعہ رونما ہونے سے قبل ہی لفظ 'سَيَقُولُ' (عنقریب کہیں گے) فرما کر اپنے حبیب ﷺ کو باخبر فرما دیا کہ جب قبلہ تبدیل ہوگا تو یہود، مشرکین اور منافقین چہ مگوئیاں کریں گے۔ قرآن نے ان معترضین کو 'السفھاء' (بے وقوف اور نادان) قرار دیا کیونکہ وہ یہ نہیں سمجھتے کہ اصل تقدس کسی مٹی یا پتھر کی جہت کا نہیں بلکہ اللہ جل شانہ کے حکم کا ہے۔

۳. "قُل لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ" کی بلاغت:
تمام سمتیں (مشرق، مغرب، شمال، جنوب) اللہ کی پیدا کردہ ہیں اور کسی سمت کی اپنی کوئی ذاتی خدائی نہیں ہے۔ جس وقت اللہ نے بیت المقدس کی طرف رخ کرنے کا حکم دیا تو وہی اطاعت تھی، اور جب کعبہ کی طرف رخ کرنے کا حکم دیا تو وہی حق بن گیا۔ مومن کا کام کسی سمت کی پرستش نہیں بلکہ رب العالمین کے امر کی کامل پیروی ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 142 - The Historic Reorientation of the Qiblah and the Preemptive Refutation of Skeptics

1. Historical Background of Tahweel al-Qiblah:
Following the Hijrah (emigration) to Madinah, the Holy Prophet ﷺ and the nascent Muslim community prayed towards Bayt al-Maqdis (Jerusalem) for roughly sixteen to seventeen months. However, the Prophet's ﷺ heart deeply longed to face the ancient sanctuary of the Ka'bah in Makkah, built by his forefather Ibrahim (A.S.).

2. The Miraculous Preemptive Prophecy:
Using the future prefix "Sayaqool" ("Soon will say"), the Qur'an accurately prophesied the cynical reactions of the Jewish rabbis, hypocrites, and pagan critics before the command was even publicly promulgated. The Almighty labels these critics "al-Sufaha'" (the foolish and spiritually short-sighted) because they conflated geographical orientation with intrinsic divinity.

3. "To Allah belongs the East and the West":
Divine spatial sovereignty is absolute. No direction possesses inherent sanctity apart from the divine command. When Allah ordained Jerusalem, obedience to Him lay there; when He ordained the Ka'bah, obedience transitioned thither. The believer's duty is unconditional submission to the Creator, not fixation on cardinal points.`
  },

  143: {
    arabic: 'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِي كُنتَ عَلَيْهَا إِلَّا لِنَعْلَمَ مَن يَتَّبِعُ الرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِن كَانَتْ لَكَبِيرَةً إِلَّا عَلَى الَّذِينَ هَدَى اللَّهُ ۗ وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ ۚ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَّحِيمٌ',
    translationUr: 'اور اسی طرح ہم نے تمہیں ایک معتدل اور بہترین امت بنایا تاکہ تم تمام لوگوں پر گواہ بنو اور یہ رسول (ﷺ) تم پر گواہ بنیں، اور آپ جس قبلہ پر پہلے تھے ہم نے اسے صرف اس لیے مقرر کیا تھا تاکہ ہم جان لیں کہ کون رسول کی پیروی کرتا ہے اور کون الٹے پاؤں پھر جاتا ہے، اور یہ بات بہت بھاری تھی مگر ان پر نہیں جنہیں اللہ نے ہدایت دی، اور اللہ تمہارے ایمان (بیت المقدس کی طرف پڑھی گئی نمازوں) کو ہرگز ضائع نہیں کرے گا، بے شک اللہ لوگوں پر بہت مہربان، نہایت رحم فرمانے والا ہے۔',
    translationEn: 'And thus We have made you a just, balanced community that you will be witnesses over the people and the Messenger will be a witness over you. And We did not make the Qiblah which you used to face except that We might make evident who would follow the Messenger from who would turn back on his heels. And indeed, it was difficult except for those whom Allah has guided. And never would Allah allow your faith to be lost. Indeed Allah is, to the people, Kind and Merciful.',
    words: [
      { arabic: 'وَكَذَٰلِكَ', transliteration: 'Wa kathalika', translationEn: 'And thus', translationUr: 'اور اسی طرح' },
      { arabic: 'جَعَلْنَاكُمْ', transliteration: 'ja\'alnakum', translationEn: 'We have made you', translationUr: 'ہم نے تمہیں بنایا' },
      { arabic: 'أُمَّةً وَسَطًا', transliteration: 'ummatan wasatan', translationEn: 'a just/balanced community', translationUr: 'ایک معتدل و بہترین امت' },
      { arabic: 'لِّتَكُونُوا شُهَدَاءَ', transliteration: 'litakoonoo shuhada\'a', translationEn: 'that you will be witnesses', translationUr: 'تاکہ تم گواہ بنو' },
      { arabic: 'عَلَى النَّاسِ', transliteration: '\'ala an-nas', translationEn: 'over the people', translationUr: 'تمام انسانوں پر' },
      { arabic: 'وَيَكُونَ الرَّسُولُ', transliteration: 'wa yakuna ar-rasoolu', translationEn: 'and the Messenger will be', translationUr: 'اور ہوں رسول (ﷺ)' },
      { arabic: 'عَلَيْكُمْ شَهِيدًا', transliteration: '\'alaykum shaheeda', translationEn: 'a witness over you', translationUr: 'تم پر گواہ' },
      { arabic: 'وَمَا كَانَ اللَّهُ', transliteration: 'wa ma kana Allahu', translationEn: 'And never would Allah', translationUr: 'اور اللہ کی یہ شان نہیں کہ' },
      { arabic: 'لِيُضِيعَ إِيمَانَكُمْ', transliteration: 'liyudee\'a eemanakum', translationEn: 'let your faith/prayers be lost', translationUr: 'ضائع کرے تمہارے ایمان (نمازوں) کو' },
      { arabic: 'إِنَّ اللَّهَ بِالنَّاسِ', transliteration: 'inna Allaha bin-nasi', translationEn: 'Indeed Allah to people is', translationUr: 'بے شک اللہ لوگوں پر' },
      { arabic: 'لَرَءُوفٌ رَّحِيمٌ', transliteration: 'lara\'oofun raheem', translationEn: 'Full of Kindness, Most Merciful', translationUr: 'بہت شفقت فرمانے والا، نہایت رحم والا ہے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۳ - امتِ وسط کا مقام اور آزمائشِ قبلہ

۱. "أُمَّةً وَسَطًا" کا عمیق مفہوم:
عربی لغت میں 'وسط' کے معنی عدل، اعتدال، توازن اور بہترین درجے کے ہیں۔ امتِ محمدیہ کو 'امتِ وسط' اس لیے فرمایا گیا کہ:
- عقائد میں: یہ نہ تو یہود کی طرح انبیاء کی گستاخی اور تکذیب کرتی ہے، اور نہ عیسائیوں کی طرح کسی نبی کو خدا کا بیٹا بنا کر شرک میں مبتلا ہوتی ہے، بلکہ توحیدِ خالص اور تمام انبیاء کے ادب پر قائم ہے۔
- اخلاق و اعمال میں: نہ رہبانیت کی انتہا پسندی اختیار کرتی ہے اور نہ مادہ پرستی کی دلدل میں گرتی ہے۔

۲. قیامت کے روز عالمی شہادت:
حدیث شریف میں آتا ہے کہ قیامت کے دن جب سابقہ امتیں اپنے انبیاء کی تبلیغ کا انکار کریں گی تو امتِ محمدیہ بارگاہِ الٰہی میں قرآن کی بنیاد پر گواہی دے گی کہ تمام انبیاء نے حق پہنچا دیا تھا۔ پھر رسول اللہ ﷺ اپنی امت کی عدالت و صداقت کی تصدیق فرمائیں گے۔

۳. "وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ":
تحویلِ قبلہ کے بعد صحابہ کرام کے دل میں کھٹک پیدا ہوئی کہ جو مخلص مسلمان اس حکم سے قبل بیت المقدس کی طرف نماز پڑھتے ہوئے وفات پا گئے کیا ان کی عبادات ضائع ہو گئیں؟ قرآن نے نماز کو 'ایمان' کے مبارک لفظ سے تعبیر کر کے واضح فرمایا کہ اللہ تعالیٰ کسی خلوص والی عبادت کو ہرگز رائیگاں نہیں کرتا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 143 - The Doctrine of Ummatan Wasata (The Balanced Nation) and Divine Trial

1. The Theological Meaning of "Ummatan Wasata":
Linguistically, 'Wasat' signifies the golden mean, absolute equity, and supreme excellence. The Muslim Ummah is crowned as the "Middle Nation" because:
- In Theology: It avoids the irreverence of the Jews (who slew prophets) and the theological excess of the Christians (who deified Jesus), adhering strictly to pure Monotheism (Tawhid).
- In Ethics: It rejects monastic withdrawal from the world as well as hedonistic materialism, balancing worldly responsibilities with transcendent spirituality.

2. Universal Witness on the Day of Resurrection:
As recorded in authentic Hadith collections, when previous nations falsely claim their messengers never brought them divine guidance, this Ummah will stand as truthful witnesses based upon Qur'anic testimony, and the Prophet Muhammad ﷺ will testify to the integrity and veracity of his Ummah.

3. "Never would Allah allow your faith to be lost":
When the Qiblah shifted, believers worried about the reward of deceased brethren who had prayed towards Jerusalem. In response, the verse refers to their past Salah as "Iman" (Faith), underscoring that every prayer offered in obedience was fully accepted and rewarded.`
  },

  144: {
    arabic: 'قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ ۗ وَإِنَّ الَّذِينَ أُوتُوا الْكِتَابَ لَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِن رَّبِّهِمْ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا يَعْمَلُونَ',
    translationUr: 'ہم بار بار آپ کے چہرے کا آسمان کی طرف اٹھنا دیکھ رہے ہیں، پس ہم ضرور آپ کو اس قبلہ کی طرف پھیر دیں گے جسے آپ پسند فرماتے ہیں، سو اب اپنا رخ مسجدِ حرام کی طرف پھیر لیجیے، اور (اے مسلمانو!) تم جہاں کہیں بھی ہو اپنے چہرے اسی کی طرف پھیرا کرو، اور یقیناً اہلِ کتاب خوب جانتے ہیں کہ یہ ان کے رب کی طرف سے برحق ہے، اور اللہ ان کے کرتوتوں سے بے خبر نہیں ہے۔',
    translationEn: 'We have certainly seen the turning of your face toward the heaven, and We will surely turn you to a Qiblah with which you will be pleased. So turn your face toward the Sacred Mosque. And wherever you are, turn your faces toward it [in prayer]. Indeed, those who were given the Scripture well know that it is the truth from their Lord. And Allah is not unaware of what they do.',
    words: [
      { arabic: 'قَدْ نَرَىٰ', transliteration: 'Qad nara', translationEn: 'We certainly see', translationUr: 'ہم بار بار دیکھ رہے ہیں' },
      { arabic: 'تَقَلُّبَ وَجْهِكَ', transliteration: 'taqalluba wajhika', translationEn: 'turning of your face', translationUr: 'آپ کے رخِ انور کا پلٹنا' },
      { arabic: 'فِي السَّمَاءِ', transliteration: 'fis-sama\'i', translationEn: 'toward heaven', translationUr: 'آسمان کی جانب' },
      { arabic: 'فَلَنُوَلِّيَنَّكَ', transliteration: 'falanuwalliyannaka', translationEn: 'so We will surely turn you', translationUr: 'سو ہم ضرور پھیر دیں گے آپ کو' },
      { arabic: 'قِبْلَةً تَرْضَاهَا', transliteration: 'qiblatan tardaha', translationEn: 'to a Qiblah you are pleased with', translationUr: 'اس قبلہ کی طرف جسے آپ پسند فرماتے ہیں' },
      { arabic: 'فَوَلِّ وَجْهَكَ', transliteration: 'fawalli wajhaka', translationEn: 'So turn your face', translationUr: 'پس آپ اپنا رخ پھیر لیجیے' },
      { arabic: 'شَطْرَ الْمَسْجِدِ الْحَرَامِ', transliteration: 'shatra al-masjidil-haram', translationEn: 'toward the Sacred Mosque', translationUr: 'مسجدِ حرام کی طرف' },
      { arabic: 'وَحَيْثُ مَا كُنتُمْ', transliteration: 'wa haythu ma kuntum', translationEn: 'and wherever you may be', translationUr: 'اور تم جہاں کہیں بھی ہو' },
      { arabic: 'فَوَلُّوا وُجُوهَكُمْ', transliteration: 'fawalloo wujoohakum', translationEn: 'turn your faces', translationUr: 'اپنے چہرے پھیر لو' },
      { arabic: 'شَطْرَهُ', transliteration: 'shatrahu', translationEn: 'toward it', translationUr: 'اسی کی طرف' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۴ - ادبِ نبوی اور مقامِ محبوبیت

۱. حضور ﷺ کا ادب اور اشتیاقِ وحی:
حضور نبی کریم ﷺ کعبہ کو قبلہ بنانا چاہتے تھے کیونکہ وہ حضرت ابراہیم علیہ السلام کا تعمیر کردہ پہلا گھر تھا۔ تاہم آپ ﷺ نے اپنے کمالِ ادب اور تسلیم و رضا کی بنا پر زبانِ مبارک سے کوئی دعا یا تقاضا نہیں کیا، بلکہ اشتیاق کے عالم میں بار بار اپنی مبارک آنکھیں اور چہرہ آسمان کی طرف اٹھاتے تھے کہ شاید جبرائیل امین یہ بشارت لے کر اتریں۔

۲. "فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا" کی شان:
اللہ تعالیٰ نے اپنے حبیب ﷺ کی اس خاموش آرزو کی ایسی قدر افزائی فرمائی کہ فرمایا: "پس ہم ضرور آپ کو اس قبلہ کی طرف پھیر دیں گے جسے آپ پسند فرماتے ہیں!" یہ آیت مقامِ محبوبیتِ مصطفیٰ ﷺ کی روشن ترین دلیل ہے کہ رب تعالیٰ نے اپنے رسول کی قلبی خوشی کا کیسا بے نظیر اکرام فرمایا۔

۳. فقہی حکم اور کعبہ کی سمت:
لفظ 'شطر' کے معنی 'سمت اور جہت' کے ہیں۔ فقہائے کرام نے اس سے استنباط فرمایا ہے کہ جو شخص مسجدِ حرام کے اندر ہو اس کے لیے عینِ کعبہ کی طرف رخ کرنا فرض ہے، اور جو کعبہ سے دور ہو اس کے لیے کعبہ کی عمومی سمت (جہتِ کعبہ) کی طرف رخ کرنا نماز کی درستگی کے لیے کافی ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 144 - Prophetic Etiquette and Divine Elevation of the Prophet's Pleasure

1. Sublime Etiquette of the Prophet ﷺ:
The Prophet ﷺ yearned for the Ka'bah to be restored as the Qiblah because it was consecrated by Ibrahim (A.S.). Yet, out of transcendent modesty and total surrender to divine wisdom, he never verbally uttered a request; he merely cast his eyes towards the heavens awaiting Jibreel.

2. "A Qiblah With Which You Will Be Pleased":
The Almighty honored this unspoken yearning with exquisite tenderness: "We will surely turn you to a Qiblah with which you will be pleased." Scholars note that this verse showcases the immense love Allah possesses for His Final Messenger ﷺ, orchestrating universal cosmic decrees to bring delight to the Prophet's heart.

3. Jurisprudential Meaning of "Shatr":
Linguistically, 'Shatr' signifies direction. Classical jurists derive from this that while praying inside Masjid al-Haram requires exact visual alignment with the physical Ka'bah, praying from afar anywhere on earth requires facing the general cardinal orientation (Jihat al-Ka'bah).`
  },

  145: {
    arabic: 'وَلَئِنْ أَتَيْتَ الَّذِينَ أُوتُوا الْكِتَابَ بِكُلِّ آيَةٍ مَّا تَبِعُوا قِبْلَتَكَ ۚ وَمَا أَنتَ بِتَابِعٍ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُم بِتَابِعٍ قِبْلَةَ بَعْضٍ ۚ وَلَئِنِ اتَّبَعْتَ أَهْوَاءَهُم مِّن بَعْدِ مَا جَاءَكَ مِنَ الْعِلْمِ ۙ إِنَّكَ إِذًا لَّمِنَ الظَّالِمِينَ',
    translationUr: 'اور اگر آپ اہلِ کتاب کے پاس ہر قسم کی نشانی اور دلیل بھی لے آئیں تب بھی وہ آپ کے قبلہ کی پیروی نہیں کریں گے، اور نہ آپ ان کے قبلہ کی پیروی کرنے والے ہیں، اور نہ ان میں سے بعض دوسرے بعض کے قبلہ کے پیروکار ہیں، اور اگر آپ نے اس علم کے بعد جو آپ کے پاس آ چکا ہے ان کی خواہشات کی پیروی کی تو یقیناً آپ اس وقت ناانصافی کرنے والوں میں سے ہوں گے۔',
    translationEn: 'And if you should bring to those who were given the Scripture every sign, they would not follow your Qiblah. Nor will you be a follower of their Qiblah. Nor would they be followers of one another\'s Qiblah. And if you were to follow their desires after what has come to you of knowledge, indeed, you would then be among the wrongdoers.',
    words: [
      { arabic: 'وَلَئِنْ أَتَيْتَ', transliteration: 'Wa la\'in atayta', translationEn: 'And if you brought', translationUr: 'اور اگر آپ لے آئیں' },
      { arabic: 'الَّذِينَ أُوتُوا الْكِتَابَ', transliteration: 'allatheena ootoo al-kitaba', translationEn: 'those given the Scripture', translationUr: 'ان لوگوں کے پاس جنہیں کتاب دی گئی' },
      { arabic: 'بِكُلِّ آيَةٍ', transliteration: 'bikulli ayatin', translationEn: 'with every sign', translationUr: 'ہر قسم کی نشانی' },
      { arabic: 'مَّا تَبِعُوا', transliteration: 'ma tabi\'oo', translationEn: 'they would not follow', translationUr: 'وہ پیروی نہیں کریں گے' },
      { arabic: 'قِبْلَتَكَ', transliteration: 'qiblataka', translationEn: 'your Qiblah', translationUr: 'آپ کے قبلہ کی' },
      { arabic: 'وَمَا أَنتَ بِتَابِعٍ', transliteration: 'wa ma anta bitabi\'in', translationEn: 'nor will you follow', translationUr: 'اور نہ آپ پیروی کرنے والے ہیں' },
      { arabic: 'قِبْلَتَهُمْ', transliteration: 'qiblatahum', translationEn: 'their Qiblah', translationUr: 'ان کے قبلہ کی' },
      { arabic: 'مِّن بَعْدِ مَا جَاءَكَ', transliteration: 'min ba\'di ma ja\'aka', translationEn: 'after what came to you', translationUr: 'اس کے بعد جو آ چکا آپ کے پاس' },
      { arabic: 'مِنَ الْعِلْمِ', transliteration: 'mina al-\'ilm', translationEn: 'of knowledge', translationUr: 'علم میں سے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۵ - تعصب و ہٹ دھرمی کا انجام اور حق پر استقامت

۱. اہلِ کتاب کے انکار کی اصل وجہ:
اہلِ کتاب (یہود و نصاریٰ) کا قبلہ سے انکار کسی دلیل کی کمی کی وجہ سے نہ تھا، بلکہ خالص عناد، خاندانی حسد اور ضد پر مبنی تھا۔ وہ جانتے تھے کہ نبی آخر الزماں ﷺ کا کعبہ کی طرف رخ کرنا تورات و انجیل کی پیشین گوئیوں کے عین مطابق ہے، مگر وہ اس حق کو تسلیم کرنے پر آمادہ نہ تھے۔

۲. خود ان کا باہمی اختلاف:
"وَمَا بَعْضُهُم بِتَابِعٍ قِبْلَةَ بَعْضٍ": یہود کا قبلہ صخرہ بیت المقدس تھا جبکہ عیسائی مشرق کی طرف رخ کرتے تھے۔ وہ خود ایک دوسرے کے قبلہ پر متفق نہ تھے، تو وہ مسلمانوں کے حق کو کیسے قبول کرتے؟

۳. امت کے لیے تنبیہ:
اگرچہ نبی کریم ﷺ سے گناہ یا گمراہی کا صدور عقلاً و شرعاً ناممکن ہے، لیکن آیت میں "وَلَئِنِ اتَّبَعْتَ أَهْوَاءَهُم" کا خطاب حضور ﷺ کے توسط سے پوری امت کو سنانا مقصود ہے کہ وحی اور قطعی دلائل کے بعد باطل پسندوں کی خوشنودی کی خاطر دین کے احکام میں کسی قسم کا سمجھوتہ کرنا ظلمِ عظیم ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 145 - The Pathology of Stubborn Denial and Uncompromising Adherence to Divine Revelation

1. The True Roots of Rejection:
The denial of the Ka'bah by the theologians of Bani Israel stemmed not from rational inadequacy or deficiency of proof, but from sheer obstinacy, tribal jealousy, and ingrained pride. Even if every cosmic miracle were placed before their eyes, their preconceived prejudice would prevent them from submitting.

2. Internal Sectarian Disarray:
"Nor would they be followers of one another's Qiblah": While the Jews faced the sacred rock in Jerusalem, the Christians faced the geographical East. If they could not reconcile their own conflicting directions, their objections to the Islamic Qiblah were totally hypocritical.

3. Divine Warning Directed to the Ummah:
The conditional warning ("If you were to follow their desires after knowledge came to you") addresses the entire Muslim Ummah through the Prophet ﷺ. When definitive divine truth is illuminated, compromising religious principles to appease societal fashion or political pressure constitutes severe spiritual wrongdoing.`
  },

  146: {
    arabic: 'الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمْ ۖ وَإِنَّ فَرِيقًا مِّنْهُمْ لَيَكْتُمُونَ الْحَقَّ وَهُمْ يَعْلَمُونَ',
    translationUr: 'جن لوگوں کو ہم نے کتاب دی ہے وہ اس (رسولِ کریم ﷺ اور قبلہ برحق) کو اس طرح پہچانتے ہیں جس طرح اپنے بیٹوں کو پہچانتے ہیں، اور بے شک ان میں سے ایک گروہ دیدہ دانستہ حق کو چھپاتا ہے۔',
    translationEn: 'Those to whom We gave the Scripture know him as they know their own sons. But indeed, a party of them conceal the truth while they know [it].',
    words: [
      { arabic: 'الَّذِينَ آتَيْنَاهُمُ', transliteration: 'Allatheena ataynahumu', translationEn: 'Those to whom We gave', translationUr: 'وہ لوگ جنہیں ہم نے عطا فرمائی' },
      { arabic: 'الْكِتَابَ', transliteration: 'al-kitaba', translationEn: 'the Scripture', translationUr: 'کتاب' },
      { arabic: 'يَعْرِفُونَهُ', transliteration: 'ya\'rifoonahu', translationEn: 'recognize him', translationUr: 'وہ پہچانتے ہیں اس کو' },
      { arabic: 'كَمَا يَعْرِفُونَ', transliteration: 'kama ya\'rifoona', translationEn: 'just as they recognize', translationUr: 'جس طرح وہ پہچانتے ہیں' },
      { arabic: 'أَبْنَاءَهُمْ', transliteration: 'abna\'ahum', translationEn: 'their sons', translationUr: 'اپنے بیٹوں کو' },
      { arabic: 'وَإِنَّ فَرِيقًا مِّنْهُمْ', transliteration: 'wa inna fareeqan minhum', translationEn: 'and indeed a group of them', translationUr: 'اور بے شک ایک گروہ ان میں سے' },
      { arabic: 'لَيَكْتُمُونَ الْحَقَّ', transliteration: 'layaktumoona al-haqqa', translationEn: 'surely conceal the truth', translationUr: 'ضرور چھپاتے ہیں حق کو' },
      { arabic: 'وَهُمْ يَعْلَمُونَ', transliteration: 'wa hum ya\'lamoon', translationEn: 'while they know', translationUr: 'حالانکہ وہ جانتے ہیں' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۶ - نبوتِ محمدی کی بے مثل شناخت اور کتمانِ حق کا جرم

۱. "کَمَا یَعْرِفُونَ أَبْنَاءَهُمْ" کی جامع تمثیل:
انسان اپنے بیٹے کی شکل و صورت، خدوخال اور عادات سے اس طرح واقف ہوتا ہے کہ ہزاروں بچوں کے ہجوم میں بھی اپنے بیٹے کو پہچاننے میں ایک لمحے کا شک نہیں کرتا۔ قرآن نے یہی تمثیل دے کر فرمایا کہ تورات و انجیل کے علماء رسول اللہ ﷺ کے اوصاف، چہرہ انور، حلیہ مبارک، ہجرت کے مقام اور قبلہ کے احوال سے اتنے ہی یقین اور قطعیت کے ساتھ واقف تھے۔
حضرت عبداللہ بن سلام رضی اللہ عنہ (جو پہلے یہود کے سب سے بڑے عالم تھے) سے جب حضرت عمر رضی اللہ عنہ نے اس آیت کے متعلق دریافت کیا تو انہوں نے عرض کیا: "یا امیر المومنین! میں حضور ﷺ کو اپنے بیٹے سے بھی زیادہ یقین کے ساتھ پہچانتا ہوں، کیونکہ اپنے بیٹے کے بارے میں تو شاید کوئی شبہ ہو سکتا ہے مگر محمد ﷺ کے سچے رسول ہونے میں مجھے رتی برابر شک نہیں۔"

۲. کتمانِ حق کی مذمت:
اہل کتاب کا المیہ یہ تھا کہ وہ جانتے بوجھتے محض اپنی مذہبی چودھراہٹ اور مالی مفادات کی خاطر عام لوگوں سے اس حق کو چھپاتے تھے۔ قرآن نے اس منافقت کا پردہ چاک کیا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 146 - Flawless Recognition of Prophetic Reality and the Crime of Concealment

1. The Analogy of Recognizing One's Own Children:
A father recognizes his biological child with instantaneous, infallible certainty among thousands of faces. By using this metaphor, the Qur'an highlights that Jewish and Christian theologians recognized the physical traits, character, geography, and Qiblah of Prophet Muhammad ﷺ with absolute clarity from their own uncorrupted scriptures.
When Sayyiduna Umar (R.A.) asked Abdullah ibn Salam (R.A.)—a former chief rabbi of Madinah—about this verse, he responded: "By Allah, I recognized the Prophet ﷺ even more certainly than my own son; for I know beyond all doubt that Muhammad is the genuine Messenger of Allah."

2. Willful Concealment of Truth:
Their failure was not cognitive obscurity but moral corruption. Driven by fear of losing clerical prestige and worldly offerings, their religious elites deliberately suppressed scriptural prophecies from their congregations.`
  },

  147: {
    arabic: 'الْحَقُّ مِن رَّبِّكَ ۖ فَلَا تَكُونَنَّ مِنَ الْمُمْتَرِينَ',
    translationUr: 'یہ حق آپ کے رب کی طرف سے ہے، پس آپ ہرگز شک کرنے والوں میں سے نہ ہوں۔',
    translationEn: 'The truth is from your Lord, so never be among the doubters.',
    words: [
      { arabic: 'الْحَقُّ', transliteration: 'Al-haqqu', translationEn: 'The truth', translationUr: 'یہ حق ہے' },
      { arabic: 'مِن رَّبِّكَ', transliteration: 'min Rabbika', translationEn: 'from your Lord', translationUr: 'آپ کے رب کی طرف سے' },
      { arabic: 'فَلَا تَكُونَنَّ', transliteration: 'fala takoonanna', translationEn: 'so never be', translationUr: 'پس آپ ہرگز نہ ہوں' },
      { arabic: 'مِنَ الْمُمْتَرِينَ', transliteration: 'mina al-mumtareen', translationEn: 'among the doubters', translationUr: 'شک کرنے والوں میں سے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۷ - وحیِ الٰہی پر غیر متزلزل یقین

۱. 'الْحَقُّ مِن رَّبِّكَ':
تحویلِ قبلہ اور اسلام کے تمام احکام سراسر حق ہیں اور اس پروردگار کی طرف سے ہیں جو تمام کائنات کا پالنہار اور کمالِ حکمت والا ہے۔ لہٰذا مخالفین کے شکوک و شبہات اور جھوٹے پروپیگنڈے سے کسی مومن کے دل میں ذرہ برابر تذبذب نہیں آنا چاہیے۔

۲. خطاب کا رخ:
اگرچہ خطاب رسول اللہ ﷺ سے ہے جن کے قلبِ اطہر میں شک کا گزر بھی ناممکن ہے، مگر اس تاکیدی نہی (فَلَا تَكُونَنَّ) سے دراصل کمزور ایمان والے افراد اور قیامت تک آنے والی امت کو تعلیم دینا مقصود ہے کہ مخالفین کے وسوسوں کے سامنے اپنے ایمان اور عقیدے پر چٹان کی طرح مضبوط رہیں۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 147 - Absolute Certitude in Divine Revelation

1. "The Truth is from Your Lord":
The relocation of the Qiblah and the totality of Islamic injunctions emanate from the Sovereign Sustainer of the cosmos. Because divine revelation represents ultimate truth, no earthly controversy or polemic should engender hesitation in the believer's conscience.

2. Pedagogical Function of the Prohibition:
While the Prophet ﷺ possessed infallible faith, the emphatic command ("So never be among the doubters") serves to insulate the Muslim community against cognitive infiltration by skeptics and deceitful propagandists across history.`
  },

  148: {
    arabic: 'وَلِكُلٍّ وِجْهَةٌ هُوَ مُوَلِّيهَا ۖ فَاسْتَبِقُوا الْخَيْرَاتِ ۚ أَيْنَ مَا تَكُونُوا يَأْتِ بِكُمُ اللَّهُ جَمِيعًا ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translationUr: 'اور ہر ایک کے لیے ایک رخ (سمت) ہے جس کی طرف وہ رخ کرتا ہے، پس تم نیکیوں کی طرف سبقت لے جاؤ، تم جہاں کہیں بھی ہو گے اللہ تم سب کو جمع کر کے لے آئے گا، بے شک اللہ ہر چیز پر پوری قدرت رکھنے والا ہے۔',
    translationEn: 'For each [religious following] is a direction toward which it faces. So race to [all that is] good. Wherever you may be, Allah will bring you forth all together. Indeed, Allah is over all things competent.',
    words: [
      { arabic: 'وَلِكُلٍّ وِجْهَةٌ', transliteration: 'Wa likullin wijhatun', translationEn: 'And for each is a direction', translationUr: 'اور ہر ایک کے لیے ایک رخ ہے' },
      { arabic: 'هُوَ مُوَلِّيهَا', transliteration: 'huwa muwalleeha', translationEn: 'toward which he faces', translationUr: 'جس کی طرف وہ منہ پھیرتا ہے' },
      { arabic: 'فَاسْتَبِقُوا', transliteration: 'fastabiqoo', translationEn: 'so race / hasten', translationUr: 'پس تم سبقت لے جاؤ' },
      { arabic: 'الْخَيْرَاتِ', transliteration: 'al-khayrati', translationEn: 'to good deeds', translationUr: 'نیکیوں کی طرف' },
      { arabic: 'أَيْنَ مَا تَكُونُوا', transliteration: 'ayna ma takoonoo', translationEn: 'wherever you are', translationUr: 'تم جہاں کہیں بھی ہو گے' },
      { arabic: 'يَأْتِ بِكُمُ اللَّهُ', transliteration: 'ya\'ti bikumu Allahu', translationEn: 'Allah will bring you', translationUr: 'اللہ لے آئے گا تم کو' },
      { arabic: 'جَمِيعًا', transliteration: 'jamee\'an', translationEn: 'all together', translationUr: 'سب کو اکٹھا کر کے' },
      { arabic: 'إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', transliteration: 'inna Allaha \'ala kulli shay\'in qadeer', translationEn: 'indeed Allah is competent over all things', translationUr: 'بے شک اللہ ہر چیز پر قادر ہے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۸ - 'فَاسْتَبِقُوا الْخَيْرَاتِ' کا سنہری انقلابی ضابطہ

۱. قبلہ کے جھگڑوں سے اعراض:
مختلف قوموں اور شریعتوں میں ظاہری جہات مختلف رہی ہیں۔ یہود کا قبلہ صخرہ تھا، نصاریٰ کا مشرق، اور اب مسلمانوں کا کعبہ ہے۔ اللہ تعالیٰ فرماتے ہیں کہ سمتوں کی بحثوں میں اپنی توانائیاں ضائع کرنے کے بجائے اصل توجہ نیکیوں میں آگے بڑھنے پر ہونی چاہیے۔

۲. نیکیوں میں مسابقت (فَاسْتَبِقُوا الْخَيْرَاتِ):
اس آیت نے حیاتِ انسانی کا سب سے بڑا مقصد متعین کیا کہ مومن دنیا کی فانی دولت اور عہدوں کے پیچھے بھاگنے کے بجائے تقویٰ، اخلاص، صدقہ و خیرات اور اطاعتِ الٰہی میں دوسروں سے سبقت لے جانے کی کوشش کرے۔

۳. حشر و نشر کا قطعی ثبوت:
"أَيْنَ مَا تَكُونُوا يَأْتِ بِكُمُ اللَّهُ جَمِيعًا": تم مر کر کہیں بھی بکھر جاؤ، سمندر کی گہرائیوں میں چلے جاؤ یا فضاؤں میں ذرہ ذرہ ہو جاؤ، اللہ تعالیٰ اپنی بے پایاں قدرت سے قیامت کے دن سب کو ایک میدان میں جمع فرمائے گا اور اعمال کی بنیاد پر فیصلہ صادر ہوگا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 148 - The Golden Axiom of "Fastabiqul Khayrat" (Racing Towards Virtue)

1. Transcending Superficial Polemics:
Different dispensations have had designated geographical focal points. Allah redirects the believers' attention away from unproductive debates over directions towards the true essence of religion: competing in moral excellence and benevolent deeds.

2. Competitive Righteousness:
"Fastabiqul Khayrat": The verse instills a dynamic ethos in the Muslim consciousness. Instead of rivaling others in material accumulation or worldly status, the true believer strives to outpace others in charity, justice, worship, and social uprightness.

3. Inescapable Universal Assembly:
"Wherever you may be, Allah will bring you forth all together": Regardless of how fragmented or scattered human remains become upon death—whether burned to ash or dispersed in the oceans—Allah's omnipotence will resurrect and gather every soul for the grand Day of Judgment.`
  },

  149: {
    arabic: 'وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۖ وَإِنَّهُ لَلْحَقُّ مِن رَّبِّكَ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ',
    translationUr: 'اور آپ جہاں سے بھی نکلیں اپنا رخ مسجدِ حرام کی طرف پھیر لیں، اور بے شک یہ آپ کے رب کی طرف سے برحق ہے، اور اللہ تمہارے اعمال سے بے خبر نہیں ہے۔',
    translationEn: 'And from wherever you go out [for prayer], turn your face toward the Sacred Mosque. And indeed, it is the truth from your Lord. And Allah is not unaware of what you do.',
    words: [
      { arabic: 'وَمِنْ حَيْثُ خَرَجْتَ', transliteration: 'Wa min haythu kharajta', translationEn: 'And from wherever you go out', translationUr: 'اور جہاں سے بھی آپ نکلیں' },
      { arabic: 'فَوَلِّ وَجْهَكَ', transliteration: 'fawalli wajhaka', translationEn: 'turn your face', translationUr: 'پس اپنا چہرہ پھیر لیجیے' },
      { arabic: 'شَطْرَ الْمَسْجِدِ الْحَرَامِ', transliteration: 'shatra al-masjidil-haram', translationEn: 'toward the Sacred Mosque', translationUr: 'مسجدِ حرام کی طرف' },
      { arabic: 'وَإِنَّهُ لَلْحَقُّ', transliteration: 'wa innahu lal-haqqu', translationEn: 'and indeed it is the truth', translationUr: 'اور بے شک یہ بالکل برحق ہے' },
      { arabic: 'مِن رَّبِّكَ', transliteration: 'min Rabbika', translationEn: 'from your Lord', translationUr: 'آپ کے رب کی طرف سے' },
      { arabic: 'وَمَا اللَّهُ بِغَافِلٍ', transliteration: 'wa ma Allahu bighafilin', translationEn: 'and Allah is not unaware', translationUr: 'اور اللہ بے خبر نہیں ہے' },
      { arabic: 'عَمَّا تَعْمَلُونَ', transliteration: '\'amma ta\'maloon', translationEn: 'of what you do', translationUr: 'ان کاموں سے جو تم کرتے ہو' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۴۹ - سفر و حضر میں استقبالِ قبلہ کی عمومیت

۱. تاکیدی تکرار کی بلاغت:
قرآن مجید میں کعبہ کی طرف رخ کرنے کا حکم مختلف پیرایوں میں تین مرتبہ دہرایا گیا ہے:
- پہلی مرتبہ (آیت ۱۴۴): مدینہ منورہ میں موجودگی کی حالت (حضر) کے احکام۔
- دوسری مرتبہ (آیت ۱۴۹): سفر، ہجرت اور جنگ کے لیے نکلنے کی حالت۔
- تیسری مرتبہ (آیت ۱۵۰): تمام روئے زمین کے رہنے والوں کے لیے ہمہ گیر اور دائمی ضابطہ۔

۲. "وَمِنْ حَيْثُ خَرَجْتَ":
چاہے تم مشرق میں سفر کرو یا مغرب میں، صحرا میں ہو یا سمندر میں، جب نماز کا وقت آئے تو پوری دنیا میں مسلمانوں کا مرکزِ اتحاد صرف اور صرف بیت اللہ شریف ہی رہے گا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 149 - Universality of the Qiblah in Travel and Station

1. The Wisdom of Rhetorical Repetition:
The command to face the Ka'bah is articulated three distinct times with progressive legal scope:
- Ayah 144 addressed residents within Madinah.
- Ayah 149 addresses travelers departing on journeys, commerce, or campaigns.
- Ayah 150 establishes an eternal, global statute eliminating all excuses.

2. Global Center of Unity:
Regardless of where a believer traverses across continents or oceans, the moment Salah commences, the entire global fraternity unifies toward one singular focal coordinate: the Ka'bah.`
  },

  150: {
    arabic: 'وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ إِلَّا الَّذِينَ ظَلَمُوا مِنْهُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِي وَلِأُتِمَّ نِعْمَتِي عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُونَ',
    translationUr: 'اور آپ جہاں سے بھی نکلیں اپنا رخ مسجدِ حرام کی طرف پھیر لیں، اور (اے مسلمانو!) تم جہاں کہیں بھی ہو اپنے چہرے اسی کی طرف پھیرا کرو تاکہ لوگوں کے پاس تمہارے خلاف کوئی حجت باقی نہ رہے سوائے ان کے جو ان میں سے ظالم ہیں، پس تم ان سے مت ڈرو اور مجھ ہی سے ڈرو، اور تاکہ میں تم پر اپنی نعمت پوری کر دوں اور تاکہ تم ہدایت پا جاؤ۔',
    translationEn: 'And from wherever you go out [for prayer], turn your face toward the Sacred Mosque. And wherever you [believers] may be, turn your faces toward it in order that the people will not have any argument against you, except for those of them who commit injustice; so fear them not, but fear Me. And [it is] so I may complete My favor upon you and that you may be guided.',
    words: [
      { arabic: 'وَمِنْ حَيْثُ خَرَجْتَ', transliteration: 'Wa min haythu kharajta', translationEn: 'And from wherever you go out', translationUr: 'اور جہاں سے بھی آپ نکلیں' },
      { arabic: 'فَوَلِّ وَجْهَكَ', transliteration: 'fawalli wajhaka', translationEn: 'turn your face', translationUr: 'پس رخ پھیر لیں' },
      { arabic: 'شَطْرَ الْمَسْجِدِ الْحَرَامِ', transliteration: 'shatra al-masjidil-haram', translationEn: 'toward the Sacred Mosque', translationUr: 'مسجدِ حرام کی سمت' },
      { arabic: 'وَحَيْثُ مَا كُنتُمْ', transliteration: 'wa haythu ma kuntum', translationEn: 'and wherever you may be', translationUr: 'اور جہاں کہیں بھی تم ہو' },
      { arabic: 'فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ', transliteration: 'fawalloo wujoohakum shatrahu', translationEn: 'turn your faces toward it', translationUr: 'اپنے چہرے اسی کی طرف پھیر لو' },
      { arabic: 'لِئَلَّا يَكُونَ لِلنَّاسِ', transliteration: 'li\'alla yakoona lin-nasi', translationEn: 'so people will not have', translationUr: 'تاکہ نہ رہے لوگوں کے پاس' },
      { arabic: 'عَلَيْكُمْ حُجَّةٌ', transliteration: '\'alaykum hujjatun', translationEn: 'against you an argument', translationUr: 'تمہارے خلاف کوئی دلیل/اعتراض' },
      { arabic: 'فَلَا تَخْشَوْهُمْ', transliteration: 'fala takhshawhum', translationEn: 'so fear them not', translationUr: 'پس تم ان سے مت ڈرو' },
      { arabic: 'وَاخْشَوْنِي', transliteration: 'wakhshawnee', translationEn: 'but fear Me', translationUr: 'اور مجھ ہی سے ڈرو' },
      { arabic: 'وَلِأُتِمَّ نِعْمَتِي عَلَيْكُمْ', transliteration: 'wa li\'utimma ni\'matee \'alaykum', translationEn: 'and that I may complete My favor upon you', translationUr: 'اور تاکہ میں پوری کروں اپنی نعمت تم پر' },
      { arabic: 'وَلَعَلَّكُمْ تَهْتَدُونَ', transliteration: 'wa la\'allakum tahtadoon', translationEn: 'and that you may be guided', translationUr: 'اور تاکہ تم ہدایت پاؤ' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۰ - اتمامِ نعمت، حجت کا خاتمہ، اور تقویٰ کی بنیاد

۱. تمام معترضین کی حجتوں کا خاتمہ:
کعبہ کی طرف تحویل سے تینوں گروہوں کے ممکنہ اعتراضات ختم ہو گئے:
- یہود کہتے تھے کہ تورات میں نبی آخر الزماں کا قبلہ کعبہ لکھا ہے، مگر یہ تو ہمارے قبلہ کی طرف رخ کرتے ہیں! کعبہ قبلہ بننے سے ان کی یہ بات ختم ہو گئی۔
- مشرکینِ مکہ کہتے تھے کہ محمد ﷺ حضرت ابراہیم کے دین کے دعویدار ہیں مگر ابراہیم کے کعبہ کو چھوڑ کر بیت المقدس رخ کرتے ہیں! کعبہ کا رخ کرنے سے ان کا اعتراض بھی باطل ہو گیا۔
- تاہم جو ظالم اور ہٹ دھرم تھے، وہ پھر بھی اعتراضات گھڑتے رہے۔ اللہ نے فرمایا کہ ایسے ظالموں کی پروا مت کرو۔

۲. "فَلَا تَخْشَوْهُمْ وَاخْشَوْنِي":
مومن کو کسی انسان کی مخالفت، طعن و تشنیع یا بائیکاٹ سے نہیں ڈرنا چاہیے، بلکہ صرف اور صرف اپنے خالق و مالک کے عتاب اور نافرمانی سے ڈرنا چاہیے۔

۳. اتمامِ نعمت کی بشارت:
کعبہ کی طرف رخ کرنے کا حکم دراصل فتحِ مکہ، مشرکین کے بتوں کے صفائے اور ملتِ ابراہیمی کے غلبے کی خوشخبری اور اتمامِ نعمت کا پیش خیمہ تھا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 150 - Elimination of Polemical Excuses, Divine Fear, and Completion of Favor

1. Precluding All Critical Objections:
By firmly fixing the Ka'bah as the perpetual Qiblah, opposing arguments collapsed:
- Jewish scholars could no longer claim: "Your Prophet claims to fulfill Torah prophecies, yet the Torah prophesies his Qiblah is the sanctuary of Abraham!"
- The Quraysh could no longer charge: "He claims Abrahamic descent yet turns away from Abraham's house!"
- Only incurable bigots ("those who commit injustice") continued complaining; believers are instructed to ignore bad-faith rhetoric.

2. "Fear Them Not, But Fear Me":
Believers must never adjust divine laws to placate popular censure or imperial intimidation. Reverential awe belongs exclusively to Allah.

3. Consummation of Divine Favor:
Reclaiming the Ka'bah foreshadowed the imminent peaceful conquest of Makkah, the purification of the sanctuary from 360 idols, and the final perfection of Islamic worship.`
  },

  151: {
    arabic: 'كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا تَعْلَمُونَ',
    translationUr: 'جس طرح ہم نے تمہارے درمیان خود تم ہی میں سے ایک رسول بھیجا جو تمہارے سامنے ہماری آیتوں کی تلاوت فرماتے ہیں، اور تمہیں (برائیوں سے) پاک صاف کرتے ہیں، اور تمہیں کتاب اور دانائی (حکمت و سنت) کی تعلیم دیتے ہیں، اور تمہیں وہ باتیں سکھاتے ہیں جو تم کبھی نہ جانتے تھے۔',
    translationEn: 'Just as We have sent among you a messenger from yourselves reciting to you Our verses and purifying you and teaching you the Book and wisdom and teaching you that which you did not know.',
    words: [
      { arabic: 'كَمَا أَرْسَلْنَا', transliteration: 'Kama arsalna', translationEn: 'Just as We sent', translationUr: 'جس طرح ہم نے بھیجا' },
      { arabic: 'فِيكُمْ رَسُولًا', transliteration: 'feekum rasoolan', translationEn: 'among you a messenger', translationUr: 'تمہارے اندر ایک رسول' },
      { arabic: 'مِّنكُمْ', transliteration: 'minkum', translationEn: 'from yourselves', translationUr: 'خود تم ہی میں سے' },
      { arabic: 'يَتْلُو عَلَيْكُمْ', transliteration: 'yatloo \'alaykum', translationEn: 'reciting to you', translationUr: 'جو تلاوت فرماتے ہیں تم پر' },
      { arabic: 'آيَاتِنَا', transliteration: 'ayatina', translationEn: 'Our verses', translationUr: 'ہماری آیتوں کی' },
      { arabic: 'وَيُزَكِّيكُمْ', transliteration: 'wa yuzakkeekum', translationEn: 'and purifying you', translationUr: 'اور وہ تمہیں پاک کرتے ہیں' },
      { arabic: 'وَيُعَلِّمُكُمُ الْكِتَابَ', transliteration: 'wa yu\'allimukumu al-kitaba', translationEn: 'and teaching you the Book', translationUr: 'اور تمہیں سکھاتے ہیں کتاب' },
      { arabic: 'وَالْحِكْمَةَ', transliteration: 'wal-hikmata', translationEn: 'and wisdom', translationUr: 'اور حکمت و سنت' },
      { arabic: 'وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا تَعْلَمُونَ', transliteration: 'wa yu\'allimukum ma lam takoonoo ta\'lamoon', translationEn: 'and teaching you what you did not know', translationUr: 'اور وہ باتیں سکھاتے ہیں جو تم نہ جانتے تھے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۱ - بعثتِ نبوی کے چار بنیادی فرائضِ منصبی

۱. حضرت ابراہیم علیہ السلام کی دعا کی قبولیت:
پارہ ۱ کی آیت ۱۲۹ میں حضرت ابراہیم علیہ السلام نے کعبہ تعمیر کرتے وقت دعا فرمائی تھی: "رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ یَتْلُو عَلَیْهِمْ آیَاتِکَ..."۔ اس آیت میں اللہ تعالیٰ نے مسلمانوں پر احسان جتاتے ہوئے واضح فرمایا کہ تمہارے قبلہ کا کعبہ ہونا اور حضور ﷺ کی بعثتِ مبارکہ اسی خلیل اللہ کی دعا کا کامل ظہور ہے۔

۲. رسول اللہ ﷺ کے چار عظیم مقاصدِ بعثت:
- تلاوتِ آیات: قرآن کے الفاظ کو صحت کے ساتھ سنانا اور اس کے متن کی حفاظت فرمانا۔
- تزکیۂ نفوس (وَيُزَكِّيكُمْ): باطنی اخلاق کو کفر، نفاق، کبر، حسد، ریاکاری اور دنیا پرستی کی آلائشوں سے پاک کر کے اخلاص اور حسنِ اخلاق سے مزین کرنا۔
- تعلیمِ کتاب: قرآن مجید کے معانی، احکام اور الٰہی منشاء کی تفصیل سمجھانا۔
- تعلیمِ حکمت (وَالْحِكْمَةَ): جمہور مفسرین کے نزدیک حکمت سے مراد حضور ﷺ کی مبارک سنت اور شریعت کی گہری بصیرت و فہم ہے۔ محض کتاب کافی نہیں ہوتی، جب تک صاحبِ کتاب کا عملی نمونہ سامنے نہ ہو۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 151 - The Four Prophetic Offices and Fulfillment of Ibrahim's Supplication

1. Fulfillment of the Abrahamic Covenant:
In Ayah 129, Patriarch Ibrahim prayed while constructing the Ka'bah: "Our Lord, send among them a messenger from themselves who will recite to them Your verses..." Ayah 151 announces the fulfillment of that millennial prayer through the advent of Muhammad ﷺ.

2. The Fourfold Dimensions of Prophetic Mission:
- Tilawah (Recitation): Accurately conveying and preserving the precise Arabic verbatim text of the Qur'an.
- Tazkiyah (Spiritual Purification): Cleansing the soul from the maladies of polytheism, pride, hypocrisy, envy, and greed, and adorning it with spiritual purity.
- Ta'leem al-Kitab (Teaching the Book): Clarifying the meanings, legal statutes, and constitutional principles of the Scripture.
- Ta'leem al-Hikmah (Teaching Wisdom): According to consensus among classical exegetes, 'Hikmah' represents the Sunnah and Hadith—the practical wisdom and prophetic methodology essential for embodying divine guidance.`
  },

  152: {
    arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
    translationUr: 'پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کرو اور میری ناشکری مت کرو۔',
    translationEn: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.',
    words: [
      { arabic: 'فَاذْكُرُونِي', transliteration: 'Fathkuroonee', translationEn: 'So remember Me', translationUr: 'پس تم مجھے یاد رکھو' },
      { arabic: 'أَذْكُرْكُمْ', transliteration: 'athkurkum', translationEn: 'I will remember you', translationUr: 'میں تمہیں یاد رکھوں گا' },
      { arabic: 'وَاشْكُرُوا لِي', transliteration: 'washkuroo lee', translationEn: 'and be grateful to Me', translationUr: 'اور میرا شکر ادا کرو' },
      { arabic: 'وَلَا تَكْفُرُونِ', transliteration: 'wa la takfuroon', translationEn: 'and do not deny Me', translationUr: 'اور میری ناشکری مت کرو' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۲ - ذکر اور شکر کی بے نظیر برکات

۱. "فَاذْكُرُونِي أَذْكُرْكُمْ" کا لاہوتی اعزاز:
پوری کائنات کا خالق و مالک جب ایک ادنیٰ اور عاجز انسان کو یہ پیشکش فرمائے کہ "تم مجھے یاد کرو، میں تمہیں یاد رکھوں گا"، تو اس سے بڑا کوئی اعزاز انسانی تصور میں نہیں آ سکتا۔
حدیثِ قدسی میں ہے: "میں اپنے بندے کے گمان کے ساتھ ہوں جب وہ مجھے یاد کرتا ہے۔ اگر وہ اپنے دل میں مجھے یاد کرے تو میں اسے اپنے دل میں یاد فرماتا ہوں، اور اگر وہ کسی مجلس میں میرا ذکر کرے تو میں اس سے بہتر مجلس (فرشتوں کی جماعت) میں اس کا ذکرِ خیر فرماتا ہوں۔"

۲. ذکر کے تین بنیادی درجات:
- لسانی ذکر: کلمہ طیبہ، تسبیح، استغفار اور تلاوتِ قرآن۔
- قلبی ذکر: دل میں اللہ کی عظمت، محبت اور نگرانی کا احساس بیدار رکھنا۔
- عملی ذکر: ہر کام میں اللہ کے حلال و حرام کے ضوابط کی پاسداری کرنا۔

۳. شکر گزاری کی حقیقت:
شکر کا مفہوم یہ ہے کہ اللہ کی دی ہوئی ہر نعمت (آنکھ، کان، زبان، مال، وقت) کو اسی کے بتائے ہوئے راستے میں خرچ کیا جائے، اور ان نعمتوں کے ذریعے اس کی نافرمانی سے قطعی اجتناب کیا جائے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 152 - The Unmatched Station of Dhikr and Shukr

1. The Incomparable Honor of "Remember Me; I will Remember You":
No spiritual elevation compares to the Creator promising a mortal creature His direct remembrance. In an authentic Hadith Qudsi, Allah proclaims: "I am as My servant expects Me to be. If he remembers Me within himself, I remember him within Myself; and if he remembers Me in a gathering, I remember him in a gathering far superior to his."

2. The Tripartite Reality of Dhikr:
- Vocal Remembrance: Uttering words of praise (Tasbih, Tahmid, Istighfar) and reciting the Qur'an.
- Contemplative Remembrance: Constantly nurturing awe, gratitude, and awareness of divine omnipresence.
- Practical Remembrance: Aligning daily business, speech, and moral conduct with divine commandments.

3. True Shukr (Gratitude):
True gratitude extends far beyond verbal thanks; it requires employing every divine blessing (intellect, wealth, physical vitality) strictly in pursuit of divine pleasure while refraining from utilizing divine gifts in transgressions.`
  },

  153: {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
    translationUr: 'اے ایمان والو! صبر اور نماز کے ذریعے (مجھ سے) مدد طلب کرو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔',
    translationEn: 'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.',
    words: [
      { arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا', transliteration: 'Ya ayyuha allatheena amanoo', translationEn: 'O you who have believed', translationUr: 'اے ایمان والو!' },
      { arabic: 'اسْتَعِينُوا', transliteration: 'ista\'eenoo', translationEn: 'seek help', translationUr: 'مدد حاصل کرو' },
      { arabic: 'بِالصَّبْرِ', transliteration: 'bis-sabri', translationEn: 'through patience', translationUr: 'صبر کے ذریعے' },
      { arabic: 'وَالصَّلَاةِ', transliteration: 'was-salati', translationEn: 'and prayer', translationUr: 'اور نماز کے ذریعے' },
      { arabic: 'إِنَّ اللَّهَ', transliteration: 'inna Allaha', translationEn: 'indeed Allah', translationUr: 'بے شک اللہ' },
      { arabic: 'مَعَ الصَّابِرِينَ', transliteration: 'ma\'a as-sabireen', translationEn: 'is with the patient', translationUr: 'صبر کرنے والوں کے ساتھ ہے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۳ - صبر اور نماز — مؤمن کا ناقابلِ تسخیر قلعہ

۱. صبر کی جامع تعریف اور اس کی تین اقسام:
عربی میں صبر کے معنی 'روکنے اور باندھنے' کے ہیں۔ شریعت میں صبر کی تین عظیم شاخیں ہیں:
- صبر علی الطاعۃ: نفس کی سستی پر قابو پا کر پابندی سے عبادات و احکام بجا لانا۔
- صبر عن المعصیۃ: گناہ کی پرکشش خواہشات کے سامنے اپنے نفس کی باگیں کھینچ کر گناہ سے بچنا۔
- صبر علی المصائب: حوادث، بیماری، غربت اور اموات کے موقع پر چیخ و پکار اور شکوہ کیے بغیر تقدیرِ الٰہی پر راضی رہنا۔

۲. نماز کی روح اور استعانت:
نماز بندے کا معراج اور رب العالمین کے سامنے سجدہ ریز ہو کر استغاثہ ہے۔ سنن ابوداؤد میں ہے کہ رسول اللہ ﷺ کو جب بھی کوئی غم یا تشویشناک مرحلہ درپیش ہوتا تو آپ فوراً نماز کی طرف متوجہ ہو جاتے۔

۳. "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ":
اللہ تعالیٰ کی معیتِ خاصہ (خصوصی نصرت، غیبی حفاظت اور تسلی) صبر کرنے والوں کو نصیب ہوتی ہے۔ جس کے ساتھ خود مالکِ کائنات ہو جائے اسے کسی طاقت سے خوفزدہ ہونے کی ضرورت نہیں رہتی۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 153 - Sabr and Salah: The Invincible Citadel of the Faithful

1. The Tripartite Anatomy of Sabr (Patience & Fortitude):
In Islamic theology, Sabr is far from passive resignation; it is active spiritual discipline divided into three branches:
- Sabr in Obedience: Overcoming lethargy to faithfully perform worship and duties.
- Sabr in Abstinence: Exercising internal restraint against sinful impulses and sensual temptations.
- Sabr in Calamity: Maintaining dignified composure when struck by bereavement, illness, or financial distress without lamentation against divine decree.

2. Salah as the Direct Conduit of Divine Aid:
Salah brings the human heart into immediate communion with the Almighty. As recorded in the Sunan of Abu Dawud, whenever severe anxiety or a crisis befell the Messenger of Allah ﷺ, he would hasten to prayer.

3. "Indeed, Allah is with the Patient":
This denotes the special divine presence (Ma'iyyah Khassah)—encompassing divine protection, guidance, and triumph. One who enjoys the alliance of the Sovereign of the Universe cannot be defeated.`
  },

  154: {
    arabic: 'وَلَا تَقُولُوا لِمَن يُقْتَلُ فِي سَبِيلِ اللَّهِ أَمْوَاتٌ ۚ بَلْ أَحْيَاءٌ وَلَٰكِن لَّا تَشْعُرُونَ',
    translationUr: 'اور جو لوگ اللہ کی راہ میں مارے جائیں انہیں مردہ مت کہو، بلکہ وہ زندہ ہیں لیکن تم (ان کی حیات کا) شعور نہیں رکھتے۔',
    translationEn: 'And do not say about those who are killed in the way of Allah, "They are dead." Rather, they are alive, but you perceive [it] not.',
    words: [
      { arabic: 'وَلَا تَقُولُوا', transliteration: 'Wa la taqooloo', translationEn: 'And do not say', translationUr: 'اور تم مت کہو' },
      { arabic: 'لِمَن يُقْتَلُ', transliteration: 'liman yuqtalu', translationEn: 'about those killed', translationUr: 'ان لوگوں کے بارے میں جو قتل کیے جائیں' },
      { arabic: 'فِي سَبِيلِ اللَّهِ', transliteration: 'fee sabeelil-lah', translationEn: 'in the way of Allah', translationUr: 'اللہ کی راہ میں' },
      { arabic: 'أَمْوَاتٌ', transliteration: 'amwatun', translationEn: '"They are dead"', translationUr: 'کہ وہ مردہ ہیں' },
      { arabic: 'بَلْ أَحْيَاءٌ', transliteration: 'bal ahya\'un', translationEn: 'Rather, they are alive', translationUr: 'بلکہ وہ زندہ ہیں' },
      { arabic: 'وَلَٰكِن', transliteration: 'wa lakin', translationEn: 'but', translationUr: 'لیکن' },
      { arabic: 'لَّا تَشْعُرُونَ', transliteration: 'la tash\'uroon', translationEn: 'you do not perceive', translationUr: 'تم شعور نہیں رکھتے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۴ - شہداء کی برزخی حیات اور ان کا عظیم مقام

۱. حیاتِ شہداء کی حقیقت:
اگرچہ دنیاوی اعتبار سے شہید کی روح اس کے جسم سے نکل جاتی ہے اور اس پر احکامِ شریعت کے مطابق تجہیز و تکفین کے بعد تدفین کی جاتی ہے، مگر عالمِ برزخ میں اللہ تعالیٰ شہید کو ایک ایسی شاندار، پرلطف اور حقیقی حیات عطا فرماتے ہیں جس کا تعلق جنت کی نعمتوں اور رزق سے ہوتا ہے۔

۲. احادیث میں شہید کی روح کی کیفیت:
صحیح مسلم شریف کی حدیث میں آتا ہے کہ شہداء کی ارواح سبز پرندوں کے قالب میں رکھی جاتی ہیں جو جنت کے باغات میں جہاں چاہیں پرواز کرتی ہیں، جنت کے پھل کھاتی ہیں اور عرشِ الٰہی کے سائے میں لٹکی ہوئی سنہری قندیلوں میں آرام کرتی ہیں۔

۳. "وَلَٰكِن لَّا تَشْعُرُونَ":
دنیا کے محدود مادی حواس اور آلاتِ ادراک اس برزخی حیات کی لطافت اور کیفیت کو دیکھنے یا محسوس کرنے سے قاصر ہیں۔ لہٰذا انہیں عام میتوں کی طرح "مردہ" کہنا ان کے عظیم روحانی مقام کی توہین ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 154 - The Celestial Life of Martyrs (Shuhada) in the Realm of Barzakh

1. The Reality of the Life of the Slain:
While on the earthly plane a martyr's physical body experiences death and is given funerary rites, in the Barzakh (interim realm) Allah endows them with an elevated, conscious, joyful existence directly connected with Paradise.

2. Prophetic Description in Sahih Muslim:
The Prophet ﷺ explained: "The souls of the martyrs reside in the bodies of green birds that roam freely in the gardens of Paradise, feeding on its celestial fruits and perching upon golden chandeliers suspended beneath the Divine Throne."

3. "You Perceive Not":
Earthly biological faculties cannot sense the metaphysics of the unseen. Calling them "dead" in the mundane sense diminishes the sublime status bestowed upon them by the Creator.`
  },

  155: {
    arabic: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ',
    translationUr: 'اور ہم ضرور تمہیں کچھ خوف اور بھوک سے، اور مالوں، جانوں اور پھلوں کے نقصان سے آزمائیں گے، اور (اے نبی!) آپ صبر کرنے والوں کو خوشخبری سنا دیجیے۔',
    translationEn: 'And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient,',
    words: [
      { arabic: 'وَلَنَبْلُوَنَّكُم', transliteration: 'Wa lanabluwannakum', translationEn: 'And We will surely test you', translationUr: 'اور ہم ضرور بالضرور تمہیں آزمائیں گے' },
      { arabic: 'بِشَيْءٍ مِّنَ الْخَوْفِ', transliteration: 'bishay\'in mina al-khawf', translationEn: 'with something of fear', translationUr: 'کچھ خوف کے ساتھ' },
      { arabic: 'وَالْجُوعِ', transliteration: 'wal-joo\'i', translationEn: 'and hunger', translationUr: 'اور بھوک کے ساتھ' },
      { arabic: 'وَنَقْصٍ مِّنَ الْأَمْوَالِ', transliteration: 'wa naqsin mina al-amwal', translationEn: 'and a loss of wealth', translationUr: 'اور مالوں کی کمی سے' },
      { arabic: 'وَالْأَنفُسِ', transliteration: 'wal-anfusi', translationEn: 'and lives', translationUr: 'اور جانوں کے نقصان سے' },
      { arabic: 'وَالثَّمَرَاتِ', transliteration: 'wath-thamarati', translationEn: 'and fruits/produce', translationUr: 'اور پھلوں و پیداوار کے خسارے سے' },
      { arabic: 'وَبَشِّرِ الصَّابِرِينَ', transliteration: 'wa bashshiri as-sabireen', translationEn: 'and give good tidings to the patient', translationUr: 'اور آپ خوشخبری سنا دیجیے صبر کرنے والوں کو' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۵ - امتحانات کا فلسفہ اور صابرین کی بشارت

۱. دنیا کا دار الامتحان ہونا:
اللہ تعالیٰ نے تاکید کے ساتھ واضح فرمایا کہ یہ دنیا دار الجزاء (عیش و آرام کی دائمی جگہ) نہیں بلکہ امتحان گاہ ہے۔ یہاں ہر انسان، خصوصاً اہل ایمان، آزمائشوں کے مراحل سے گزریں گے۔
لفظ 'بِشَیْءٍ' فرما کر رحم کا اظہار فرمایا کہ یہ آزمائشیں تھوڑی اور انسان کی وسعت کے مطابق ہوتی ہیں، اتنی شدید نہیں ہوتیں کہ انسان برداشت ہی نہ کر سکے۔

۲. آزمائشوں کی پانچ صورتیں:
- خوف: دشمن کا ڈر، جنگی حالات یا غیر یقینی کی صورتحال۔
- بھوک: فاقہ کشی، قحط یا اشیائے خورد و نوش کی تنگی۔
- اموال کی کمی: تجارت میں نقصان، چوری یا وسائل کا کم ہونا۔
- جانوں کا نقصان: بیماری، شہادت یا اپنے پیاروں اور رشتہ داروں کا بچھڑنا۔
- ثمرات کا خسارہ: فصلوں، باغات یا محنت کے ثمرات کا برباد ہو جانا۔

۳. گناہوں کی معافی اور بلندیٔ درجات:
ان تکالیف کا مقصد مومن کو عذاب دینا نہیں بلکہ اس کے گناہ جھاڑ کر اسے سونے کی طرح کندن بنانا اور جنت میں اس کے درجات کو بلند کرنا ہے۔ اس پر ثابت قدم رہنے والوں کے لیے دائمی کامیابی کی بشارت ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 155 - The Divine Pedagogy of Tribulation and Tidings for the Steadfast

1. The Terrestrial Arena of Divine Examination:
The Almighty emphasizes that this temporal world is structured as a testing ground rather than a place of permanent bliss. The term "bi-shay'in" (with something of) indicates divine compassion: the hardships sent are calculated within human endurance, never exceeding the capacity of the soul.

2. The Five Dimensions of Human Tribulation:
- Fear: Threats of persecution, physical danger, or anxiety.
- Hunger: Scarcity of sustenance or economic stringency.
- Depletion of Wealth: Commercial losses, poverty, or property destruction.
- Loss of Lives: Illness, martyrdom, and the demise of cherished family and friends.
- Ruin of Harvests: Agricultural failure, lost crops, and withered business ventures.

3. Spiritual Purification:
For the believer, suffering is not punitive vengeance but purifying alchemy, expiating shortcomings and raising spiritual stations to heights unattainable through voluntary worship alone.`
  },

  156: {
    arabic: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
    translationUr: 'جن کا حال یہ ہے کہ جب انہیں کوئی مصیبت پہنچتی ہے تو وہ کہتے ہیں: "ہم تو خود اللہ ہی کی ملکیت ہیں اور ہم اسی کی طرف لوٹ کر جانے والے ہیں۔"',
    translationEn: 'Who, when disaster strikes them, say, "Indeed we belong to Allah, and indeed to Him we will return."',
    words: [
      { arabic: 'الَّذِينَ إِذَا', transliteration: 'Allatheena itha', translationEn: 'Those who when', translationUr: 'وہ لوگ کہ جب' },
      { arabic: 'أَصَابَتْهُم', transliteration: 'asabat-hum', translationEn: 'strikes them', translationUr: 'پہنچتی ہے ان کو' },
      { arabic: 'مُّصِيبَةٌ', transliteration: 'museebatun', translationEn: 'a disaster / calamity', translationUr: 'کوئی مصیبت یا تکلیف' },
      { arabic: 'قَالُوا', transliteration: 'qaloo', translationEn: 'they say', translationUr: 'تو وہ پکار اٹھتے ہیں' },
      { arabic: 'إِنَّا لِلَّهِ', transliteration: 'Inna lillahi', translationEn: '"Indeed we belong to Allah', translationUr: '"یقیناً ہم اللہ ہی کے ہیں' },
      { arabic: 'وَإِنَّا إِلَيْهِ', transliteration: 'wa inna ilayhi', translationEn: 'and indeed to Him', translationUr: 'اور بے شک ہم اسی کی طرف' },
      { arabic: 'رَاجِعُونَ', transliteration: 'raji\'oon', translationEn: 'we will return"', translationUr: 'لوٹ کر جانے والے ہیں"' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۶ - کلمہ استرجاع اور غم و صدمے کا روحانی علاج

۱. کلمہ استرجاع کی حقیقت:
"إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ" وہ معجزاتی قرآنی کلمہ ہے جو دنیا کے بڑے سے بڑے غم کو پگھلا کر دل میں تسکین اتار دیتا ہے۔ اس کلمے میں دو ایسی اٹل حقیقتیں بیان کی گئی ہیں کہ اگر انسان ان پر غور کر لے تو ہر صدمہ آسان ہو جاتا ہے:
- پہلی حقیقت (إِنَّا لِلَّهِ): ہماری جان، ہمارا مال، اولاد اور جسم کے اعضاء غرض ہر چیز اللہ کی ملکیت ہے۔ جب مالک اپنی چیز میں کوئی تصرف فرمائے تو کرائے دار یا خادم کو شکایت کا کوئی حق نہیں پہنچتا۔
- دوسری حقیقت (وَإِنَّا إِلَيْهِ رَاجِعُونَ): ہم خود بھی مسافر ہیں اور عنقریب دنیا چھوڑ کر اسی کے پاس جانے والے ہیں جہاں اس صبر کے بدلے میں لامتناہی راحتیں اور دائمی وصال نصیب ہوگا۔

۲. حدیث میں استرجاع کی فضیلت:
صحیح مسلم میں ام المومنین حضرت ام سلمہ رضی اللہ عنہا سے مروی ہے کہ جب ان کے شوہر حضرت ابو سلمہ کا انتقال ہوا تو انہوں نے حضور ﷺ کی تعلیم کے مطابق یہ دعا پڑھی: "اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا" (اے اللہ! مجھے میری اس مصیبت پر اجر عطا فرما اور مجھے اس سے بہتر نعم البدل عطا فرما)۔ چنانچہ اللہ تعالیٰ نے انہیں حضرت ابو سلمہ سے بہتر شوہر یعنی خود رسول اللہ ﷺ کی رفاقت اور ام المومنین کا شرف عطا فرمایا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 156 - The Principle of Istirja': Psychological Healing and Metaphysical Anchor

1. The Dual Realities of Istirja':
The formula "Inna lillahi wa inna ilayhi raji'un" is Islam's sovereign remedy for grief. It anchors the broken soul in two indisputable realities:
- First, "Inna lillahi" (We belong to Allah): Our bodies, loved ones, wealth, and faculties belong unconditionally to the Creator. A custodian has no legitimate complaint when the Owner recalls His loan.
- Second, "Wa inna ilayhi raji'un" (To Him we shall return): We are temporary travelers on this earth. The separation from deceased loved ones or lost treasures is ephemeral; eternal reunion and boundless recompense await in the divine presence.

2. Prophetic Promise of Divine Compensation:
In Sahih Muslim, Umm Salamah (R.A.) narrates that upon the death of her beloved husband Abu Salamah, she recited Istirja' along with the prophetic supplication: "O Allah, reward me in my affliction and grant me better in exchange." Allah subsequently honored her with the hand of the Holy Prophet Muhammad ﷺ, making her a Mother of the Believers.`
  },

  157: {
    arabic: 'أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ وَرَحْمَةٌ ۖ وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ',
    translationUr: 'یہ وہ لوگ ہیں جن پر ان کے رب کی طرف سے خصوصی عنایات اور رحمتیں ہیں، اور یہی لوگ صراطِ مستقیم پر ہدایت یافتہ ہیں۔',
    translationEn: 'Those are the ones upon whom are blessings from their Lord and mercy. And it is those who are the [rightly] guided.',
    words: [
      { arabic: 'أُولَٰئِكَ', transliteration: 'Oola\'ika', translationEn: 'Those', translationUr: 'یہی وہ لوگ ہیں' },
      { arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', translationEn: 'upon them', translationUr: 'جن پر ہیں' },
      { arabic: 'صَلَوَاتٌ', transliteration: 'salawatun', translationEn: 'blessings / praises', translationUr: 'خصوصی نوازشیں اور مغفرت' },
      { arabic: 'مِّن رَّبِّهِمْ', transliteration: 'min Rabbihim', translationEn: 'from their Lord', translationUr: 'ان کے رب کی طرف سے' },
      { arabic: 'وَرَحْمَةٌ', transliteration: 'wa rahmatun', translationEn: 'and mercy', translationUr: 'اور رحمتِ خاص' },
      { arabic: 'وَأُولَٰئِكَ', transliteration: 'wa oola\'ika', translationEn: 'and those', translationUr: 'اور وہی لوگ' },
      { arabic: 'هُمُ الْمُهْتَدُونَ', transliteration: 'humu al-muhtadoon', translationEn: 'are the guided ones', translationUr: 'صحیح راستے پر ہدایت پانے والے ہیں' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۷ - صابرین کے لیے رب کریم کی تین عظیم نوازشیں

۱. تین گنا انعام:
اللہ تعالیٰ نے مصائب پر استقامت اختیار کرنے والوں کو تین زبردست اعزازات سے نوازا:
- صَلَوَاتٌ: یعنی اللہ کی طرف سے مغفرت، گناہوں کی بخشش، اور ملائکہ کے سامنے ان کی تعریف و توصیف۔
- رَحْمَةٌ: یعنی دنیا اور آخرت میں اس کی رحمتِ خاصہ جو غموں کے زخموں کو مندمل کرتی ہے اور جنت کا حقدار بناتی ہے۔
- هُمُ الْمُهْتَدُونَ: یعنی اللہ نے خود ان کی ہدایت یافتہ ہونے کی گواہی دی کہ یہی لوگ حقیقی زندگی کی صحیح راہ پر گامزن ہیں۔

۲. حضرت عمر فاروق رضی اللہ عنہ کا ارشاد:
حضرت عمر رضی اللہ عنہ نے اس آیت اور پچھلی آیت کو سن کر فرمایا: "نِعْمَ الْعِدْلَانِ وَنِعْمَتِ الْعِلَاوَةُ" (کتنے ہی شاندار دو بدلے ہیں اور کتنا ہی شاندار ان پر کا اضافی انعام ہے!)۔ دو بدلے 'صلوات' اور 'رحمت' ہیں اور ان پر اضافی انعام 'ھدایت یافتہ ہونے' کا پروانہ ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 157 - The Triple Crowns Bestowed Upon the Steadfast

1. The Triad of Celestial Honors:
The Almighty honors those who endure trials with Sabr through three distinct crowns:
- Salawat: Divine forgiveness, magnification in the celestial assembly, and elevation of status.
- Rahmah: Pervasive divine grace that heals existential wounds in this world and guarantees Paradise in the next.
- Al-Muhtadoon: Divine certification that they are the truly guided individuals who navigate life's stormy waters with supreme spiritual wisdom.

2. The Insight of Sayyiduna Umar (R.A.):
Reflecting upon these verses, Umar ibn al-Khattab remarked: "How excellent are the two equal rewards (Salawat and Rahmah), and how excellent is the added bounty atop the saddle (the certificate of Guidance)!"`
  },

  158: {
    arabic: '۞ إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ',
    translationUr: 'بے شک صفا اور مروہ اللہ کی نشانیوں (شعائر) میں سے ہیں، پس جو شخص بیت اللہ کا حج کرے یا عمرہ کرے اس پر ان دونوں کا طواف (سعی) کرنے میں کوئی گناہ نہیں ہے، اور جو شخص خوشی اور اخلاص سے کوئی نیکی کرے تو بے شک اللہ قدر دان ہے، سب کچھ جاننے والا ہے۔',
    translationEn: 'Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs \'Umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing.',
    words: [
      { arabic: '۞ إِنَّ الصَّفَا', transliteration: 'Inna as-Safa', translationEn: 'Indeed Safa', translationUr: 'بے شک صفا' },
      { arabic: 'وَالْمَرْوَةَ', transliteration: 'wal-Marwata', translationEn: 'and Marwah', translationUr: 'اور مروہ' },
      { arabic: 'مِن شَعَائِرِ اللَّهِ', transliteration: 'min sha\'a\'irillahi', translationEn: 'are of the symbols of Allah', translationUr: 'اللہ کی نشانیوں میں سے ہیں' },
      { arabic: 'فَمَنْ حَجَّ الْبَيْتَ', transliteration: 'faman hajja al-bayta', translationEn: 'so whoever performs Hajj', translationUr: 'پس جس نے حج کیا بیت اللہ کا' },
      { arabic: 'أَوِ اعْتَمَرَ', transliteration: 'awi i\'tamara', translationEn: 'or performed Umrah', translationUr: 'یا عمرہ کیا' },
      { arabic: 'فَلَا جُنَاحَ عَلَيْهِ', transliteration: 'fala junaha \'alayhi', translationEn: 'there is no blame upon him', translationUr: 'تو کوئی گناہ نہیں اس پر' },
      { arabic: 'أَن يَطَّوَّفَ بِهِمَا', transliteration: 'an yattawwafa bihima', translationEn: 'that he walk between them', translationUr: 'کہ وہ چکر لگائے ان دونوں کے درمیان' },
      { arabic: 'وَمَن تَطَوَّعَ خَيْرًا', transliteration: 'wa man tatawwa\'a khayran', translationEn: 'and whoever volunteers good', translationUr: 'اور جو کوئی نیکی کرے خوشی سے' },
      { arabic: 'فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ', transliteration: 'fa-inna Allaha shakirun \'aleem', translationEn: 'then indeed Allah is Appreciative, Knowing', translationUr: 'تو بے شک اللہ قدر دان، خوب جاننے والا ہے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۸ - صفا و مروہ کی سعی اور شعائرِ اللہ کی تعظیم

۱. شعائرِ اللہ کا مفہوم اور تاریخی پس منظر:
'شعائر' جمع ہے 'شعیرہ' کی، جس کے معنی علامت اور نشانی کے ہیں۔ شعائر اللہ سے مراد وہ مقامات، اوقات یا افعال ہیں جو خاص طور پر اللہ تعالیٰ کی بندگی کی علامت بن جائیں۔
صفا اور مروہ مکہ مکرمہ کی دو پہاڑیاں ہیں جہاں حضرت ہاجرہ علیہا السلام اپنے ننھے شیر خوار بچے حضرت اسماعیل علیہ السلام کی پیاس بجھانے کے لیے پانی کی تلاش میں تڑپ کر دوڑی تھیں۔ اللہ تعالیٰ کو ایک بے بس اور توکل کرنے والی ماں کی یہ ادا اتنی پسند آئی کہ قیامت تک کے تمام حاجیوں اور معتمرین پر ان دونوں پہاڑیوں کے درمیان سعی (سات چکر) کو لازمی عبادت بنا دیا۔

۲. "فَلَا جُنَاحَ عَلَيْهِ" کا پس منظر (شانِ نزول):
زمانہ جاہلیت میں مشرکین نے صفا پہاڑی پر 'اساف' نامی اور مروہ پر 'نائلہ' نامی بت رکھ دیے تھے اور وہ ان بتوں کے چکر لگاتے تھے۔ جب اسلام آیا اور بت توڑ دیے گئے، تو صحابہ کرام کے دل میں کھٹک پیدا ہوئی کہ شاید ان پہاڑیوں کے درمیان دوڑنا جاہلیت کا کوئی فعل نہ ہو!
قرآن نے یہ جھجک دور فرمائی کہ یہ پہاڑیاں مشرکین کے بتوں کی وجہ سے نہیں بلکہ حضرت ہاجرہ و اسماعیل کے پاکیزہ عمل کی وجہ سے شعائرِ الٰہی ہیں، لہٰذا یہاں سعی کرنا قطعی پاکیزہ اور ثواب کا کام ہے۔

۳. فقہی مسئلہ:
ائمہ اربعہ کے نزدیک صفا و مروہ کے درمیان سعی حج اور عمرہ کا لازمی رکن یا واجب ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 158 - The Sacred Symbols of Safa and Marwah and the Sanctity of Sa'i

1. The Sacred History of the Two Hills:
'Sha'a'ir' (symbols) refers to consecrated rites and landmarks dedicated exclusively to the remembrance of Allah. Safa and Marwah are two historic mounds in Makkah between which Sayyidatuna Hajar ran seven times in desperation seeking water for her infant son Isma'il (A.S.). Allah so deeply cherished this desperate act of maternal devotion and unshakeable trust (Tawakkul) that He immortalized it as an obligatory rite for all pilgrims until the Day of Judgment.

2. Context of Revelation: "No Blame Upon Him":
During the pre-Islamic Jahiliyyah, pagans had erected two idols (Isaf on Safa and Na'ilah on Marwah) and would stroke them during circumambulation. After the liberation of Makkah, early Muslims hesitated to walk between the two hills, fearing they might emulate pagan customs.
This verse lifted their hesitation, affirming that these two mounts were consecrated long before the idols were set up, and that pagan contamination had been completely eradicated.

3. Jurisprudential Ruling:
According to the majority of jurists (including Imams Malik, Shafi'i, and Ahmad), performing Sa'i between Safa and Marwah is a fundamental pillar (Rukn) of Hajj and Umrah, while Imam Abu Hanifah considers it an obligatory requirement (Wajib).`
  },

  159: {
    arabic: 'إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنزَلْنَا مِنَ الْبَيِّنَاتِ وَالْهُدَىٰ مِن بَعْدِ مَا بَيَّنَّاهُ لِلنَّاسِ فِي الْكِتَابِ ۙ أُولَٰئِكَ يَلْعَنُهُمُ اللَّهُ وَيَلْعَنُهُمُ اللَّاعِنُونَ',
    translationUr: 'بے شک جو لوگ ہماری نازل کردہ روشن نشانیوں اور ہدایت کو چھپاتے ہیں اس کے بعد کہ ہم نے اسے کتاب میں لوگوں کے لیے کھول کر بیان کر دیا ہے، یہی وہ لوگ ہیں جن پر اللہ لعنت فرماتا ہے اور تمام لعنت کرنے والے بھی ان پر لعنت بھیجتے ہیں۔',
    translationEn: 'Indeed, those who conceal what We sent down of clear proofs and guidance after We made it clear for the people in the Scripture - those are cursed by Allah and cursed by the cursers,',
    words: [
      { arabic: 'إِنَّ الَّذِينَ يَكْتُمُونَ', transliteration: 'Inna allatheena yaktumoona', translationEn: 'Indeed those who conceal', translationUr: 'بے شک وہ لوگ جو چھپاتے ہیں' },
      { arabic: 'مَا أَنزَلْنَا', transliteration: 'ma anzalna', translationEn: 'what We sent down', translationUr: 'جو ہم نے نازل فرمایا' },
      { arabic: 'مِنَ الْبَيِّنَاتِ', transliteration: 'mina al-bayyinati', translationEn: 'of clear proofs', translationUr: 'روشن دلیلوں میں سے' },
      { arabic: 'وَالْهُدَىٰ', transliteration: 'wal-huda', translationEn: 'and guidance', translationUr: 'اور ہدایت میں سے' },
      { arabic: 'مِن بَعْدِ مَا بَيَّنَّاهُ', transliteration: 'min ba\'di ma bayyannahu', translationEn: 'after We made it clear', translationUr: 'اس کے بعد کہ ہم نے اسے واضح کر دیا' },
      { arabic: 'لِلنَّاسِ فِي الْكِتَابِ', transliteration: 'lin-nasi fil-kitabi', translationEn: 'for people in the Book', translationUr: 'لوگوں کے لیے کتاب میں' },
      { arabic: 'أُولَٰئِكَ يَلْعَنُهُمُ اللَّهُ', transliteration: 'oola\'ika yal\'anuhumu Allahu', translationEn: 'those will be cursed by Allah', translationUr: 'یہی لوگ ہیں جن پر اللہ لعنت فرماتا ہے' },
      { arabic: 'وَيَلْعَنُهُمُ اللَّاعِنُونَ', transliteration: 'wa yal\'anuhumu al-la\'inoon', translationEn: 'and cursed by the cursers', translationUr: 'اور لعنت کرتے ہیں ان پر تمام لعنت کرنے والے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۵۹ - کتمانِ علم اور حق چھپانے والوں پر ہمہ گیر لعنت

۱. کتمانِ حق کا سنگین جرم:
یہود کے علماء رسول اللہ ﷺ کے اوصاف، بعثت کی پیشین گوئیاں، رجم کے احکام اور قبلہ کے دلائل کو جانتے بوجھتے چھپاتے تھے تاکہ ان کی عوامی چودھراہٹ اور مذہبی نذرانے بند نہ ہو جائیں۔ اللہ تعالیٰ نے اس عمل کو کائنات کا بدترین روحانی جرم قرار دیا۔

۲. "يَلْعَنُهُمُ اللَّاعِنُونَ" کا ہولناک منظر:
'لعنت' کے معنی اللہ کی رحمت سے مکمل دوری اور محرومی کے ہیں۔
آیت میں فرمایا کہ حق چھپانے والے علماء پر صرف اللہ ہی لعنت نہیں بھیجتا، بلکہ تمام لعنت کرنے والے (فرشتے، مومن انسان اور حتیٰ کہ زمین کے جانور اور حشرات الارض بھی) ان پر لعنت کرتے ہیں، کیونکہ جب علماء علم چھپا کر گمراہی پھیلاتے ہیں تو زمین پر گناہوں کی وجہ سے قحط سالی اور مصائب آتے ہیں جس سے جانور بھی تکلیف اٹھاتے ہیں۔

۳. امتِ محمدیہ کے علماء کے لیے تنبیہ:
حدیث شریف میں رسول اللہ ﷺ نے فرمایا: "جس شخص سے دین کا کوئی ایسا علم پوچھا گیا جو وہ جانتا تھا اور اس نے اسے چھپا لیا، تو قیامت کے دن اسے آگ کی لگام پہنائی جائے گی۔" لہٰذا دنیاوی مفادات کے لیے قرآنی احکام پر پردہ ڈالنا ہلاکت خیز جرم ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 159 - The Heinous Crime of Concealing Sacred Knowledge and Universal Imprecation

1. Concealing Truth for Worldly Retainers:
The corrupt rabbinical leaders of Bani Israel suppressed biblical prophecies regarding the advent of Muhammad ﷺ, ethical laws, and monotheistic precepts to preserve their financial stipends and sectarian dominance. The Qur'an condemns this intellectual dishonesty in the strongest terms.

2. Cursed by Allah and the Universal Cursers:
Linguistically, 'La'nah' (Curse) denotes total expulsion from divine mercy.
The verse specifies that such corrupt scholars are cursed not only by Allah, but by "all who curse"—meaning the angels, righteous believers, and according to classical commentaries, even non-human creatures. When spiritual leaders conceal the truth, moral decay infects society, provoking droughts and environmental catastrophes that harm all creation.

3. Eternal Warning to Muslim Scholars:
The Prophet ﷺ sternly warned: "Whoever is asked about sacred knowledge that he possesses and conceals it, will be reined with a bridle of fire on the Day of Resurrection." Altering or silencing Islamic truths to appease regimes or public whims brings catastrophic divine retribution.`
  },

  160: {
    arabic: 'إِلَّا الَّذِينَ تَابُوا وَأَصْلَحُوا وَبَيَّنُوا فَأُولَٰئِكَ أَتُوبُ عَلَيْهِمْ ۚ وَأَنَا التَّوَّابُ الرَّحِيمُ',
    translationUr: 'سوائے ان لوگوں کے جنہوں نے توبہ کی اور (اپنے اعمال و عقائد کی) اصلاح کر لی اور (جو چھپایا تھا اسے صاف صاف) بیان کر دیا، تو یہی وہ لوگ ہیں جن کی توبہ میں قبول فرماتا ہوں، اور میں بڑا توبہ قبول فرمانے والا، نہایت رحم کرنے والا ہوں۔',
    translationEn: 'Except for those who repent and correct themselves and make clear [what they concealed]. Those - I will accept their repentance, and I am the Accepting of repentance, the Merciful.',
    words: [
      { arabic: 'إِلَّا الَّذِينَ تَابُوا', transliteration: 'Illa allatheena taboo', translationEn: 'Except those who repented', translationUr: 'مگر وہ جنہوں نے توبہ کی' },
      { arabic: 'وَأَصْلَحُوا', transliteration: 'wa aslahoo', translationEn: 'and corrected themselves', translationUr: 'اور اصلاح کر لی' },
      { arabic: 'وَبَيَّنُوا', transliteration: 'wa bayyanoo', translationEn: 'and made clear', translationUr: 'اور کھول کر بیان کر دیا' },
      { arabic: 'فَأُولَٰئِكَ', transliteration: 'fa-oola\'ika', translationEn: 'so those', translationUr: 'تو یہی وہ لوگ ہیں' },
      { arabic: 'أَتُوبُ عَلَيْهِمْ', transliteration: 'atoobu \'alayhim', translationEn: 'I will accept repentance from them', translationUr: 'میں قبول فرماتا ہوں ان کی توبہ' },
      { arabic: 'وَأَنَا التَّوَّابُ الرَّحِيمُ', transliteration: 'wa ana at-Tawwabu ar-Raheem', translationEn: 'and I am the Accepter of Repentance, Merciful', translationUr: 'اور میں ہی بڑا توبہ قبول فرمانے والا، نہایت رحم والا ہوں' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۶۰ - سچی توبہ کی تین لازمی شرائط

۱. رحمت کے دروازے کی کشادگی:
پچھلی آیت میں لعنت کے سخت ترین اعلان کے فوراً بعد اللہ تعالیٰ نے اپنی صفتِ رحمت و مغفرت کا دروازہ کھول دیا۔ کتنا ہی بڑا گناہ گار اور کتمانِ حق کرنے والا کیوں نہ ہو، اگر وہ سچے دل سے رجوع کرے تو اللہ معاف فرما دیتے ہیں۔

۲. توبہ کی تین بنیادی شرائط:
- تَابُوا (توبہ کرنا): اپنے سابقہ گناہ پر دل سے شرمندہ ہونا اور آئندہ نہ کرنے کا پختہ عزم کرنا۔
- أَصْلَحُوا (اصلاح کرنا): اپنے عقائد، معاملات اور عملی زندگی کو شریعت کے مطابق سنوارنا۔
- بَيَّنُوا (کھول کر بیان کرنا): جس حق کو پہلے چھپایا تھا یا جس میں تحریف کی تھی، اب اسی کے برعکس سرِ عام حق کا اعلان کرنا تاکہ جو لوگ ان کے مغالطے سے گمراہ ہوئے تھے ان کی اصلاح ہو سکے۔

۳. "وَأَنَا التَّوَّابُ الرَّحِيمُ":
اللہ تعالیٰ صرف توبہ قبول ہی نہیں فرماتا بلکہ اپنے بندے پر دوبارہ اپنی رحمتوں کی بارش فرما دیتا ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 160 - The Three Golden Pillars of Authentic Repentance (Tawbah)

1. Unbounded Divine Mercy:
Immediately following the severe warning against concealing truth, divine compassion opens an expansive door of restoration. No transgression is too monstrous for divine mercy if met with sincere contrition.

2. The Three Conditions for True Rehabilitation:
- Taboo (Repented): Genuine remorse over past deception and abandoning the sin completely.
- Aslahoo (Corrected Themselves): Practical moral and spiritual reform aligning life with righteous conduct.
- Bayyanoo (Made Truth Plain): Publicly declaring the exact truths they formerly obscured, thereby rectifying the ideological harm inflicted on those they had misled.

3. "At-Tawwabu ar-Raheem":
The divine name 'At-Tawwab' signifies that Allah constantly turns towards His servants with forgiveness, turning their past sorrow into spiritual elevation.`
  },

  161: {
    arabic: 'إِنَّ الَّذِينَ كَفَرُوا وَمَاتُوا وَهُمْ كُفَّارٌ أُولَٰئِكَ عَلَيْهِمْ لَعْنَةُ اللَّهِ وَالْمَلَائِكَةِ وَالنَّاسِ أَجْمَعِينَ',
    translationUr: 'بے شک جن لوگوں نے کفر کیا اور کفر ہی کی حالت میں مر گئے، یہی وہ لوگ ہیں جن پر اللہ کی لعنت ہے، اور فرشتوں کی اور تمام انسانوں کی لعنت ہے۔',
    translationEn: 'Indeed, those who disbelieve and die while they are disbelievers - upon them will be the curse of Allah and of the angels and the people, all together,',
    words: [
      { arabic: 'إِنَّ الَّذِينَ كَفَرُوا', transliteration: 'Inna allatheena kafaroo', translationEn: 'Indeed those who disbelieved', translationUr: 'بے شک جن لوگوں نے کفر کیا' },
      { arabic: 'وَمَاتُوا', transliteration: 'wa matoo', translationEn: 'and died', translationUr: 'اور وہ مر گئے' },
      { arabic: 'وَهُمْ كُفَّارٌ', transliteration: 'wa hum kuffarun', translationEn: 'while they were disbelievers', translationUr: 'اس حال میں کہ وہ کافر ہی تھے' },
      { arabic: 'أُولَٰئِكَ عَلَيْهِمْ', transliteration: 'oola\'ika \'alayhim', translationEn: 'those upon them', translationUr: 'یہی لوگ ہیں جن پر' },
      { arabic: 'لَعْنَةُ اللَّهِ', transliteration: 'la\'natu Allahi', translationEn: 'is the curse of Allah', translationUr: 'اللہ کی لعنت ہے' },
      { arabic: 'وَالْمَلَائِكَةِ', transliteration: 'wal-mala\'ikati', translationEn: 'and the angels', translationUr: 'اور فرشتوں کی' },
      { arabic: 'وَالنَّاسِ أَجْمَعِينَ', transliteration: 'wan-nasi ajma\'een', translationEn: 'and of all people together', translationUr: 'اور تمام انسانوں کی' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۶۱ - خاتمہ بالکفر کا بھیانک انجام اور لعنتِ عامہ

۱. اصل فیصلہ خاتمے پر ہے:
آیت میں واضح فرمایا کہ کفر پر دائمی لعنت اور جہنم کا فیصلہ اس وقت ہوتا ہے جب انسان کفر ہی کی حالت میں موت کی دہلیز پار کر جائے ("وَمَاتُوا وَهُمْ كُفَّارٌ")۔
اگر کسی شخص نے زندگی بھر کفر کیا مگر مرنے سے پہلے سچے دل سے توبہ کر کے اسلام قبول کر لیا تو اس کے تمام سابقہ گناہ معاف ہو جاتے ہیں۔ اصل اعتبار خاتمہ بالخیر کا ہے۔

۲. تمام کائنات کی لعنت:
کفر پر مرنے والے بدبختوں پر روزِ قیامت اللہ، مقرب فرشتے اور خود انسانوں کی اکثریت لعنت بھیجے گی، یہاں تک کہ خود کفار اور ان کے باطل پیشوا بھی جہنم میں ایک دوسرے پر لعنتیں برسائیں گے۔

۳. فقہی مسئلہ (کسی معین کافر پر لعنت کا حکم):
زندہ کافر کو نام لے کر لعنت کرنا جائز نہیں، کیونکہ ہو سکتا ہے کہ موت سے پہلے اسے ایمان نصیب ہو جائے۔ البتہ بالعموم کفار یا ظالمین پر لعنت کرنا، یا ان پر جن کے کفر پر مرنے کی خبر قرآن و حدیث نے دی ہے (جیسے ابو لہب، فرعون، نمرود) جائز ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 161 - The Catastrophic Fate of Dying in Unbelief and Universal Condemnation

1. The Decisive Factor of the Final End (Khatimah):
The divine decree of perpetual damnation attaches specifically to those who persist in denial and die in that state ("and died while they were disbelievers"). If an individual spent decades in idolatry but embraced sincere faith before death, their previous sins are extinguished. The ultimate criterion is the state of the soul at departure.

2. Universal Curse on the Day of Reckoning:
On the Day of Judgment, the divine curse is reinforced by the consensus of angels and the assembly of humanity. Even deniers in Hell will curse the false leaders who misled them.

3. Jurisprudential Note Regarding Cursing Individuals:
Jurists note that one should not curse a specific living non-Muslim by name, because their future outcome remains unknown; they might receive guidance and accept Islam. One may, however, curse injustice and disbelief generally, or specific historical tyrants whose demise in infidelity is scripturally confirmed (e.g., Pharaoh, Abu Lahab).`
  },

  162: {
    arabic: 'خَالِدِينَ فِيهَا ۖ لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنظَرُونَ',
    translationUr: 'وہ ہمیشہ اسی (لعنت اور جہنم کے عذاب) میں رہیں گے، نہ ان سے عذاب ہلکا کیا جائے گا اور نہ انہیں مہلت دی جائے گی۔',
    translationEn: 'Abiding eternally therein. The punishment will not be lightened for them, nor will they be reprieved.',
    words: [
      { arabic: 'خَالِدِينَ فِيهَا', transliteration: 'Khalideena feeha', translationEn: 'Abiding eternally in it', translationUr: 'ہمیشہ رہیں گے اس میں' },
      { arabic: 'لَا يُخَفَّفُ', transliteration: 'la yukhaffafu', translationEn: 'will not be lightened', translationUr: 'نہیں ہلکا کیا جائے گا' },
      { arabic: 'عَنْهُمُ الْعَذَابُ', transliteration: '\'anhumu al-\'athabu', translationEn: 'from them the punishment', translationUr: 'ان سے عذاب' },
      { arabic: 'وَلَا هُمْ يُنظَرُونَ', transliteration: 'wa la hum yunzaron', translationEn: 'nor will they be reprieved', translationUr: 'اور نہ ہی انہیں کوئی مہلت دی جائے گی' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۶۲ - عذابِ جہنم کی ابدیت اور مہلت کا خاتمہ

۱. جہنم کا دائمی عذاب:
اہلِ کفر کے لیے عذابِ جہنم کبھی ختم نہیں ہوگا ("خَالِدِينَ فِيهَا")۔ ان کی یہ تمنا کہ ایک دن کے لیے بھی عذاب ہلکا کر دیا جائے، سختی سے رد کر دی جائے گی، جیسا کہ سورۃ غافر میں فرمایا: "وَقَالَ الَّذِينَ فِي النَّارِ لِخَزَنَةِ جَهَنَّمَ ادْعُوا رَبَّكُمْ يُخَفِّفْ عَنَّا يَوْمًا مِّنَ الْعَذَابِ... فَمَا دُعَاءُ الْكَافِرِينَ إِلَّا فِي ضَلَالٍ"۔

۲. "وَلَا هُمْ يُنظَرُونَ" کی حقیقت:
دنیا مہلت اور توبہ کی جگہ تھی، موت کے بعد کوئی مہلت، معذرت یا تاخیر قبول نہیں کی جائے گی۔ انصاف کا ترازو قطعی طور پر قائم ہو چکا ہوگا۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 162 - The Eternity of Retribution and Total Absence of Reprieve

1. Perpetual Remorse Without Mitigation:
For unrepentant rejectors of divine truth, the retribution of the Fire is eternal ("Khalideena feeha"). Their desperate pleas for even a single day of reduced agony will be decisively rejected, as Surah Ghafir affirms: "And those in the Fire will say to the keepers of Hell, 'Pray to your Lord to lighten for us a day from the punishment!' But the supplication of the disbelievers is only in futility."

2. No Postponement or Second Chance:
"Nor will they be reprieved": The earthly sphere was the arena of respite and moral trial. Once the veil of eternity lifts, probation ends, and absolute justice is irreversibly executed.`
  },

  163: {
    arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
    translationUr: 'اور تمہارا معبود صرف ایک ہی معبود ہے، اس کے سوا کوئی معبود (برحق) نہیں، وہ نہایت مہربان، بے حد رحم فرمانے والا ہے۔',
    translationEn: 'And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.',
    words: [
      { arabic: 'وَإِلَٰهُكُمْ', transliteration: 'Wa ilahukum', translationEn: 'And your God', translationUr: 'اور تمہارا معبود' },
      { arabic: 'إِلَٰهٌ وَاحِدٌ', transliteration: 'ilahun wahid', translationEn: 'is One God', translationUr: 'ایک ہی معبود ہے' },
      { arabic: 'لَّا إِلَٰهَ', transliteration: 'la ilaha', translationEn: 'there is no deity', translationUr: 'نہیں ہے کوئی معبود' },
      { arabic: 'إِلَّا هُوَ', transliteration: 'illa huwa', translationEn: 'except Him', translationUr: 'سوائے اس کے' },
      { arabic: 'الرَّحْمَٰنُ', transliteration: 'ar-Rahmanu', translationEn: 'the Entirely Merciful', translationUr: 'جو بہت بڑا مہربان' },
      { arabic: 'الرَّحِيمُ', transliteration: 'ar-Raheem', translationEn: 'the Especially Merciful', translationUr: 'نہایت رحم فرمانے والا ہے' }
    ],
    tafseerUr: `تفسیر معارف القرآن (مفتی محمد شفیع رحمہ اللہ):
سورۃ البقرہ آیت ۱۶۳ - کلمہ توحید، اسمِ اعظم، اور رحمٰن و رحیم کی صفات

۱. توحیدِ خالص کا اعلان:
کفر و شرک کی تمام تاریکیوں کی تردید کے بعد یہ آیت قرآن مجید کا مرکزی ترین پیغام سناتی ہے کہ کائنات کی ہر شے کا معبودِ برحق، خالق، مالک، رازق اور حاجت روا صرف اور صرف ایک ہی ذاتِ بابرکات ہے، جس کی ذات اور صفات میں کوئی شریک یا ہمسر نہیں۔

۲. اسمِ اعظم کی برکت:
سنن ابوداؤد اور ترمذی شریف کی صحیح حدیث میں حضرت اسماء بنت یزید رضی اللہ عنہا سے مروی ہے کہ نبی کریم ﷺ نے فرمایا: "اللہ کا اسمِ اعظم ان دو آیتوں میں ہے: ایک سورۃ البقرہ کی یہ آیت: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ'، اور دوسری سورۃ آل عمران کی ابتدائی آیت: 'الم اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ'"۔ اس کلمے کے واسطے سے کی جانے والی دعا اللہ کے ہاں رد نہیں ہوتی۔

۳. رحمٰن اور رحیم کا امتزاج:
معبودِ برحق کو 'الرَّحْمَٰنُ الرَّحِيمُ' کے ساتھ متصف کر کے مخلوق کو تسلی دی گئی کہ وہ جبار و قہار ہی نہیں بلکہ اپنی مخلوق پر ماں سے بھی ہزاروں گنا زیادہ شفیق، رحیم اور مہربان ہے۔`,
    tafseerEn: `Ma'ariful Qur'an Comprehensive Exegesis (Grand Mufti Muhammad Shafi r.a.):
Surah Al-Baqarah Ayah 163 - The Cardinal Declaration of Tawhid and the Supreme Name (Ism al-A'zam)

1. The Foundational Keystone of Monotheism:
Displacing all polytheistic and idolatrous constructs, this verse declares pure unadulterated Tawhid: the Sole Deity deserving of adoration, worship, and absolute obedience is One, Unique, and without peer or partner in His essence, attributes, or actions.

2. Presence of the Supreme Name of Allah (Ism al-A'zam):
In an authentic Hadith recorded by Abu Dawud and al-Tirmidhi, the Prophet ﷺ stated: "The Greatest Name of Allah (Ism al-A'zam) is contained in these two verses: Ayah 163 of Surah Al-Baqarah ('And your God is one God; there is no deity except Him, the Entirely Merciful, the Especially Merciful') and the opening of Surah Ali 'Imran ('Alif-Lam-Meem. Allah, there is no deity except Him, the Ever-Living, the Sustainer of all existence')." Supplications invoked through this formula meet divine acceptance.

3. The Twin Ocean of Mercy (Ar-Rahman, Ar-Raheem):
Coupling absolute sovereignty with infinite benevolence assures humanity that the Almighty's dominant character toward His creation is boundless grace and tender compassion.`
  }
};
