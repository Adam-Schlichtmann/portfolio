import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CXXN8JRE.js","_app/immutable/chunks/disclose-version.Jo1o5xe8.js","_app/immutable/chunks/runtime.D52UDE1N.js","_app/immutable/chunks/each.CnekBJsF.js","_app/immutable/chunks/lifecycle.BvJcSKEV.js","_app/immutable/chunks/props.Cc-KhC3R.js","_app/immutable/chunks/index-client.CddlMqPw.js","_app/immutable/chunks/index.DkWgDsMA.js"];
export const stylesheets = [];
export const fonts = [];
