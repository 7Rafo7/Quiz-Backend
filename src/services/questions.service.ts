const questions = [
  {
    id: 1,
    text: "Match the correct translations",
    armenianTranslations: [
      {id: 1, text: "Հայերեն", russianId: 1},
      {id: 2, text: "Գիրք", russianId: 2},
      {id: 3, text: "Սեղան", russianId: 3},
      {id: 4, text: "Լիճ", russianId: 4},
      {id: 5, text: "Տառ", russianId: 5},
    ],
    russianTranslations: [
      {id: 1, text: "Армянский"},
      {id: 2, text: "Книга"},
      {id: 3, text: "Стол"},
      {id: 4, text: "Озеро"},
      {id: 5, text: "Буква"},
    ],
  },
  {
    id: 2,
    text: "Match the correct translations",
    armenianTranslations: [
      {id: 1, text: "Սահման", russianId: 1},
      {id: 2, text: "Անգլերեն", russianId: 2},
      {id: 3, text: "Միրգ", russianId: 3},
      {id: 4, text: "Համացանց", russianId: 4},
      {id: 5, text: "Մտածողություն", russianId: 5},
    ],
    russianTranslations: [
      {id: 1, text: "Граница"},
      {id: 2, text: "Английский"},
      {id: 3, text: "Фрукт"},
      {id: 4, text: "Интернет"},
      {id: 5, text: "Мышление"},
    ],
  }
];

const shuffle = (array: Array<any>) => {
  return array.sort(() => Math.random() - 0.5);
}

export const getAll = async () => {
  return shuffle(questions) ;
}