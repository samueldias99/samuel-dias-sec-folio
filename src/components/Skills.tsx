import { Terminal, Network, Code, GitBranch, Shield, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    {
      name: 'Linux',
      level: 80,
      icon: Terminal,
      description: 'Administração de sistemas, linha de comando, shell scripting',
      color: 'cyber-blue'
    },
    {
      name: 'Python',
      level: 75,
      icon: Code,
      description: 'Automação, scripts de segurança, análise de dados',
      color: 'cyber-green'
    },
    {
      name: 'Fundamentos de Redes',
      level: 70,
      icon: Network,
      description: 'TCP/IP, protocolos, análise de tráfego, configuração',
      color: 'cyber-purple'
    },
    {
      name: 'Git & GitHub',
      level: 85,
      icon: GitBranch,
      description: 'Controle de versão, colaboração, repositórios',
      color: 'cyber-orange'
    },
    {
      name: 'Nmap',
      level: 65,
      icon: Search,
      description: 'Descoberta de rede, escaneamento de portas',
      color: 'cyber-blue'
    },
    {
      name: 'Wireshark',
      level: 60,
      icon: Shield,
      description: 'Análise de protocolos, captura de tráfego',
      color: 'cyber-green'
    },
  ];

  const tools = [
    'Metasploit', 'Burp Suite', 'John the Ripper', 'Hashcat', 
    'Aircrack-ng', 'Netcat', 'Sqlmap', 'Gobuster'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Hard Skills</span>
            </h2>
            <p className="text-muted-foreground">
              Competências técnicas desenvolvidas através de estudos e prática
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:cyber-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Proficiência</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tools */}
          <Card className="cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Ferramentas Adicionais
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool}
                    className="bg-muted/50 rounded-lg p-3 text-center text-sm hover:bg-muted transition-colors"
                  >
                    <span className="font-mono">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Próximos Objetivos</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['CISSP', 'CEH', 'OSCP', 'Cloud Security', 'Forensics'].map((goal) => (
                <span 
                  key={goal}
                  className="px-4 py-2 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/10 transition-colors"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;