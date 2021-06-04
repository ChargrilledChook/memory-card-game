import { dogCards } from './dogTheme'

function createCard(key, image){
  return {id: key, selected: false, img: image}
}

function createCardArray(images) {
  const result = [];

  for(let i = 0; i <images.length; i++){
    const key = i+1;
    result.push(createCard(key, images[i]))
  }
  return result
}

export const initialCards = createCardArray(dogCards)


