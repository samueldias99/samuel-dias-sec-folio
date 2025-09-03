import { Mail, Github, Linkedin, MapPin, Copy, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText('samueldias84@proton.me');
    toast({
      title: "E-mail copiado!",
      description: "O endereço de e-mail foi copiado para a área de transferência.",
    });
  };

  const contactMethods = [
    {
      title: 'E-mail Profissional',
      value: 'samueldias84@proton.me',
      icon: Mail,
      action: copyEmail,
      actionText: 'Copiar E-mail',
      description: 'Resposta em até 24 horas',
      color: 'cyber-blue'
    },
    {
      title: 'GitHub',
      value: 'github.com/samueldias99',
      icon: Github,
      action: () => window.open('https://github.com/samueldias99', '_blank'),
      actionText: 'Visitar Perfil',
      description: 'Projetos e contribuições',
      color: 'cyber-green'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/samuel-dias48',
      icon: Linkedin,
      action: () => window.open('https://www.linkedin.com/in/samuel-dias48/', '_blank'),
      actionText: 'Conectar',
      description: 'Rede profissional',
      color: 'cyber-purple'
    }
  ];

  const availability = [
    'Estágios em Cibersegurança',
    'Projetos de Segurança da Informação',
    'Colaborações em Open Source',
    'Mentoria em Tecnologia'
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-muted-foreground">
              Vamos conversar sobre oportunidades em cibersegurança
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="hover:cyber-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <method.icon className={`w-12 h-12 text-${method.color} mx-auto mb-4`} />
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 font-mono break-all">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button 
                    size="sm" 
                    onClick={method.action}
                    className="w-full"
                  >
                    {method.title === 'E-mail Profissional' ? (
                      <Copy className="w-4 h-4 mr-2" />
                    ) : (
                      <ExternalLink className="w-4 h-4 mr-2" />
                    )}
                    {method.actionText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Card */}
          <Card className="cyber-glow mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Estou disponível para:
                  </h3>
                  <ul className="space-y-3">
                    {availability.map((item, index) => (
                      <li key={item} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center md:text-left">
                  <div className="mb-6">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">Localização</span>
                    </div>
                    <p className="font-semibold">Brasil - Remoto</p>
                  </div>

                  <Button 
                    size="lg" 
                    onClick={copyEmail}
                    className="pulse-glow"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-card/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Pronto para contribuir com a segurança da sua organização
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estudante dedicado em busca de uma oportunidade de estágio para aplicar 
              conhecimentos teóricos e desenvolver habilidades práticas em cibersegurança. 
              Vamos construir um futuro digital mais seguro juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={copyEmail}>
                Enviar E-mail
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://github.com/samueldias99', '_blank')}
              >
                Ver Projetos no GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;