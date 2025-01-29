import React, { useEffect, useState } from "react";
import TimeLeft from "../types/Schedule";

interface ScheduleCardProps {
  title: string;
  date: Date;
  description: string;
  image: string;
  registerLink?: string;
};

const calculateTimeLeft = (eventDate: Date): TimeLeft => {
  const difference = eventDate.getTime() - new Date().getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60 )) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  date,
  description,
  image,
  registerLink = "#events"
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden -mt-40 relative z-20">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Image Section */}
        <div>
          <img 
            src={image}
            alt={title}
            className="w-2/3 mx-auto my-8 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex flex-col">
            {/* Register Button */}
            <div className="mt-auto mb-4 text-right">
              <a 
                href={registerLink}
                className="inline-block bg-[#00A39A] text-white px-6 py-2 rounded-lg 
                         hover:bg-[rgb(0,163,154)] transition duration-300 text-center w-1/2"
              >
                Evènements à venir
              </a>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-500">Jours</span>
                <div className="bg-gray-100 rounded-lg p-3 w-16 text-center">
                  <span className="block text-xl font-bold text-gray-800">{timeLeft.days}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-500">Hr</span>
                <div className="bg-gray-100 rounded-lg p-3 w-16 text-center">
                  <span className="block text-xl font-bold text-gray-800">{timeLeft.hours}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-500">Min</span>
                <div className="bg-gray-100 rounded-lg p-3 w-16 text-center">
                  <span className="block text-xl font-bold text-gray-800">{timeLeft.minutes}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-500">Sec</span>
                <div className="bg-gray-100 rounded-lg p-3 w-16 text-center">
                  <span className="block text-xl font-bold text-gray-800">{timeLeft.seconds}</span>
                </div>
              </div>
              <div className="flex flex-col items-end mt-auto">
                <a href="#">Me le rappeler</a>
              </div>
            </div>

            {/* Event Details */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>

            <hr className="border-t border-gray-300"/>

            <p><a href="/Contact">Nous réjoindre</a></p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

const SchedulePreview: React.FC = () => {
  const eventDate = new Date('2025-02-01');

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScheduleCard
          title="LE FORUM ANNUEL DE LA FEMME MUSULMANE | 2025" 
          date={eventDate}
          description="Rejoignez-nous pour un événement extraordinaire qui rassemblera des femmes inspirantes du monde entier. Un moment de partage, d'apprentissage et de connexion."
          image="public/images/Evènement image 2.jpg"
          registerLink="#"
        />
      </div>
    </section>
  );
};

export default SchedulePreview;