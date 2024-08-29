"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function LandingPage() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const nextThursday = new Date();

      nextThursday.setDate(now.getDate() + ((4 + 7 - now.getDay()) % 7));
      nextThursday.setHours(19, 0, 0, 0);

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
    calculateTimeDifference();

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
      {/* FAQ Text Trigger */}
      <p
        className="mt-8 text-lg text-[#6495ed] cursor-pointer underline hover:text-[#87ceeb]"
        onClick={() => setIsFaqOpen(true)}
      >
        Want to learn more ⁉️ FAQ's 😊 
      </p>

      {/* FAQ Modal */}
      {isFaqOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#f0f8ff]">
          <div className="absolute inset-0 bg-white"></div> 
          <div className="relative bg-white p-4 rounded-lg w-full max-w-3xl h-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-[#4682b4]">FAQ - HereNow 🤩</h2>
            <ul className="text-left text-[#6495ed] space-y-2">
              <li><strong>What is HereNow?</strong> HereNow is a social app that connects people by organizing engaging and enjoyable events. We match you with a group of like-minded individuals to participate in activities together, making it easy to meet new friends and have a great time.</li>
              <li><strong>How does HereNow work?</strong> Once you sign up and complete a brief questionnaire, we match you with six other participants who share similar interests and personality traits. We handle all the event planning and bookings, so you just need to turn up and enjoy the experience!</li>
              <li><strong>How are participants matched?</strong> Participants are matched based on their answers to our questionnaire, which helps us understand your interests and preferences. Our matching system then pairs you with others who have similar traits and interests.</li>
              <li><strong>How do I sign up for an event?</strong> To sign up, complete the registration form on our app or website. After you fill out the questionnaire, you’ll be added to an upcoming event based on your preferences and availability.</li>
              <li><strong>Can I choose the type of event I want to attend?</strong> While we try to match you with events that align with your interests, the specific activities are curated by our team to provide a balanced and exciting experience for all participants.</li>
              <li><strong>What if I can't make it to an event I signed up for?</strong> If you can’t attend an event, please let us know as soon as possible so we can make adjustments. We’ll do our best to accommodate you in a future event.</li>
              <li><strong>Is there a cost to participate in HereNow events?</strong> There is no fee for our service. You only pay for the actual event you choose to attend, and the cost will not exceed $30.</li>
              <li><strong>How can I contact HereNow support?</strong> If you have any questions or need assistance, you can contact our support team via the app or email us at support@herenow.com. We’re here to help!</li>
              <li><strong>How do I get in touch with other attendees before the event?</strong> One day before the event, you will be added to a WhatsApp group with your fellow attendees. This group allows you to introduce yourself, discuss plans, and get excited about the upcoming activity together!</li>
            </ul>
            <Button className="mt-4 bg-[#87ceeb] py-2 px-4" onClick={() => setIsFaqOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
