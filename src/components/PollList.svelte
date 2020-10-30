<script>
  export let polls = [];
</script>

<style>
</style>

<div class="polls-list">
  {#each polls as poll (poll.id)}
    <div>{poll.question}</div>
  {/each}
</div>
