import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Let's Do This - Public API</span>,
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
        <link href="globals.css" rel="stylesheet"></link>
      </>
    );
  },
  docsRepositoryBase: "https://github.com/stampedeapp/api-docs",
  footer: {
    text: "LDT API Docs",
  },
};

export default config;
