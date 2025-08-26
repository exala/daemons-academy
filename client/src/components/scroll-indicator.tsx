import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition <= bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-indicator">
      {sections.map((section) => (
        <div
          key={section}
          className={`nav-dot ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          data-testid={`nav-dot-${section}`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
