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
      answerUr: 'فرمایا کہ اگر تمہیں اس کلام کے اللہ کی طرف سے ہونے میں شک ہے تو تم سب مل کر اس جیسی کوئی ایک چھوٹی سی سورت ہی بنا کر لا دکھاؤ۔',
      questionEn: 'What challenge did the Quran give to skeptics and deniers?',
      answerEn: 'To produce even a single chapter (Surah) resembling the Quran\'s divine wisdom and eloquence.'
    }
  ],
  '2:25': [
    {
      questionUr: 'اہلِ ایمان اور نیک عمل کرنے والوں کے لیے جنت میں کن انعامات کی خوشخبری دی گئی ہے؟',
      answerUr: 'ایسے باغات جن کے نیچے نہریں بہتی ہیں، لذیذ اور پاکیزہ پھل، پاک صاف جوڑے اور وہاں ہمیشہ ہمیشہ کی پرسکون اور ابدی زندگی۔',
      questionEn: 'What glad tidings are promised to the believers who do righteous deeds?',
      answerEn: 'Gardens beneath which rivers flow, pure fruits, purified companions, and eternal bliss in Paradise.'
    }
  ],
  '2:30': [
    {
      questionUr: 'اللہ تعالیٰ نے حضرت آدم علیہ السلام کو زمین پر کس حیثیت سے پیدا فرمایا؟',
      answerUr: 'زمین میں اپنا خلیفہ (نائب) بنا کر، تاکہ وہ اور ان کی اولاد اللہ کے احکام کے مطابق زمین کا نظام چلائیں۔',
      questionEn: 'In what capacity was Prophet Adam (A.S.) created on earth?',
      answerEn: 'As a Khalifah (vicegerent/successor), entrusted with implementing divine values on earth.'
    }
  ],
  '2:34': [
    {
      questionUr: 'ابلیس (شیطان) نے حضرت آدم علیہ السلام کو سجدہ کرنے سے کیوں انکار کیا اور اس کا کیا انجام ہوا؟',
      answerUr: 'اس نے تکبر اور حسد کی وجہ سے اللہ کے حکم کی نافرمانی کی، جس کی وجہ سے وہ اللہ کی بارگاہ سے دھتکارا گیا اور کافر ہو گیا۔',
      questionEn: 'Why did Iblees refuse to prostrate to Adam, and what was the consequence?',
      answerEn: 'He refused out of pride and envy, resulting in his expulsion from divine mercy and becoming a disbeliever.'
    }
  ],
  '2:43': [
    {
      questionUr: '"وارکعوا مع الراکعین" سے کیا حکم ملتا ہے؟',
      answerUr: 'اس سے یہ حکم ملتا ہے کہ مردوں کو نماز باجماعت مسجد میں جا کر ادا کرنی چاہیے اور دوسرے مسلمانوں کے ساتھ مل کر عاجزی اختیار کرنی چاہیے۔',
      questionEn: 'What command is given in "and bow with those who bow"?',
      answerEn: 'The importance of performing congregational prayers (Salat al-Jama\'ah) in humble submission.'
    }
  ],
  '2:45': [
    {
      questionUr: 'مشکلات، پریشانیوں اور مصائب کے وقت کن دو چیزوں سے مدد حاصل کرنے کا حکم دیا گیا ہے؟',
      answerUr: 'صبر (برداشت و ضبطِ نفس) اور نماز کے ذریعے اللہ تعالیٰ سے مدد مانگنے کا حکم دیا گیا ہے۔',
      questionEn: 'Which two powerful means of seeking help are prescribed during trials?',
      answerEn: 'Patience (Sabr) and Prayer (Salah).'
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
