import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-6xl mx-auto bg-gray-800 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-teal mb-2 font-bold">Contact</h3>
            <h2 className="text-3xl font-bold mb-4">Prenez contact avec nous</h2>
            <p className="text-gray-300">Vous avez des questions, des suggestions ou souhaitez en savoir plus sur notre association? N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous. Nous serons ravis de vous répondre dans les plus brefs délais.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-teal-400 w-6 h-6 mt-1"/>
                <div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing test</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-teal-400 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-300">123.456.7890<br />123.456.7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-teal-400 w-6 h-6 mt-1"/>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">info@loremipsum.com<br />global@loremipsum.com</p>
                </div>
              </div>
            </div>

            <form action="#" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nom" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Prénom" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
                  required 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
                required 
              />
              <input 
                type="text" 
                placeholder="Numéro" 
                className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
                
              />
              </div>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
                required
              />
              <button 
                type="submit" 
                className="w-full bg-teal-400 text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-teal-500 transition-colors">
                  Envoyer
                </button>
            </form>
          </div>
        
      </div>
    </div>
  );
};

export default Contact;