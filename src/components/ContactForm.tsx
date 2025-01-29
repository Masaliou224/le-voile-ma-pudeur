import React, { useState } from "react";
import FormData from "../types/FormData";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    pays: '',
    ville: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.email || !formData.email.includes('@')) {
      setStatus('error');
      return;
    }

    // Make an API call to submit the form
    console.log('Form submitted:', formData);
    setStatus('success');

    // Reset form after successful submission
    setFormData({
      nom: '',
      prenom: '',
      tel: '',
      email: '',
      pays: '',
      ville: '',
      message: ''
    });

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-4 mt-5">
      <div className="mb-6 mx-auto justify-center items-center">
        <h2 className="text-2xl text-center font-bold text-rose-600">A fin de nous rejoindre</h2>
        <img src="public/images/Logo.jpg" alt="logo" className="w-2/3 mx-auto justify-center items-center"/>
        <p className="text-2xl text-center font-bold text-rose-600">remplissez ce formulaire</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input 
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prenom"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input 
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            placeholder="Tél"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text"
            name="pays"
            value={formData.pays}
            onChange={handleChange}
            placeholder="Pays de résidence"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input 
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            placeholder="Ville"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />

        {status === 'error' && (
          <p className="text-red-600">Veuillez vérifier vos informations.</p>
        )}
        {status === 'success' && (
          <p className="text-teal-600">Votre message a été envoyé avec succès!</p>
        )}

        <button
          type="submit"
          className="w-32 px-6 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;