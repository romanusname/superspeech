"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // test

  const handleClick1 = () => {
    window.location.href = 'https://yandex.ru/maps/-/CDxG5Gka';
  };

  const handleClick2 = () => {
    window.location.href = 'https://go.2gis.com/h0eda';
  };

  const handleClick3 = () => {
    window.location.href = 'https://prodoctorov.ru/novosibirsk/vrach/202476-ivanova/';
  };

  //https://go.2gis.com/buvi8

  return (
    <div className={"wrapper"}>
    <h1>Буду благодарна за оставленный отзыв 😊</h1>
      <button onClick={handleClick1}>Яндекс</button>
      <button onClick={handleClick2}>2GIS</button>
      <button onClick={handleClick3}>ПроДокторов</button>
    </div>
  );
}

