<script lang="ts">
  export let elevated = true;
  export let radius = '12px';
</script>

<div class="card" role="group">
  <slot />
</div>

<style>
.card{
  background: var(--card-bg, white);
  border-radius: var(--radius, 12px);
  padding: 1rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
}
:global([data-theme='dark']) .card{ background: #0f1720; color: #e6eef8 }
</style>
