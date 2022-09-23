const questions = [
  {
    id: 1,
    text: "What is the default local host port that a React development server uses?",
    options: [
      {id: 1, text: "3000", isCorrect: true},
      {id: 2, text: "8080", isCorrect: false},
      {id: 3, text: "5000", isCorrect: false},
      {id: 4, text: "8008", isCorrect: false},
    ],
  },
  {
    id: 2,
    text: "Which keyword creates a constant in JavaScript?",
    options: [
      {id: 1, text: "let", isCorrect: false},
      {id: 2, text: "const", isCorrect: true},
      {id: 3, text: "constant", isCorrect: false},
      {id: 4, text: "var", isCorrect: false},
    ],
  },
  {
    id: 3,
    text: "A copy of the 'real' DOM that is kept in memory is called what?",
    options: [
      {id: 1, text: "Shadow DOM", isCorrect: false},
      {id: 2, text: "DOM", isCorrect: false},
      {id: 3, text: "Virtual DOM", isCorrect: true},
      {id: 4, text: "React DOM", isCorrect: false},
    ],
  },
  {
    id: 4,
    text: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    options: [
      {id: 1, text: "data", isCorrect: false},
      {id: 2, text: "index", isCorrect: false},
      {id: 3, text: "id", isCorrect: false},
      {id: 4, text: "key", isCorrect: true},
    ],
  },
  {
    id: 5,
    text: "What command is used to start the React local development server?",
    options: [
      {id: 1, text: "npm start", isCorrect: true},
      {id: 2, text: "npm serve", isCorrect: false},
      {id: 3, text: "npm build", isCorrect: false},
      {id: 4, text: "npm run dev", isCorrect: false},
    ],
  },
];

const shuffle = (array: Array<any>) => {
  return array.sort(() => Math.random() - 0.5);
}

export const getAll = async () => {
  return shuffle(questions) ;
}