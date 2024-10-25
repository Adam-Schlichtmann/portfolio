import { x as rest_props, l as fallback, z as element, n as bind_props, f as pop, j as slot, y as spread_attributes, k as sanitize_props, p as push, u as store_get, v as unsubscribe_stores, h as spread_props } from "./index2.js";
import "dequal";
import { c as cn } from "./utils.js";
import { tv } from "tailwind-variants";
import "clsx";
import { d as derived, g as get, w as writable, r as readable } from "./index.js";
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name,
    attribute,
    selector,
    getEl
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get2 = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get2());
      }));
    });
    subscriber(get2());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get: get2,
    subscribe
  };
};
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults$1 = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults$1, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
function Button$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "type", "builders", "el"]);
  push();
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], () => void 0, true);
  let builders = fallback($$props["builders"], () => [], true);
  let el = fallback($$props["el"], () => void 0, true);
  const attrs = { "data-button-root": "" };
  if (builders && builders.length) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "button";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...getAttrs(builders),
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {});
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    const $$tag_1 = href ? "a" : "button";
    element(
      $$payload,
      $$tag_1,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {});
        $$payload.out += `<!---->`;
      }
    );
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, type, builders, el });
  pop();
}
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs: getAttrs2 };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root }, updateOption, getAttrs: getAttrs2 } = setCtx({ orientation, decorative });
  const attrs = getAttrs2("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "variant", "size", "builders"]);
  push();
  let className = fallback($$props["class"], void 0);
  let variant = fallback($$props["variant"], "default");
  let size = fallback($$props["size"], "default");
  let builders = fallback($$props["builders"], () => [], true);
  Button$1($$payload, spread_props([
    {
      builders,
      class: cn(buttonVariants({ variant, size, className })),
      type: "button"
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className, variant, size, builders });
  pop();
}
const buttonVariants = tv({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "orientation", "decorative"]);
  push();
  let className = fallback($$props["class"], void 0);
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], void 0);
  Separator$1($$payload, spread_props([
    {
      class: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "min-h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
export {
  Button as B,
  Separator as S,
  createBitAttrs as a,
  createElHelpers as c,
  getOptionUpdater as g,
  makeElement as m,
  omit as o,
  removeUndefined as r,
  toWritableStores as t,
  withGet as w
};
