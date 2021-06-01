function cardData() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => ({
    id: val,
    selected: false,
  }));
}

export const initialCards = cardData();
