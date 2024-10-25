import { x as rest_props, l as fallback, u as store_get, j as slot, y as spread_attributes, v as unsubscribe_stores, n as bind_props, f as pop, k as sanitize_props, p as push, h as spread_props, o as attr, t as escape_html, w as ensure_array_like } from "../../../chunks/index2.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content, d as Card_description } from "../../../chunks/card-title.js";
import "clsx";
import { I as Icon, c as cn } from "../../../chunks/utils.js";
import { w as withGet, t as toWritableStores, o as omit, m as makeElement, c as createElHelpers, a as createBitAttrs, r as removeUndefined, g as getOptionUpdater, B as Button, S as Separator } from "../../../chunks/separator.js";
import "dequal";
import { w as writable } from "../../../chunks/index.js";
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
const defaults = {
  defaultValue: 0,
  max: 100
};
const { name } = createElHelpers("progress");
const createProgress = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { max } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = makeElement(name(), {
    stores: [value, max],
    returned: ([$value, $max]) => {
      return {
        value: $value,
        max: $max,
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": $max,
        "aria-valuenow": $value,
        "data-value": $value,
        "data-state": $value === null ? "indeterminate" : $value === $max ? "complete" : "loading",
        "data-max": $max
      };
    }
  });
  return {
    elements: {
      root
    },
    states: {
      value
    },
    options
  };
};
function getProgressData() {
  const NAME = "progress";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getProgressData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const progress = { ...createProgress(removeUndefined(props)), getAttrs };
  return {
    ...progress,
    updateOption: getOptionUpdater(progress.options)
  };
}
function Progress$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "max",
    "value",
    "onValueChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let max = fallback($$props["max"], () => void 0, true);
  let value = fallback($$props["value"], () => void 0, true);
  let onValueChange = fallback($$props["onValueChange"], () => void 0, true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const {
    elements: { root },
    states: { value: localValue },
    updateOption,
    getAttrs
  } = setCtx({
    max,
    defaultValue: value,
    onValueChange: ({ next }) => {
      onValueChange?.(next);
      value = next;
      return next;
    }
  });
  const attrs = getAttrs("root");
  value !== void 0 && localValue.set(value);
  updateOption("max", max);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}><!---->`;
    slot($$payload, $$props, "default", { builder });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { max, value, onValueChange, asChild, el });
  pop();
}
function Github($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
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
function Progress($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "max", "value"]);
  push();
  let className = fallback($$props["class"], void 0);
  let max = fallback($$props["max"], 100);
  let value = fallback($$props["value"], void 0);
  Progress$1($$payload, spread_props([
    {
      class: cn("bg-secondary relative h-4 w-full overflow-hidden rounded-full", className)
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<div class="bg-primary h-full w-full flex-1 transition-all"${attr("style", `transform: translateX(-${100 - 100 * (value ?? 0) / (max ?? 1)}%)`)}></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className, max, value });
  pop();
}
function ProjectCard($$payload, $$props) {
  push();
  let { project } = $$props;
  let value = 100;
  $$payload.out += `<!---->`;
  Card($$payload, {
    class: "my-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_title($$payload3, {
            class: "flex items-center justify-between text-2xl",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(project.title)} `;
              Button($$payload4, {
                href: project.github,
                target: "_blank",
                variant: "ghost",
                children: ($$payload5) => {
                  Github($$payload5, { class: "mr-2 h-4 w-4" });
                  $$payload5.out += `<!----> GitHub`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(project.tags);
          $$payload3.out += `<!---->`;
          Card_description($$payload3, {
            class: "text-lg",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(project.description)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="my-4 flex flex-row flex-wrap"><!--[-->`;
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let tag = each_array[index];
            $$payload3.out += `<p class="text-sm text-muted-foreground">${escape_html(tag)}</p> `;
            if (index < project.tags.length - 1) {
              $$payload3.out += "<!--[-->";
              Separator($$payload3, { class: "mx-4", orientation: "vertical" });
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          }
          $$payload3.out += `<!--]--></div> `;
          Progress($$payload3, { value, max: 100, class: "w-[100%]" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.data);
  $$payload.out += `<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$payload, { project });
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
