import { useEffect, useState } from "react";
import TimeLeft from "../types/Schedule";

interface EventDate {
  month?: string;
  day?: string;
  year?: string;
}

interface Event {
  type: "upcoming" | "past";
  date: EventDate;
  title: string;
  description: string;
  contacts?: {
    phone?: string;
    email?: string;
  };
  program?: string[];
  eventDate?: string;
  image?: string;
  location?: string;
  registerLink?: string;
  speakers?: Array<{
    name: string;
    bio: string;
    role: string;
  }>;
  additionalDetails?: string[];
}

const CountdownTimer = ({ eventDate }: { eventDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = Number(new Date(eventDate)) - Number(new Date());

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg h-24 -mt-24 bg-transparent">
      <h3 className="text-center text-sm font-semibold mb-2">Temps restant</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-rose-700/50 p-1 rounded">
          <div className="text-lg font-bold">{timeLeft.days}</div>
          <div className="text-xs">Jours</div>
        </div>
        <div className="bg-rose-700/50 p-1 rounded">
          <div className="text-lg font-bold">{timeLeft.hours}</div>
          <div className="text-xs">Heures</div>
        </div>
        <div className="bg-rose-700/50 p-1 rounded">
          <div className="text-lg font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">Minutes</div>
        </div>
        <div className="bg-rose-700/50 p-1 rounded">
          <div className="text-lg font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">Seconds</div>
        </div>
      </div>
    </div>
  );
};

const EventDetails = ({
  event,
  onBack
}: {
  event: Event;
  onBack: () => void;
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-gray-600 hover:text-gray-800 mb-6 text-sm"
      >
        ← Retour
      </button>

      <div className="grid md:grid-cols-2 gap-8 divide-x-2 divide-gray-800">
        
        <div className="p-0">
        <hr />
          {/* Left Column */}
          <div>
            {/* Title */}
            <h1 className="text-lg font-bold uppercase mb-6">
              {event.title}
            </h1>
          </div>
          <hr />
          {/* Image placeholder */}
          <div className="mt-4">
            {event.type === "upcoming" && event.eventDate ? (
              <div className="h-48 flex flex-col">
                <img 
                  src={event.image || "public/images/Image2.jpg"} 
                  alt="Event" 
                  className="w-full h-48 object-cover rounded"
                />
                <CountdownTimer eventDate={event.eventDate} />
              </div>
            ) : (
              <img 
                src={event.image || "public/images/Image2.jpg"} 
                alt="Event" 
                className="w-full h-48 object-cover rounded"
              />
            )}
          </div>

          <hr className="mt-4" />
          {/* Table of Contents */}
          {event.additionalDetails && (
            <div className="mb-6">
              <h2 className="font-medium mb-2">DÉTAILS SUPPLÉMENTAIRES</h2>
              <ul className="space-y-1 text-sm">
                {event.additionalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          <hr />
        </div>

        {/* Right Column */}
        <div className="p-6">
          {/* Date */}
          <div className="mb-4">
            <p className="text-sm font-semibold">
              {event.date.day} {event.date.month} {event.date.year}
            </p>
            {event.location && (
              <p className="text-sm text-gray-600 mt-1">
                📍 {event.location}
              </p>
            )}
          </div>

          {/* Registration Link */}
          {event.registerLink && (
            <div>
              <a 
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                S'inscrire
              </a>
            </div>
          )}

          {/* Contact Details */}
          {event.contacts && (
            <div className="mb-6 text-sm">
              {event.contacts.phone && (
                <p className="mb-1">Phone: {event.contacts.phone}</p>
              )}
              {event.contacts.email && (
                <p>Email: {event.contacts.email}</p>
              )}
            </div>
          )}

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold mb-4">INTERVENANTS</h2>
              {event.speakers.map((speaker, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-sm">{speaker.name}</h3>
                  <p className="text-xs text-gray-600">{speaker.role}</p>
                  <p className="text-xs mt-1">{speaker.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;