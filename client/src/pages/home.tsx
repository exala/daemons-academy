import { useEffect } from "react";
import MatrixBackground from "@/components/matrix-background";
import ScrollIndicator from "@/components/scroll-indicator";
import GlitchText from "@/components/glitch-text";
import TerminalBox from "@/components/terminal-box";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Phone number copied successfully",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const openWhatsApp = () => {
    const message = "Hi, I'm interested in the Offensive Security course";
    const whatsappUrl = `https://wa.me/923006212226?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-cyber-dark text-white font-sans overflow-x-hidden">
      <MatrixBackground />
      <ScrollIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-cyber-green/30 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold font-mono">
              <span className="text-cyber-green">[</span>
              Daemons Academy
              <span className="text-cyber-green">]</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyber-green transition-colors duration-300 font-mono" data-testid="nav-home">./home</a>
              <a href="#about" className="hover:text-cyber-green transition-colors duration-300 font-mono" data-testid="nav-about">./about</a>
              <a href="#contact" className="hover:text-cyber-green transition-colors duration-300 font-mono" data-testid="nav-contact">./contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-cyber-green text-2xl" data-testid="mobile-menu-button">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4">
              <GlitchText dataText="DAEMONS" className="text-6xl md:text-8xl font-bold font-mono">
                DAEMONS
              </GlitchText>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold font-mono text-cyber-green mb-6" data-testid="text-academy">
              ACADEMY
            </h2>
            <p className="text-xl md:text-2xl font-mono text-cyber-green-bright animate-pulse" data-testid="text-tagline">
              &gt; Daemonstrating Cyber Security_
            </p>
          </div>
          
          <TerminalBox className="p-8 max-w-4xl mx-auto mb-8" animate>
            <div className="pl-8">
              <p className="font-mono text-lg mb-4 text-green-300">
                $ cat mission.txt
              </p>
              <p className="text-white/90 text-lg leading-relaxed" data-testid="text-mission">
                We're two Cyber Security Engineers bridging the gap between theory and practice. 
                Our intensive hands-on training transforms students into industry-ready penetration testing experts.
              </p>
              <p className="font-mono text-cyber-green mt-4">
                $ chmod +x your_cybersecurity_career.sh
              </p>
            </div>
          </TerminalBox>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 animate-float">
              <div className="pl-6">
                <i className="fas fa-shield-halved text-3xl text-cyber-green mb-4"></i>
                <h3 className="font-mono text-xl mb-2" data-testid="text-offensive-security">Offensive Security</h3>
                <p className="text-gray-300">Real-world penetration testing skills</p>
              </div>
            </TerminalBox>
            <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="pl-6">
                <i className="fas fa-users-gear text-3xl text-cyber-green mb-4"></i>
                <h3 className="font-mono text-xl mb-2" data-testid="text-expert-instructors">Expert Instructors</h3>
                <p className="text-gray-300">Active industry professionals</p>
              </div>
            </TerminalBox>
            <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
              <div className="pl-6">
                <i className="fas fa-certificate text-3xl text-cyber-green mb-4"></i>
                <h3 className="font-mono text-xl mb-2" data-testid="text-practical-exam">Practical Exam</h3>
                <p className="text-gray-300">Hands-on hacking certification</p>
              </div>
            </TerminalBox>
          </div>

          <div className="mt-12">
            <a href="#about" className="inline-block bg-cyber-green/20 border border-cyber-green px-8 py-4 font-mono text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 animate-pulse-green" data-testid="link-explore-course">
              $ ./explore_course.sh
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-mono mb-4" data-testid="heading-course-details">
              <span className="text-cyber-green">[</span>
              Course Details
              <span className="text-cyber-green">]</span>
            </h2>
            <p className="text-xl font-mono text-cyber-green-bright">
              &gt; 4-5 Month Intensive Training Program_
            </p>
          </div>

          {/* Course Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <TerminalBox className="p-8">
              <div className="pl-8">
                <h3 className="font-mono text-2xl text-cyber-green mb-6">$ cat course_info.txt</h3>
                <div className="space-y-4 text-gray-300">
                  <p><span className="text-cyber-green">Duration:</span> 4-5 months intensive</p>
                  <p><span className="text-cyber-green">Schedule:</span> Weekends (Sat & Sun)</p>
                  <p><span className="text-cyber-green">Location:</span> Lahore, Pakistan</p>
                  <p><span className="text-cyber-green">Start Date:</span> September 2025</p>
                  <p><span className="text-cyber-green">Format:</span> In-person training</p>
                  <p><span className="text-cyber-green">Certification:</span> Practical hacking exam</p>
                </div>
              </div>
            </TerminalBox>

            <TerminalBox className="p-8">
              <div className="pl-8">
                <h3 className="font-mono text-2xl text-cyber-green mb-6">$ cat pricing.txt</h3>
                <div className="space-y-4">
                  <div className="border-b border-cyber-green/30 pb-4">
                    <p className="text-xl font-mono text-white" data-testid="text-full-course">Full Course Payment</p>
                    <p className="text-3xl font-bold text-cyber-green" data-testid="price-full-course">PKR 90,000</p>
                    <p className="text-sm text-gray-400">One-time payment</p>
                  </div>
                  <div>
                    <p className="text-lg font-mono text-white" data-testid="text-per-module">Pay Per Module</p>
                    <p className="text-2xl font-bold text-cyber-green-bright" data-testid="price-per-module">PKR 20,000</p>
                    <p className="text-sm text-gray-400">Per module (5 modules total)</p>
                  </div>
                </div>
              </div>
            </TerminalBox>
          </div>

          {/* Course Modules */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold font-mono text-center mb-12">
              <span className="text-cyber-green">[</span> Course Modules <span className="text-cyber-green">]</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Module 1 */}
              <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 group">
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-cyber-green">Module 01</span>
                    <span className="font-mono text-sm text-cyber-green-bright">PKR 20K</span>
                  </div>
                  <h4 className="font-mono text-lg mb-2 group-hover:text-cyber-green transition-colors" data-testid="module-1-title">Pre-Security</h4>
                  <p className="text-gray-400 text-sm">Foundation concepts and security principles</p>
                </div>
              </TerminalBox>

              {/* Module 2 */}
              <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 group">
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-cyber-green">Module 02</span>
                    <span className="font-mono text-sm text-cyber-green-bright">PKR 20K</span>
                  </div>
                  <h4 className="font-mono text-lg mb-2 group-hover:text-cyber-green transition-colors" data-testid="module-2-title">Reconnaissance</h4>
                  <p className="text-gray-400 text-sm">Information gathering techniques</p>
                </div>
              </TerminalBox>

              {/* Module 3 */}
              <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 group">
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-cyber-green">Module 03</span>
                    <span className="font-mono text-sm text-cyber-green-bright">PKR 20K</span>
                  </div>
                  <h4 className="font-mono text-lg mb-2 group-hover:text-cyber-green transition-colors" data-testid="module-3-title">Exploitation</h4>
                  <p className="text-gray-400 text-sm">Vulnerability exploitation methods</p>
                </div>
              </TerminalBox>

              {/* Module 4 */}
              <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 group">
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-cyber-green">Module 04</span>
                    <span className="font-mono text-sm text-cyber-green-bright">PKR 20K</span>
                  </div>
                  <h4 className="font-mono text-lg mb-2 group-hover:text-cyber-green transition-colors" data-testid="module-4-title">Privilege Escalation</h4>
                  <p className="text-gray-400 text-sm">Pivoting and lateral movement</p>
                </div>
              </TerminalBox>

              {/* Module 5 */}
              <TerminalBox className="p-6 hover:border-cyber-green-bright transition-all duration-300 group">
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-cyber-green">Module 05</span>
                    <span className="font-mono text-sm text-cyber-green-bright">PKR 20K</span>
                  </div>
                  <h4 className="font-mono text-lg mb-2 group-hover:text-cyber-green transition-colors" data-testid="module-5-title">Active Directory</h4>
                  <p className="text-gray-400 text-sm">AD penetration testing</p>
                </div>
              </TerminalBox>
            </div>
          </div>

          {/* Prerequisites */}
          <TerminalBox className="p-8 max-w-4xl mx-auto">
            <div className="pl-8">
              <h3 className="font-mono text-2xl text-cyber-green mb-6">$ cat prerequisites.txt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-lg text-cyber-green-bright mb-4" data-testid="heading-hardware-requirements">Hardware Requirements:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 4th Gen+ Processor</li>
                    <li>• 8GB+ RAM</li>
                    <li>• 150GB+ free storage</li>
                    <li>• Personal laptop required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-lg text-cyber-green-bright mb-4" data-testid="heading-mindset-requirements">Mindset Requirements:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Learning attitude</li>
                    <li>• Problem-solving mindset</li>
                    <li>• Computer curiosity</li>
                    <li>• Motivation to excel</li>
                  </ul>
                </div>
              </div>
            </div>
          </TerminalBox>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-mono mb-4" data-testid="heading-contact">
              <span className="text-cyber-green">[</span>
              Initialize Contact
              <span className="text-cyber-green">]</span>
            </h2>
            <p className="text-xl font-mono text-cyber-green-bright">
              &gt; Ready to start your cybersecurity journey?_
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <TerminalBox className="p-8">
              <div className="pl-8">
                <h3 className="font-mono text-2xl text-cyber-green mb-8">$ cat contact_info.txt</h3>
                
                <div className="space-y-6">
                  <div className="border-b border-cyber-green/30 pb-6">
                    <h4 className="font-mono text-lg text-cyber-green-bright mb-4">Primary Contact:</h4>
                    <div className="flex items-center space-x-4 text-white">
                      <i className="fab fa-whatsapp text-2xl text-cyber-green"></i>
                      <div>
                        <p className="font-mono text-lg" data-testid="text-contact-name">Daniyal Ahmed</p>
                        <a href="https://wa.me/923006212226" className="font-mono text-cyber-green hover:text-cyber-green-bright transition-colors" data-testid="link-whatsapp">
                          +92 300 621 2226
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-cyber-green/30 pb-6">
                    <h4 className="font-mono text-lg text-cyber-green-bright mb-4">Academy Location:</h4>
                    <p className="text-white" data-testid="text-location">
                      <i className="fas fa-map-marker-alt text-cyber-green mr-2"></i>
                      Lahore, Pakistan
                    </p>
                    <p className="text-gray-400 mt-2">
                      Physical academy address to be announced
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-lg text-cyber-green-bright mb-4">Quick Actions:</h4>
                    <div className="space-y-3">
                      <Button
                        onClick={openWhatsApp}
                        className="block w-full bg-cyber-green/20 border border-cyber-green px-6 py-3 font-mono text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300"
                        data-testid="button-whatsapp"
                      >
                        $ ./send_whatsapp_message.sh
                      </Button>
                      <Button
                        onClick={() => copyToClipboard('+923006212226')}
                        className="block w-full bg-cyber-green-dark/20 border border-cyber-green-bright px-6 py-3 font-mono text-cyber-green-bright hover:bg-cyber-green-bright hover:text-black transition-all duration-300"
                        data-testid="button-copy-phone"
                      >
                        $ ./copy_phone_number.sh
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TerminalBox>

            {/* Inquiry Form */}
            <TerminalBox className="p-8">
              <div className="pl-8">
                <h3 className="font-mono text-2xl text-cyber-green mb-8">$ nano inquiry_form.txt</h3>
                <ContactForm />
              </div>
            </TerminalBox>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <TerminalBox className="p-8 max-w-2xl mx-auto">
              <div className="pl-8">
                <h3 className="font-mono text-2xl text-cyber-green mb-4">$ ./join_academy.sh</h3>
                <p className="text-lg text-gray-300 mb-6" data-testid="text-join-message">
                  Don't let theoretical knowledge limit your potential. Join Pakistan's premier hands-on cybersecurity academy.
                </p>
                <div className="space-y-4">
                  <p className="font-mono text-cyber-green-bright" data-testid="text-schedule-info">
                    &gt; September 2025 | Weekend Classes | Lahore
                  </p>
                  <p className="font-mono text-sm text-gray-400">
                    Limited seats available for quality assurance
                  </p>
                </div>
              </div>
            </TerminalBox>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyber-green/30 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="font-mono text-cyber-green mb-2" data-testid="text-footer-title">
              [Daemons Academy] - Daemonstrating Cyber Security
            </p>
            <p className="text-gray-400 text-sm" data-testid="text-footer-copyright">
              © 2024 Daemons Academy. Empowering the next generation of cybersecurity professionals.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://wa.me/923006212226" className="text-cyber-green hover:text-cyber-green-bright transition-colors" data-testid="link-footer-whatsapp">
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
