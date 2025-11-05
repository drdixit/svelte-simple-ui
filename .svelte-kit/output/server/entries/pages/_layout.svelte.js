import { U as slot } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="layout-root svelte-12qhfyh"><header class="site-header svelte-12qhfyh"><div class="header-inner svelte-12qhfyh"><div class="brand svelte-12qhfyh">svelte-flow</div> <nav class="header-actions svelte-12qhfyh"><a class="btn primary svelte-12qhfyh" href="#">Quickstart</a> <a class="btn ghost svelte-12qhfyh" href="#">Support Us</a></nav></div></header> <section class="hero svelte-12qhfyh"><div class="hero-inner svelte-12qhfyh"><div class="hero-left svelte-12qhfyh"><h1 class="svelte-12qhfyh">Wire your ideas <span class="accent svelte-12qhfyh">with Svelte Flow</span></h1> <p class="lead svelte-12qhfyh">A customizable Svelte component for building node-based editors and interactive diagrams</p> <div class="hero-ctas svelte-12qhfyh"><a class="btn large primary svelte-12qhfyh" href="#">Quickstart</a> <a class="btn large outline svelte-12qhfyh" href="#">Support Us</a></div></div> <div class="hero-right svelte-12qhfyh"><div class="canvas-card svelte-12qhfyh"><div class="node svelte-12qhfyh" style="top:14%; left:10%">shape color</div> <div class="node svelte-12qhfyh" style="top:36%; left:38%">shape type</div> <div class="node svelte-12qhfyh" style="top:62%; left:18%">zoom level</div> <div class="output svelte-12qhfyh">output <div class="output-preview svelte-12qhfyh"></div></div></div></div></div></section> <main class="content svelte-12qhfyh"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="site-footer svelte-12qhfyh"><div class="stats svelte-12qhfyh"><div class="stat svelte-12qhfyh"><div class="num svelte-12qhfyh">1.4.1</div><div class="label svelte-12qhfyh">Current Version</div></div> <div class="stat svelte-12qhfyh"><div class="num svelte-12qhfyh">30k</div><div class="label svelte-12qhfyh">Weekly Installs</div></div> <div class="stat svelte-12qhfyh"><div class="num svelte-12qhfyh">MIT</div><div class="label svelte-12qhfyh">License</div></div></div> <div class="copyright">© ${escape_html(
      // UI-only layout: dark themed hero + simple footer
      // single slot for page content below hero
      (/* @__PURE__ */ new Date()).getFullYear()
    )} svelte-simple-ui — demo docs</div></footer></div>`);
  });
}
export {
  _layout as default
};
