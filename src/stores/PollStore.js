import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Vue?",
    answerA: "React",
    answerB: "Vue",
    votesA: 17,
    votesB: 29,
  },
]);

export default PollStore;
