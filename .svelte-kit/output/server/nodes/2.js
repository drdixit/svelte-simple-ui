import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Chdpx_5x.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/4i_J1Wag.js","_app/immutable/chunks/CusWYwcQ.js","_app/immutable/chunks/BX9fjJ0_.js","_app/immutable/chunks/BbFHhehM.js","_app/immutable/chunks/Wxtj1zNU.js","_app/immutable/chunks/CmaKVsd7.js","_app/immutable/chunks/-bxkGZZ7.js","_app/immutable/chunks/D6ToRGc8.js","_app/immutable/chunks/BhdfTpux.js","_app/immutable/chunks/PPVm8Dsz.js"];
export const stylesheets = ["_app/immutable/assets/2.C0baRD2R.css"];
export const fonts = [];
