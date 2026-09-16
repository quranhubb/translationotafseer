import { Ayah, AyahQA, AyahActionItem } from '../types';

// Curated Easy Q&A Map for Surah Al-Fatiha & Al-Baqarah (Para 1)
const CURATED_QA_MAP: Record<string, AyahQA[]> = {
  // Surah Al-Fatiha (1:1 to 1:7)
  '1:1': [
    {
      questionUr: 'بسم اللہ شریف میں اللہ تعالیٰ کے کون سے تین مبارک نام آئے ہیں؟',
      answerUr: 'اس میں تین اسمائے حسنیٰ آئے ہیں: (۱) "اللہ" جو ذاتِ باری تعالیٰ کا خاص ذاتی نام ہے، (۲) "الرحمن" جو دنیا میں تمام مخلوقات پر عام رحمت فرمانے والا ہے، اور (۳) "الرحیم" جو آخرت میں مؤمنوں پر خاص رحم فرمانے والا ہے۔',
      questionEn: 'Which three divine names of Allah are mentioned in Bismillah?',
      answerEn: '1. "Allah" (the supreme personal name), 2. "Ar-Rahman" (All-Merciful to all creation in this world), and 3. "Ar-Raheem" (Especially Merciful to believers in the Hereafter).'
    },
    {
      questionUr: 'ہر کام شروع کرنے سے پہلے بسم اللہ پڑھنے کا کیا فائدہ ہے؟',
      answerUr: 'ہر جائز اور اچھے کام کے آغاز میں بسم اللہ پڑھنے سے کام میں اللہ تعالیٰ کی برکت اور مدد شامل ہو جاتی ہے اور شیطان کا دخل ختم ہو جاتا ہے۔',
      questionEn: 'What is the benefit of reciting Bismillah before starting any action?',
      answerEn: 'It brings divine blessings (Barakah) and protection into the task and prevents the disruption of Satan.'
    }
  ],
  '1:2': [
    {
      questionUr: 'تمام تعریفیں اور شکر صرف اللہ تعالیٰ کے لیے ہی کیوں مخصوص ہیں؟',
      answerUr: 'کیونکہ کائنات میں جس کسی چیز یا انسان میں جو بھی اچھائی، خوبصورتی یا کمال پایا جاتا ہے، وہ سب اللہ ہی کا پیدا کردہ اور اسی کا عطا کردہ ہے۔',
      questionEn: 'Why do all praises and gratitude belong exclusively to Allah?',
      answerEn: 'Because every form of goodness, virtue, and beauty in creation is purely a gift and creation of Allah.'
    },
    {
      questionUr: 'اللہ تعالیٰ کے نام "رَبِّ الْعَالَمِينَ" کا کیا مطلب ہے؟',
      answerUr: '"رب" کا مطلب ہے وہ ذات جو تمام جہانوں (انسان، فرشتے، چرند، پرند وغیرہ) کو پیدا کرے اور انہیں بتدریج کمال تک پہنچانے کے لیے پالے۔',
      questionEn: 'What is the meaning of "Rabb al-Alameen"?',
      answerEn: '"Rabb" means the Creator, Cherisher, and Sustainer who nurtures all realms of creation stage by stage.'
    }
  ],
  '1:3': [
    {
      questionUr: '"الرحمن الرحیم" کو رب العالمین کے بعد دوبارہ لانے کی کیا حکمت ہے؟',
      answerUr: 'تاکہ بندے کے دل میں یہ بات بیٹھ جائے کہ اللہ تعالیٰ کی بادشاہت اور حاکمیت سختی اور جبر والی نہیں بلکہ سراپا رحمت، شفقت اور محبت پر مبنی ہے۔',
      questionEn: 'What is the wisdom of repeating "Ar-Rahman Ar-Raheem" after "Rabb al-Alameen"?',
      answerEn: 'To reassure believers that Allah\'s lordship is anchored in infinite tenderness, compassion, and divine love rather than harshness.'
    }
  ],
  '1:4': [
    {
      questionUr: '"یوم الدین" سے کون سا دن مراد ہے اور اللہ کو اس کا مالک کیوں کہا گیا؟',
      answerUr: 'یوم الدین سے مراد قیامت کا دن ہے جب تمام اعمال کا بدلہ دیا جائے گا۔ اس دن ظاہری دنیاوی بادشاہتیں بھی ختم ہو جائیں گی اور صرف اللہ کا راج واضح ہوگا۔',
      questionEn: 'What does "Yawm ad-Deen" mean, and why is Allah called its Master?',
      answerEn: 'It refers to the Day of Judgment. On that Day, all temporary worldly authority vanishes, and Allah\'s absolute sovereignty is fully manifested.'
    }
  ],
  '1:5': [
    {
      questionUr: '"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" کا آسان مفہوم کیا ہے؟',
      answerUr: 'ہم صرف اور صرف اکیلے اللہ کی عبادت کرتے ہیں اور زندگی کی ہر حاجت اور مشکل میں غیبی اور حقیقی مدد بھی صرف اسی سے مانگتے ہیں۔',
      questionEn: 'What is the simple meaning of "Iyyaka Na\'budu wa Iyyaka Nasta\'een"?',
      answerEn: 'We worship Allah alone with total sincerity, and we seek supernatural and ultimate help exclusively from Him.'
    },
    {
      questionUr: 'اس آیت میں پہلے عبادت کا ذکر اور بعد میں مدد مانگنے کا ذکر کیوں ہے؟',
      answerUr: 'کیونکہ دعا اور مدد مانگنے سے پہلے اللہ کی عبادت اور بندگی کا واسطہ پیش کرنا دعا کی قبولیت کا سب سے بہترین ادب اور ذریعہ ہے۔',
      questionEn: 'Why is worship mentioned before seeking help?',
      answerEn: 'Because offering devotion and submission first is the most noble prerequisite for having one\'s prayers answered.'
    }
  ],
  '1:6': [
    {
      questionUr: '"صراطِ مستقیم" کا آسان الفاظ میں کیا مطلب ہے؟',
      answerUr: 'صراطِ مستقیم سے مراد وہ سیدھا، سچا اور معتدل راستہ ہے جو قرآن پاک اور نبی کریم ﷺ کی سنت مبارکہ پر مبنی ہو اور انسان کو اللہ کی خوشنودی اور جنت تک پہنچائے۔',
      questionEn: 'What is the meaning of "Sirat al-Mustaqeem" (The Straight Path)?',
      answerEn: 'It is the balanced, righteous path of the Quran and the Sunnah of the Prophet ﷺ that leads to Allah\'s pleasure and Paradise.'
    },
    {
      questionUr: 'جب مسلمان پہلے سے ایمان پر ہے تو وہ ہر نماز کی ہر رکعت میں ہدایت کی دعا کیوں مانگتا ہے؟',
      answerUr: 'تاکہ اللہ تعالیٰ اسے ہمیشہ ایمان پر قائم اور ثابت قدم (استقامت) رکھے، اور زندگی کے ہر نئے پیش آنے والے معاملے اور فیصلے میں صحیح رہنمائی فرمائے۔',
      questionEn: 'Why do Muslims repeatedly pray for guidance in every single Rak\'ah?',
      answerEn: 'To ask Allah for steadfastness (Istiqamah) on faith until the last breath and for guidance in every daily decision.'
    }
  ],
  '1:7': [
    {
      questionUr: '"جن پر اللہ نے انعام فرمایا" (انعمت علیہم) سے کون لوگ مراد ہیں؟',
      answerUr: 'قرآن مجید کے مطابق انعام یافتہ چار مبارک گروہ ہیں: (۱) انبیاء کرام، (۲) صدیقین (سچے لوگ)، (۳) شہداء (جان قربان کرنے والے)، اور (۴) صالحین (نیک اعمال والے)۔',
      questionEn: 'Who are those favored by Allah ("An\'amta alayhim")?',
      answerEn: 'The four blessed categories: The Prophets, the Truthful (Siddiqeen), the Martyrs (Shuhada), and the Righteous (Saliheen).'
    },
    {
      questionUr: '"مغضوب علیہم" اور "ضالین" سے کون سے لوگ مراد ہیں؟',
      answerUr: '"مغضوب علیہم" وہ ہیں جنہوں نے سچائی جاننے کے باوجود ہٹ دھرمی سے مخالفت کی، اور "ضالین" وہ ہیں جو لاعلمی یا دینی احکام میں حد سے بڑھ کر گمراہ ہو گئے۔',
      questionEn: 'Who are those who earned wrath ("Maghdoob") and those astray ("Dalleen")?',
      answerEn: '"Maghdoob" are those who recognized truth but obstinately rejected it, while "Dalleen" strayed through ignorance and religious distortion.'
    }
  ],

  // Surah Al-Baqarah (Selected Verses)
  '2:1': [
    {
      questionUr: '"الم" (حروفِ مقطعات) سے کیا مراد ہے اور ان کے بارے میں ہمارا کیا عقیدہ ہونا چاہیے؟',
      answerUr: 'یہ وہ حروف ہیں جن کا اصل راز و مفہوم اللہ اور اس کے رسول ﷺ کے درمیان خاص ہے، ہمارا عقیدہ یہ ہے کہ یہ برحق کلامِ الٰہی ہیں اور ہم ان پر ایمان لاتے ہیں۔',
      questionEn: 'What are the Huruf al-Muqatta\'at (like Alif-Lam-Meem)?',
      answerEn: 'They are divine mysteries whose exact meaning is with Allah, and believers affirm unwavering faith in them as revealed truth.'
    }
  ],
  '2:2': [
    {
      questionUr: '"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ" کا کیا مطلب ہے؟',
      answerUr: 'اس کا مطلب ہے کہ قرآن مجید اللہ کی بھیجی ہوئی ایسی عظیم کتاب ہے جس کی صداقت، سچائی اور حقانیت میں کوئی شک و شبہ کی گنجائش نہیں۔',
      questionEn: 'What does "Dhalika al-Kitabu la rayba feeh" mean?',
      answerEn: 'It means the Holy Quran is a divine, preserved revelation completely free from any doubt, error, or falsehood.'
    },
    {
      questionUr: 'قرآن پاک سے ہدایت سب سے زیادہ کن لوگوں کو نصیب ہوتی ہے؟',
      answerUr: 'متقین (اللہ سے ڈرنے اور گناہوں سے بچنے والوں) کو، کیونکہ ان کے دل میں سچائی کو تلاش کرنے اور اس پر عمل کرنے کا جذبہ ہوتا ہے۔',
      questionEn: 'Who benefits most from the guidance of the Quran?',
      answerEn: 'The Muttaqeen (the God-conscious and pious), because their hearts are sincere and ready to act upon divine truth.'
    }
  ],
  '2:3': [
    {
      questionUr: 'اس آیت میں متقی اور پرہیزگار لوگوں کی کون سی تین بنیادی خوبیاں بتائی گئی ہیں؟',
      answerUr: '(۱) بن دیکھے غیب (اللہ، فرشتے، آخرت) پر ایمان لانا، (۲) نماز کو پابندی اور خشوع کے ساتھ قائم کرنا، اور (۳) اللہ کے دیے ہوئے رزق میں سے اس کی راہ میں خرچ کرنا۔',
      questionEn: 'Which three fundamental virtues of the pious are mentioned in this verse?',
      answerEn: '1. Believing in the unseen (Ghayb), 2. Establishing prayer punctually, and 3. Spending charity out of Allah\'s provisions.'
    },
    {
      questionUr: 'نماز صرف پڑھنے اور "نماز قائم کرنے" میں کیا فرق ہے؟',
      answerUr: 'نماز قائم کرنے کا مطلب ہے کہ نماز کو اس کے تمام فرائض، شرائط، سنتوں، باجماعت ادائیگی اور دل کے دھیان و عاجزی (خشوع) کے ساتھ باقاعدگی سے ادا کیا جائے۔',
      questionEn: 'What is the difference between simply praying and "establishing prayer"?',
      answerEn: 'Establishing prayer means performing it consistently, on time, in congregation, with all proper requirements and inner mindfulness.'
    }
  ],
  '2:4': [
    {
      questionUr: 'ایک سچے مسلمان کے لیے پچھلی آسمانی کتابوں پر ایمان لانا کیوں ضروری ہے؟',
      answerUr: 'کیونکہ تمام آسمانی کتابیں (تورات، زبور، انجیل وغیرہ) اللہ ہی کی طرف سے نازل ہوئی تھیں، اگرچہ اب ان کے تمام احکام قرآن مجید کے ذریعے مکمل ہو چکے ہیں۔',
      questionEn: 'Why must a believer have faith in prior divine scriptures?',
      answerEn: 'Because all original divine books were revealed by Allah, culminating in the final, complete message of the Quran.'
    }
  ],
  '2:5': [
    {
      questionUr: 'کامیاب اور فلاح پانے والے لوگ کون ہیں؟',
      answerUr: 'وہ لوگ جو اپنے رب کی دی ہوئی ہدایت پر چلتے ہیں اور جن کے اندر ایمان، نماز، صدقہ اور آخرت پر پختہ یقین کے اوصاف پائے جاتے ہیں۔',
      questionEn: 'Who are the truly successful ones mentioned in this verse?',
      answerEn: 'Those who follow divine guidance and embody true faith, prayer, charity, and certainty in the Day of Judgment.'
    }
  ],
  '2:6': [
    {
      questionUr: 'اس آیت میں جن کافروں کا ذکر ہے وہ کیوں نصیحت قبول نہیں کرتے؟',
      answerUr: 'کیونکہ انہوں نے ہٹ دھرمی، تکبر اور ضد کی وجہ سے سچائی کو ماننے سے قطعی انکار کر دیا، جس کی وجہ سے ان پر ڈرانے یا نہ ڈرانے کا اثر نہیں ہوتا۔',
      questionEn: 'Why do stubborn disbelievers ignore prophetic warnings?',
      answerEn: 'Because of obstinate arrogance and deliberate refusal to accept truth, rendering warnings ineffective upon their closed hearts.'
    }
  ],
  '2:7': [
    {
      questionUr: 'دلوں اور کانوں پر "مہر لگ جانے" کا کیا مطلب ہے؟',
      answerUr: 'جب کوئی انسان مسلسل اور جان بوجھ کر حق کا انکار اور گناہ کرتا رہے تو سزا کے طور پر اس کے دل سے حق کو سمجھنے اور قبول کرنے کی صلاحیت چھن جاتی ہے۔',
      questionEn: 'What does "sealing of the hearts and hearing" signify?',
      answerEn: 'As a consequence of persistent, deliberate defiance of truth, their spiritual receptors become hardened and unresponsive to guidance.'
    }
  ],
  '2:8': [
    {
      questionUr: 'منافق (Hypocrite) کسے کہتے ہیں؟',
      answerUr: 'منافق وہ شخص ہے جو زبان سے تو کہے کہ میں اللہ اور آخرت پر ایمان لایا ہوں لیکن اس کے دل میں کفر، جھوٹ اور کھوٹ چھپا ہوا ہو۔',
      questionEn: 'Who is a hypocrite (Munafiq)?',
      answerEn: 'A person who outwardly claims faith with the tongue while concealing disbelief and deceit in the heart.'
    }
  ],
  '2:11': [
    {
      questionUr: 'منافقین اپنے فساد اور برے کاموں کو کیا نام دیتے تھے؟',
      answerUr: 'وہ کہتے تھے کہ ہم تو فساد نہیں پھیلا رہے بلکہ اصلاح اور امن قائم کرنے والے لوگ ہیں، یعنی وہ اپنی برائی کو اچھائی سمجھ کر دھوکے میں تھے۔',
      questionEn: 'How did hypocrites justify their corruption?',
      answerEn: 'They deceptively claimed they were only peacemakers and social reformers.'
    }
  ],
  '2:13': [
    {
      questionUr: '"کما آمن الناس" میں "الناس" سے کون لوگ مراد ہیں؟',
      answerUr: 'مفسرین کے مطابق یہاں "الناس" سے مراد رسول اللہ ﷺ کے صحابہ کرام رضی اللہ عنہم ہیں، جن کا ایمان تمام انسانوں کے لیے سچے ایمان کا معیار ہے۔',
      questionEn: 'Who does "An-Nas" (the people) refer to in this verse?',
      answerEn: 'It refers to the noble Companions (Sahabah), whose sincere faith is established as the timeless standard for all believers.'
    }
  ],
  '2:21': [
    {
      questionUr: 'قرآن مجید کا سب سے پہلا عمومی حکم (امر) کون سا ہے؟',
      answerUr: 'پوری انسانیت کو اپنے خالق و مالک رب کی خالص بندگی و عبادت کرنے کا حکم دیا گیا ہے تاکہ وہ تقویٰ اور پرہیزگاری حاصل کر سکیں۔',
      questionEn: 'What is the very first universal commandment in the Quran?',
      answerEn: 'The command directed to all mankind to worship their Creator and Lord in absolute Monotheism (Tawheed).'
    }
  ],
  '2:22': [
    {
      questionUr: 'اس آیت میں اللہ تعالیٰ نے اپنی کن عظیم نعمتوں کا ذکر فرمایا ہے؟',
      answerUr: 'زمین کو بچھونا بنانا، آسمان کو محفوظ چھت بنانا، بارش برسانا اور اس سے مختلف قسم کے لذیذ پھل اور اناج انسانوں کے رزق کے لیے پیدا فرمانا۔',
      questionEn: 'Which divine bounties are highlighted in verse 22?',
      answerEn: 'Spreading the earth as a resting place, raising the sky as a canopy, sending rain, and bringing forth fruits as sustenance.'
    }
  ],
  '2:23': [
    {
      questionUr: 'قرآن مجید نے منکرین اور شک کرنے والوں کو کیا چیلنج دیا؟',
      answerUr: 'فرمایا کہ اگر تمہیں اس کلام کے اللہ کی طرف سے ہونے میں ذرا بھی شک ہے تو تم اپنے تمام مددگاروں کے ساتھ مل کر اس جیسی کوئی ایک چھوٹی سی سورت ہی بنا کر لا دکھاؤ۔',
      questionEn: 'What challenge did the Quran give to skeptics and deniers?',
      answerEn: 'To produce even a single chapter (Surah) resembling the Quran\'s divine wisdom and eloquence, calling upon any witnesses or supporters besides Allah.'
    },
    {
      questionUr: 'اللہ تعالیٰ نے پیارے نبی ﷺ کو "عَبْدِنَا" (ہمارا بندہ) کیوں فرمایا؟',
      answerUr: 'کیونکہ اللہ تعالیٰ کی مخلصانہ بندگی اور اطاعت انسان کا بلند ترین روحانی مقام اور شرف ہے، اور اللہ نے اپنے رسول کو اپنے ساتھ منسوب کر کے کمالِ محبت اور سچی نبوت کی تصدیق فرمائی۔',
      questionEn: 'Why did Allah address Prophet Muhammad ﷺ as "Abdina" (Our Servant)?',
      answerEn: 'Because wholehearted servitude to Allah is the highest rank of human spiritual honor, and Allah affirmed His profound love and the divine authenticity of his prophethood.'
    },
    {
      questionUr: 'لفظ "نَزَّلْنَا" (تنزیل) میں کیا خاص الٰہی حکمت ہے؟',
      answerUr: 'قرآن 23 سال کے طویل عرصے میں تھوڑا تھوڑا کر کے نازل ہوا، اور اس کے باوجود اس کی تمام سورتوں میں کامل ربط، فصاحت اور سچائی ہے، کہیں کوئی تضاد یا کمزوری نہیں پائی جاتی۔',
      questionEn: 'What divine wisdom is encapsulated in the word "Nazzalna" (gradual revelation)?',
      answerEn: 'The Quran was revealed incrementally over 23 years, yet maintains absolute structural harmony, eloquence, and divine truth without a single flaw or contradiction.'
    },
    {
      questionUr: 'کیا چودہ سو سال کی تاریخ میں کوئی انسان قرآن جیسی ایک چھوٹی سورت بھی بنا سکا؟',
      answerUr: 'ہرگز نہیں! چودہ سو سال سے آج تک کوئی بھی شاعر، ادیب، فلسفی یا سائنسدان اس چیلنج کا جواب نہیں دے سکا، جو اس بات کا قطعی ثبوت ہے کہ قرآن اللہ کا سچا کلام ہے۔',
      questionEn: 'Has anyone in 1,400 years succeeded in matching the Quran\'s challenge?',
      answerEn: 'Never! For over 1,400 years, not a single literary master or skeptic has matched even the shortest Surah, proving the Quran is the eternal, inimitable Word of Allah.'
    }
  ],
  '2:24': [
    {
      questionUr: 'جہنم کی آگ کا ایندھن کیا چیزیں ہیں؟',
      answerUr: 'جہنم کا ایندھن انسان اور پتھر ہیں۔ انسان وہ جنہوں نے جان بوجھ کر حق کا انکار کیا، اور پتھر وہ جن کے وہ بت تراش کر پوجتے تھے۔',
      questionEn: 'What is the fuel of the Hellfire mentioned in Verse 24?',
      answerEn: 'The fuel is men and stones—those who obstinately rejected the truth and the stones/idols they worshipped instead of Allah.'
    },
    {
      questionUr: 'اللہ تعالیٰ کے فرمان "وَلَن تَفْعَلُوا" (اور تم ہرگز کبھی نہ کر سکو گے) میں کیا معجزہ ہے؟',
      answerUr: 'یہ قرآن کی سچی پیشگوئی ہے کہ قیامت تک تمام انسان اور جنات مل کر بھی قرآن کی ایک چھوٹی سورت جیسا کلام نہیں لا سکیں گے، اور چودہ سو سال سے یہ دعویٰ سچ ثابت ہے۔',
      questionEn: 'What prophetic miracle is contained in the phrase "wa lan taf\'aloo" (and you will never be able to)?',
      answerEn: 'It is a permanent divine prophecy that humanity will never be able to produce the like of the Quran, a fact proven true throughout history.'
    },
    {
      questionUr: 'اس آیت سے ہمیں اپنی روزمرہ زندگی میں کیا عملی نصیحت ملتی ہے؟',
      answerUr: 'ضد اور انا کو چھوڑ کر سچائی کے آگے جھک جانا چاہیے اور نیک اعمال کر کے خود کو جہنم کی آگ سے بچانا چاہیے۔',
      questionEn: 'What practical lesson does Verse 24 teach us?',
      answerEn: 'To abandon arrogance and stubbornness, embrace truth humbly, and protect oneself from spiritual ruin through sincere faith and good deeds.'
    }
  ],
  '2:25': [
    {
      questionUr: 'اہلِ ایمان اور نیک عمل کرنے والوں کے لیے جنت میں کن نعمتوں کی خوشخبری دی گئی ہے؟',
      answerUr: 'ایسے سرسبز باغات جن کے نیچے میٹھی نہریں بہتی ہیں، لذیذ اور پاکیزہ پھل، پاک صاف جوڑے اور ہمیشہ کی پرسکون زندگی۔',
      questionEn: 'What glad tidings are promised to the believers who do righteous deeds in Verse 25?',
      answerEn: 'Gardens beneath which rivers flow, delightful fruits, purified companions, and eternal peace and happiness in Paradise.'
    },
    {
      questionUr: 'اہلِ جنت پھل دیکھ کر کیوں کہیں گے کہ "یہ تو وہی ہے جو ہمیں پہلے ملا تھا"؟',
      answerUr: 'کیونکہ وہ پھل دیکھنے میں دنیا کے پھلوں سے مشابہ ہوں گے تاکہ اپنائیت رہے، لیکن ان کا ذائقہ، خوشبو اور لذت دنیا سے بے انتہا زیادہ اعلیٰ ہو گی۔',
      questionEn: 'Why will the inhabitants of Paradise say "This is what we were provided with before"?',
      answerEn: 'Because the fruits will bear familiar, beautiful resemblances to worldly fruits, yet their sublime taste, fragrance, and delight will be incomparably superior.'
    },
    {
      questionUr: '"أَزْوَاجٌ مُّطَہَّرَةٌ" (پاکیزہ جوڑے) سے کیا مراد ہے؟',
      answerUr: 'ایسے ساتھی جو ہر قسم کی ظاہری بیماری، میل کچیل اور باطنی برائیوں جیسے حسد، غصے اور بے وفائی سے بالکل پاک و صاف ہوں گے۔',
      questionEn: 'What is meant by "azwajun mutahharah" (purified spouses)?',
      answerEn: 'Companions completely purified from all physical imperfections, illnesses, and inner spiritual defects like jealousy, anger, or pettiness.'
    },
    {
      questionUr: '"وَهُمْ فِيهَا خَالِدُونَ" میں اہلِ جنت کے لیے کیا سب سے بڑی تسلی ہے؟',
      answerUr: 'کہ جنت کی یہ بے شمار نعمتیں اور خوشیاں عارضی نہیں ہیں، نہ یہ کبھی ختم ہوں گی اور نہ انہیں کبھی جنت سے نکالا جائے گا۔',
      questionEn: 'What supreme comfort is conveyed by "wa hum feeha khalidoon" (abiding eternally)?',
      answerEn: 'The absolute reassurance that the peace and bliss of Paradise will never end, expire, or be taken away.'
    }
  ],
  '2:26': [
    {
      questionUr: 'اللہ تعالیٰ نے مچھر جیسے چھوٹے جاندار کی مثال کیوں بیان فرمائی؟',
      answerUr: 'کیونکہ اللہ تعالیٰ کی قدرت، حکمت اور دستکاری سب سے چھوٹی مخلوق میں بھی اتنی ہی کمال سے نظر آتی ہے جتنی بڑی سے بڑی کہکشاں میں۔ مچھر کے پروں، رگوں اور سونڈ کا باریک نظام اللہ کی عظمت کا زندہ ثبوت ہے۔',
      questionEn: 'Why did Allah present the parable of a small mosquito in Verse 26?',
      answerEn: 'Because divine wisdom and exquisite craftsmanship are as magnificently visible in the microscopic anatomy of a tiny mosquito as in vast cosmic galaxies.'
    },
    {
      questionUr: 'قرآن کی مثالوں پر مؤمن اور دل کے بیمار انسان کے ردعمل میں کیا فرق ہوتا ہے؟',
      answerUr: 'مؤمن مثال کے اندر چھپی سچائی اور گہری حکمت کو پہچان کر ایمان میں مضبوط ہوتے ہیں، جبکہ ہٹ دھرم لوگ فضول اعتراضات اور کٹ حجتی میں الجھ جاتے ہیں۔',
      questionEn: 'How do believers and doubters react differently to the Quran\'s parables?',
      answerEn: 'Believers appreciate the profound truth and wisdom within the examples, while stubborn deniers engage in trivial debates and miss the deeper guidance.'
    },
    {
      questionUr: '"يُضِلُّ بِهِ كَثِيرًا وَيَهْدِي بِهِ كَثِيرًا" کا آسان مفہوم کیا ہے؟',
      answerUr: 'قرآن ایک صاف شفاف آئینے کی طرح ہے: سچی نیت سے آنے والے کو ہدایت ملتی ہے، اور تکبر اور ہٹ دھرمی رکھنے والا اپنے ہی عناد کے سبب گمراہی میں بڑھتا چلا جاتا ہے۔',
      questionEn: 'What is the clear meaning of "He misleads many thereby and guides many thereby"?',
      answerEn: 'The Quran acts as a clear mirror: those seeking truth sincerely find illumination and guidance, while those filled with arrogance and malice veer further into confusion.'
    }
  ],
  '2:27': [
    {
      questionUr: 'آیت 27 میں عہد شکن اور فاسق لوگوں کی کون سی تین برائیاں بیان ہوئی ہیں؟',
      answerUr: '1. اللہ کے ساتھ باندھے ہوئے پکے عہد کو توڑنا، 2. جن رشتوں کو جوڑنے کا حکم تھا انہیں کاٹنا، اور 3. زمین پر فساد اور جھگڑے پھیلانا۔',
      questionEn: 'What three negative traits of the corrupt (Fasiqeen) are highlighted in Verse 27?',
      answerEn: '1. Breaking their solemn covenant with Allah, 2. Severing the ties of kinship and social care Allah ordered to be joined, and 3. Spreading corruption and discord on earth.'
    },
    {
      questionUr: '"مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ" سے ہمیں کیا عملی اخلاقی حکم ملتا ہے؟',
      answerUr: 'صلہ رحمی کا حکم ملتا ہے، یعنی اپنے والدین، بہن بھائیوں، رشتہ داروں اور غریبوں کے ساتھ اچھے تعلقات رکھنا اور ان کے حقوق محبت اور خیر خواہی سے ادا کرنا۔',
      questionEn: 'What practical moral commandment is contained in "what Allah has ordered to be joined"?',
      answerEn: 'Upholding the ties of kinship (Silat ar-Rahim), maintaining compassion with parents, relatives, and neighbors, and fostering unity in the community.'
    },
    {
      questionUr: 'حقیقی گھاٹا اور خسارہ پانے والے (الْخَاسِرُونَ) کون لوگ ہیں؟',
      answerUr: 'وہ لوگ جو دنیا کی جھوٹی چمک اور وقتی فائدے کے لیے اپنے اخلاق، رشتے اور اللہ کے ساتھ اپنا تعلق توڑ کر اپنی ابدی آخرت برباد کر بیٹھتے ہیں۔',
      questionEn: 'Who are the true losers ("al-khasireen") described in Verse 27?',
      answerEn: 'Those who sacrifice their moral integrity, family bonds, and relationship with their Creator for fleeting worldly gains, losing both this world and the Hereafter.'
    }
  ],
  '2:28': [
    {
      questionUr: 'اللہ تعالیٰ نے "كَيْفَ تَكْفُرُونَ بِاللَّهِ" کے ذریعے کس انداز میں انسان کو پکارا ہے؟',
      answerUr: 'ایک بہت پیارے، دوستانہ اور ہوش ربا انداز میں انسان کی عقل کو جھنجھوڑا ہے کہ جس پروردگار نے تمہیں عدم سے زندگی بخشی اور لاتعداد نعمتیں دیں، اس کی ناشکری اور انکار کیسے ممکن ہو سکتا ہے؟',
      questionEn: 'In what tone does Allah ask "How can you disbelieve in Allah" in Verse 28?',
      answerEn: 'In an intimate, loving, and thought-provoking tone, awakening human consciousness to reflect on how one could ever deny the loving Creator who gave life out of nothingness.'
    },
    {
      questionUr: 'آیت 28 میں انسان کی زندگی کے کن چار عظیم مراحل کا ذکر ہے؟',
      answerUr: '1. تم بے جان (معدوم) تھے، 2. اللہ نے دنیا میں تمہیں زندگی بخشی، 3. پھر تمہیں موت دے گا، 4. اور پھر قیامت کے دن دوبارہ زندہ کر کے اپنے حضور بلائے گا۔',
      questionEn: 'Which four major life-stages of human existence are summarized in Verse 28?',
      answerEn: '1. Inanimate non-existence, 2. Creation and life in this worldly realm, 3. Physical death, and 4. Resurrection on the Day of Reckoning to return to Allah.'
    },
    {
      questionUr: '"ثُمَّ إِلَيْهِ تُرْجَعُونَ" کا انسان کی روزمرہ زندگی پر کیا نیک اثر ہونا چاہیے؟',
      answerUr: 'انسان کے دل میں یہ یقین پیدا ہوتا ہے کہ ہم نے آخرکار اپنے مہربان رب کے پاس واپس جانا ہے، اس لیے ہر کام سچائی، نیکی اور دوسروں کی خیر خواہی کے جذبے سے کرنا چاہیے۔',
      questionEn: 'What positive mindset should "then to Him you will be returned" instill in our daily life?',
      answerEn: 'A comforting awareness of accountability before our loving Lord, motivating us to fill each day with kindness, honest dealings, and righteous actions.'
    }
  ],
  '2:29': [
    {
      questionUr: 'اللہ تعالیٰ نے "خَلَقَ لَكُم" فرما کر انسان پر کیا خاص احسان جتایا ہے؟',
      answerUr: 'اللہ تعالیٰ نے زمین کی تمام تر نعمتیں (پھل، اناج، میٹھے پانی، معدنیات اور ہوائیں) خاص انسان کے فائدے، راحت اور زندگی کے لیے پیدا فرمائیں۔',
      questionEn: 'What special favor did Allah emphasize with the words "khalaqa lakum" (created for you)?',
      answerEn: 'Allah uniquely honored human beings by designing and dedicating all the bounties of the earth (water, crops, flora, minerals) for their benefit, nourishment, and comfort.'
    },
    {
      questionUr: 'سات آسمانوں کے محکم نظام سے ہمیں کیا سبق ملتا ہے؟',
      answerUr: 'یہ کہ اتنی وسیع و عریض کائنات بغیر کسی ستون اور بغیر کسی نقص کے کامل توازن کے ساتھ چل رہی ہے، جو اللہ تعالیٰ کی بے مثال کاریگری اور کمالِ قدرت کا زندہ ثبوت ہے۔',
      questionEn: 'What lesson is derived from the architecture of the seven heavens?',
      answerEn: 'That the vast universe operates in perfect cosmic equilibrium without flaws or pillars, bearing testimony to Allah\'s flawless design and supreme omnipotence.'
    },
    {
      questionUr: '"وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ" سے ہمارے دل کو کیا تسلی ملتی ہے؟',
      answerUr: 'یہ کہ ہمارا رب ہماری ہر تکلیف، ہر ضرورت اور ہر چھپی ہوئی دعا سے باخبر ہے اور کائنات کا کوئی بھی ذرہ اس کے علم اور رحمت سے باہر نہیں ہے۔',
      questionEn: 'What inner comfort does knowing "He is All-Knowing of everything" provide?',
      answerEn: 'Absolute peace of mind knowing that Allah is aware of our deepest needs, trials, and silent supplications, and nothing in existence escapes His loving watch.'
    }
  ],
  '2:30': [
    {
      questionUr: 'انسان کو زمین میں "خَلِيفَةً" (نائب) بنانے کا کیا مطلب ہے؟',
      answerUr: 'انسان کو اللہ نے زمین کا امین اور نائب بنایا تاکہ وہ اللہ کے دیے ہوئے اختیارات، عقل اور شریعت کے مطابق دنیا میں عدل و انصاف، امن اور نیکی کا نظام قائم کرے۔',
      questionEn: 'What does it mean that man was appointed as "Khalifah" (vicegerent) on earth?',
      answerEn: 'Humanity was designated as Allah\'s trustee on earth to establish divine justice, care for creation, and govern affairs according to sacred guidance and moral conscience.'
    },
    {
      questionUr: 'کیا فرشتوں کا سوال اللہ کے فیصلے پر کوئی اعتراض تھا؟',
      answerUr: 'ہرگز نہیں! فرشتے معصوم ہیں اور نافرمانی نہیں کر سکتے، انہوں نے صرف ادب اور حیرت کے ساتھ انسان کو پیدا کرنے کی گہری الٰہی حکمت جاننا چاہی تھی۔',
      questionEn: 'Was the angels\' inquiry an objection to Allah\'s decree?',
      answerEn: 'Absolutely not! Angels are incapable of sin or protest; they merely inquired with reverence to understand the divine wisdom behind placing beings with free will on earth.'
    },
    {
      questionUr: 'اللہ تعالیٰ نے "إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ" فرما کر کیا راز کھولا؟',
      answerUr: 'یہ کہ انسان میں آزمائشوں اور نفسانی خواہشات کے باوجود اپنے ارادے سے نیکی، محبت اور ایثار اختیار کرنے کی وہ صلاحیت ہے جس کی بدولت انسان فرشتوں سے بھی اعلیٰ روحانی رتبہ پا سکتا ہے۔',
      questionEn: 'What profound mystery was revealed in "Indeed, I know that which you do not know"?',
      answerEn: 'That humans have the unique capacity to choose faith and righteousness despite trials and temptations, achieving a noble spiritual rank that inspires the admiration of angels.'
    }
  ],
  '2:31': [
    {
      questionUr: 'اللہ تعالیٰ نے حضرت آدم علیہ السلام کو "الْأَسْمَاءَ كُلَّهَا" سکھا کر کیا فضیلت بخشی؟',
      answerUr: 'صرف الفاظ اور نام نہیں بلکہ کائنات کی تمام اشیاء کی حقیقتیں، ان کے خواص، زبان، اور عقل و فہم کے ذریعے نئی چیزیں دریافت کرنے کی زبردست ذہنی صلاحیت عطا فرمائی۔',
      questionEn: 'What excellence was bestowed upon Adam through teaching him "all the names"?',
      answerEn: 'Not merely words, but the inner natures, functions, and properties of created things, endowing humanity with conceptual language, scientific curiosity, and analytical intellect.'
    },
    {
      questionUr: 'فرشتوں کے سامنے چیزیں پیش کرنے کا کیا مقصد تھا؟',
      answerUr: 'فرشتوں پر یہ حقیقت واضح کرنا کہ زمین کو سنوارنے اور اس کا نظام چلانے کے لیے صرف عبادت کافی نہیں بلکہ دنیا کے امور کی علمی سمجھ بوجھ اور ادراک بھی ضروری ہے جو انسان کو دیا گیا ہے۔',
      questionEn: 'What was the purpose of displaying the entities before the angels?',
      answerEn: 'To demonstrate that the stewardship of earth requires not only spiritual devotion, but deep empirical and conceptual knowledge—faculties uniquely gifted to humanity.'
    },
    {
      questionUr: 'اس آیت سے علم حاصل کرنے کی کیا اہمیت ثابت ہوتی ہے؟',
      answerUr: 'یہ ثابت ہوتا ہے کہ علم ہی انسان کی اصل عظمت، فضیلت اور خلافت کا تاج ہے، اور ہمارے دادا آدم علیہ السلام کے پہلے استاد خود اللہ تعالیٰ تھے۔',
      questionEn: 'What significance of seeking knowledge is proven from Verse 31?',
      answerEn: 'It proves that beneficial knowledge is the crown of human nobility, and that humanity\'s very first teacher was Allah Himself.'
    }
  ],
  '2:32': [
    {
      questionUr: 'فرشتوں کے جواب "سُبْحَانَكَ لَا عِلْمَ لَنَا" سے ہمیں کیا اخلاقی سبق ملتا ہے؟',
      answerUr: 'علمی عاجزی اور سچائی کا سبق ملتا ہے کہ جب کسی بات کا علم نہ ہو تو جھوٹ یا تکے لگانے کے بجائے سچائی سے "مجھے معلوم نہیں" کہہ دینا چاہیے؛ یہ سچے عالم کی نشانی ہے۔',
      questionEn: 'What moral virtue does the angels\' response "Exalted are You; we have no knowledge" teach us?',
      answerEn: 'The virtue of intellectual honesty—humbly admitting "I do not know" when lacking knowledge, rather than pretending or speculating out of false pride.'
    },
    {
      questionUr: 'فرشتوں نے اللہ کو "الْعَلِيمُ الْحَكِيمُ" کہہ کر کس بات کا اعتراف کیا؟',
      answerUr: 'اس بات کا کہ اللہ کا علم لامحدود اور مکمل ہے، اور انسان کو پیدا کرنے اور اسے خلافت دینے کا فیصلہ کمالِ حکمت اور دانائی پر مبنی ہے۔',
      questionEn: 'What reality did the angels affirm by addressing Allah as "Al-\'Aleem Al-Hakeem"?',
      answerEn: 'That Allah\'s knowledge is boundless and all-encompassing, and His appointment of humanity as vicegerent is rooted in supreme, flawless divine wisdom.'
    }
  ],
  '2:33': [
    {
      questionUr: 'جب حضرت آدم علیہ السلام نے فرشتوں کو تمام اشیاء کے نام بتا دیے تو کیا ثابت ہوا؟',
      answerUr: 'یہ ثابت ہو گیا کہ انسان محض مٹی کا پتلا نہیں بلکہ اللہ کے عطا کردہ علم اور عقل کا وہ شاہکار ہے جو زمین کی خلافت اور امانت داری کا مکمل اہل ہے۔',
      questionEn: 'What was proven when Adam informed the angels of the names of the entities?',
      answerEn: 'It proved that humanity was uniquely gifted with intellect, conceptual understanding, and language necessary to fulfill the sacred trust of vicegerency on earth.'
    },
    {
      questionUr: '"وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ" میں ظاہر اور چھپی ہوئی باتوں سے کیا مراد ہے؟',
      answerUr: 'ظاہر بات فرشتوں کا وہ سوال تھا، اور چھپی ہوئی بات ابلیس کے دل کا وہ چھپا ہوا حسد اور تکبر تھا جو وہ اپنے دل میں دبائے بیٹھا تھا کہ میں انسان کے آگے کبھی نہیں جھکوں گا۔',
      questionEn: 'What is meant by "what you reveal and what you were concealing" in Verse 33?',
      answerEn: '"What you reveal" refers to the spoken inquiry of the angels, while "what you were concealing" refers to the secret pride and envy simmering within Iblis\'s heart.'
    },
    {
      questionUr: 'اس آیت سے ہمیں اپنے دل اور نیتوں کے بارے میں کیا رہنمائی ملتی ہے؟',
      answerUr: 'یہ کہ اللہ ہمارے دلوں کے ہر چھپے ہوئے خیال اور نیت سے باخبر ہے، اس لیے ہمیں اپنے دل کو حسد، غرور اور منافقت سے ہمیشہ پاک و صاف رکھنا چاہیے۔',
      questionEn: 'What guidance does this verse provide regarding our inner intentions?',
      answerEn: 'That Allah perceives the innermost thoughts of our hearts, urging us to maintain sincerity and guard ourselves against hidden arrogance, envy, and malice.'
    }
  ],
  '2:34': [
    {
      questionUr: 'فرشتوں کا حضرت آدم علیہ السلام کو سجدہ کرنا کس نوعیت کا تھا؟',
      answerUr: 'یہ سجدہ عبادت کا نہیں تھا (کیونکہ عبادت کا سجدہ صرف اللہ کے لیے ہے)، بلکہ یہ اللہ کے حکم سے حضرت آدم کے علم، شرف اور خلافت کی تعظیم و سلام کا سجدہ تھا۔',
      questionEn: 'What kind of prostration were the angels commanded to perform before Adam?',
      answerEn: 'It was a ceremonial prostration of honor and greeting (Sajdah Ta\'dheem) commanded by Allah to recognize Adam\'s knowledge, not an act of worship, which belongs exclusively to Allah.'
    },
    {
      questionUr: 'ابلیس نے سجدہ کرنے سے کیوں انکار کیا اور اس کا کیا انجام ہوا؟',
      answerUr: 'اس نے نسل پرستی، تکبر اور حسد کی وجہ سے انکار کیا کہ "میں آگ سے ہوں اور یہ مٹی سے، میں بہتر ہوں"؛ اس تکبر نے اس کی تمام عبادتوں کو راکھ کر دیا اور وہ ملعون و کافر ہو گیا۔',
      questionEn: 'Why did Iblis refuse to prostrate, and what was his fate?',
      answerEn: 'He refused out of chauvinistic pride and envy, arguing that fire was superior to clay. His arrogance destroyed centuries of worship and rendered him an outcast disbeliever.'
    },
    {
      questionUr: 'ابلیس کے واقعے سے ہمیں اپنی عملی زندگی کے لیے کیا سب سے بڑی نصیحت ملتی ہے؟',
      answerUr: 'یہ کہ تکبر اور حسد وہ زہر ہیں جو انسان کے تمام نیک اعمال کو جلا دیتے ہیں۔ انسان کو ہمیشہ عاجزی، انکساری اور اللہ کے ہر حکم کے سامنے جھکنے کی دعا کرنی چاہیے۔',
      questionEn: 'What is the most critical life-lesson from the downfall of Iblis?',
      answerEn: 'That arrogance and jealousy consume good deeds like fire consumes wood. True spiritual greatness lies in humility, gratitude, and wholehearted submission to divine guidance.'
    }
  ],
  '2:35': [
    {
      questionUr: 'اللہ تعالیٰ نے حضرت آدم اور حضرت حوا علیہما السلام کو جنت میں کیا کیا نعمتیں اور آزادیاں عطا فرمائیں؟',
      answerUr: 'اللہ تعالیٰ نے انہیں جنت کے پرامن اور پُرسکون ماحول میں رہنے کا شرف بخشا اور فرمایا کہ بغیر کسی روک ٹوک، محنت یا حساب کے جہاں سے چاہیں لذیذ نعمتیں بافراغت (رَغَدًا) کھائیں۔',
      questionEn: 'What blessings and liberties were granted to Adam and Hawwa in Paradise?',
      answerEn: 'Allah granted them serene dwelling in Paradise with unrestrained freedom to enjoy all wholesome fruits and delights in lavish abundance (\'raghadan\') wherever they wished without toil.'
    },
    {
      questionUr: 'اللہ تعالیٰ نے اس خاص درخت سے روکنے کے لیے "اس کے قریب نہ جانا" کا اسلوب کیوں اختیار فرمایا؟',
      answerUr: 'یہ اسلامی شریعت کا سنہری اصول "سدِ ذرائع" سکھانے کے لیے ہے، یعنی گناہ سے بچنے کا مؤثر ترین طریقہ یہ ہے کہ انسان ان تمام اسباب، ترغیبات اور ماحول سے بھی دور رہے جو گناہ کی طرف لے جاتے ہیں۔',
      questionEn: 'Why did Allah command "do not approach this tree" instead of simply "do not eat"?',
      answerEn: 'This teaches the foundational protective principle of Sadd al-Dhara\'i (blocking avenues to sin)—advising believers to avoid tempting proximity and environments that make slipping into error easy.'
    },
    {
      questionUr: '"فتکونا من الظالمین" میں "ظلم" کا لغوی اور معنوی مفہوم کیا ہے؟',
      answerUr: 'ظلم کا بنیادی لغوی معنی ہے کسی چیز کو اس کے مناسب مقام سے ہٹا دینا۔ یعنی الٰہی حدود عبور کر کے اپنے آپ کو نقصان پہنچانا اور جنت کے پرسکون قیام سے محروم ہونا۔',
      questionEn: 'What is the linguistic and spiritual meaning of \'Dhulm\' in this verse?',
      answerEn: '\'Dhulm\' linguistically means placing something outside its proper place or overstepping boundaries, which in this context means harming one\'s own soul by crossing divine limits.'
    }
  ],
  '2:36': [
    {
      questionUr: 'شیطان نے حضرت آدم اور حضرت حوا علیہما السلام کو کس طرح بہکایا اور فریب دیا؟',
      answerUr: 'شیطان نے خیرخواہ بن کر اللہ کے نام کی جھوٹی قسمیں کھائیں کہ اگر تم اس درخت کو چکھ لو گے تو ہمیشہ کے لیے فرشتے بن جاؤ گے؛ چونکہ حضرت آدم علیہ السلام کا گمان بھی نہ تھا کہ کوئی اللہ کے نام کی جھوٹی قسم کھا سکتا ہے، اس لیے وہ اجتہادی تاویل کی وجہ سے بھول گئے۔',
      questionEn: 'How did Satan deceive Adam and Hawwa into tasting from the forbidden tree?',
      answerEn: 'Satan disguised himself as an affectionate counselor and swore false oaths in Allah\'s holy name, promising angelic immortality. Adam could not imagine any creature would dare utter a fabricated oath by Allah\'s name.'
    },
    {
      questionUr: 'کیا حضرت آدم علیہ السلام کا زمین پر اتارا جانا محض ایک سزا تھی؟',
      answerUr: 'ہرگز نہیں! اللہ تعالیٰ نے تخلیقِ آدم سے پہلے ہی فرشتوں سے فرمایا تھا کہ "میں زمین میں خلیفہ بنانے والا ہوں"۔ جنت کا قیام دراصل ایک تربیتی مرحلہ تھا تاکہ انسان اپنے ازلی دشمن کی چالوں کو پہچان کر زمین پر خلافت کی ذمہ داریاں نبھا سکے۔',
      questionEn: 'Was the descent to Earth merely a punitive consequence for Adam?',
      answerEn: 'No! Allah had declared before Adam\'s creation: "Indeed, I will place on earth a vicegerent." The Edenic stay was an essential pedagogical orientation preparing humanity to fulfill their earthly stewardship.'
    },
    {
      questionUr: '"ولکم فی الارض مستقر ومتاع الیٰ حین" سے انسانی زندگی کے بارے میں کیا رہنمائی ملتی ہے؟',
      answerUr: 'یہ کہ زمین انسان کا مستقل اور دائمی گھر نہیں بلکہ ایک عارضی امتحان گاہ اور مسافر خانہ ہے، جہاں مقررہ وقت یعنی موت تک کے لیے نفع اٹھانے کا سامان دیا گیا ہے۔',
      questionEn: 'What profound reality does "a dwelling and provision for a time" reveal?',
      answerEn: 'That this worldly life is a temporary transit station and testing ground equipped with sufficient provisions until death, while our ultimate eternal home is the Hereafter.'
    }
  ],
  '2:37': [
    {
      questionUr: 'حضرت آدم علیہ السلام نے لغزش کے بعد اپنے رب سے کون سے مبارک کلمات سیکھے؟',
      answerUr: 'وہ مبارک کلمات یہ تھے: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ" (اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں نہ بخشا اور ہم پر رحم نہ کیا تو ہم یقیناً خسارہ پانے والوں میں سے ہو جائیں گے - سورۃ الاعراف: 23)۔',
      questionEn: 'What specific words of repentance did Adam receive and pray with?',
      answerEn: 'The sacred supplication in Surah Al-A\'raf (7:23): "Rabbana dhalamna anfusana wa-in lam taghfir lana wa-tarhamna lanakoonanna minal-khasireen" (Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers).'
    },
    {
      questionUr: 'لغزش کے بعد حضرت آدم علیہ السلام کے طرزِ عمل اور ابلیس کے طرزِ عمل میں کیا بنیادی فرق تھا؟',
      answerUr: 'ابلیس نے نافرمانی کے بعد تکبر، بحث اور ضد کا مظاہرہ کیا جس نے اسے ہمیشہ کے لیے ملعون کر دیا، جبکہ حضرت آدم علیہ السلام نے فوراً ندامت کے آنسو بہائے، اپنی غلطی کا اعتراف کیا اور توبہ کے ذریعے اللہ کا مزید قرب پا لیا۔',
      questionEn: 'What was the contrasting reaction between Adam and Iblis after sinning?',
      answerEn: 'Iblis defended his rebellion with arrogant pride and was cursed forever, whereas Adam responded with immediate remorse, humility, and tearful repentance, securing divine love and forgiveness.'
    },
    {
      questionUr: 'اللہ تعالیٰ کے اسمِ مبارک "التواب" سے بندوں کو کیا تسلی اور امید ملتی ہے؟',
      answerUr: '"التواب" کا مطلب ہے بار بار توبہ قبول کرنے والا؛ یعنی انسان سے جب بھی کمزوری میں خطا ہو جائے، اگر وہ سچے دل سے پشیمان ہو کر رجوع کرے تو اللہ تعالیٰ اسے کبھی مایوس نہیں کرتا بلکہ اپنی رحمت سے معاف فرما دیتا ہے۔',
      questionEn: 'What comfort does Allah\'s attribute \'At-Tawwab\' offer to believers?',
      answerEn: '\'At-Tawwab\' signifies the One who relentlessly accepts repentance time and again. A sincere return with heartfelt remorse is met with infinite divine forgiveness.'
    }
  ],
  '2:38': [
    {
      questionUr: '"فمن تبع ھدای فلا خوف علیھم ولا ھم یحزنون" میں ہدایت کی پیروی کرنے والوں کو کن دو عظیم نعمتوں کی بشارت دی گئی ہے؟',
      answerUr: 'انہیں مستقبل کے تمام خطرات، قبر، حشر اور جہنم کے "خوف" سے امن، اور دنیاوی و ماضی کے تمام صدمات و نقصانات کے "حزن" (غم) سے نجات کی ابدی خوشخبری دی گئی ہے۔',
      questionEn: 'What twin blessings are promised to those who follow divine guidance?',
      answerEn: 'Complete liberation from \'Khawf\' (fear and dread regarding impending perils and the Day of Judgment) and from \'Huzn\' (grief and sorrow over past losses and worldly afflictions).'
    },
    {
      questionUr: 'قرآن مجید میں "خوف" اور "حزن" کے مفہوم میں کیا فرق ہے؟',
      answerUr: '"خوف" کا تعلق مستقبل کے آنے والے خطرات اور عذاب کے ڈر سے ہوتا ہے، جبکہ "حزن" کا تعلق ماضی کے گزرے ہوئے دکھوں، محرومیوں اور نقصانات کے ملال سے ہوتا ہے۔',
      questionEn: 'What is the subtle linguistic difference between \'Khawf\' and \'Huzn\'?',
      answerEn: '\'Khawf\' relates to future anxieties, perils, and dreadful expectations, whereas \'Huzn\' relates to psychological pain, grief, and regret over past events.'
    },
    {
      questionUr: 'زمین پر اترتے وقت اللہ تعالیٰ نے تمام نسلِ انسانی کو کس تسلسل کا اطمینان بخشا؟',
      answerUr: 'یہ کہ انسان کو زمین پر بغیر راہنمائی کے اندھیرے میں نہیں چھوڑا جائے گا، بلکہ وقتاً فوقتاً انبیاء اور آسمانی کتابوں کے ذریعے روشن شریعت اور ہدایت نازل ہوتی رہے گی۔',
      questionEn: 'What divine assurance did Allah grant humanity upon their earthly descent?',
      answerEn: 'That humanity would never be left stranded in spiritual darkness; continuous divine guidance through prophets and revealed scriptures would guide them to safety.'
    }
  ],
  '2:39': [
    {
      questionUr: 'آیت 39 میں کفر کرنے والوں اور نشانیوں کو جھٹلانے والوں کو "اصحاب النار" کیوں کہا گیا ہے؟',
      answerUr: '"اصحاب" صاحب کی جمع ہے جس کا مطلب ہے مستقل ساتھی۔ یعنی جس طرح مخلص ساتھی کبھی جدا نہیں ہوتا، اسی طرح جہنم کی آگ ان کا ایسا دائمی اور لازمی ٹھکانا بن جائے گی جس سے وہ کبھی الگ نہیں ہو سکیں گے۔',
      questionEn: 'Why are deniers of truth designated as \'Ashab an-Nar\' (Companions of the Fire)?',
      answerEn: '\'Ashab\' implies inseparable companionship—meaning Hellfire will cling to them relentlessly without any reprieve or escape.'
    },
    {
      questionUr: 'سورۃ البقرہ کے چوتھے رکوع کا بنیادی خلاصہ اور پیغام کیا ہے؟',
      answerUr: 'یہ کہ انسان کی تخلیق، فرشتوں کا سجدہ، شیطان کا حسد اور دنیا کا امتحان یہ واضح کرتے ہیں کہ کامیابی کا واحد راستہ اللہ کی ہدایت کی پیروی میں ہے، اور تکبر و سرکشی کا انجام دائمی تباہی ہے۔',
      questionEn: 'What is the core message and conclusion of the fourth Ruku of Surah Al-Baqarah?',
      answerEn: 'That humanity\'s purpose is defined by divine stewardship: following Allah\'s revelation leads to eternal peace, while arrogance and denial lead to unending regret.'
    }
  ],
  '2:40': [
    {
      questionUr: '"بنی اسرائیل" میں "اسرائیل" کس پیغمبر کا لقب ہے اور اس کا لغوی معنی کیا ہے؟',
      answerUr: '"اسرائیل" حضرت یعقوب علیہ السلام کا عبرانی لقب ہے، جس کا معنی "عبد اللہ" یعنی اللہ کا فرماں بردار بندہ ہے؛ اور بنی اسرائیل ان کے بارہ بیٹوں کی نسل ہے۔',
      questionEn: 'Whose title was \'Isra\'il\', and what does it mean linguistically?',
      answerEn: '\'Isra\'il\' was the Hebrew honorific title of Prophet Ya\'qub (Jacob A.S.), meaning \'Servant of God\' (\'Abdullah). His descendants form the twelve tribes of Israel.'
    },
    {
      questionUr: 'آیت 40 میں بنی اسرائیل سے کس عہد (وعدے) کو پورا کرنے کا مطالبہ کیا گیا ہے؟',
      answerUr: 'تورات میں لیا گیا وہ عہد کہ جب آخری نبی حضرت محمد مصطفیٰ ﷺ تشریف لائیں تو وہ حسد اور تعصب چھوڑ کر سب سے پہلے ان پر ایمان لائیں گے اور ان کی تائید کریں گے۔',
      questionEn: 'What divine covenant were the Children of Israel commanded to fulfill?',
      answerEn: 'The scriptural pledge in the Torah to recognize, embrace, and champion the Final Messenger Muhammad ﷺ upon his advent.'
    },
    {
      questionUr: '"وإياي فارهبون" میں صرف اللہ ہی سے ڈرنے کی کیا حکمت ہے؟',
      answerUr: 'اس کا مقصد یہ ہے کہ یہودی علماء اپنے معاشرے کے سرداروں، دنیاوی منصب اور نذرانوں کے ضائع ہونے کے ڈر سے حق بات کو نہ چھپائیں، بلکہ صرف اللہ کی گرفت اور آخرت کی جوابدہی کا خوف دل میں رکھیں۔',
      questionEn: 'What is the intent behind the command "and fear only Me"?',
      answerEn: 'To urge their scholars and leaders not to suppress or distort divine truth out of fear of losing worldly prestige, tribal stature, or economic gains, but to fear Allah alone.'
    }
  ],
  '2:41': [
    {
      questionUr: 'قرآن مجید کو تورات کی "تصدیق کرنے والا" کیوں کہا گیا ہے؟',
      answerUr: 'کیونکہ قرآن پاک تورات کی اصل تعلیم یعنی توحید و اخلاق کو سچا ثابت کرتا ہے، اور تورات میں نبی کریم حضرت محمد ﷺ کی تشریف آوری کی دی گئی بشارتوں کی عملی تصدیق کرتا ہے۔',
      questionEn: 'Why is the Holy Quran described as \'confirming\' the Torah?',
      answerEn: 'Because the Quran confirms the core monotheistic and moral teachings of the Torah and fulfills the scriptural prophecies regarding the advent of Prophet Muhammad ﷺ.'
    },
    {
      questionUr: '\'ثَمَنًا قَلِيلًا\' (تھوڑی قیمت) سے کیا مراد ہے اور اس سے کیوں منع کیا گیا؟',
      answerUr: 'اس سے مراد دنیا کی عارضی دولت، نذرانے، مذہبی چودہراہٹ اور سرداری ہے؛ دین اور سچائی کو بیچ کر دنیا کا سارا خزانہ بھی حاصل ہو جائے تو وہ اللہ کے نزدیک نہایت حقیر اور معمولی چیز ہے۔',
      questionEn: 'What is meant by \'a small price\' (thamanan qaleela), and why was it forbidden?',
      answerEn: 'It refers to temporary worldly gains, social status, and clerical gifts. Trading divine truth for any worldly benefit—no matter how immense—is a wretched bargain.'
    },
    {
      questionUr: 'بنی اسرائیل کے علماء کو "سب سے پہلے اس کا انکار کرنے والے نہ بنو" کی تنبیہ کیوں کی گئی؟',
      answerUr: 'کیونکہ اہل کتاب اور صاحبِ علم ہونے کے ناطے ان کا فرض تھا کہ سب سے پہلے حق کو قبول کریں؛ اگر وہ خود انکار کرتے تو ان کی دیکھا دیکھی دوسرے عام لوگ بھی گمراہی میں مبتلا ہو جاتے۔',
      questionEn: 'Why were the scholars of the Children of Israel warned not to be the first to disbelieve?',
      answerEn: 'Because as literate custodians of scripture, they should have been the foremost champions of truth; their denial would lead the unlettered masses into error.'
    }
  ],
  '2:42': [
    {
      questionUr: 'اس آیت میں کن دو بڑی فکری بددیانتیوں سے سختی کے ساتھ روکا گیا ہے؟',
      answerUr: 'پہلا گناہ "لبسِ حق بالباطل" یعنی سچ میں جھوٹ اور خود ساختہ تاویلیں مکس کرنا، اور دوسرا گناہ "کتمانِ حق" یعنی جان بوجھ کر سچائی اور نبی کریم ﷺ کی نشانیوں کو لوگوں سے چھپانا۔',
      questionEn: 'Which two grave corruptions are strictly prohibited in this verse?',
      answerEn: '1. Mixing divine truth with falsehood (Talbees), and 2. Deliberately concealing known divine truth and prophecies of the Prophet ﷺ (Kitman).'
    },
    {
      questionUr: '\'وَأَنتُمْ تَعْلَمُونَ\' (حالانکہ تم جانتے ہو) کا کیا مفہوم اور سبق ہے؟',
      answerUr: 'اس کا مفہوم یہ ہے کہ جانتے بوجھتے سچ چھپانا اور دھوکہ دینا نادانی کی غلطی سے کہیں زیادہ سنگین جرم ہے، کیونکہ علم انسان پر حق بات کو بغیر ملاوٹ کے ظاہر کرنے کی ذمہ داری ڈالتا ہے۔',
      questionEn: 'What is the significance of \'while you know\' in this verse?',
      answerEn: 'It emphasizes that knowingly distorting or concealing the truth is far more egregious than erring out of ignorance; knowledge imposes the sacred obligation of honesty.'
    }
  ],
  '2:43': [
    {
      questionUr: 'قرآن مجید میں نماز کے لیے "اقامت" (قائم کرنے) کا لفظ کیوں استعمال کیا گیا ہے؟',
      answerUr: 'کیونکہ اقامت کا مطلب ہے نماز کو محض رسمی طور پر جلدی جلدی نہ پڑھنا، بلکہ اس کے تمام ارکان، آداب، باقاعدہ اوقات، اور دل میں اللہ کے خشوع کے ساتھ ہمیشہ زندہ رکھنا۔',
      questionEn: 'Why does the Quran use the term \'establish\' (iqamah) for prayer?',
      answerEn: 'Because \'establishing\' prayer means observing it regularly at its proper times, with physical tranquility, inner reverence (Khushu\'), and lifelong commitment.'
    },
    {
      questionUr: '\'وَآتُوا الزَّكَاةَ\' (اور زکوٰۃ ادا کرو) سے دل اور معاشرے پر کیا اثر پڑتا ہے؟',
      answerUr: 'زکوٰۃ انسان کے دل سے کنجوسی، خود غرضی اور مال کی ہوس کو دھو کر صاف کر دیتی ہے، اور معاشرے کے غریبوں، یتیموں اور محتاجوں کی ضرورتیں پوری کر کے محبت اور برابری پیدا کرتی ہے۔',
      questionEn: 'What spiritual and social impact does giving Zakah produce?',
      answerEn: 'Zakah purifies the heart from greed and materialism while weaving a compassionate social safety net for the poor, orphans, and needy.'
    },
    {
      questionUr: '\'وَارْكَعُوا مَعَ الرَّاكِعِينَ\' میں کس اہم عبادت کی تاکید ہے؟',
      answerUr: 'اس سے مسجد میں عام مسلمانوں کے ساتھ کندھے سے کندھا ملا کر باجماعت نماز ادا کرنے، دل کا تکبر ختم کرنے، اور امت کے باہمی اتحاد کی پرزور تاکید ملتی ہے۔',
      questionEn: 'What vital practice is emphasized in \'and bow with those who bow\'?',
      answerEn: 'It underscores congregational prayer in the mosque, eliminating arrogance and uniting all believers in equality and brotherhood before Allah.'
    }
  ],
  '2:44': [
    {
      questionUr: 'اس آیت میں کس سنگین اخلاقی اور دینی بیماری پر تنبیہ فرمائی گئی ہے؟',
      answerUr: 'قول و فعل کے تضاد پر، یعنی زبان سے تو دوسروں کو نیکی، سچائی اور خیرخواہی کی تلقین کرنا مگر خود اس پر عمل نہ کرنا اور اپنے اعمال سے غافل ہو جانا۔',
      questionEn: 'What severe spiritual pitfall does this verse reprove?',
      answerEn: 'Hypocrisy and moral inconsistency—instructing others to embrace virtue and righteousness while completely neglecting to practice it in one\'s personal life.'
    },
    {
      questionUr: '\'أَفَلَا تَعْقِلُونَ\' (کیا تم عقل سے کام نہیں لیتے) کا انسان کے عمل سے کیا تعلق ہے؟',
      answerUr: 'حقیقی عقل کا تقاضا یہ ہے کہ انسان کا علم اس کے اپنے کردار اور عمل میں جھلکے؛ جو شخص کتاب کا علم رکھ کر بھی بے عمل رہے، قرآن اسے عقل سے عاری اور بے وقوف قرار دیتا ہے۔',
      questionEn: 'How does \'will you not then reason\' connect knowledge to action?',
      answerEn: 'True reason requires harmonizing sacred knowledge with personal practice; preaching virtue while practicing vice is irrational and spiritually self-destructive.'
    }
  ],
  '2:45': [
    {
      questionUr: 'زندگی کی ہر مشکل، بیماری اور پریشانی میں کن دو عظیم چیزوں کے ذریعے اللہ سے مدد مانگنے کا حکم دیا گیا ہے؟',
      answerUr: 'صبر (برداشت و ضبطِ نفس) اور نماز کے ذریعے اللہ تعالیٰ سے مدد اور سکون حاصل کرنے کا حکم دیا گیا ہے۔',
      questionEn: 'Which two divine anchors are prescribed to overcome hardship and trials?',
      answerEn: 'Patience (Sabr) and Prayer (Salah).'
    },
    {
      questionUr: 'نماز کس قسم کے لوگوں پر بوجھ نہیں بنتی بلکہ راحت اور ٹھنڈک بن جاتی ہے؟',
      answerUr: '\'خاشعین\' یعنی جن کے دلوں میں اللہ کی سچی محبت، عظمت، احترام اور عاجزی ہوتی ہے، ان کے لیے نماز کوئی بوجھ نہیں بلکہ دل کا چین اور آنکھوں کی ٹھنڈک بن جاتی ہے۔',
      questionEn: 'For whom is prayer a source of joy and peace rather than a burden?',
      answerEn: 'The \'Khashi\'een\'—those whose hearts are humble, reverent, and filled with deep love and awe of Allah.'
    },
    {
      questionUr: 'اسلام میں \'صبر\' کے تین بنیادی پہلو کون سے ہیں؟',
      answerUr: '۱. گناہوں کے سامنے نفس کی خواہشات کو روکنا، ۲. نیکی اور عبادت پر ثابت قدم رہنا، اور ۳. مصیبت یا بیماری کے وقت شکوہ شکایت کے بجائے اللہ کی رضا پر راضی رہنا۔',
      questionEn: 'What are the three core dimensions of Sabr (patience) in Islam?',
      answerEn: '1. Restraining the ego from sins, 2. Steadfastly persevering in righteous worship, and 3. Bearing trials and afflictions with serene trust in Allah.'
    }
  ],
  '2:46': [
    {
      questionUr: 'قرآن مجید میں لفظ \'يَظُنُّونَ\' یہاں کس معنی میں آیا ہے؟',
      answerUr: 'یہاں \'ظن\' شک کے بجائے \'پختہ اور کامل یقین\' کے معنی میں ہے، یعنی جن کے دلوں میں آخرت کی پیشی اور ملاقاتِ الٰہی پر ذرا برابر بھی شبہ نہیں ہوتا۔',
      questionEn: 'Why does the Qur\'an use the term \'yathunnoona\' here?',
      answerEn: 'In classical Arabic usage, \'Dhann\' here signifies rock-solid certainty and unshakeable inner conviction (Yaqeen) regarding the resurrection and divine encounter.'
    },
    {
      questionUr: 'آخرت اور ملاقاتِ الٰہی کا یقین انسان کی عبادت پر کیا اثر ڈالتا ہے؟',
      answerUr: 'جب انسان کو یقین ہوتا ہے کہ وہ جلد اپنے شفیق رب سے ملنے والا ہے، تو نماز کا ہر سجدہ اس کے لیے بوجھ کے بجائے دلی سرور، راحت اور تسکین بن جاتا ہے۔',
      questionEn: 'How does consciousness of meeting Allah transform one\'s prayer?',
      answerEn: 'It elevates prayer from a mechanical chore into a tranquil, sacred conversation with the beloved Lord whom one longs to meet.'
    }
  ],
  '2:47': [
    {
      questionUr: 'بنی اسرائیل کو \'عالمین پر فضیلت\' کس لحاظ سے دی گئی تھی؟',
      answerUr: 'یہ فضیلت ان کے اپنے دور کے اعتبار سے تھی کہ انہیں آسمانی کتابیں اور نبوتیں دے کر توحید کی امانت اور دنیا کی رہنمائی سونپی گئی تھی، نہ کہ کوئی نسلی یا پیدائشی برتری۔',
      questionEn: 'What is the nature of the favor \'preferred over the worlds\' granted to Bani Isra\'il?',
      answerEn: 'It was contextual spiritual custodianship for their historical era—tasked with carrying monotheism and divine revelation when the rest of the world was steeped in idol worship.'
    },
    {
      questionUr: 'اللہ تعالیٰ کی نعمتوں کو یاد کرنے کا اصل مقصد کیا ہوتا ہے؟',
      answerUr: 'تاکہ انسان کے دل میں سچی عاجزی اور شکر گزاری پیدا ہو، غرور مٹے اور وہ احکامِ الٰہی اور آخری نبی ﷺ کی پیروی کے سامنے سرِ تسلیم خم کر دے۔',
      questionEn: 'Why does Allah repeatedly ask them to remember His blessings?',
      answerEn: 'Because genuine remembrance of divine grace softens the stubborn ego, inspires humility, and leads naturally to accepting new truth with obedience.'
    }
  ],
  '2:48': [
    {
      questionUr: 'بنی اسرائیل کے کس باطل عقیدے کو اس آیت میں رد کیا گیا ہے؟',
      answerUr: 'ان کا یہ باطل گمان کہ وہ انبیاء کی اولاد ہیں اس لیے بزرگوں کے سہارے اور بغیر ذاتی نیک اعمال کے خود بخود بخشے جائیں گے۔',
      questionEn: 'Which dangerous misconception of Bani Isra\'il is shattered in this verse?',
      answerEn: 'The false assumption that ancestral lineage and prophetic heritage would automatically guarantee salvation without personal faith and righteous deeds.'
    },
    {
      questionUr: 'قیامت کے دن کن چار دنیاوی سہاروں کی مکمل نفی کی گئی ہے؟',
      answerUr: '۱. باہمی بدلہ (کوئی کسی کا گناہ نہیں اٹھائے گا)، ۲. بے اجازت یا زبردستی کی سفارش، ۳. مالی فدیہ یا رشوت، اور ۴. کسی بیرونی طاقت کی مدد۔',
      questionEn: 'What are the four escape routes of worldly courts that will be useless on Judgment Day?',
      answerEn: '1. Personal substitution, 2. Unauthorized partisan intercession, 3. Monetary ransom or bail, and 4. Armed external rescue.'
    }
  ],
  '2:49': [
    {
      questionUr: 'فرعون بنی اسرائیل کے لڑکوں کو ذبح اور لڑکیوں کو زندہ کیوں رکھتا تھا؟',
      answerUr: 'اپنی سلطنت کے زوال کے خوف سے لڑکوں کو قتل کرواتا تھا تاکہ وہ بڑے ہو کر بغاوت نہ کر سکیں، اور لڑکیوں کو خادماؤں کی صورت میں ذلت آمیز غلامی کے لیے زندہ رکھتا تھا۔',
      questionEn: 'Why did Pharaoh order the slaughter of Israelite baby boys while sparing the girls?',
      answerEn: 'Out of paranoia that an Israelite boy would overthrow his dynasty, while the girls were preserved for generational domestic servitude and humiliation.'
    },
    {
      questionUr: 'لفظ \'بَلاء\' کے اس آیت میں کیا دو معنی مراد لیے جا سکتے ہیں؟',
      answerUr: 'ایک تو فرعون کے ظلم کا سخت ترین امتحان، اور دوسرا اس کے بعد اللہ تعالیٰ کی طرف سے معجزانہ آزادی کا عظیم احسان اور انعام۔',
      questionEn: 'What dual meaning does the word \'Bala\'\' hold in this context?',
      answerEn: 'It signifies both the agonizing test of Pharaonic oppression and the supreme blessing of miraculous liberation from Allah.'
    }
  ],
  '2:50': [
    {
      questionUr: 'سمندر کے کنارے بنی اسرائیل کے گھبرا کر مایوس ہونے پر حضرت موسیٰ علیہ السلام نے کیا ایمان افروز جواب دیا؟',
      answerUr: 'آپ نے فرمایا: "ہرگز نہیں! بے شک میرا رب میرے ساتھ ہے وہ مجھے ضرور راستہ دکھائے گا!" اور پھر لاٹھی مارتے ہی سمندر بارہ راستوں میں پھٹ گیا۔',
      questionEn: 'What did Prophet Musa say when his people panicked at the edge of the Red Sea?',
      answerEn: 'He proclaimed with crystalline faith: "Never! Indeed, with me is my Lord; He will guide me!" (Kalla! Inna ma\'iya Rabbee sayahdeen).'
    },
    {
      questionUr: 'اللہ تعالیٰ نے فرعون کی ہلاکت بنی اسرائیل کو آنکھوں کے سامنے کیوں دکھائی؟',
      answerUr: 'تاکہ ان کے دلوں سے فرعون کا صدیوں پرانا خوف اور رعب ہمیشہ کے لیے ختم ہو جائے، یقین کامل ہو اور وہ اللہ کی بے پایاں قدرت کا شکر ادا کریں۔',
      questionEn: 'Why did Allah grant the Israelites the opportunity to witness the drowning of Pharaoh with their own eyes?',
      answerEn: 'To permanently cure the trauma and fear ingrained by centuries of slavery, to confirm the tyrant\'s end, and to witness divine omnipotence.'
    }
  ],
  '2:51': [
    {
      questionUr: 'حضرت موسیٰ علیہ السلام کوہِ طور پر کتنے عرصے کے لیے تشریف لے گئے تھے اور کیوں؟',
      answerUr: 'چالیس (۴۰) راتوں کے لیے، تاکہ عبادت کریں اور اللہ تعالیٰ سے آسمانی کتاب (تورات) کے مقدس احکامات حاصل کریں۔',
      questionEn: 'Why did Prophet Moses go to the mountain for forty nights?',
      answerEn: 'To pray to Allah, fast, and receive the Holy Book (the Torah) with good rules and guidance for his people.'
    },
    {
      questionUr: 'بچھڑے کی پوجا کو سب سے بڑا \'ظلم\' کیوں قرار دیا گیا؟',
      answerUr: 'کیونکہ عبادت کا حق صرف اور صرف اکیلے اللہ تعالیٰ کا ہے، اس حق کو کسی بے جان بت یا سونے کے کھلونے کو دینا سب سے بڑی زیادتی اور ظلم ہے۔',
      questionEn: 'Why was worshiping the golden calf called a great wrong?',
      answerEn: 'Because only Allah made us and takes care of us. Praying to a silent gold statue is very wrong and ungrateful.'
    }
  ],
  '2:52': [
    {
      questionUr: 'عربی لفظ \'عَفْو\' (معافی) کا اصل مفہوم کیا ہوتا ہے؟',
      answerUr: 'کسی غلطی کے برے اثرات کو اس طرح مٹا دینا کہ اس کا کوئی نشان باقی نہ رہے اور انسان پر سے سزا کو ہٹا لینا۔',
      questionEn: 'What does Allah\'s forgiveness (Afw) mean in simple words?',
      answerEn: 'It means cleaning away a mistake completely, like wiping a whiteboard clean so it looks fresh and new.'
    },
    {
      questionUr: 'اتنے بڑے گناہ کے بعد بھی اللہ تعالیٰ نے انہیں کیوں معاف فرمایا؟',
      answerUr: 'تاکہ وہ اللہ تعالیٰ کی بے پایاں رحمت اور احسان کو پہچانیں، اور دل سے شکر گزار اور فرمانبردار بندے بن جائیں۔',
      questionEn: 'Why did Allah forgive them after they felt sorry for their big mistake?',
      answerEn: 'Because Allah is full of love and mercy, and He wanted them to feel thankful in their hearts and obey His good rules.'
    }
  ],
  '2:53': [
    {
      questionUr: 'لفظ \'الْفُرْقَانَ\' کا کیا معنی ہے اور تورات کو فرقان کیوں کہا گیا؟',
      answerUr: 'فرقان کا معنی ہے \'حق اور باطل میں فرق کرنے والی کسوٹی\'؛ کیونکہ تورات نے سچ اور جھوٹ، حلال اور حرام، اور نیکی اور برائی میں واضح فرق کر دیا۔',
      questionEn: 'What does the word "Al-Furqan" mean?',
      answerEn: 'It means a clear guide that shows the difference between right and wrong, just like a bright flashlight shines light in the dark.'
    },
    {
      questionUr: 'اللہ تعالیٰ نے اپنے انبیاء پر آسمانی کتابیں کیوں نازل فرمائیں؟',
      answerUr: 'تاکہ انسان زندگی کے غلط اور گمراہ راستوں پر بھٹکنے سے بچ جائے اور نیکی، امن اور جنت کے سیدھے راستے پر قائم رہے۔',
      questionEn: 'Why does Allah send Holy Books like the Torah and the Quran?',
      answerEn: 'To guide us like a map or compass so we do not get lost in life, and so we can live happily and safely.'
    }
  ],
  '2:54': [
    {
      questionUr: 'حضرت موسیٰ علیہ السلام نے اپنی قوم سے کیوں فرمایا کہ "تم نے اپنی ہی جانوں پر ظلم کیا"؟',
      answerUr: 'کیونکہ انسان کے گناہ سے اللہ کا کوئی نقصان نہیں ہوتا، بلکہ انسان کا اپنا ہی نقصان ہوتا ہے اور وہ اپنی روح کو آلودہ کر کے سزا کا مستحق بن جاتا ہے۔',
      questionEn: 'Why did Moses tell his people: "You have hurt your own souls"?',
      answerEn: 'Because when we do something bad, we cannot harm Allah at all. Sins only hurt the person who does them.'
    },
    {
      questionUr: 'امتِ محمدیہ ﷺ کے لیے توبہ کا طریقہ پچھلی امتوں سے کتنا آسان اور رحیمانہ ہے؟',
      answerUr: 'پہلے جان کی قربانی دینی پڑتی تھی، مگر حضور ﷺ کی امت کے لیے صرف دل کا سچا پچھتاوا، گناہ چھوڑنا اور آئندہ نہ کرنے کا ارادہ ہی اللہ کی مغفرت کے لیے کافی ہے۔',
      questionEn: 'How is saying sorry to Allah easy and beautiful for Muslims today?',
      answerEn: 'In Islam, you simply say sorry to Allah from your heart, feel regret, and try your best to do good deeds, and Allah forgives you.'
    }
  ],
  '2:55': [
    {
      questionUr: 'بنی اسرائیل کے ستر (70) سرداروں نے کوہِ طور پر کیا گستاخانہ ضد کی تھی؟',
      answerUr: 'انہوں نے کہا کہ جب تک ہم اللہ کو اپنی آنکھوں سے کھلم کھلا سامنے نہ دیکھ لیں، ہم موسیٰ کی بات پر ہرگز یقین نہیں کریں گے۔',
      questionEn: 'What did the 70 leaders ask Moses on the mountain?',
      answerEn: 'They proudly said they would never believe until they could see Allah with their own eyes in broad daylight.'
    },
    {
      questionUr: 'انسان اس فانی دنیا میں اپنی آنکھوں سے اللہ تعالیٰ کو کیوں نہیں دیکھ سکتا؟',
      answerUr: 'کیونکہ ہماری آنکھیں دنیا میں اتنی کمزور ہیں کہ وہ ایک سورج کی روشنی بھی نہیں سہہ سکتیں؛ اللہ کے لامحدود نور کا دیدار مومنوں کے لیے جنت کا سب سے بڑا انعام ہے۔',
      questionEn: 'Why can human eyes not see Allah in this world?',
      answerEn: 'Because our eyes are too weak to even look at the sun; seeing Allah\'s beautiful light is the greatest gift saved for Jannah (Paradise).'
    }
  ],
  '2:56': [
    {
      questionUr: 'اللہ تعالیٰ نے ستر سرداروں کو بجلی سے مرنے کے بعد دوبارہ زندگی کیوں عطا فرمائی؟',
      answerUr: 'حضرت موسیٰ علیہ السلام کی غمگین اور پرخلوص دعا کی برکت سے، اور تاکہ وہ اللہ کی بے پناہ رحمت اور قدرت کے شکر گزار بندے بن جائیں۔',
      questionEn: 'Why did Allah bring the seventy leaders back to life after they died?',
      answerEn: 'Because Prophet Moses prayed for them with caring tears, and Allah gave them a second chance to say thank you and be good believers.'
    },
    {
      questionUr: 'ستر سرداروں کے دوبارہ زندہ ہونے سے قیامت کے دن کے بارے میں کیا یقین ملتا ہے؟',
      answerUr: 'یہ واقعہ ثابت کرتا ہے کہ جس طرح اللہ نے ان ستر انسانوں کو ایک سیکنڈ میں زندہ کر دیا، اسی طرح قیامت کے دن تمام انسانوں کو دوبارہ زندہ کرنا اللہ کے لیے بالکل آسان ہے۔',
      questionEn: 'What does this miracle teach us about the Day of Judgment?',
      answerEn: 'It shows that waking up all people from their graves on the Day of Judgment is super easy for Allah, just like waking up from sleep.'
    }
  ],
  '2:57': [
    {
      questionUr: 'میدانِ تیہ کے تپتے ہوئے صحرا میں اللہ تعالیٰ نے بنی اسرائیل پر کیا تین معجزاتی انعامات فرمائے؟',
      answerUr: '۱. دھوپ سے بچانے کے لیے بادلوں کا ٹھنڈا سایہ، ۲. صبح کے وقت شہد جیسی میٹھی خوراک (مَن)، اور ۳. شام کو لذیذ بٹیر جیسے پرندے (سلویٰ)۔',
      questionEn: 'What three miraculous gifts did Allah send down in the hot desert?',
      answerEn: '1. Cool white clouds for shade, 2. Sweet honey dew called Manna every morning, and 3. Plump, gentle quail birds called Salwa every evening.'
    },
    {
      questionUr: 'اللہ تعالیٰ کے فرمان "انہوں نے ہمارا کوئی نقصان نہیں کیا بلکہ اپنی ہی جانوں پر ظلم کیا" سے کیا سبق ملتا ہے؟',
      answerUr: 'انسان کے گناہ یا نافرمانی سے اللہ کا کوئی نقصان نہیں ہوتا؛ بلکہ انسان خود ہی اپنی برکتیں کھو دیتا ہے اور اپنی روح کا نقصان کرتا ہے۔',
      questionEn: 'What does it mean when Allah says: "They did not hurt Us, but only hurt themselves"?',
      answerEn: 'When someone disobeys Allah, they cannot harm Allah at all; sins only bring sadness, loss of blessings, and harm to the person who commits them.'
    }
  ],
  '2:58': [
    {
      questionUr: 'اللہ تعالیٰ نے بستی (بیت المقدس) میں داخل ہوتے وقت کن دو باتوں کا حکم دیا تھا؟',
      answerUr: '۱. شہر کے دروازے میں غرور کے بجائے عاجزی سے سر جھکاتے ہوئے داخل ہونا، اور ۲. زبان سے استغفار کی دعا یعنی "حِطَّةٌ" کہنا۔',
      questionEn: 'What two things did Allah ask the people to do when entering the city?',
      answerEn: '1. Bow their heads humbly to Allah without showing off, and 2. Say the prayer "Hittah" to ask Allah to forgive their sins.'
    },
    {
      questionUr: 'عربی لفظ "حِطَّةٌ" کا کیا مطلب ہے اور یہ ہمیں کیا سکھاتا ہے؟',
      answerUr: 'اس کا مطلب ہے "اے اللہ! ہمارے گناہوں کے بوجھ کو جھاڑ دے اور معاف فرما دے"؛ یہ سکھاتا ہے کہ کامیابی اور فتح کے وقت انسان کو ہمیشہ عاجز اور شکر گزار رہنا چاہیے۔',
      questionEn: 'What does the word "Hittah" mean, and what does it teach us?',
      answerEn: 'It means "O Allah, drop away our heavy sins and forgive us!" It teaches us to stay humble and say sorry to Allah whenever we achieve success.'
    }
  ],
  '2:59': [
    {
      questionUr: 'سرکش لوگوں نے اللہ کے حکم کا مذاق کیسے اڑایا تھا؟',
      answerUr: 'وہ عاجزی سے سر جھکانے کے بجائے ہنستے ہوئے پیٹھ کے بل گھسٹ کر داخل ہوئے، اور \'حِطَّة\' (معافی) کے بجائے \'حِنْطَة\' (گیہوں/اناج) کہہ کر دعا کا مذاق اڑانے لگے۔',
      questionEn: 'How did the disrespectful people make fun of Allah\'s command?',
      answerEn: 'They crawled through the gate on their backs instead of bowing, and they mocked the prayer by changing "Hittah" (forgiveness) into "Hintah" (wheat grain).'
    },
    {
      questionUr: 'اللہ کی باتوں اور احکامات کا مذاق اڑانے کا کیا برا انجام نکلا؟',
      answerUr: 'ان پر آسمان سے طاعون کی بیماری کا عذاب نازل ہوا جس سے سرکش لوگ ہلاک ہو گئے؛ دین کی باتوں کا تمسخر اڑانا انسان کو برباد کر دیتا ہے۔',
      questionEn: 'What happened to them because they made fun of the prayer?',
      answerEn: 'A sudden sickness (plague) came upon the wrongdoers from the sky; making jokes about prayers and divine rules brings great harm and loss.'
    }
  ],
  '2:60': [
    {
      questionUr: 'صحرا میں جب پانی ختم ہو گیا تو اللہ نے حضرت موسیٰ علیہ السلام کے ذریعے کیا عظیم معجزہ ظاہر فرمایا؟',
      answerUr: 'حضرت موسیٰؑ نے اللہ کے حکم سے اپنی لاٹھی ٹھوس پتھر پر ماری، جس سے میٹھے پانی کے بارہ (۱۲) چشمے ابل پڑے!',
      questionEn: 'What amazing miracle happened when Prophet Moses prayed for water?',
      answerEn: 'Allah told Moses to tap a hard rock with his wooden staff, and twelve (12) cool springs of sweet water burst right out of the solid stone!'
    },
    {
      questionUr: 'پتھر سے بارہ (۱۲) چشمے کیوں جاری فرمائے گئے؟',
      answerUr: 'کیونکہ بنی اسرائیل کے بارہ قبائل تھے، اللہ نے ہر قبیلے کو اپنا الگ چشمہ دیا تاکہ پانی پینے پر کوئی دھکم پیل یا لڑائی جھگڑا نہ ہو۔',
      questionEn: 'Why were there twelve springs instead of just one?',
      answerEn: 'Because there were twelve family tribes; having a separate spring for each tribe made sure that everyone could drink peacefully without fighting or pushing.'
    }
  ],
  '2:61': [
    {
      questionUr: 'بنی اسرائیل نے من و سلویٰ کی آسمانی نعمت کے مقابلے میں کس چیز کا مطالبہ کیا؟',
      answerUr: 'انہوں نے بے صبری اور ناشکری کر کے کہا کہ وہ ایک ہی کھانے سے اکتا گئے ہیں، اور انہوں نے زمین کی عام سبزیاں، ککڑی، لہسن، دال اور پیاز مانگے۔',
      questionEn: 'What food did the Israelites demand instead of the heavenly Manna and Salwa?',
      answerEn: 'They complained that they were tired of uniform food and demanded earthly vegetables: cucumbers, garlic, lentils, and onions.'
    },
    {
      questionUr: 'حضرت موسیٰ علیہ السلام کے ارشاد "أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَىٰ بِالَّذِي هُوَ خَيْرٌ" سے کیا سبق ملتا ہے؟',
      answerUr: 'یہ کہ اللہ کی دی ہوئی بابرکت اور پاکیزہ نعمتوں کی ہمیشہ قدر کرنی چاہیے اور نازیبا فرمائشوں یا ناشکری سے بچنا چاہیے۔',
      questionEn: 'What lesson do we learn from Moses asking: "Would you exchange what is better for what is ordinary?"',
      answerEn: 'We learn to cherish and thank Allah for pure blessings, and never complain or trade precious gifts for worldly whims.'
    }
  ],
  '2:62': [
    {
      questionUr: 'آیت ۶۲ کے مطابق اللہ تعالیٰ کے ہاں حقیقی نجات اور کامیابی کا کیا معیار ہے؟',
      answerUr: 'صرف خاندانی نام یا نسل نہیں، بلکہ اللہ تعالیٰ اور یومِ آخرت پر سچا ایمان اور اچھے نیک اعمال اختیار کرنا۔',
      questionEn: 'What is the true key to salvation according to Ayah 62?',
      answerEn: 'Sincere faith in Allah, true belief in the Last Day, and doing good righteous deeds—not empty titles or tribal labels.'
    },
    {
      questionUr: '"لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ" کی کیا خوشخبری ہے؟',
      answerUr: 'سچے مؤمنوں کو نہ مستقبل کا کوئی خوف اور پریشانی ہوگی اور نہ وہ اپنے ماضی پر غمگین ہوں گے، بلکہ وہ اللہ کی حفاظت میں ہمیشہ مسرور رہیں گے۔',
      questionEn: 'What beautiful promise is in the words: "No fear shall be upon them, nor will they grieve"?',
      answerEn: 'True believers will have complete peace and security under Allah\'s care, with no fear of the future and no sorrow about the past.'
    }
  ],
  '2:63': [
    {
      questionUr: 'اللہ تعالیٰ نے طور کے پہاڑ کو بنی اسرائیل کے سروں پر کیوں بلند فرمایا تھا؟',
      answerUr: 'تاکہ وہ اپنی سستی چھوڑیں اور تورات کے الٰہی احکام کو پوری سنجیدگی، عظمت اور پختہ عہد کے ساتھ قبول کریں۔',
      questionEn: 'Why did Allah raise Mount Sinai above the Israelites?',
      answerEn: 'To show them His great majesty and prompt them to take the holy Torah and its guidance with deep commitment and seriousness.'
    },
    {
      questionUr: '"خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ" پر ہم اپنی روزمرہ زندگی میں کیسے عمل کر سکتے ہیں؟',
      answerUr: 'نماز، تلاوت اور اچھے کاموں میں سستی کے بجائے ہمیشہ خوش دلی، چستی اور پختہ عزم کے ساتھ عمل کر کے۔',
      questionEn: 'How can we practice "Hold firmly to what We gave you with strength"?',
      answerEn: 'By fulfilling our prayers and good deeds with energy, focus, and joy, without laziness or delay.'
    }
  ],
  '2:64': [
    {
      questionUr: 'بنی اسرائیل کی بار بار عہد شکنی کے باوجود اللہ تعالیٰ نے ان کو فوری عذاب سے کیوں بچایا؟',
      answerUr: 'اللہ تعالیٰ کے خصوصی فضل اور بے پایاں رحمت کی وجہ سے، تاکہ انہیں سچی توبہ اور اصلاح کا موقع ملے۔',
      questionEn: 'Why were they not wiped out immediately when they broke their covenant?',
      answerEn: 'Because of Allah\'s immense grace and mercy, granting them forbearance and time to repent and correct themselves.'
    },
    {
      questionUr: 'حقیقی خسارہ پانے والا (خاسر) کون ہوتا ہے؟',
      answerUr: 'وہ جو اللہ کی نافرمانی کر کے دنیا کا حقیقی سکون اور آخرت میں جنت کی دائمی نعمتوں کو کھو دے۔',
      questionEn: 'Who is the true loser (Khasir)?',
      answerEn: 'Anyone who disobeys Allah and loses His divine love and the eternal joy of Paradise.'
    }
  ],
  '2:65': [
    {
      questionUr: 'اصحابِ سبت (ہفتے والوں) نے اللہ کے حکم کو دھوکہ دینے کی کیا چال چلی تھی؟',
      answerUr: 'ہفتے کے دن شکار منع تھا، انہوں نے گڑھے کھود کر مچھلیاں پھنسائیں اور اتوار کو پکڑ کر حیلہ کیا کہ ہم نے ہفتے کو شکار نہیں کیا۔',
      questionEn: 'How did the Sabbath-breakers try to cheat the divine command?',
      answerEn: 'They were forbidden to fish on Saturdays, so they trapped fish in ditches on Saturday and scooped them out on Sunday, pretending they did not fish on the Sabbath.'
    },
    {
      questionUr: 'اصحابِ سبت کے واقعہ سے ہمیں کیا اہم اخلاقی سبق ملتا ہے؟',
      answerUr: 'اللہ ہر چھپی اور کھلی بات کو جانتا ہے؛ دین کے احکام میں چالاکیاں اور حیلے بہانے بنانا ہلاکت کا باعث ہوتا ہے، اس لیے ہمیشہ سچائی اور دیانت داری اختیار کرنی چاہیے۔',
      questionEn: 'What vital life lesson does the story of the Sabbath-breakers teach us?',
      answerEn: 'Allah knows every secret intention. Trying to find sneaky loopholes or tricks around right and wrong brings destruction; always be truthful, sincere, and upright.'
    }
  ],
  // Para 2 Key Verses Q&A
  '2:142': [
    {
      questionUr: 'تحویلِ قبلہ کے حکم پر نادان اور معترض لوگوں نے کیا اعتراض کیا؟',
      answerUr: 'انہوں نے کہا کہ مسلمانوں کو بیت المقدس سے کعبۃ اللہ کی طرف کس چیز نے پھیرا؟ اللہ نے جواب دیا کہ مشرق اور مغرب سب اللہ ہی کے ہیں۔',
      questionEn: 'What objection did the critics raise concerning the change of the Qiblah?',
      answerEn: 'They questioned why Muslims shifted orientation from Jerusalem to the Kaaba. Allah answered that the East and the West belong solely to Him.'
    }
  ],
  '2:143': [
    {
      questionUr: 'امتِ مسلمہ کو "امۃً وسطاً" (درمیانی/بہترین امت) کیوں بنایا گیا؟',
      answerUr: 'تاکہ مسلمان تمام انسانوں پر حق اور عدل کے گواہ بنیں اور رسول اللہ ﷺ مسلمانوں پر گواہ ہوں۔',
      questionEn: 'Why is the Muslim Ummah designated as "a middle community" (Ummatan Wasata)?',
      answerEn: 'To be balanced witnesses of truth and justice over mankind, and the Messenger will be a witness over them.'
    }
  ],
  '2:152': [
    {
      questionUr: '"فاذکرونی أذکرکم" کا کیا مبارک وعدہ ہے؟',
      answerUr: 'تم میرا ذکر اور میری یاد کرو، میں تمہیں (اپنی رحمت، برکت اور انعامات کے ساتھ) یاد رکھوں گا، اور میرا شکر ادا کرو اور ناشکری نہ کرو۔',
      questionEn: 'What is the divine promise in "Remember Me; I will remember you"?',
      answerEn: 'Allah promises that if servants remember Him through obedience and gratitude, He will encompass them in His grace, blessings, and protection.'
    }
  ],
  '2:153': [
    {
      questionUr: 'مؤمنین کو ہر مشکل میں کن دو ہتھیاروں سے نصرت مانگنے کی تلقین ہے؟',
      answerUr: 'صبر اور نماز کے ساتھ، کیونکہ اللہ تعالیٰ صبر کرنے والوں کے ساتھ ہے۔',
      questionEn: 'What two spiritual pillars are believers told to seek assistance with?',
      answerEn: 'Patience (Sabr) and Prayer (Salah), for Allah is with those who are patient.'
    }
  ],
  '2:155': [
    {
      questionUr: 'اللہ تعالیٰ اپنے بندوں کو کن کن چیزوں سے آزماتا ہے اور بشارت کن کے لیے ہے؟',
      answerUr: 'خوف، بھوک، مال، جان اور پھلوں کی کمی کے ذریعے، اور خوشخبری صبر کرنے والوں کے لیے ہے۔',
      questionEn: 'What worldly trials are mentioned, and who is promised glad tidings?',
      answerEn: 'Trials of fear, hunger, loss of wealth, lives, and fruits; glad tidings are promised to the steadfast and patient.'
    }
  ],
  '2:177': [
    {
      questionUr: 'آیتِ بر (آیت ۱۷۷) میں حقیقی نیکی (البر) کی کیا تعریف کی گئی ہے؟',
      answerUr: 'صرف مشرق یا مغرب کی طرف منہ کر لینا اصل نیکی نہیں، بلکہ اصل نیکی اللہ، آخرت، فرشتوں، کتاب اور انبیاء پر ایمان لانا، مال کو رشتہ داروں اور مسکینوں پر خرچ کرنا، نماز قائم کرنا، زکوٰۃ دینا، عہد پورا کرنا اور تنگی و تکلیف میں صبر کرنا ہے۔',
      questionEn: 'What is the comprehensive definition of true righteousness in Ayah 177?',
      answerEn: 'True piety is not merely ritual direction, but profound faith in Allah, the Last Day, angels, scripture, giving wealth in charity, establishing prayer, fulfilling promises, and displaying patience during hardship.'
    }
  ],
  '2:183': [
    {
      questionUr: 'رمضان المبارک کے روزے فرض کرنے کا بنیادی مقصد کیا بیان کیا گیا ہے؟',
      answerUr: '"لعلکم تتقون" تاکہ تمہارے اندر تقویٰ، پرہیزگاری اور گناہوں سے بچنے کی روحانی قوت پیدا ہو۔',
      questionEn: 'What is the primary purpose of fasting prescribed in Ramadan?',
      answerEn: '"That you may attain Taqwa"—to develop God-consciousness, self-discipline, and piety.'
    }
  ],
  '2:186': [
    {
      questionUr: 'دعا مانگنے والوں کے بارے میں اللہ تعالیٰ نے کیا قربت اور تسلی فرمائی؟',
      answerUr: 'فرمایا: "جب میرے بندے میرے بارے میں پوچھیں تو میں ان کے بہت قریب ہوں، پکارنے والے کی پکار کا جواب دیتا ہوں جب وہ مجھ سے مانگتا ہے۔"',
      questionEn: 'What intimacy and reassurance does Allah give regarding supplications?',
      answerEn: '"When My servants ask concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."'
    }
  ],
  '2:201': [
    {
      questionUr: 'قرآن مجید کی سب سے جامع دعا "ربنا آتنا فی الدنیا حسنۃ..." میں کیا مانگا گیا ہے؟',
      answerUr: 'اے ہمارے رب! ہمیں دنیا میں بھی ہر قسم کی بھلائی عطا فرما، اور آخرت میں بھی بھلائی عطا فرما، اور ہمیں دوزخ کے عذاب سے بچا۔',
      questionEn: 'What is requested in the comprehensive Quranic Dua "Rabbana atina fid-dunya hasanah..."?',
      answerEn: 'For goodness and well-being in this earthly life, supreme goodness in the Hereafter, and protection from the torment of the Fire.'
    }
  ],
  '2:214': [
    {
      questionUr: 'آیت نمبر ۲۱۴ میں مؤمنین کو سابقہ امتوں کی قربانیوں کی کیا مثال دی گئی؟',
      answerUr: 'ان پر شدید تنگی اور مصائب آئے اور وہ ہلا مارے گئے یہاں تک کہ انہوں نے نصرتِ الٰہی مانگی، اور جواب ملا کہ بے شک اللہ کی مدد قریب ہے۔',
      questionEn: 'What historical trial is cited in Ayah 214 regarding entering Paradise?',
      answerEn: 'Past believers endured extreme hardships and were shaken before divine victory arrived; reminding us that Allah\'s help is always near.'
    }
  ],
  '2:249': [
    {
      questionUr: 'طالوت کے سچے ساتھیوں نے جالوت کے لشکر کو دیکھ کر کیا سنہری بات کہی؟',
      answerUr: '"کم من فئۃ قلیلۃ غلبت فئۃ کثیرۃ بإذن اللہ" کتنی ہی چھوٹی جماعتیں اللہ کے حکم سے بڑی جماعتوں پر غالب آ جاتی ہیں، اور اللہ صبر کرنے والوں کے ساتھ ہے۔',
      questionEn: 'What memorable declaration did Saul\'s faithful companions make against Goliath\'s army?',
      answerEn: '"How often a small group has overcome a large group by permission of Allah. And Allah is with the patient."'
    }
  ]
};

