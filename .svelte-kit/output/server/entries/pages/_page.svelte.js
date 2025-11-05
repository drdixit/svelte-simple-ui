import { V as attr_class, W as attr, U as slot, X as bind_props, Y as stringify, Z as attr_style, _ as store_get, $ as unsubscribe_stores, a0 as head } from "../../chunks/index2.js";
import { n as noop, f as fallback, e as escape_html } from "../../chunks/context.js";
import { w as writable } from "../../chunks/index.js";
import "clsx";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let variant = fallback($$props["variant"], "primary");
    let size = fallback($$props["size"], "md");
    let disabled = fallback($$props["disabled"], false);
    $$renderer2.push(`<button${attr_class(`btn ${stringify(variant)} ${stringify(size)}`, "svelte-g9c1iq")}${attr("disabled", disabled, true)}><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></button>`);
    bind_props($$props, { variant, size, disabled });
  });
}
function Card($$renderer, $$props) {
  let elevated = fallback($$props["elevated"], true);
  let radius = fallback($$props["radius"], "12px");
  $$renderer.push(`<div class="card svelte-14efj7c" role="group"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { elevated, radius });
}
function CodeBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let code = fallback($$props["code"], "");
    let lang = fallback($$props["lang"], "svelte");
    let highlighted = "";
    $$renderer2.push(`<div class="code-block svelte-1semi6w"><pre${attr_class(`language-${stringify(lang)}`, "svelte-1semi6w")}><code>${html(highlighted)}</code></pre> <button class="copy svelte-1semi6w">${escape_html("Copy")}</button></div>`);
    bind_props($$props, { code, lang });
  });
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
function Playground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let color = "#ff4a00";
    let scale = tweened(1, { duration: 400, easing: cubicOut });
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div style="display:flex;gap:1rem;align-items:center;justify-content:space-between"><div><div style="font-weight:800">Interactive Playground</div> <div style="color: #cfe6ff; font-size:0.9rem">Try switching props and click the button.</div></div> <div style="display:flex;gap:0.75rem;align-items:center"><input aria-label="accent color" type="color"${attr("value", color)} class="svelte-vm7tip"/> `);
        Button($$renderer3, {
          style: `--accent-color: ${stringify(color)}`,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Primary`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div> <div style="margin-top:1rem;display:flex;gap:1rem;align-items:center"><div style="transform-origin:center;"><div${attr_style(`transform:scale(${stringify(store_get($$store_subs ??= {}, "$scale", scale))}); transition: transform 120ms; display:inline-block`)}>`);
        Button($$renderer3, {
          size: "lg",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Animated`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div> <div style="flex:1"><div style="margin-bottom:.5rem;font-weight:700">Preview Card</div> `);
        Card($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div style="display:flex;gap:1rem;align-items:center"><div${attr_style(`width:48px;height:48px;border-radius:8px;background:${stringify(color)};box-shadow:0 6px 14px rgba(0,0,0,0.2)`)}></div> <div><div style="font-weight:700">Example component</div> <div style="color:#cfe6ff;font-size:0.9rem">A tiny description showing how the primitives look together.</div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div>`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Badge($$renderer, $$props) {
  let tone = fallback($$props["tone"], "neutral");
  let pill = fallback($$props["pill"], false);
  $$renderer.push(`<span${attr_class(`badge ${stringify(tone)} ${stringify(pill ? "pill" : "")}`, "svelte-eex7hx")} role="status"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></span>`);
  bind_props($$props, { tone, pill });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>svelte-simple-ui — Beautiful, tiny primitives</title>`);
    });
    $$renderer2.push(`<meta name="description" content="svelte-simple-ui — lightweight, accessible UI primitives built with Svelte. Documentation and interactive examples."/> <meta name="robots" content="index, follow"/>`);
  });
  $$renderer.push(`<section style="max-width:1100px;margin:0 auto;padding:2rem 1rem;"><div style="display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:start"><div><h2 style="margin:0 0 0.5rem 0;font-size:1rem;color:#cfe6ff;">Design system</h2> <h1 style="margin:0 0 1rem 0;font-size:2rem;">A tiny set of beautiful, accessible UI primitives for Svelte</h1> <p style="color:#cfe6ff;max-width:45rem">svelte-simple-ui showcases Buttons, Cards, CodeBlocks, Badges and a small interactive Playground — all implemented locally so the website can show the design without importing the package.</p> <div style="margin-top:1.25rem;display:flex;gap:1rem;align-items:center">`);
  Button($$renderer, {
    size: "lg",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Get started`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <a class="btn" href="/about" style="text-decoration:none;color:#ffd1bf;font-weight:700">Learn more →</a></div> <div style="margin-top:1.5rem;display:flex;gap:0.75rem;align-items:center">`);
  Badge($$renderer, {
    pill: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->New`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Badge($$renderer, {
    tone: "success",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Accessible`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Badge($$renderer, {
    tone: "warning",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Lightweight`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div> <aside>`);
  Card($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div style="display:flex;flex-direction:column;gap:0.75rem"><div style="font-weight:800">Quick example</div> `);
      CodeBlock($$renderer2, { code: `<Button>Save</Button>` });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></aside></div> <div style="margin-top:2rem;">`);
  Playground($$renderer);
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
