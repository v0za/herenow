"use client";  // Add this line at the top

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function LandingPage() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const nextThursday = new Date();

      // Calculate next Thursday at 7:00 PM
      nextThursday.setDate(now.getDate() + ((4 + 7 - now.getDay()) % 7));
      nextThursday.setHours(19, 0, 0, 0);

      // If today is Thursday and it's after 7:00 PM, set nextThursday to the following Thursday
      if (now.getDay() === 4 && now.getHours() >= 19) {
        nextThursday.setDate(nextThursday.getDate() + 7);
      }

      const diff = nextThursday - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    const interval = setInterval(calculateTimeDifference, 1000);
    calculateTimeDifference(); // Initial call to set the state immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f8ff] text-center">
      <h2 className="text-lg font-medium text-[#87ceeb]">EVERY THURSDAY</h2>
      <h1 className="text-4xl font-bold italic text-[#4682b4]">JOIN THE FUN SOCIAL EVENTS.</h1>
      <p className="mt-4 text-lg text-[#6495ed]">
        Get <span className="font-bold">matched with 6 new friends</span>, for a fun filled experience.
      </p>
      <a href="https://forms.fillout.com/t/jS9o8AMBXtus">
        <Button className="mt-6 bg-[#87ceeb] py-2 px-6">Find Your Group</Button>
      </a>
      <div className="mt-8">
        <p className="text-lg text-[#6495ed]">Next event in</p>
        <div className="flex justify-center mt-2 space-x-4">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-[#4682b4]">{time.days}</div>
            <div className="text-sm text-[#87ceeb]">days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-[#4682b4]">{time.hours}</div>
            <div className="text-sm text-[#87ceeb]">hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-[#4682b4]">{time.minutes}</div>
            <div className="text-sm text-[#87ceeb]">mins</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-[#4682b4]">{time.seconds}</div>
            <div className="text-sm text-[#87ceeb]">secs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
