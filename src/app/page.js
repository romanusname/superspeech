"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const handleClick1 = () => {
    window.location.href = 'https://yandex.ru/maps/-/CDxG5Gka';
  };

  const handleClick2 = () => {
    window.location.href = 'https://go.2gis.com/h0eda';
  };

  //https://go.2gis.com/buvi8

  return (
    <div className={"wrapper"}>
    <h1>Где хотите оставить отзыв?</h1>
      <button onClick={handleClick1}>Яндекс</button>
      <button onClick={handleClick2}>2GIS</button>
    </div>
  );
}
