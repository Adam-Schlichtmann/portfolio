import { f as pop, p as push, w as ensure_array_like, t as escape_html, n as bind_props } from "../../chunks/index2.js";
function FloatingWord($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.data.adjectives);
  $$payload.out += `<div><h1 class="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">${escape_html(data.data.name)}</h1> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    each_array[index];
    FloatingWord($$payload);
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
