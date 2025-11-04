<script lang="ts">
  // UI-only layout: dark themed hero + simple footer
  import Nav from '$lib/ui/Nav.svelte';
  import '../app.css';
  // single slot for page content below hero
</script>

<div class="layout-root">
  <header class="site-header">
    <div class="header-inner">
      <div class="brand">svelte-flow</div>
      <nav class="header-actions">
        <a class="btn primary" href="#">Quickstart</a>
        <a class="btn ghost" href="#">Support Us</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-inner">
      <div class="hero-left">
        <h1>Wire your ideas
          <span class="accent">with Svelte Flow</span>
        </h1>
        <p class="lead">A customizable Svelte component for building node-based editors and interactive diagrams</p>
        <div class="hero-ctas">
          <a class="btn large primary" href="#">Quickstart</a>
          <a class="btn large outline" href="#">Support Us</a>
        </div>
      </div>

      <div class="hero-right">
        <div class="canvas-card">
          <div class="node" style="top:14%; left:10%">shape color</div>
          <div class="node" style="top:36%; left:38%">shape type</div>
          <div class="node" style="top:62%; left:18%">zoom level</div>
          <div class="output">output
            <div class="output-preview"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class="content"><slot /></main>

  <footer class="site-footer">
    <div class="stats">
      <div class="stat"><div class="num">1.4.1</div><div class="label">Current Version</div></div>
      <div class="stat"><div class="num">30k</div><div class="label">Weekly Installs</div></div>
      <div class="stat"><div class="num">MIT</div><div class="label">License</div></div>
    </div>
    <div class="copyright">© {new Date().getFullYear()} svelte-simple-ui — demo docs</div>
  </footer>
</div>

<style>
  :global(html, body, #svelte) { height: 100%; }
  :global(body) { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

  /* dark gradient background with subtle dotted grid */
  .layout-root { min-height: 100vh; display:flex; flex-direction:column; background: radial-gradient(ellipse at top left, #0a1720 0%, #07121a 40%, #021018 100%); color: #e6eef8; }

  :global(body)::before {
    content: '';
    position: fixed; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.9;
    mix-blend-mode: overlay;
  }

  .site-header { padding: 1.25rem 2rem; }
  .header-inner { display:flex; align-items:center; justify-content:space-between; max-width:1200px; margin:0 auto; }
  .brand { font-weight:800; font-size:1.25rem; color: #ff4a00; }
  .header-actions { display:flex; gap:0.75rem; }

  .btn { display:inline-flex; align-items:center; justify-content:center; padding:0.5rem 0.9rem; border-radius:999px; text-decoration:none; font-weight:700; }
  .btn.primary { background: linear-gradient(180deg,#ff5b1a,#ff4200); color:white; box-shadow: 0 6px 18px rgba(255,64,0,0.12); }
  .btn.ghost { background: rgba(255,255,255,0.04); color: #ffd9c9; border: 1px solid rgba(255,255,255,0.04); }
  .btn.large { padding: 0.9rem 1.25rem; font-size:1rem; }
  .btn.outline { background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #ffd1bf; }

  .hero { padding: 2rem 0; }
  .hero-inner { display:flex; gap:2rem; align-items:center; max-width:1200px; margin:0 auto; padding:0 1rem; }
  .hero-left { flex:1; }
  .hero-right { width:520px; flex:0 0 520px; }

  h1 { font-size:3.25rem; line-height:1.02; margin:0 0 0.75rem 0; font-weight:800; color:#ffffff; }
  .accent { color:#ff4a00; display:block; }
  .lead { margin:0 0 1.25rem 0; color: #cfe6ff; max-width:40rem; }
  .hero-ctas { display:flex; gap:1rem; margin-top:1rem; }

  .canvas-card { position:relative; height:320px; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)); border-radius:18px; padding:1rem; box-shadow: 0 8px 30px rgba(2,6,23,0.6); overflow:hidden; border: 1px solid rgba(255,255,255,0.04); }
  .node { position:absolute; background: rgba(255,255,255,0.06); color:#fff; padding:0.6rem 0.8rem; border-radius:10px; font-size:0.85rem; border:1px solid rgba(255,255,255,0.03); }
  .output { position:absolute; right:12px; top:18%; width:42%; height:58%; background: rgba(255,255,255,0.03); border-radius:12px; padding:0.6rem; color:#fff; display:flex; flex-direction:column; }
  .output-preview { flex:1; margin-top:0.6rem; border-radius:8px; background: linear-gradient(135deg,#ff7b3a,#ff3f00); box-shadow: 0 8px 18px rgba(255,64,0,0.12); }

  .content { max-width:1200px; margin:2rem auto; padding:0 1rem; width:100%; }

  .site-footer { margin-top:auto; padding:2rem 1rem; color: rgba(230,238,248,0.75); }
  .site-footer .stats { display:flex; gap:3rem; justify-content:center; margin-bottom:1rem; }
  .stat { text-align:center; }
  .stat .num { font-weight:800; font-size:2rem; color:#ff4a00; }
  .stat .label { font-size:0.9rem; color: #e6eef8; opacity:0.8; }

  /* responsive */
  @media (max-width: 880px) {
    .hero-inner { flex-direction:column-reverse; align-items:stretch; }
    .hero-right { width:100%; height:260px; }
    h1 { font-size:2rem; }
    .header-actions { gap:0.5rem; }
  }
</style>
