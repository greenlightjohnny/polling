<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/tabs.svelte";
  import CreatPollForm from "./components/CreatePollForm.svelte";

  //Tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <p>Poll list comopnent goes here</p>
  {:else if activeItem === 'Add New Poll'}
    <CreatPollForm />
  {/if}
</main>
<Footer />
