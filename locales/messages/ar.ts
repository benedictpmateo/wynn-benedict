export default {
  steps: "الخطوة {currentStep} من {totalSteps}",
  termsAndCondition: "الشروط والأحكام",
  privacyPolicy: "سياسة الخصوصية",
  header: {
    roomAndSuites: "الغرف والأجنحة",
    wynnRewards: "مكافآت وين",
    offers: "العروض",
    dining: "المطاعم",
    entertainment: "الترفيه",
    meetingAndEvents: "الاجتماعات والفعاليات",
  },
  registration: {
    title: "التسجيل",
    subtitle: "الرجاء إدخال المعلومات أدناه لإنشاء حسابك.",
    personalInfo: "المعلومات الشخصية",
    contactDetails: "تفاصيل الاتصال",
  },
  registrationFields: {
    firstName: {
      label: "الاسم الأول",
      tooltip: "أدخل اسمك الأول",
      placeholder: "أدخل اسمك الأول",
    },
    lastName: {
      label: "الاسم الأخير",
      tooltip: "أدخل اسمك الأخير",
      placeholder: "أدخل اسمك الأخير",
    },
    gender: {
      label: "الجنس",
      tooltip: "اختر جنسك",
      placeholder: "اختر جنسك",
    },
    residenceCountry: {
      label: "بلد الإقامة",
      tooltip: "اختر بلد إقامتك",
      placeholder: "اختر بلد إقامتك",
    },
    email: {
      label: "البريد الإلكتروني",
      tooltip: "أدخل عنوان بريدك الإلكتروني",
      placeholder: "أدخل عنوان بريدك الإلكتروني",
    },
    phone: {
      label: "رقم الهاتف",
      tooltip: "أدخل رقم هاتفك",
      placeholder: "أدخل رقم هاتفك",
    },
    termsAndCondition: {
      label: "أوافق على {termsAndCondition} و {privacyPolicy}",
    },
    sendToPhone: "إرسال إلى الهاتف",
    sendToEmail: "إرسال إلى البريد الإلكتروني",
  },
  otpVerify: {
    title: "التحقق بواسطة رمز OTP",
    sendCode: {
      title: "إرسال الرمز",
      message: "كيف تريد استلام الرمز؟",
    },
    verifyCode: {
      title: "الرجاء فحص {type} الخاص بك",
      message: "لقد أرسلنا رمز التحقق إلى {value}",
      resend: "لم تستلم الرمز؟ {resendLink}",
      resendLink: "انقر لإعادة الإرسال",
      resendCountdown: "يمكنك إعادة الإرسال بعد {seconds} ثانية",
    },
    type: {
      phone: "الهاتف",
      email: "البريد الإلكتروني",
    },
  },
  successRegistration: {
    finished: "تم التسجيل بنجاح",
    title: "التسجيل ناجح.",
    message: "شكراً لتسجيلك في منصتنا.",
    actionBtn: "ابدأ من جديد.",
  },
  footer: {
    connectWithUs: "تواصل معنا",
    collections: {
      shopHome: "مجموعة المتجر المنزلي",
      giftCards: "بطاقات الهدايا",
      wynnStories: "قصص وين",
      wynnSlotsApp: "تطبيق وين للسلوتس",
      mobileApp: "التطبيق الجوال",
      responsibleGaming: "المقامرة المسؤولة",
    },
    legals: {
      aboutUs: "معلومات عنا",
      careers: "الوظائف",
      investorRelations: "علاقات المستثمرين",
      privacyNotice: "إشعار الخصوصية",
      cookieNotice: "إشعار الكوكيز",
      termsOfUse: "شروط الاستخدام",
      hotelInfo: "معلومات الفندق والدليل",
    },
    locations: {
      wynnPalace: "قصر وين كوتاي",
      encoreBoston: "إنكور بوسطن هاربور",
      wynnMacau: "وين ماكاو",
    },
  },
  buttons: {
    next: "التالي",
    back: "رجوع",
  },
  newsLetter: {
    title: "احصل على الأخبار والتحديثات",
    message:
      "احصل على آخر التطورات والأخبار المثيرة حول كيفية تشكيلنا للمستقبل!",
    email: "عنوان بريدك الإلكتروني",
    actionBtn: "انضم إلى النشرة البريدية",
  },
} as const;
