import { useState } from "react";
import EventDetails from "./EventDetails";

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

type EventsData = {
  [key: string]: Event[];
}

const ActivitéCulturelleSection = () => {
  // Sample events data
  const eventsData: EventsData = {
    "Forum annuel": [
      {
        type: "upcoming",
        date: { month: "JUIN", day: "01", year: "2025" },
        title: "Forum annuel de la femme musulmane | 2025",
        description: "Description du forum annuel à venir et détails importants...",
        contacts: {
          phone: "XX XX XX XX XX",
          email: "example@domain.com"
        },
        program: [
          "Introduction",
          "Présentation principale",
          "Discussion"
        ],
        eventDate: "2025-02-01",
        image: "images/Evènement image 2.jpg",
        location: "Centre de conférence de Paris",
        registerLink: "https://example.com/forum-registration",
        speakers: [
          {
            name: "Sophie Dubois",
            bio: "Experte en leadership et entrepreneuriat social",
            role: "Conférencière principale"
          },
          {
            name: "Fatima Ahmed",
            bio: "Activiste des droits des femmes et auteure primée",
            role: "Panéliste"
          }
        ],
        additionalDetails: [
          "Networking avec des leaders d'industrie",
          "Ateliers interactifs",
          "Prix de reconnaissance pour l'entrepreneuriat féminin"
        ]
      },
      {
        type: "past",
        date: { year: "2024" },
        title: "Forum annuel de la femme musulmane | 2024",
        description: "Le forum de 2024 a réuni plus de 1000 participantes...",
        image: "images/Image2.jpg",
        additionalDetails: [
          "Plus de 1000 participants",
          "Couverture médiatique nationale",
          "Impact significatif sur l'entrepreneuriat féminin"
        ]
      }
    ],
    "Masterclass": [
      {
        type: "upcoming",
        date: { month: "JUIL", day: "15", year: "2025" },
        title: "Masterclass Leadership | 2025",
        description: "Une session intensive sur le développement personnel...",
        image: "images/Formation image 2.jpg",
        location: "Centre de formation",
        speakers: [
          {
            name: "Marc Dupont",
            bio: "Coach de leadership international",
            role: "Formateur principal"
          }
        ],
        additionalDetails: [
          "Formation interactive",
          "Certificat de participation",
          "Mentorat post-formation"
        ]
      }
    ],
    "Séminaires": [
      {
        type: "upcoming",
        date: { month: "AOÛT", day: "10", year: "2025" },
        title: "Séminaire sur l'entrepreneuriat | 2025",
        description: "Découvrez les clés de la réussite entrepreneuriale...",
        image: "images/Formation image.jpg",
        location: "Ecole de commerce",
        speakers: [
          {
            name: "Sophie Dubois",
            bio: "Experte en leadership et entrepreneuriat social",
            role: "Formatrice principale"
          }
        ],
        additionalDetails: [
          "Ateliers pratiques",
          "Networking avec des entrepreneurs",
          "Conseils personnalisés"
        ]
      }
    ],
    "Sorties récréactives": [
      {
        type: "past",
        date: { year: "2024" },
        title: "Sortie annuelle | 2024",
        description: "Une journée de détente et de partage...",
        image: "images/Activité image.jpg",
        location: "Parc de la ville",
        speakers: [
          {
            name: "Marie Lefevre",
            bio: "Coach de vie et experte en bien-être",
            role: "Animatrice principale"
          }
        ],
        additionalDetails: [
          "Ateliers de relaxation",
          "Pique-nique en plein air",
          "Jeux et activités de groupe"
        ]
      }
    ]
  };

  const [selectedActivity, setSelectedActivity] = useState('Forum annuel');
  const [showAllPast, setShowAllPast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const activities = Object.keys(eventsData);

  const filteredEvents = eventsData[selectedActivity] || [];
  const upcomingEvents = filteredEvents.filter(event => event.type === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.type === 'past');

  if (selectedEvent) {
    return (
      <div className="max-w-6xl mx-auto p-8 bg-gray-50">
        <EventDetails 
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Activities List */}
        <div>
          <h2 className="text-xl font-bold text-rose-600 mb-6">
            Les activités culturelles
          </h2>
          <ul>
            {activities.map((activity) => (
              <li
                key={activity}
                onClick={() => setSelectedActivity(activity)}
                className={`cursor-pointer p-2 rounded transition-colors ${
                  selectedActivity === activity
                    ? 'bg-rose-100 text-rose-600 font-medium'
                    : 'text-gray-700 hover:bg-rose-50'
                }`}
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Events */}
        <div className="space-y-6" id="events">
          <h3 className="font-bold text-gray-800 mb-4">
            {selectedActivity}
          </h3>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div>
              <h4 className="text-gray-700 mb-2">Évènements à venir:</h4>
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm mb-4 cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-600 text-white p-2 rounded text-center min-w-12">
                      <div className="text-sm">{event.date.month}</div>
                      <div className="text-xl font-bold">{event.date.day}</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">{event.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h4 className="text-gray-700 mb-2">Évènements passés:</h4>
              {pastEvents.slice(0, showAllPast ? undefined : 2).map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm mb-4 cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-200 text-gray-700 p-2 rounded text-center min-w-12">
                      <div className="text-sm">{event.date.year}</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">{event.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {pastEvents.length > 2 && (
            <button
              onClick={() => setShowAllPast(!showAllPast)}
              className="text-rose-600 hover:text-rose-700 font-medium"
            >
              {showAllPast ? "Voir moins" : "Voir plus"}
            </button>
          )}

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <p className="text-gray-500 italic">
              Aucun événement disponible pour cette activité.
            </p>
          )}
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default ActivitéCulturelleSection;