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
    time: {
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    },
    label: {
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд"
    }
  };


  const [countItem, setCount] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const totalSeconds = prevCount.time.days * 86400 + prevCount.time.hours * 3600 + prevCount.time.minutes * 60 + prevCount.time.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(interval)
          return prevCount;
        }
        return {
          time: {
            days: Math.floor(totalSeconds / 86400),
            hours: Math.floor((totalSeconds % 86400) / 3600),
            minutes: Math.floor((totalSeconds % 3600) / 60),
            seconds: totalSeconds % 60
          },
          label: prevCount.label
        };
      });
    },1000 );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {
        Object.keys(countItem.time).map((item, index) => (
        <CountItem
          key = {index}
          time = {countItem.time[item]}
          label = {countItem.label[item]}
        />
      ))}
    </>
  )
}