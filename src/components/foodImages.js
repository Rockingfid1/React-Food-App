import beefTacos from "../images/beef-tacos.jpg";
import caesarSalad from "../images/caesar-salad.jpg";
import chickenCurry from "../images/chicken-curry.jpg";
import chocBrownie from "../images/chocolate-brownie.jpg";
import eggplant from "../images/eggplant-parmesan.jpg";
import falafel from "../images/falafel-wrap.jpg";
import chickenSandwich from "../images/grilled-chicken-sandwich.jpg";
import lemonCheescake from "../images/lemon-cheesecake.jpg";
import lobsterBisque from "../images/lobster-bisque.jpg";
import macAndCheese from "../images/mac-and-cheese.jpg";
import margheritaPizza from "../images/margherita-pizza.jpg";
import misoRamen from "../images/miso-ramen.jpg";
import mushroom from "../images/mushroom-risotto.jpg";
import pancake from "../images/pancake-stack.jpg";
import seafood from "../images/seafood-paella.jpg";
import spagh from "../images/spaghetti-carbonara.jpg";
import steak from "../images/steak-frites.jpg";
import sushi from "../images/sushi-roll-platter.jpg";
import vegan from "../images/vegan-buddha-bowl.jpg";
import veggie from "../images/veggie-burger.jpg";

export default function foodImage(imageUrl) {
  switch (imageUrl) {
    case "images/beef-tacos.jpg":
      return beefTacos;
    case "images/caesar-salad.jpg":
      return caesarSalad;
    case "images/chicken-curry.jpg":
      return chickenCurry;
    case "images/chocolate-brownie.jpg":
      return chocBrownie;
    case "images/eggplant-parmesan.jpg":
      return eggplant;
    case "images/falafel-wrap.jpg":
      return falafel;
    case "images/grilled-chicken-sandwich.jpg":
      return chickenSandwich;
    case "images/lemon-cheesecake.jpg":
      return lemonCheescake;
    case "images/lobster-bisque.jpg":
      return lobsterBisque;
    case "images/mac-and-cheese.jpg":
      return macAndCheese;
    case "images/margherita-pizza.jpg":
      return margheritaPizza;
    case "images/miso-ramen.jpg":
      return misoRamen;
    case "images/mushroom-risotto.jpg":
      return mushroom;
    case "images/pancake-stack.jpg":
      return pancake;
    case "images/seafood-paella.jpg":
      return seafood;
    case "images/spaghetti-carbonara.jpg":
      return spagh;
    case "images/steak-frites.jpg":
      return steak;
    case "images/sushi-roll-platter.jpg":
      return sushi;
    case "images/vegan-buddha-bowl.jpg":
      return vegan;
    default:
      return veggie;
  }
}
