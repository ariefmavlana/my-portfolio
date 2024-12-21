import { FaGithub, FaInstagram, FaLinkedin, FaTwitter as FaXTwitter } from 'react-icons/fa';
import logo from '../assets/raviKumarLogo.webp';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/in/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/in/your-instagram-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.xtwitter.com/in/your-xtwitter-profile" target="_blank" rel="noopener noreferrer" aria-label="XTwitter">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
