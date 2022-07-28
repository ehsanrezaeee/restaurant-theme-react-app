import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'شیشلیک',
    description: 'گوشت راسته گوسفند',
    price: 400,
    src: "https://pamuh.com/wp-content/uploads/2019/07/Shashlik-Recipe-PAMUH.COM_.jpg"
  },
  {
    id: 'm2',
    name: 'ماهیچه',
    description: 'گوشت ران گوسفند',
    price: 400,
    src: "https://saednews.com/storage/media-center/images/ac-image-HY1633896903Qg.jpeg"
  },
  {
    id: 'm3',
    name: 'جوجه کباب با استخوان',
    description: 'جوجه با استخوان',
    price: 150,
    src: "https://static.delino.com/Image/Restaurant/Food/onxigsg0.pyc_560x350.jpg"
  },
  {
    id: 'm4',
    name: 'سرویس ویژه',
    description: 'تمامی مخلفات',
    price: 70,
    src: "https://www.nestle.in/sites/g/files/pydnoa451/files/asset-library/publishingimages/vending/food_service_products_banner.jpg"
  },
];

function AvailableMeals() {
  const mealslist = DUMMY_MEALS.map(function(meal){
    return (
    <MealItem
    id={meal.id} 
    key={meal.id} 
    ItemName={meal.name} 
    ItemDescription={meal.description} 
    price={meal.price}
    img1={meal.src}
    />)
  })


  return <section className={classes.meals}>
  <Card>
    <ul>
      {mealslist}
    </ul>
    </Card>
  </section>
}

export default AvailableMeals;