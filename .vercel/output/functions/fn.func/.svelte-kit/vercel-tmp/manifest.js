export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","manifest.json","markdown.css","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".css":"text/css",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7ced4e3d.js","imports":["_app/immutable/entry/start.7ced4e3d.js","_app/immutable/chunks/index.dada67a2.js","_app/immutable/chunks/singletons.6a6f7d92.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d071b558.js","imports":["_app/immutable/entry/app.d071b558.js","_app/immutable/chunks/index.dada67a2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/readme",
				pattern: /^\/readme\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