// Curated Practical Injunctions / Actions (جس کام کا ہمیں حکم دیا گیا ہے / ہمارے لیے عملی اسباق)
const CURATED_ACTIONS_MAP: Record<string, AyahActionItem[]> = {
  // Surah Al-Fatiha
  '1:1': [
    {
      actionUr: 'ہر جائز اور نیک کام (کھانے پینے، پڑھنے، سواری، اور دن کے تمام اہم کاموں) کے آغاز میں "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" پڑھنے کو اپنی روزمرہ عادت بنائیں۔',
      actionEn: 'Make it a daily habit to begin every noble and lawful task by reciting Bismillah.',
      category: 'command'
    },
    {
      actionUr: 'اللہ تعالیٰ کی وسیع رحمت پر مکمل بھروسہ رکھیں اور کسی بھی پریشانی میں اس کی رحمت سے ہرگز ناامید نہ ہوں۔',
      actionEn: 'Place complete trust in Allah\'s boundless mercy and never despair during trials.',
      category: 'lesson'
    }
  ],
  '1:2': [
    {
      actionUr: 'ہر حال میں، نعمت کے ملنے پر، خوشی میں اور آزمائش کے وقت بھی زبان سے "اَلْحَمْدُ لِلّٰهِ" کہہ کر اللہ کا شکر ادا کریں۔',
      actionEn: 'Consistently praise and thank Allah by saying "Alhamdulillah" in moments of ease and hardship alike.',
      category: 'command'
    },
    {
      actionUr: 'کائنات کی ہر مخلوق اور نعمت کو اللہ کا احسان سمجھیں اور دل میں تکبر کی بجائے عاجزی پیدا کریں۔',
      actionEn: 'Acknowledge that every blessing originates from Allah, fostering humility over pride.',
      category: 'lesson'
    }
  ],
  '1:3': [
    {
      actionUr: 'اللہ کی مخلوق (انسانوں، والدین، اہل و عیال، غریبوں اور بے زبان جانوروں) کے ساتھ نرمی، شفقت اور رحمت کا برتاؤ کریں۔',
      actionEn: 'Treat all creation—parents, family, orphans, and animals—with kindness, gentleness, and empathy.',
      category: 'command'
    },
    {
      actionUr: 'لوگوں کے قصوروں کو معاف کریں تاکہ اللہ تعالیٰ قیامت کے دن ہمارے گناہوں پر رحم فرمائے۔',
      actionEn: 'Pardon the faults of others so that Allah may shower His mercy upon your sins.',
      category: 'lesson'
    }
  ],
  '1:4': [
    {
      actionUr: 'روزانہ اپنے اعمال کا محاسبہ کریں کہ آج میں نے قیامت کے دن اللہ کے سامنے پیش ہونے کے لیے کیا تیاری کی ہے۔',
      actionEn: 'Perform daily self-accounting (Muhasabah) to prepare for accountability on the Day of Judgment.',
      category: 'command'
    },
    {
      actionUr: 'کسی پر ظلم یا زیادتی کرنے سے باز رہیں، کیونکہ قیامت کے دن ہر حقدار کو اس کا حق دلایا جائے گا۔',
      actionEn: 'Abstain from injustice and oppression, remembering that all rights will be redeemed on Judgment Day.',
      category: 'prohibition'
    }
  ],
  '1:5': [
    {
      actionUr: 'اپنی تمام عبادات (نماز، تلاوت، ذکر، دعا، خیرات) کو صرف اور صرف اللہ کی رضا کے لیے خالص رکھیں، دکھاوے (ریاکاری) سے بچیں۔',
      actionEn: 'Purify all acts of worship solely for Allah\'s pleasure, shunning show-off and ostentation (Riya).',
      category: 'command'
    },
    {
      actionUr: 'زندگی کی ہر چھوٹی بڑی حاجت، پریشانی اور بیماری میں سب سے پہلے بارگاہِ الٰہی میں ہاتھ اٹھا کر دعا اور استعانت مانگیں۔',
      actionEn: 'Turn first and foremost to Allah in supplication for every need, difficulty, and relief.',
      category: 'command'
    }
  ],
  '1:6': [
    {
      actionUr: 'ہر نماز میں اور روزمرہ زندگی کے ہر اہم فیصلے میں صدقِ دل سے اللہ تعالیٰ سے صراطِ مستقیم (سیدھے راستے) اور رہنمائی کی دعا مانگیں۔',
      actionEn: 'Sincerely supplicate to Allah in every prayer for guidance to the Straight Path in all affairs.',
      category: 'dua'
    },
    {
      actionUr: 'اپنی زندگی کو دین کے احکام میں غلو (شدت پسندی) اور سستی (لاپرواہی) سے بچا کر قرآن و سنت کی اعتدال والی شاہراہ پر چلائیں۔',
      actionEn: 'Steer your lifestyle along the moderate path of Quran and Sunnah, avoiding religious extremism and laxity.',
      category: 'command'
    }
  ],
  '1:7': [
    {
      actionUr: 'انبیاء، صدیقین، شہداء اور نیک صالحین کے نقشِ قدم پر چلیں اور اپنی صحبت ہمیشہ اچھے اور نیک لوگوں کے ساتھ رکھیں۔',
      actionEn: 'Follow the footsteps of the Prophets, Truthful, Martyrs, and Righteous, keeping good company.',
      category: 'command'
    },
    {
      actionUr: 'حق بات معلوم ہو جانے کے بعد ضد اور ہٹ دھرمی کرنے (مغضوب علیہم کا طریقہ) اور دینی احکام میں اپنی من مانی کرنے (ضالین کا طریقہ) سے مکمل پرہیز کریں۔',
      actionEn: 'Never be stubborn against truth once known, and avoid distorting religious commandments.',
      category: 'prohibition'
    }
  ],

  // Surah Al-Baqarah
  '2:1': [
    {
      actionUr: 'قرآن مجید کو اللہ کا سچا کلام مانیں اور اس کے تمام احکام و اسرار کے سامنے مکمل طور پر سرِ تسلیم خم کریں۔',
      actionEn: 'Submit wholeheartedly to the divine perfection and sacred wisdom of the Holy Quran.',
      category: 'lesson'
    }
  ],
  '2:2': [
    {
      actionUr: 'قرآن مجید کی روزانہ تلاوت، سمجھنے اور اس کے احکام پر خلوص کے ساتھ عمل کرنے کا معمول بنائیں۔',
      actionEn: 'Establish a daily routine of reciting, contemplating, and practicing the Quran\'s guidance.',
      category: 'command'
    },
    {
      actionUr: 'اپنے دل میں تقویٰ (اللہ کا خوف اور گناہوں سے بچنے کی فکر) پیدا کریں تاکہ قرآن کی حقیقی ہدایت نصیب ہو۔',
      actionEn: 'Cultivate Taqwa (God-consciousness) in your heart to unlock true Quranic guidance.',
      category: 'command'
    }
  ],
  '2:3': [
    {
      actionUr: 'پانچوں وقت کی نماز کو وقت کے اندر، تمام آداب، فرائض اور خشوع و خضوع کے ساتھ پابندی سے قائم کریں۔',
      actionEn: 'Establish the five daily prayers punctually with complete inner devotion and outer stillness.',
      category: 'command'
    },
    {
      actionUr: 'اللہ کے دیے ہوئے حلال رزق میں سے زکوٰۃ ادا کریں اور غریبوں، یتیموں اور ضرورت مندوں پر صدقہ و خیرات کریں۔',
      actionEn: 'Pay obligatory Zakah and regularly spend voluntary charity on the needy and vulnerable.',
      category: 'command'
    },
    {
      actionUr: 'غیب کے حقائق (اللہ کی ذات، فرشتے، قبر کا حساب، جنت و دوزخ) پر پختہ یقین رکھ کر اپنے اعمال کی اصلاح کریں۔',
      actionEn: 'Strengthen firm faith in the unseen realities and align your daily actions accordingly.',
      category: 'lesson'
    }
  ],
  '2:4': [
    {
      actionUr: 'قرآن مجید اور تمام سابقہ آسمانی کتب کے برحق ہونے پر ایمان رکھیں اور آخرت کے حساب کتاب کو ہر وقت سامنے رکھیں۔',
      actionEn: 'Maintain unwavering faith in divine revelations and live with active mindfulness of the Hereafter.',
      category: 'lesson'
    }
  ],
  '2:6': [
    {
      actionUr: 'اپنے دل کو نصیحت اور حق بات قبول کرنے کے لیے کھلا رکھیں اور تکبر یا ضد کی بیماری سے اللہ کی پناہ مانگیں۔',
      actionEn: 'Keep your heart receptive to sincere advice and seek refuge in Allah from pride and obstinacy.',
      category: 'prohibition'
    }
  ],
  '2:8': [
    {
      actionUr: 'منافقت، دوغلے پن، جھوٹ اور ظاہر و باطن کے تضاد سے اپنے دل اور زبان کی سختی سے حفاظت کریں۔',
      actionEn: 'Guard your tongue and heart against hypocrisy, double standards, and deceit.',
      category: 'prohibition'
    }
  ],
  '2:11': [
    {
      actionUr: 'زمین میں کسی قسم کا فتنہ، فساد، لڑائی جھگڑا، گناہ یا نافرمانی پھیلانے سے قطعی گریز کریں اور سچے مصلح بنیں۔',
      actionEn: 'Refrain from causing societal discord or corruption, acting as genuine agents of peace and virtue.',
      category: 'prohibition'
    }
  ],
  '2:13': [
    {
      actionUr: 'صحابہ کرام رضی اللہ عنہم کے ایمان اور قربانیوں کو اپنے لیے نمونہ بنائیں اور ان کی تعظیم و احترام دل میں رکھیں۔',
      actionEn: 'Take the sincere faith and sacrifices of the Sahabah (Companions) as your role model in life.',
      category: 'command'
    }
  ],
  '2:21': [
    {
      actionUr: 'صرف اور صرف اللہ وحدہ لا شریک کی خالص عبادت کریں اور شرک کی تمام چھوٹی بڑی قسموں سے بچیں۔',
      actionEn: 'Worship Allah alone without associating any partners with Him in any sphere of life.',
      category: 'command'
    }
  ],
  '2:22': [
    {
      actionUr: 'اللہ تعالیٰ کی دی ہوئی نعمتوں (بارش، رزق، پھل، صحت) پر اس کا شکر بجا لائیں اور کسی کو اس کے برابر نہ ٹھہرائیں۔',
      actionEn: 'Show gratitude for all sustenance provided by Allah and ascribe no rivals or equals to Him.',
      category: 'command'
    }
  ],
  '2:23': [
    {
      actionUr: 'قرآن مجید کی عظمت اور اعجاز کا احترام کریں اور اس کے پیغام کو دیگر انسانوں تک پہنچانے میں حصہ لیں۔',
      actionEn: 'Honor the miraculous nature of the Quran and share its timeless message with others.',
      category: 'command'
    }
  ],
  '2:24': [
    {
      actionUr: 'جہنم کی ہولناک آگ اور عذاب سے بچنے کے لیے گناہوں سے سچی توبہ کریں اور نیک اعمال کا ذخیرہ تیار کریں۔',
      actionEn: 'Seek genuine repentance and perform righteous deeds to be saved from the Fire of Hell.',
      category: 'command'
    }
  ],
  '2:25': [
    {
      actionUr: 'ایمان کے ساتھ ساتھ نیک اعمال (حقوق اللہ اور حقوق العباد) بجا لانے میں ہمہ وقت کوشاں رہیں تاکہ جنت کے حقدار بن سکیں۔',
      actionEn: 'Strive consistently in righteous deeds fulfilling the rights of Allah and fellow human beings.',
      category: 'command'
    }
  ],
  '2:30': [
    {
      actionUr: 'زمین میں اللہ کے نائب (خلیفہ) ہونے کے ناطے عدل و انصاف، اچھائی اور امن کا بول بالا کریں، خونریزی اور فساد سے بچیں۔',
      actionEn: 'Uphold justice, mercy, and peace on earth as responsible vicegerents of the Creator.',
      category: 'command'
    }
  ],
  '2:34': [
    {
      actionUr: 'تکبر، حسد اور انا کی بیماری سے بچیں اور اللہ کے ہر حکم کے سامنے عاجزی کے ساتھ سر جھکا دیں۔',
      actionEn: 'Root out arrogance and envy from your heart, submitting humbly to divine commands.',
      category: 'prohibition'
    }
  ],
  '2:40': [
    {
      actionUr: 'اللہ تعالیٰ کے ساتھ کیے گئے عہد (ایمان اور اطاعت) کو پورا کریں اور لوگوں سے کیے گئے وعدوں کو بھی نبھائیں۔',
      actionEn: 'Fulfill your solemn covenant of faith with Allah and remain true to all worldly promises.',
      category: 'command'
    }
  ],
  '2:43': [
    {
      actionUr: 'نماز قائم کریں، اپنے مال کی زکوٰۃ خوش دلی سے ادا کریں اور مسلمانوں کے ساتھ مل کر باجماعت نماز ادا کریں۔',
      actionEn: 'Establish regular prayers, pay obligatory Zakah willingly, and attend congregational prayers.',
      category: 'command'
    }
  ],
  '2:44': [
    {
      actionUr: 'دوسروں کو نیکی کی نصیحت کرتے وقت خود اپنے عمل کو نہ بھولیں، کہنی اور کرنی میں یکسانیت پیدا کریں۔',
      actionEn: 'Practice what you preach; do not advise others to do good while neglecting your own conduct.',
      category: 'prohibition'
    }
  ],
  '2:45': [
    {
      actionUr: 'ہر پریشانی، بیماری یا مشکل کے وقت گھبرانے کی بجائے صبر اور نماز کے ذریعے اللہ سے مدد اور نصرت طلب کریں۔',
      actionEn: 'In every crisis and hardship, seek divine support through patient perseverance (Sabr) and prayer (Salah).',
      category: 'command'
    }
  ]
};

