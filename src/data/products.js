import mangoImg from "../assets/Image/mango.webp.png";
import appleImg from "../assets/Image/apple.webp.jpg";
import peachImg from "../assets/Image/peach.webp.jpg";
import orangeImg from "../assets/Image/orange.webp.jpg";
import miniorangeImg from "../assets/Image/miniorange.webp.jpg";
import strawberryImg from "../assets/Image/strawberry.webp.png";
import bananaImg from "../assets/Image/banana.webp.jpg";
import avocadoImg from "../assets/Image/avocado.webp.jpg";
import broccoliImg from "../assets/Image/broccoli.webp.jpg";
import amulImg from "../assets/Image/amul.webp.png";
import cherryImg from "../assets/Image/cherry.webp.png";
import pearImg from "../assets/Image/pear.webp.png";
import breadImg from "../assets/Image/bread.webp.jpg";
import orangecarrotImg from "../assets/Image/orangecarrot.webp.jpg";
import redcarrotImg from "../assets/Image/redcarrot.webp.jpg";
import cauliflowerImg from "../assets/Image/cauliflower.webp.jpg";
import corianderImg from "../assets/Image/coriander.webp.jpg";
import lettuceImg from "../assets/Image/lettuce.webp.jpg";
import tomatoImg from "../assets/Image/tomato.webp.jpg";
import cucumberImg from "../assets/Image/cucumber_imresizer.webp.jpg";
import potatoImg from "../assets/Image/potato.webp.jpg";
import curdImg from "../assets/Image/curd.jpg";
import blueberryyogurtImg from "../assets/Image/blueberry-yogurt_imresizer.webp.jpg";
import greekyogurtImg from "../assets/Image/greek-yogurt_imresizer.webp.jpg";
import gheeImg from "../assets/Image/ghee_imresizer.webp.jpg";
import butterImg from "../assets/Image/butter_imresizer.webp.jpg";
import unsaltedbutterImg from "../assets/Image/unsalted_butter_imresizer.webp.jpg";
import freshcreamImg from "../assets/Image/fresh_cream.webp.jpg";
import dicedcheeseImg from "../assets/Image/diced_cheese_imresizer.webp.jpg";
import cheesecubeImg from "../assets/Image/cheese_cube_imresizer.webp.jpg";
import cheesesliceImg from "../assets/Image/cheese_slice_imresizer.webp.jpg";
import chipsImg from "../assets/Image/chips.webp.jpg";
import ragichipsImg from "../assets/Image/ragi-chips.webp.jpg";
import sizzlinhotImg from "../assets/Image/sizzlin-hot-chips.webp.jpg";
import sweetpotatoImg from "../assets/Image/sweet-potato.webp.jpg";
import bakedchipImg from "../assets/Image/baked-chips_imresizer.webp.jpg";
import bingochipImg from "../assets/Image/bingo-chips.webp.jpg";
import bananachipsImg from "../assets/Image/banana-chips.webp.jpg";
import orangejuiceImg from "../assets/Image/orange-juice.webp.jpg";
import appyfizzImg from "../assets/Image/appy-fizz.webp.jpg";
import tropicanapomegranateImg from "../assets/Image/tropicana-pomegranate-juice.webp.jpg";
import tropicanaorangeImg from "../assets/Image/tropicana-orange-juice.webp.jpg";
import realcoconutwaterImg from "../assets/Image/real-coconut-water.webp.jpg";
import rawmixfruitejuiceImg from "../assets/Image/raw-mix-fruite-juice.webp.jpg";
import rawgrapefruitejuiceImg from "../assets/Image/raw-grapefruite-juice.webp.jpg";
import rawguavajuiceImg from "../assets/Image/raw-guava-juice.webp.jpg";
import naturalapplejuiceImg from "../assets/Image/natural-apple-juice.webp.jpg";
import unibicImg from "../assets/Image/unibic.webp.jpg";
import nutrichoiceImg from "../assets/Image/nutri-choice.webp.jpg";
import biscuitImg from "../assets/Image/biscuits.webp.jpg";
import diabebiscuitImg from "../assets/Image/diabe-biscuits.webp.jpg";
import mariecoldImg from "../assets/Image/marie-cold.webp.jpg";














