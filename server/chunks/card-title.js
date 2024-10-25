import { x as rest_props, l as fallback, y as spread_attributes, j as slot, n as bind_props, f as pop, k as sanitize_props, p as push, z as element } from "./index2.js";
import { c as cn } from "./utils.js";
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("bg-card text-card-foreground rounded-lg border shadow-sm", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("p-6", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<p${spread_attributes({
    class: cn("text-muted-foreground text-sm", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></p>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("flex flex-col space-y-1.5 p-6 pb-0", className),
    ...$$restProps
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  push();
  let className = fallback($$props["class"], void 0);
  let tag = fallback($$props["tag"], "h3");
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        class: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...$$restProps
      })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { class: className, tag });
  pop();
}
export {
  Card as C,
  Card_header as a,
  Card_title as b,
  Card_content as c,
  Card_description as d
};