/**
 * Intelligent helper to extract/generate easy Q&A for any Ayah across Para 1
 */
export function getAyahQA(surahNum: number, ayahNum: number, ayah: Ayah): AyahQA[] {
  const key = `${surahNum}:${ayahNum}`;
  if (CURATED_QA_MAP[key]) {
    return CURATED_QA_MAP[key];
  }

  // If specific curated QA doesn't exist, generate intelligent, easy, highly relevant QA based on the verse
  const cleanUrdu = ayah.translationUr.replace(/[۔!؟]/g, '').trim();
  const cleanEng = ayah.translationEn.replace(/[.!?]/g, '').trim();

  return [
    {
      questionUr: `سورۃ ${ayah.surahNameArabic} کی آیت نمبر ${ayah.ayahNumber} کا بنیادی پیغام اور مفہوم کیا ہے؟`,
      answerUr: `اس آیت مبارکہ کا بنیادی مفہوم یہ ہے کہ: "${cleanUrdu}"۔ یہ آیت ہمیں اللہ تعالیٰ کے احکام کی اطاعت، اس کی قدرت و نعمتوں کے ادراک اور آخرت کی تیاری کی دعوت دیتی ہے۔`,
      questionEn: `What is the core message of ${ayah.surahNameEnglish} Verse ${ayah.ayahNumber}?`,
      answerEn: `The verse teaches us: "${cleanEng}." It calls upon us to recognize divine signs, obey Allah\'s commands, and prepare for eternal salvation.`
    },
    {
      questionUr: `اس آیت مبارکہ سے ہمیں اللہ تعالیٰ کے کن اوصاف یا احکام کی رہنمائی ملتی ہے؟`,
      answerUr: `اس آیت سے یہ سبق ملتا ہے کہ اللہ تعالیٰ ہی تمام کائنات کا حقیقی حاکم اور کارساز ہے۔ بندے پر لازم ہے کہ وہ اپنے ہر قول و فعل میں اللہ کے بتائے ہوئے راستے کو اختیار کرے اور گناہوں سے بچے۔`,
      questionEn: `What lessons and divine attributes are emphasized in this verse?`,
      answerEn: `It emphasizes Allah\'s supreme sovereignty, wisdom, and justice, reminding servants to align their actions with divine guidance and avoid disobedience.`
    }
  ];
}

