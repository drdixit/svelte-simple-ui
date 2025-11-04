<script lang="ts">
  export let tone: 'neutral' | 'success' | 'warning' | 'danger' = 'neutral';
  export let pill = false;
</script>

<span class="badge {tone} {pill ? 'pill' : ''}" role="status"><slot /></span>

<style>
.badge{display:inline-block;padding:.25rem .5rem;border-radius:8px;font-weight:700;font-size:.8rem}
.badge.pill{border-radius:999px}
.badge.neutral{background:rgba(255,255,255,0.04);color:#ffdedd}
.badge.success{background:rgba(34,197,94,0.15);color:#9ff3c8}
.badge.warning{background:rgba(245,158,11,0.12);color:#ffd48a}
.badge.danger{background:rgba(239,68,68,0.12);color:#ffb3b3}
</style>
