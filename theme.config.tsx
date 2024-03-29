import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        src="https://res.cloudinary.com/letsdothiscom/image/upload/v1664552755/ldt_strip_logo.png"
        width="24"
        height="24"
        alt="Let's Do This API"
      />
      <span style={{ padding: "0 8px", fontWeight: "bold" }}>
        Let's Do This API
      </span>
    </>
  ),
  project: {
    link: "https://github.com/stampedeapp/api-docs",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title } = useConfig();
    const pageTitle = title + " - Let's Do This API Docs";
    const url =
      "https://api-docs.letsdothis.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={"Let's Do This API Docs"} />
      </>
    );
  },
  docsRepositoryBase: "https://github.com/stampedeapp/api-docs/blob/main",
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Let's Do This API Docs",
    };
  },
  footer: {
    text: "LDT Public API Docs",
  },
  primaryHue: {
    dark: 65,
    light: 231,
  },
  darkMode: true,
  faviconGlyph: "🏃🏻‍♀️",
};

export default config;