/**
 * Intelligent helper to get Practical Injunctions (عملی ہدایات و احکام) for any Ayah
 */
export function getAyahActionPoints(surahNum: number, ayahNum: number, ayah: Ayah): AyahActionItem[] {
  const key = `${surahNum}:${ayahNum}`;
  if (CURATED_ACTIONS_MAP[key]) {
    return CURATED_ACTIONS_MAP[key];
  }

  // Generate actionable, inspiring practical instructions for our daily life
  return [
    {
      actionUr: `اس آیت کے مفہوم پر غور کریں اور اپنی روزمرہ زندگی میں اللہ تعالیٰ کے احکام کی سچے دل سے اطاعت کا عہد کریں۔`,
      actionEn: `Reflect deeply upon this verse and commit to obeying Allah\'s commandments with sincerity in daily life.`,
      category: 'command'
    },
    {
      actionUr: `قرآن مجید کی اس آیت کی تلاوت و فہم کو معمول بنائیں اور اس میں بیان کردہ نصیحت پر عمل کر کے اپنے اخلاق و اعمال کو سنواریں۔`,
      actionEn: `Apply the moral lessons and wisdom of this verse to refine your character, speech, and conduct.`,
      category: 'lesson'
    },
    {
      actionUr: `ہر قسم کی نافرمانی، غفلت اور سستی سے پرہیز کریں اور اللہ تعالیٰ سے نیکی کے راستے پر استقامت کی دعا کریں۔`,
      actionEn: `Abstain from spiritual negligence and persistently supplicate for steadfastness on the righteous path.`,
      category: 'dua'
    }
  ];
}
