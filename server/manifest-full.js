export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DohF0hAk.js","app":"_app/immutable/entry/app.oV6wQej-.js","imports":["_app/immutable/entry/start.DohF0hAk.js","_app/immutable/chunks/entry.34kESiBn.js","_app/immutable/chunks/runtime.D52UDE1N.js","_app/immutable/chunks/index.DLKTsqLs.js","_app/immutable/entry/app.oV6wQej-.js","_app/immutable/chunks/runtime.D52UDE1N.js","_app/immutable/chunks/disclose-version.Jo1o5xe8.js","_app/immutable/chunks/index-client.CddlMqPw.js","_app/immutable/chunks/svelte-component.sNBMpkah.js","_app/immutable/chunks/props.Cc-KhC3R.js","_app/immutable/chunks/this.DnHOJOWt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/history",
				pattern: /^\/history\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
