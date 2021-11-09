import React, { useState } from "react";
import style from "./thirdPage.module.css";
import IonRangeSlider from "react-ion-slider";
const ThirdPage = () => {
  const [rangeValueMoney, setRangeValueMoney] = useState(Number);

  const handleRange = (e) => {
    setRangeValueMoney(e.target.value);
  };

  const customValues = [3, 7, 14, 54, 70];

  return (
    <>
      <form className={style.form__range}>
        <p className={style.form__money_title}>{rangeValueMoney}</p>
        <input
          className={style.form__range_input}
          value={rangeValueMoney}
          min="1000"
          max="20000"
          step="1000"
          type="range"
          onChange={handleRange}
        ></input>

        <IonRangeSlider
          type={"single"}
          min={rangeValueMoney > 10000 ? 54 : 3}
          max={rangeValueMoney > 10000 ? 70 : 14}
          from={rangeValueMoney > 10000 ? 0 : 0}
          to={rangeValueMoney > 10000 ? 0 : 2}
          values={
            rangeValueMoney > 10000
              ? customValues.slice(3, 5)
              : customValues.slice(0, 3)
          }
        />
      </form>
    </>
  );
};

export default ThirdPage;
