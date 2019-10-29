import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    console.log('creating timer')
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      console.log('timer running')
    }, 1000)

    return () => {
      console.log('removing timer')
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log('current time is', currentTime.toString())
  }, [currentTime])

  return <div>{(currentTime).toString()}</div>;
}

export default Clock;
