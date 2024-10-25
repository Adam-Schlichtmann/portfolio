import { h as spread_props, j as slot, k as sanitize_props, t as escape_html, w as ensure_array_like, f as pop, p as push, n as bind_props } from "../../../chunks/index2.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content, d as Card_description } from "../../../chunks/card-title.js";
import "clsx";
import { I as Icon } from "../../../chunks/utils.js";
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
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
function WorkHistory($$payload, $$props) {
  push();
  let { workHistory } = $$props;
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
              $$payload4.out += `<!---->${escape_html(workHistory.title)} @ ${escape_html(workHistory.company)}`;
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
          const each_array = ensure_array_like(workHistory.tasks);
          $$payload3.out += `<!---->`;
          Card_description($$payload3, {
            class: "text-lg",
            children: ($$payload4) => {
              $$payload4.out += `<!---->From: ${escape_html(workHistory.start.toLocaleDateString())} - To: ${escape_html(workHistory.end.toLocaleDateString() === (/* @__PURE__ */ new Date()).toLocaleDateString() ? "Present" : workHistory.end.toLocaleDateString())}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="mt-4 grid auto-cols-max grid-cols-8 gap-4"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let task = each_array[$$index];
            $$payload3.out += `<div class="m-auto">`;
            Chevron_right($$payload3, {});
            $$payload3.out += `<!----></div> <p class="text-m col-span-7">${escape_html(task)}</p>`;
          }
          $$payload3.out += `<!--]--></div>`;
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
  $$payload.out += `<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Work History</h1> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let workHistory = each_array[$$index];
    WorkHistory($$payload, { workHistory });
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
