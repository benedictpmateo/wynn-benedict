import IconAndroid from "@/public/assets/icons/android.svg";
import IconApple from "@/public/assets/icons/apple.svg";
import IconFacebook from "@/public/assets/icons/facebook.svg";
import IconInstagram from "@/public/assets/icons/instagram.svg";
import IconX from "@/public/assets/icons/x.svg";
import { PAGE_ROUTES } from "./routes";

export const LANDING_PAGE_HEADER_ITEMS = [
  {
    label: "header.roomAndSuites",
    href: PAGE_ROUTES.RoomAndSuites,
  },
  {
    label: "header.wynnRewards",
    href: PAGE_ROUTES.WynnRewards,
  },
  {
    label: "header.offers",
    href: PAGE_ROUTES.Offers,
  },
  {
    label: "header.dining",
    href: PAGE_ROUTES.Dining,
  },
  {
    label: "header.entertainment",
    href: PAGE_ROUTES.Entertainment,
  },
  {
    label: "header.meetingAndEvents",
    href: PAGE_ROUTES.MeetingAndEvents,
  },
];

export const FOOTER_LINKS_COLLECTIONS = [
  {
    label: "footer.collections.shopHome",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.collections.giftCards",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.collections.wynnStories",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.collections.wynnSlotsApp",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.collections.mobileApp",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.collections.responsibleGaming",
    href: PAGE_ROUTES.NotFound,
  },
];

export const FOOTER_LINKS_LEGALS_INFORMATIONS = [
  {
    label: "footer.legals.aboutUs",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.careers",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.investorRelations",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.privacyNotice",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.cookieNotice",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.termsOfUse",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.legals.hotelInfo",
    href: PAGE_ROUTES.NotFound,
  },
];

export const FOOTER_LINKS_LOCATIONS = [
  {
    label: "footer.locations.wynnPalace",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.locations.encoreBoston",
    href: PAGE_ROUTES.NotFound,
  },
  {
    label: "footer.locations.wynnMacau",
    href: PAGE_ROUTES.NotFound,
  },
];

export const FOOTER_CONTACT_INFORMATION = [
  "Wynn and Encore Las Vegas",
  "3131 Las Vegas Blvd. Las Vegas, NV 89109",
  "+1 (702) 770-7000",
];

export const FOOTER_SOCIAL_ICONS = [
  {
    icon: IconFacebook,
  },
  {
    icon: IconAndroid,
  },
  {
    icon: IconApple,
  },
  {
    icon: IconInstagram,
  },
  {
    icon: IconX,
  },
];
