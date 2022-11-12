/* ------ Coding Challenge 1 ------ */
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join("\n")}`)
//     );
//     if (typeof answer == "number") {
//       if (answer >= 0 && answer <= 3) {
//         this.answers[answer]++;
//       }
//     }
//     console.log(this);
//     this.displayResults(this.answers);
//   },
//   displayResults(type) {
//     if (typeof type === "string") {
//       console.log(`Poll results are ${type}`);
//       return;
//     }
//     console.log(type);
//   }
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
