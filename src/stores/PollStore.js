import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Vue?",
    answerA: "React",
    answerB: "Vue",
    votesA: 7,
    votesB: 12,
  },
  {
    id: 2,
    question: "Pineapple on pizza?",
    answerA: "Yes",
    answerB: "No",
    votesA: 1,
    votesB: 22,
  },
  {
    id: 3,
    question: "Node or PHP?",
    answerA: "PHP",
    answerB: "Node",
    votesA: 4,
    votesB: 3,
  },
  {
    id: 4,
    question: "Wake up early?",
    answerA: "Yes",
    answerB: "Heck no",
    votesA: 9,
    votesB: 3,
  },
  {
    id: 5,
    question: "Cake or chips?",
    answerA: "Cake!",
    answerB: "Chips",
    votesA: 6,
    votesB: 7,
  },
  {
    id: 6,
    question: "Express or Koa?",
    answerA: "Express",
    answerB: "Koa",
    votesA: 5,
    votesB: 4,
  },
  {
    id: 7,
    question: "Linux or Windows?",
    answerA: "Linux",
    answerB: "Windows",
    votesA: 44,
    votesB: 0,
  },
  {
    id: 8,
    question: "The sky is blue",
    answerA: "I agree",
    answerB: "Well, actually...",
    votesA: 7,
    votesB: 14,
  },
]);

export default PollStore;
