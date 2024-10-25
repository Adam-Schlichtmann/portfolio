import { h as spread_props, j as slot, k as sanitize_props, l as fallback, m as head, n as bind_props, f as pop, o as attr, p as push } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/utils.js";
import { B as Button, S as Separator } from "../../chunks/separator.js";
import { g as get, d as derived, w as writable } from "../../chunks/index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Moon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Sun($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "4" }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$payload, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
let timeoutAction;
let timeoutEnable;
function withoutTransition(action) {
  if (typeof document === "undefined")
    return;
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css);
  const disable = () => document.head.appendChild(style);
  const enable = () => document.head.removeChild(style);
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 120);
  }, 120);
}
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
  getItem: (_key) => null,
  setItem: (_key, _value) => {
  }
};
const isBrowser = typeof document !== "undefined";
const modes = ["dark", "light", "system"];
const modeStorageKey = writable("mode-watcher-mode");
const themeStorageKey = writable("mode-watcher-theme");
const userPrefersMode = createUserPrefersMode();
const systemPrefersMode = createSystemMode();
const themeColors = writable(void 0);
const theme = createCustomTheme();
const disableTransitions = writable(true);
const darkClassNames = writable([]);
const lightClassNames = writable([]);
createDerivedMode();
createDerivedTheme();
function createUserPrefersMode() {
  const defaultValue = "system";
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getModeStorageKey());
  let value = isValidMode(initialValue) ? initialValue : defaultValue;
  function getModeStorageKey() {
    return get(modeStorageKey);
  }
  const { subscribe, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getModeStorageKey())
        return;
      const newValue = e.newValue;
      if (isValidMode(newValue)) {
        _set(value = newValue);
      } else {
        _set(value = defaultValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getModeStorageKey(), value);
  }
  return {
    subscribe,
    set
  };
}
function createCustomTheme() {
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getThemeStorageKey());
  let value = initialValue === null || initialValue === void 0 ? "" : initialValue;
  function getThemeStorageKey() {
    return get(themeStorageKey);
  }
  const { subscribe, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getThemeStorageKey())
        return;
      const newValue = e.newValue;
      if (newValue === null) {
        _set(value = "");
      } else {
        _set(value = newValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getThemeStorageKey(), value);
  }
  return {
    subscribe,
    set
  };
}
function createSystemMode() {
  const defaultValue = void 0;
  let track = true;
  const { subscribe, set } = writable(defaultValue, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (!track)
        return;
      set(e.matches ? "light" : "dark");
    };
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    mediaQueryState.addEventListener("change", handler);
    return () => mediaQueryState.removeEventListener("change", handler);
  });
  function query() {
    if (!isBrowser)
      return;
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    set(mediaQueryState.matches ? "light" : "dark");
  }
  function tracking(active) {
    track = active;
  }
  return {
    subscribe,
    query,
    tracking
  };
}
function createDerivedMode() {
  const { subscribe } = derived([
    userPrefersMode,
    systemPrefersMode,
    themeColors,
    disableTransitions,
    darkClassNames,
    lightClassNames
  ], ([$userPrefersMode, $systemPrefersMode, $themeColors, $disableTransitions, $darkClassNames, $lightClassNames]) => {
    if (!isBrowser)
      return void 0;
    const derivedMode = $userPrefersMode === "system" ? $systemPrefersMode : $userPrefersMode;
    const sanitizedDarkClassNames = sanitizeClassNames($darkClassNames);
    const sanitizedLightClassNames = sanitizeClassNames($lightClassNames);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode === "light") {
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length)
          htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.light);
        }
      } else {
        if (sanitizedLightClassNames.length)
          htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.dark);
        }
      }
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode;
  });
  return {
    subscribe
  };
}
function createDerivedTheme() {
  const { subscribe } = derived([theme, disableTransitions], ([$theme, $disableTransitions]) => {
    if (!isBrowser)
      return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", $theme);
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return $theme;
  });
  return {
    subscribe
  };
}
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme2 = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme2) {
    rootEl.setAttribute("data-theme", theme2);
    localStorage.setItem("mode-watcher-theme", theme2);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
function Mode_watcher($$payload, $$props) {
  push();
  let trueNonce;
  let track = fallback($$props["track"], true);
  let defaultMode = fallback($$props["defaultMode"], "system");
  let themeColors$1 = fallback($$props["themeColors"], () => void 0, true);
  let disableTransitions$1 = fallback($$props["disableTransitions"], true);
  let darkClassNames$1 = fallback($$props["darkClassNames"], () => ["dark"], true);
  let lightClassNames$1 = fallback($$props["lightClassNames"], () => [], true);
  let defaultTheme = fallback($$props["defaultTheme"], "");
  let nonce = fallback($$props["nonce"], "");
  let themeStorageKey$1 = fallback($$props["themeStorageKey"], "mode-watcher-theme");
  let modeStorageKey$1 = fallback($$props["modeStorageKey"], "mode-watcher-mode");
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  disableTransitions.set(disableTransitions$1);
  themeColors.set(themeColors$1);
  darkClassNames.set(darkClassNames$1);
  lightClassNames.set(lightClassNames$1);
  modeStorageKey.set(modeStorageKey$1);
  themeStorageKey.set(themeStorageKey$1);
  trueNonce = typeof window === "undefined" ? nonce : "";
  head($$payload, ($$payload2) => {
    if (themeColors$1) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="theme-color"${attr("content", themeColors$1.dark)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (trueNonce) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `${html(`<script nonce=${trueNonce}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`)}`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `${html(`<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`)}`;
    }
    $$payload2.out += `<!--]-->`;
  });
  bind_props($$props, {
    track,
    defaultMode,
    themeColors: themeColors$1,
    disableTransitions: disableTransitions$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    nonce,
    themeStorageKey: themeStorageKey$1,
    modeStorageKey: modeStorageKey$1
  });
  pop();
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="m-4 h-screen max-w-screen-sm"><div class="flex items-center justify-between"><div class="flex flex-row">`;
  Button($$payload, {
    class: "text-md tracking-tight md:text-xl",
    href: "/",
    variant: "link",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Home`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Separator($$payload, {
    class: "my-2 bg-primary",
    orientation: "vertical"
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "text-md tracking-tight md:text-xl",
    href: "/about",
    variant: "link",
    children: ($$payload2) => {
      $$payload2.out += `<!---->About`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Separator($$payload, {
    class: "my-2 bg-primary",
    orientation: "vertical"
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "text-md tracking-tight md:text-xl",
    href: "/projects",
    variant: "link",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Projects`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Separator($$payload, {
    class: "my-2 bg-primary",
    orientation: "vertical"
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "text-md tracking-tight md:text-xl",
    href: "/history",
    variant: "link",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Work History`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Button($$payload, {
    class: "flex",
    variant: "outline",
    size: "icon",
    children: ($$payload2) => {
      Sun($$payload2, {
        class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      });
      $$payload2.out += `<!----> `;
      Moon($$payload2, {
        class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      });
      $$payload2.out += `<!----> <span class="sr-only">Toggle theme</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Separator($$payload, { class: "mt-2" });
  $$payload.out += `<!----> `;
  Mode_watcher($$payload, {});
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
