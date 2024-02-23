import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import presaleAbi from "../abi/presale.json";
import { tokenAdd, usdcAdd, usdtAdd, contractAddr, chainId } from "../config";

const CountdownTimer = () => {
  const getTime = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getCurrentStageEndTime",
    watch: true,
    chainId: chainId,
  });

  const [timeRemaining, setTimeRemaining] = useState(null);

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const totalSeconds = Math.max(
      0,
      Math.floor((targetDate.getTime() - now.getTime()) / 1000)
    );
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    if (getTime.data) {
      const targetDate = new Date(getTime.data?.toString() * 1000);
      setTimeRemaining(getTimeRemaining(targetDate));

      const interval = setInterval(() => {
        setTimeRemaining(getTimeRemaining(targetDate));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [getTime.data]);

  if (!timeRemaining) {
    return <div>Loading...</div>;
  }

  return (
    <div className="clock-wrapper">
      <div className="time-label">DAYS</div>
      <div className="time-label">HRS</div>
      <div className="time-label">MIN</div>
      <div className="time-label">SEC</div>
      <div className="time-number">{timeRemaining.days}</div>
      <div className="time-number">{timeRemaining.hours}</div>
      <div className="time-number">{timeRemaining.minutes}</div>
      <div className="time-number">{timeRemaining.seconds}</div>
    </div>
  );
};

export default CountdownTimer;