const products = [
  //Fruits
  {
    name: "Dasheri Mango (Amb)",
    category: "Fruits",
    image: mangoImg,
    price: 73,
    originalPrice: 96,
    discount: 24,
    quantity: "2 pcs (300-400 g)",
    deliveryTime: "11 MINS",
    rating: 4,
  },
  {
    name: "Pear",
    category: "Fruits",
    image: pearImg,
    price: 73,
    originalPrice: 96,
    discount: 24,
    quantity: "2 pcs (300-400 g)",
    deliveryTime: "11 MINS",
    rating: 4,
  },
  {
    name: "Fresh Apples",
    category: "Fruits",
    image: appleImg,
    price: 128,
    originalPrice: 160,
    discount: 20,
    rating: 4,
    quantity: "1 kg",
    deliveryTime: "15 MINS",
  },
  {
    name: "Peach",
    category: "Fruits",
    image: peachImg,
    price: 120,
    rating: 4,
    originalPrice: 150,
    discount: 20,
    quantity: "500 g",
    deliveryTime: "12 MINS",
  },
  {
    name: "Orange",
    category: "Fruits",
    image: orangeImg,
    price: 60,
    rating: 4,
    originalPrice: 75,
    discount: 20,
    quantity: "1 kg",
    deliveryTime: "10 MINS",
  },
  {
    name: "Mini Orange",
    category: "Fruits",
    image: miniorangeImg,
    price: 55,
    rating: 4,
    originalPrice: 70,
    discount: 21,
    quantity: "500 g",
    deliveryTime: "14 MINS",
  },
  {
    name: "Strawberry",
    category: "Fruits",
    image: strawberryImg,
    price: 150,
    rating: 4,
    discount: 10,
    originalPrice: 165,
    quantity: "250 g",
    deliveryTime: "9 MINS",
  },
  {
    name: "Banana",
    category: "Fruits",
    image: bananaImg,
    price: 48,
    rating: 4,
    originalPrice: 60,
    discount: 20,
    quantity: "1 dozen",
    deliveryTime: "8 MINS",
  },
  {
    name: "Avocado",
    category: "Fruits",
    image: avocadoImg,
    price: 48,
    rating: 4,
    originalPrice: 60,
    discount: 20,
    quantity: "1 pcs",
    deliveryTime: "8 MINS",
  },
   {
    name: "Cherry",
    category: "Fruits",
    image: cherryImg,
    price: 48,
    rating: 4,
    originalPrice: 60,
    discount: 20,
    quantity: "1 pcs",
    deliveryTime: "8 MINS",
  },
  /* Vegetables*/
  {
    name: "Broccoli",
    category: "Vegetables",
    image: broccoliImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Orange Carrot",
    category: "Vegetables",
    image: orangecarrotImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Red Carrot",
    category: "Vegetables",
    image: redcarrotImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Cauliflower",
    category: "Vegetables",
    image: cauliflowerImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Tomato",
    category: "Vegetables",
    image: tomatoImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Potato",
    category: "Vegetables",
    image: potatoImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Coriender",
    category: "Vegetables",
    image: corianderImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Lettuce",
    category: "Vegetables",
    image: lettuceImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },
  {
    name: "Cucumber",
    category: "Vegetables",
    image: cucumberImg,
    price: 30,
    rating: 5,
    originalPrice: 40,
    discount: 25,
    quantity: "500 g",
    deliveryTime: "11 MINS",
  },

  //dairy
  {
    name: "Milk",
    category: "Dairy",
    image: amulImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
  {
    name: "Curd",
    category: "Dairy",
    image: curdImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
{
    name: "Blueberry Yogurt",
    category: "Dairy",
    image: blueberryyogurtImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
{
    name: "Butter",
    category: "Dairy",
    image: butterImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
{
    name: "Cheese Slice",
    category: "Dairy",
    image: cheesesliceImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
{
    name: "Cheese Cube",
    category: "Dairy",
    image: cheesecubeImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 L",
    deliveryTime: "6 MINS",
  },
{
    name: "Fresh Cream",
    category: "Dairy",
    image: freshcreamImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 pack",
    deliveryTime: "6 MINS",
  },
  {
    name: "Greek Yogurt",
    category: "Dairy",
    image: greekyogurtImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 pack",
    deliveryTime: "6 MINS",
  },
  {
    name: "Ghee",
    category: "Dairy",
    image: gheeImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 pack",
    deliveryTime: "6 MINS",
  },
  {
    name: "Unsalted Butter",
    category: "Dairy",
    image: unsaltedbutterImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 pack",
    deliveryTime: "6 MINS",
  },
  {
    name: "Diced Cheese",
    category: "Dairy",
    image: dicedcheeseImg,
    price: 56,
    rating: 4,
    originalPrice: 65,
    discount: 14,
    quantity: "1 pack",
    deliveryTime: "6 MINS",
  },



  //Snacks
  {
    name: "Potato Chips",
    category: "Snacks",
    image: chipsImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "Ragi Chips",
    category: "Snacks",
    image: ragichipsImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "Sizzlin Hot Chips",
    category: "Snacks",
    image: sizzlinhotImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "SweetPotato Chips",
    category: "Snacks",
    image: sweetpotatoImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "Baked Chips",
    category: "Snacks",
    image: bakedchipImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "Banana Chips",
    category: "Snacks",
    image: bananachipsImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },
  {
    name: "Bingo Chips",
    category: "Snacks",
    image: bingochipImg,
    price: 25,
    rating: 3,
    originalPrice: 35,
    discount: 29,
    deliveryTime: "5 MINS",
  },



  //beverages
  {
    name: "Orange Juice",
    category: "Beverages",
    image: orangejuiceImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
   {
    name: "Appy Fizz",
    category: "Beverages",
    image: appyfizzImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
   {
    name: "Tropicana Pomegranate",
    category: "Beverages",
    image: tropicanapomegranateImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
   {
    name: "Tropicana Orange Juice",
    category: "Beverages",
    image: tropicanaorangeImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
   {
    name: "Raw Mix Fruite Juice",
    category: "Beverages",
    image: rawmixfruitejuiceImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
   {
    name: "Raw Guava",
    category: "Beverages",
    image: rawguavajuiceImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
  {
    name: "Raw Grapefruite",
    category: "Beverages",
    image: rawgrapefruitejuiceImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
{
    name: "Real Coconut Water",
    category: "Beverages",
    image: realcoconutwaterImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },
  {
    name: "Natural Apple Juice",
    category: "Beverages",
    image: naturalapplejuiceImg,
    price: 90,
    rating: 4,
    originalPrice: 110,
    discount: 18,
    quantity: "1 L",
    deliveryTime: "13 MINS",
  },


  //bakery
  {
    name: "Bread Loaf",
    category: "Bakery",
    image: breadImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  {
    name: "Biscuit",
    category: "Bakery",
    image: biscuitImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  {
    name: "Diabe Biscuit",
    category: "Bakery",
    image: diabebiscuitImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  {
    name: "Marie Gold",
    category: "Bakery",
    image: mariecoldImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  {
    name: "Nutri Choice",
    category: "Bakery",
    image: nutrichoiceImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  {
    name: "Unibic",
    category: "Bakery",
    image: unibicImg,
    price: 40,
    rating: 5,
    originalPrice: 50,
    discount: 20,
    quantity: "1 unit",
    deliveryTime: "7 MINS",
  },
  
];


export default products;
