<script>
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/ui/Card.svelte';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import Playground from '$lib/ui/Playground.svelte';
	import Badge from '$lib/ui/Badge.svelte';
</script>

<svelte:head>
	<title>svelte-simple-ui — Beautiful, tiny primitives</title>
	<meta name="description" content="svelte-simple-ui — lightweight, accessible UI primitives built with Svelte. Documentation and interactive examples." />
	<meta name="robots" content="index, follow" />
</svelte:head>

<section style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">
	<div style="display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:start">
		<div>
			<h2 style="margin:0 0 0.5rem 0;font-size:1rem;color:#cfe6ff;">Design system</h2>
			<h1 style="margin:0 0 1rem 0;font-size:2rem;">A tiny set of beautiful, accessible UI primitives for Svelte</h1>
			<p style="color:#cfe6ff;max-width:45rem">svelte-simple-ui showcases Buttons, Cards, CodeBlocks, Badges and a small interactive Playground — all implemented locally so the website can show the design without importing the package.</p>

			<div style="margin-top:1.25rem;display:flex;gap:1rem;align-items:center">
				<Button size="lg">Get started</Button>
				<a class="btn" href="/about" style="text-decoration:none;color:#ffd1bf;font-weight:700">Learn more →</a>
			</div>

			<div style="margin-top:1.5rem;display:flex;gap:0.75rem;align-items:center">
				<Badge pill>New</Badge>
				<Badge tone="success">Accessible</Badge>
				<Badge tone="warning">Lightweight</Badge>
			</div>
		</div>

		<aside>
			<Card>
				<div style="display:flex;flex-direction:column;gap:0.75rem">
					<div style="font-weight:800">Quick example</div>
					<CodeBlock code={`<Button>Save</Button>`} />
				</div>
			</Card>
		</aside>
	</div>

	<div style="margin-top:2rem;">
		<Playground />
	</div>
</section>

<style>
	:global(.btn){display:inline-flex;align-items:center;padding:.6rem 1rem;border-radius:12px;background:linear-gradient(180deg,#ff5b1a,#ff4200);color:white}
</style>
