import { f as pop, p as push, w as ensure_array_like, t as escape_html, n as bind_props } from "../../../chunks/index2.js";
function Skill($$payload, $$props) {
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
  const each_array = ensure_array_like(data.data.skills);
  $$payload.out += `<h1 class="my-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About</h1> <h1 class="text-xl">${escape_html(data.data.name)}</h1> <p class="text-m my-4">${escape_html(data.data.elevator)}</p> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    each_array[index];
    Skill($$payload);
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
