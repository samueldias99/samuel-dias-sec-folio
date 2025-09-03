import { Heart, Code, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="font-mono font-bold text-lg gradient-text mb-2">
                {'<samuel.dev />'}
              </div>
              <p className="text-sm text-muted-foreground">
                Estudante de Cibersegurança
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <h3 className="font-semibold mb-3">Navegação</h3>
              <div className="space-y-1 text-sm">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mim
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Hard Skills
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-3">Contato</h3>
              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">samueldias84@proton.me</p>
                <div className="flex justify-center md:justify-end space-x-4 mt-3">
                  <a 
                    href="https://github.com/samueldias99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/samuel-dias48/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© {currentYear} Samuel Dias da Rosa</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Desenvolvido com</span>
                <Heart className="w-4 h-4 text-destructive" />
                <span>usando</span>
                <Code className="w-4 h-4 text-primary" />
                <span>e</span>
                <Shield className="w-4 h-4 text-accent" />
              </div>

              <div className="text-sm text-muted-foreground">
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;