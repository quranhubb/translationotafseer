export interface AuthorInfo {
  nameUrdu: string;
  nameEnglish: string;
  titleUrdu: string;
  titleEnglish: string;
  lifespan: string;
  biographyUrdu: string;
  biographyEnglish: string;
  tafseerBackgroundUrdu: string;
  tafseerBackgroundEnglish: string;
  featuresUrdu: string[];
  featuresEnglish: string[];
}

export const AUTHOR_DATA: AuthorInfo = {
  nameUrdu: 'حضرت مولانا مفتی محمد شفیع عثمانی رحمہ اللہ',
  nameEnglish: 'Grand Mufti Muhammad Shafi Usmani (R.A.)',
  titleUrdu: 'مفتی اعظم پاکستان و بانی دارالعلوم کراچی',
  titleEnglish: 'Grand Mufti of Pakistan & Founder of Darul Uloom Karachi',
  lifespan: '1897 – 1976 (1314 – 1396 AH)',
  biographyUrdu: `حضرت مولانا مفتی محمد شفیع صاحب دیوبند کے نامور جید علماء، شیخ الہند مولانا محمود حسن اور حکیم الامت حضرت مولانا اشرف علی تھانوی رحمہما اللہ کے ارشد خلفاء میں سے تھے۔ آپ نے دارالعلوم دیوبند میں طویل عرصہ تک تدریس و افتاء کی خدمات انجام دیں اور قیامِ پاکستان کے بعد پاکستان کے مفتی اعظم مقرر ہوئے اور کراچی میں دارالعلوم کراچی کی بنیاد رکھی۔`,
  biographyEnglish: `Mufti Muhammad Shafi Usmani was one of the foremost Islamic jurists and scholars of the 20th century. A prime disciple of Maulana Ashraf Ali Thanvi and Shaykh al-Hind Mahmud Hasan Deobandi, he served as the Chief Mufti of Darul Uloom Deoband, later migrated to Pakistan where he founded the world-renowned Jamia Darul Uloom Karachi, and served as the Grand Mufti.`,
  tafseerBackgroundUrdu: `معارف القرآن کی تصنیف کا آغاز ریڈیو پاکستان سے نشر ہونے والے ہفتہ وار قرآنی دروس سے ہوا۔ سامعین کے پرزور اصرار پر حضرت مفتی صاحب نے اسے باقاعدہ تفصیلی کتابی شکل میں قلمبند کرنا شروع کیا۔ یہ تفسیر سلف صالحین کے معتمد تفسیری اصولوں پر مبنی، فقہی مسائل و احکام پر محیط اور جدید دور کے شکوک و شبہات کے تسلی بخش جوابات کا نادر شاہکار ہے۔`,
  tafseerBackgroundEnglish: `Ma'ariful Qur'an originated from weekly Quranic broadcasts on Radio Pakistan in 1954. Upon overwhelming public demand, Mufti Muhammad Shafi expanded the discourses into an exhaustive 8-volume magnum opus in Urdu. It is globally recognized as the most authentic, balanced, and accessible classical-modern commentary of the Holy Qur'an, translated into English by his sons Justice Mufti Muhammad Taqi Usmani and Prof. Muhammad Hasan Askari.`,
  featuresUrdu: [
    'سادہ، سلیس اور دلنشین زبان',
    'آیات کا شانِ نزول اور تاریخی پس منظر',
    'فقہی و شرعی احکام (معارف و مسائل) کی جامع تفصیل',
    'جدید فکری و سائنسی شبہات کے مدلل جوابات',
    'تزکیہ نفس، اخلاقی و روحانی اصلاح کے رہنما اصول'
  ],
  featuresEnglish: [
    'Lucid, accessible yet profound contemporary exposition',
    'Detailed Shan-e-Nuzool (Occasions of Revelation)',
    'Comprehensive legal & jurisprudential rulings (Ma\'arif & Masa\'il)',
    'Rational rebuttals to modern doubts and materialism',
    'Spiritual purification and practical ethical guidance'
  ]
};
