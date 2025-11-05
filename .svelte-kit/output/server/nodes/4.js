import * as universal from '../entries/pages/sverdle/_page.ts.js';
import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/+page.ts";
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DTCCSlKY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CusWYwcQ.js","_app/immutable/chunks/Wxtj1zNU.js","_app/immutable/chunks/C9BcQDSX.js","_app/immutable/chunks/BX9fjJ0_.js","_app/immutable/chunks/-bxkGZZ7.js","_app/immutable/chunks/BhdfTpux.js","_app/immutable/chunks/BbFHhehM.js","_app/immutable/chunks/DalxJMvQ.js"];
export const stylesheets = ["_app/immutable/assets/4.C7uEq_1w.css"];
export const fonts = [];
