(function () {
  if (window.__chatbot_loaded__) return;
  window.__chatbot_loaded__ = true;

  const isDark = window.ChatbotConfig?.isDark || false;

   window.ChatbotConfig = {
    ...(window.ChatbotConfig || {}),
    isDark,
    onThemeChange: function (theme) {
      window.ChatbotConfig.isDark = theme;
      window.dispatchEvent(
        new CustomEvent("chatbot-theme-change", { detail: { isDark: theme } })
      );
    },
  };

  // 1. Create container div
  const div = document.createElement("div");
  div.id = "chatbot-root";
  document.body.appendChild(div);

  // 2. Load React App (built version)
  const script = document.createElement("script");
  script.src = "https://chatbot-widget-sample.vercel.app/assets/index.js"; // (You’ll fix this after first deployment)
  script.type = "module";
  document.body.appendChild(script);

  // 3. Optional: Load CSS if needed
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://chatbot-widget-sample.vercel.app/assets/index.css"; // (You’ll fix this too)
  document.head.appendChild(link);
})();
