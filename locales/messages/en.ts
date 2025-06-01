export default {
  steps: "Step {currentStep} of {totalSteps}",
  termsAndCondition: "terms and condition",
  privacyPolicy: "privacy policy",
  header: {
    roomAndSuites: "ROOM & SUITES",
    wynnRewards: "WYNN REWARDS",
    offers: "OFFERS",
    dining: "DINING",
    entertainment: "ENTERTAINMENT",
    meetingAndEvents: "MEETING & EVENTS",
  },
  registration: {
    title: "Registration",
    subtitle: "Please enter below information to create your account.",
    personalInfo: "Personal Info",
    contactDetails: "Contact Details",
  },
  registrationFields: {
    firstName: {
      label: "First Name",
      tooltip: "Input your first name",
      placeholder: "Input your first name",
    },
    lastName: {
      label: "Last Name",
      tooltip: "Input your last name",
      placeholder: "Input your last name",
    },
    gender: {
      label: "Gender",
      tooltip: "Select your gender",
      placeholder: "Select your gender",
    },
    residenceCountry: {
      label: "Your residence country",
      tooltip: "Select your residence country",
      placeholder: "Select your residence country",
    },
    email: {
      label: "Email",
      tooltip: "Input your email address",
      placeholder: "Input your email address",
    },
    phone: {
      label: "Phone Number",
      tooltip: "Input your phone number",
      placeholder: "Input your phone number",
    },
    termsAndCondition: {
      label: "I agree to the {termsAndCondition} and {privacyPolicy}",
    },
    sendToPhone: "Send to Phone",
    sendToEmail: "Send to Email",
  },
  otpVerify: {
    title: "OTP Verification",
    sendCode: {
      title: "Send Code",
      message: "How would you like to receive the code?",
    },
    verifyCode: {
      title: "Please check your {type}.",
      message: "We've sent a code to {value}",
      resend: "Didn’t get a code? {resendLink}",
      resendLink: "Click to resend.",
    },
    type: {
      phone: "phone",
      email: "email",
    },
  },
  successRegistration: {
    finished: "Finished registration",
    title: "Successful registration.",
    message: "Thank you for registering in our platform.",
    actionBtn: "Start again.",
  },
  footer: {
    connectWithUs: "Connect with us.",
    collections: {
      shopHome: "Shop Home Collection",
      giftCards: "Gift Cards",
      wynnStories: "Wynn Stories",
      wynnSlotsApp: "Wynn Slots App",
      mobileApp: "Mobile App",
      responsibleGaming: "Responsible Gaming",
    },
    legals: {
      aboutUs: "About Us",
      careers: "Careers",
      investorRelations: "Investor Relations",
      privacyNotice: "Privacy Notice",
      cookieNotice: "Cookie Notice",
      termsOfUse: "Terms of Use",
      hotelInfo: "Hotel Information & Directory",
    },
    locations: {
      wynnPalace: "Wynn Palace Cotai",
      encoreBoston: "Encore Boston Harbor",
      wynnMacau: "Wynn Macau",
    },
  },
  buttons: {
    next: "NEXT",
    back: "BACK",
  },
  newsLetter: {
    title: "Get News & Updates",
    message:
      "Get latest developments and exciting news on how we are shaping the future!",
    email: "Your email address",
    actionBtn: "JOIN THE NEWSLETTER",
  },
} as const;
