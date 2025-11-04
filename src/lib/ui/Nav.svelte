<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  export let compact = false;
</script>

<nav class="nav" role="navigation" aria-label="Main">
  <div class="brand"><a href="/">svelte-simple-ui</a></div>
  <div class="links">
    <a href="/">Home</a>
    <a href="/getting-started">Getting Started</a>
    <a href="/components">Components</a>
    <a href="/examples">Examples</a>
  </div>
  <div class="actions"><ThemeToggle /></div>
</nav>

<style>
.nav{display:flex;align-items:center;gap:1rem;padding:1rem;border-bottom:1px solid rgba(0,0,0,0.04);background:var(--bg,transparent)}
.brand a{font-weight:700;letter-spacing:.2px}
.links{display:flex;gap:1rem;margin-left:1rem}
.links a{color:inherit;text-decoration:none;padding:.35rem .5rem;border-radius:8px}
.links a:hover{background:rgba(0,0,0,0.03)}
.actions{margin-left:auto}
:global([data-theme='dark']) .nav{border-bottom-color:rgba(255,255,255,0.03)}
</style>
