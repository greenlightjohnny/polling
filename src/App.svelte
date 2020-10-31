<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/tabs.svelte";

  //Tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  let polls = [
    {
      id: 1,
      question: "React or Vue?",
      answerA: "React",
      answerB: "Vue",
      votesA: 17,
      votesB: 29,
    },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(e.detail);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { option, id } = e.detail;
    let copiedPolls = [...polls];
    let upVotedPOll = copiedPolls.find((i) => i.id == id);
    if (option === "a") {
      upVotedPOll.votesA++;
    }
    if (option === "b") {
      upVotedPOll.votesB++;
    }

    polls = copiedPolls;
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
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />
