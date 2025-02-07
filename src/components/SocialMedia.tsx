import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialMediaLinks = [
  { name: 'GitHub', icon: <FaGithub size={30} />, url: 'https://github.com/barros-m' },
  { name: 'LinkedIn', icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/mattheusbarroos/' },
  { name: 'Instagram', icon: <FaInstagram size={30} />, url: 'https://www.instagram.com/matheusbarros.dev/' }
];

export default function SocialMedia() {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {socialMediaLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition">
          {social.icon}
        </a>
      ))}
    </div>
  );
}
