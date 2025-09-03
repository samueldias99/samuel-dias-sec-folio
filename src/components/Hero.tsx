import { useState, useEffect } from 'react';
import { Shield, Terminal, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Estudante de Cibersegurança';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-green/5" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyber-blue/10 blur-xl floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-cyber-green/10 blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <Shield className="w-12 h-12 text-cyber-blue floating-animation" />
            <Terminal className="w-12 h-12 text-cyber-green floating-animation" style={{ animationDelay: '1s' }} />
            <Lock className="w-12 h-12 text-cyber-purple floating-animation" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Samuel Dias</span>
            <br />
            <span className="text-foreground">da Rosa</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Em busca de uma oportunidade de estágio para desenvolver habilidades práticas 
            e contribuir ativamente para a cultura de segurança da informação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="cyber-glow pulse-glow"
            >
              Entre em Contato
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4">Tecnologias em foco:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Linux', 'Python', 'Redes', 'Git', 'Nmap', 'Wireshark'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;