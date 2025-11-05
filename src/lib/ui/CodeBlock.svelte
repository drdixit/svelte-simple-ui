<script lang="ts">
  import { onMount } from 'svelte';
  export let code = '';
  export let lang = 'svelte';
  let highlighted = '';
  let Prism: any;
  onMount(async () => {
    Prism = await import('prismjs');
    // Import additional language support if needed
    if (lang === 'javascript' || lang === 'js') {
      await import('prismjs/components/prism-javascript');
    }
    // Use markup/html for svelte syntax highlighting as fallback
    const language = Prism.languages[lang] || Prism.languages.markup || Prism.languages.html;
    highlighted = Prism.highlight(code, language, lang);
  });
  let copied = false;
  async function copy() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(()=> copied = false, 1500);
  }
</script>

<div class="code-block">
  <pre class="language-{lang}"><code>{@html highlighted}</code></pre>
  <button class="copy" on:click={copy}>{copied ? 'Copied' : 'Copy'}</button>
</div>

<style>
.code-block{position:relative;border-radius:12px;overflow:hidden}
pre{margin:0;padding:1rem;background:#0b1020;color:#e6eef8;white-space:pre-wrap}
.copy{position:absolute;top:.5rem;right:.5rem;background:rgba(255,255,255,0.06);border:none;padding:.4rem .6rem;border-radius:8px;color:white}
</style>
