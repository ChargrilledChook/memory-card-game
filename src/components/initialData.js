import dog1 from "../assets/1.jpg";
import dog2 from "../assets/2.jpg";
import dog3 from "../assets/3.jpg";
import dog4 from "../assets/4.jpg";
import dog5 from "../assets/5.jpg";
import dog6 from "../assets/6.jpg";
import dog7 from "../assets/7.jpg";
import dog8 from "../assets/8.jpg";
import dog9 from "../assets/9.jpg";
import dog10 from "../assets/10.jpg";
import dog11 from "../assets/11.jpg";
import dog12 from "../assets/12.jpg";

const images = [dog1, dog2, dog3, dog4, dog5, dog6,dog7, dog8, dog9, dog10, dog11, dog12];

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

export const initialCards = createCardArray(images)


