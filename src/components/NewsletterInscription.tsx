import React, { useState } from "react"

const NewsletterInscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    // API call place to subscribe
    console.log("Subscribing email:", email);
    setStatus("success");
    setEmail("");

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-3 items-center">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Restez au courant de nos activités en vous inscrivant au news letter
        </label>
        <div  className="flex flex-col space-y-2">
        <div className="flex gap-2">
          
          <input 
            type="email"
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ton email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-teal-500 text-white text-center mx-auto font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors sm:self-end w-auto"
          >
            S'inscrire
          </button>

          {status === "error" && (
            <p className="mt-1 text-sm text-red-600">
              Veuillez entrer une adresse email valide
            </p>
          )}
          {status === "success" && (
            <p className="mt-1 text-sm text-teal-600">
              Inscription réussie !
            </p>
          )}
        </div>
        </div>
      </form>
    </div>
  );
};

export default NewsletterInscription;