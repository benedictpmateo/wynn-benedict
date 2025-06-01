import AppLayout from "@/components/AppLayout";
import { getCurrentLocale } from "@/locales/server";
import Locale from "intl-locale-textinfo-polyfill";
import "../globals.css";
import { Provider } from "./provider";

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children } = props;
  const { locale } = await props.params;
  const { direction: dir } = new Locale(locale).textInfo;

  const currentLocale = getCurrentLocale();
  return (
    <html
      suppressHydrationWarning
      lang={currentLocale as unknown as string}
      dir={dir}
    >
      <body>
        <Provider locale={locale}>
          <AppLayout>{children}</AppLayout>
        </Provider>
      </body>
    </html>
  );
}
