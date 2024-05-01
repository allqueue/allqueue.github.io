import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const GiscusComments = () => {
  const router = useRouter();

  useEffect(() => {
    const scriptId = "giscus-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "allqueue/allqueue.github.io");
    script.setAttribute("data-repo-id", "R_kgDOLPfYsw");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDOLPfYs84CfEQZ");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);
  }, [router.asPath]); // 페이지 경로가 변경될 때마다 스크립트 재로드

  return null;
};

const config: DocsThemeConfig = {
  main({ children }) {
    return (
      <div className="content-wrapper">
        {children}
        <div className="giscus">
          <GiscusComments />
        </div>
      </div>
    );
  },
  logo: <span>🕹Allqueue blog</span>,
  project: {
    link: "https://github.com/allqueue",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/allqueue/allqueue.github.io",
  footer: {
    text: "Allqueue blog",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Allqueue blog",
    };
  },
};

export default config;
