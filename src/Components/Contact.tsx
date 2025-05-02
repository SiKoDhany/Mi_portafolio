import React, { useState } from 'react';
import { 
  BsGithub, 
  BsLinkedin, 
  BsTwitterX, 
  BsEnvelope, 
  BsDownload, 
  BsTelephone 
} from 'react-icons/bs';
import Particles from './Particles';

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    email: 'daniel11798@hotmail.com',
    phone: '+57 312 429 7501',
    github: 'https://github.com/SiKoDhany',
    linkedin: 'https://www.linkedin.com/in/daniel-f-cantor/',
    twitter: 'https://x.com/SiKoDhany'
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Correo electrónico es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no es válido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensaje es requerido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    // Replace with actual path to CV when available
    const cvPath = '/documents/CV_Daniel_Cantor.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Daniel_Cantor_CV.pdf';
    link.click();
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-4 bg-[#F9F4F4] relative">
      <div className="absolute inset-0 pointer-events-none">
        <Particles 
          particleCount={150} 
          particleColors={['#C94C4C', '#A65A4A', '#F9F4F4']} 
          speed={0.5} 
          particleBaseSize={1.5}
          className="absolute inset-0"
        />
      </div>
      
      <div className="max-w-4xl w-full relative bg-white/80 backdrop-blur-sm rounded-xl p-10 shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#A65A4A]">Contáctame</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#A65A4A]">Contáctame</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                  className={`w-full px-4 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Correo Electrónico"
                  className={`w-full px-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tu Mensaje"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#C94C4C] text-white py-2 rounded-lg hover:bg-[#A65A4A] transition-colors"
              >
                {isSubmitted ? 'Mensaje Enviado' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#A65A4A]">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BsEnvelope className="text-[#C94C4C] text-xl" />
                <div className="flex items-center space-x-2">
                  <span>{contactInfo.email}</span>
                  <button 
                    onClick={handleCopyEmail} 
                    className="text-sm text-[#A65A4A] hover:text-[#C94C4C] transition-colors"
                  >
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BsTelephone className="text-[#C94C4C] text-xl" />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-[#A65A4A] hover:text-[#C94C4C] transition-colors"
              >
                <BsGithub />
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-[#A65A4A] hover:text-[#C94C4C] transition-colors"
              >
                <BsLinkedin />
              </a>
              <a 
                href={contactInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-[#A65A4A] hover:text-[#C94C4C] transition-colors"
              >
                <BsTwitterX />
              </a>
            </div>
          </div>
          
          {/* CV and Additional Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#A65A4A]">Currículum Vitae</h3>
            <button 
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-[#C94C4C] text-white px-4 py-2 rounded-lg hover:bg-[#A65A4A] transition-colors"
            >
              <BsDownload />
              <span>Descargar CV</span>
            </button>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2 text-[#A65A4A]">Disponibilidad</h4>
              <p className="text-gray-700">
                Buscando activamente oportunidades de empleo en empresas de desarrollo de software.
              </p>
            </div>
            
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2 text-[#A65A4A]">Idiomas</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Español (Nativo)</li>
                <li>Inglés (Intermedio-Avanzado)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
