import * as universal from '../entries/pages/projects/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.ts";
export const imports = ["_app/immutable/nodes/5.dOEJKMTf.js","_app/immutable/chunks/disclose-version.Jo1o5xe8.js","_app/immutable/chunks/runtime.D52UDE1N.js","_app/immutable/chunks/each.CnekBJsF.js","_app/immutable/chunks/lifecycle.BvJcSKEV.js","_app/immutable/chunks/props.Cc-KhC3R.js","_app/immutable/chunks/index-client.CddlMqPw.js","_app/immutable/chunks/svelte-component.sNBMpkah.js","_app/immutable/chunks/card-title.CxQRH5Jh.js","_app/immutable/chunks/Icon.CDGSRBC1.js","_app/immutable/chunks/utils.HgNuwJYh.js","_app/immutable/chunks/separator.ugzrSYo4.js","_app/immutable/chunks/this.DnHOJOWt.js","_app/immutable/chunks/index.DLKTsqLs.js","_app/immutable/chunks/store.B-x_QCt1.js"];
export const stylesheets = [];
export const fonts = [];
