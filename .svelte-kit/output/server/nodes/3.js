import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.D2_LrWyx.js","_app/immutable/chunks/7FtxrO-M.js","_app/immutable/chunks/CusWYwcQ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/4i_J1Wag.js","_app/immutable/chunks/BX9fjJ0_.js"];
export const stylesheets = [];
export const fonts = [];
