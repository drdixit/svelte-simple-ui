<script lang="ts">
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let color = '#ff4a00';
  let scale = tweened(1, { duration: 400, easing: cubicOut });

  function pulse() {
    scale.set(1.06);
    setTimeout(()=> scale.set(1), 300);
  }
</script>

<Card>
  <div style="display:flex;gap:1rem;align-items:center;justify-content:space-between">
    <div>
      <div style="font-weight:800">Interactive Playground</div>
      <div style="color: #cfe6ff; font-size:0.9rem">Try switching props and click the button.</div>
    </div>

    <div style="display:flex;gap:0.75rem;align-items:center">
      <input aria-label="accent color" type="color" bind:value={color} />
      <Button on:click={pulse} style="--accent-color: {color}">Primary</Button>
    </div>
  </div>

  <div style="margin-top:1rem;display:flex;gap:1rem;align-items:center">
    <div style="transform-origin:center;"> 
      <div style="transform:scale({$scale}); transition: transform 120ms; display:inline-block">
        <Button size="lg">Animated</Button>
      </div>
    </div>
    <div style="flex:1">
      <div style="margin-bottom:.5rem;font-weight:700">Preview Card</div>
      <Card>
        <div style="display:flex;gap:1rem;align-items:center">
          <div style="width:48px;height:48px;border-radius:8px;background:{color};box-shadow:0 6px 14px rgba(0,0,0,0.2)"></div>
          <div>
            <div style="font-weight:700">Example component</div>
            <div style="color:#cfe6ff;font-size:0.9rem">A tiny description showing how the primitives look together.</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</Card>

<style>
  input[type=color]{width:44px;height:36px;border-radius:8px;border:none;padding:0;background:transparent}
</style>
