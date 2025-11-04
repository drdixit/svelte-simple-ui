<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let variant: 'primary' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  const dispatch = createEventDispatcher();
  function onClick(e: MouseEvent) {
    if (disabled) return;
    dispatch('click', e);
  }
</script>

<button class="btn {variant} {size}" {disabled} on:click={onClick}>
  <slot />
</button>

<style>
.btn{
  --accent-color: #3366ff;
  --radius: 12px;
}
.btn{
  appearance: none;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease;
  will-change: transform;
}
.btn:focus{outline: 3px solid rgba(0,0,0,0.12); box-shadow: 0 0 0 4px rgba(0,0,0,0); outline-offset: 2px}
.btn.primary{background: linear-gradient(180deg, var(--accent-color), color-mix(in srgb, var(--accent-color) 85%, black)); color: white; box-shadow: 0 6px 18px rgba(0,0,0,0.06)}
.btn.ghost{background: transparent; border: 1px solid rgba(0,0,0,0.06); color: inherit}
.btn.sm{font-size: .85rem; padding:.35rem .6rem}
.btn.md{font-size: 1rem}
.btn.lg{font-size: 1.125rem; padding:.9rem 1.2rem}
.btn:active{transform: translateY(1px) scale(.995)}
.btn[disabled]{opacity:.5; cursor:not-allowed}
</style>
