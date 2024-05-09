import React, {useState, useEffect } from "react";
const CountItem = ({ time, label }) => {
  return (
    <div className="py-5 px-8 bg-[#121212]">
      <h5 className="text-4xl font-bold">{time}</h5>
      <p className="text-neutral-500">{label}</p>
    </div>
  );
}

export default function CountTimer() {
  const items =  {
    days: 18,
    hours: 18,
    minutes: 18,
    seconds: 18
  };

  const [countItem, setCount] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.days === 0 && prevCount.hours === 0 && prevCount.minutes === 0 && prevCount.seconds === 0) {
          clearInterval(interval);
          return prevCount;
        }
        const totalSeconds = (prevCount.days * 24 * 60 * 60) + (prevCount.hours * 60 * 60) + (prevCount.minutes * 60) + prevCount.seconds;
        const newTotalSeconds = totalSeconds - 1;

        const days = Math.floor(newTotalSeconds / (24 * 60 * 60));
        const hours = Math.floor((newTotalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
        const seconds = newTotalSeconds % 60;

        return {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
      })
    },1000 )
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <CountItem time={countItem.days} label="Дней" />
      <CountItem time={countItem.hours} label="Часов" />
      <CountItem time={countItem.minutes} label="Минут" />
      <CountItem time={countItem.seconds} label="Секунд" />
    </>
  )
}