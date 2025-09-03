import { FolderOpen, ExternalLink, Github, Terminal, Network, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Laboratório de Fundamentos Linux',
      description: 'Projeto prático desenvolvido para consolidar conhecimentos em administração de sistemas Linux, incluindo configuração de serviços, gerenciamento de usuários e automação de tarefas.',
      type: 'Projeto Acadêmico',
      icon: Terminal,
      skills: ['Linux', 'Shell Scripting', 'Administração de Sistema', 'Automação'],
      achievements: [
        'Configuração completa de servidor Linux',
        'Scripts de automação para backup',
        'Implementação de políticas de segurança',
        'Monitoramento de sistema'
      ],
      status: 'Concluído',
      color: 'cyber-blue'
    },
    {
      title: 'Análise de Vulnerabilidades Web',
      description: 'Laboratório prático usando OWASP WebGoat para identificar e explorar vulnerabilidades comuns em aplicações web, seguindo metodologias de ethical hacking.',
      type: 'Laboratório Prático',
      icon: Shield,
      skills: ['Web Security', 'OWASP', 'Burp Suite', 'SQL Injection'],
      achievements: [
        'Identificação de 15+ vulnerabilidades',
        'Relatórios detalhados de segurança',
        'Implementação de contramedidas',
        'Documentação técnica completa'
      ],
      status: 'Em Desenvolvimento',
      color: 'cyber-green'
    },
    {
      title: 'Scanner de Rede Personalizado',
      description: 'Ferramenta desenvolvida em Python para descoberta e análise de dispositivos em rede local, com funcionalidades de identificação de serviços e detecção de vulnerabilidades básicas.',
      type: 'Projeto Pessoal',
      icon: Network,
      skills: ['Python', 'Networking', 'Nmap', 'Socket Programming'],
      achievements: [
        'Interface CLI intuitiva',
        'Relatórios em múltiplos formatos',
        'Integração com APIs de threat intelligence',
        'Código open source no GitHub'
      ],
      status: 'Planejado',
      color: 'cyber-purple'
    }
  ];

  const futureProjects = [
    'Sistema de Detecção de Intrusão (IDS)',
    'Honeypot para Análise de Ataques',
    'Dashboard de Monitoramento de Segurança',
    'Automação de Testes de Penetração'
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-muted-foreground">
              Experiências práticas e projetos desenvolvidos em cibersegurança
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 mb-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <project.icon className={`w-8 h-8 text-${project.color}`} />
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Concluído' ? 'default' : 
                               project.status === 'Em Desenvolvimento' ? 'secondary' : 'outline'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Skills Used */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Principais Realizações:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.status === 'Concluído' && (
                      <>
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Ver Código
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Documentação
                        </Button>
                      </>
                    )}
                    {project.status === 'Em Desenvolvimento' && (
                      <Button size="sm" variant="outline">
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Acompanhar Progresso
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Projects */}
          <Card className="cyber-glow">
            <CardHeader>
              <CardTitle className="text-center">Futuros Projetos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {futureProjects.map((project, index) => (
                  <div 
                    key={project}
                    className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">{project}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Sempre buscando novos desafios e oportunidades de aprendizado
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;