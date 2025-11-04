<script lang="ts">
  import { onMount } from 'svelte';
  let theme: 'light'|'dark' = 'light';
  onMount(()=>{
    const stored = localStorage.getItem('theme');
    if(stored==='dark') theme='dark';
    apply();
  });
  function toggle(){ theme = theme==='light'?'dark':'light'; apply(); }
  function apply(){ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }
</script>

<button aria-label="Toggle theme" on:click={toggle} class="theme-toggle">{theme==='light'?'🌞':'🌙'}</button>

<style>
.theme-toggle{border:none;background:transparent;font-size:1.2rem;padding:.25rem;border-radius:10px;cursor:pointer}
</style>
