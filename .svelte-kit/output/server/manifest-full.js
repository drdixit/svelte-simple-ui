export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitkeep","favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CD56TfsR.js",app:"_app/immutable/entry/app.RmqlK0NN.js",imports:["_app/immutable/entry/start.CD56TfsR.js","_app/immutable/chunks/DalxJMvQ.js","_app/immutable/chunks/BbFHhehM.js","_app/immutable/chunks/CusWYwcQ.js","_app/immutable/chunks/Wxtj1zNU.js","_app/immutable/entry/app.RmqlK0NN.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/CusWYwcQ.js","_app/immutable/chunks/Wxtj1zNU.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BbFHhehM.js","_app/immutable/chunks/C9BcQDSX.js","_app/immutable/chunks/BhdfTpux.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
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
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
