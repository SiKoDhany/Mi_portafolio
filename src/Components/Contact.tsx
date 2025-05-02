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
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    email: 'daniel11798@hotmail.com',
    phone: '+57 312 429 7501',
    github: 'https://github.com/SiKoDhany',
    linkedin: 'https://www.linkedin.com/in/daniel-f-cantor/',
    twitter: 'https://x.com/SiKoDhany'
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
        
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#A65A4A]">Información de Contacto</h3>
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
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#A65A4A]">Currículum Vitae</h3>
            <div className="space-y-6">
              <button 
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 bg-[#C94C4C] text-white px-4 py-2 rounded-lg hover:bg-[#A65A4A] transition-colors"
              >
                <BsDownload />
                <span>Descargar CV</span>
              </button>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#A65A4A]">Disponibilidad</h4>
                <p className="text-gray-700">
                  Buscando activamente oportunidades de empleo en empresas de desarrollo de software.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#A65A4A]">Idiomas</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Español (Nativo)</li>
                  <li>Inglés (Intermedio-Avanzado)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
