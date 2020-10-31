<script>
  import { onDestroy, onMount } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../stores/PollStore";
  //export let polls = [];
  import PollDetails from "./PollDetails.svelte";

  onMount(() => {
    // Fires when a component is mounted on the dom
    console.log("component moounted");
  });

  // alt way to refer ref the poll store, instead of having to use onDestroy to unsub, just use $PollStore

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onDestroy(() => {
  //   //fires when a component is removed from the dom
  //   console.log("component destroyed");
  //   unsub()
  // });
</script>

<style>
  .polls-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="polls-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>
