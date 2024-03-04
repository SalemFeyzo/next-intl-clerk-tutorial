import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "default.openGraph" });
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {t("title")}
      </div>
    ),
    { ...size }
  );
}
