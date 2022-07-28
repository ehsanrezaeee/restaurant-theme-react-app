import React from "react";

import classes from "./MealsSummary.module.css"

function MealsSummary() {
return <section className={classes.summary}>
  <h2>غذای لذیذ با کیفیت و سرشار از مواد مغذی</h2>
  <p>غذاهای طبخ شده در این رستوران طبق موازین بهداشتی تهیه گردیده و دارای نشان سلامت می‌باشد</p>
  <p>مواد تشکیل دهنده کاملا تازه و روزانه تهیه گردیده و در همان روز استفاده می‌گردد</p>
</section>
}

export default MealsSummary;