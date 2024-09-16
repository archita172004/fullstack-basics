import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a array of objects of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, joke: "Why did the chicken cross the road?" },
    { id: 2, joke: "Why did the cow go to school?" },
    { id: 3, joke: "Why did the tomato turn red?" },
    { id: 4, joke: "Why did the hippo cross the road?" },
    { id: 5, joke: "Why did the dog go to the dentist?" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
