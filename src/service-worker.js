import {build, files, prerendered, version} from '$service-worker';
import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching';

const lPrecache = [
	'/',
	...build,
	...files,
	...prerendered,
	].map(s => ({
		url: s,
		revision: version
		}));

precacheAndRoute(lPrecache);
