import { MessageCircle, Lightbulb, Calendar, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SoftSkills = () => {
  const skills = [
    {
      title: 'Comunicação',
      description: 'Capacidade de explicar conceitos técnicos complexos de forma clara e acessível para diferentes públicos.',
      icon: MessageCircle,
      examples: [
        'Documentação técnica detalhada',
        'Apresentações de projetos',
        'Relatórios de vulnerabilidades',
        'Colaboração em equipe'
      ],
      color: 'cyber-blue'
    },
    {
      title: 'Resolução de Problemas',
      description: 'Abordagem analítica e criativa para identificar, analisar e resolver desafios de segurança.',
      icon: Lightbulb,
      examples: [
        'Análise de incidentes de segurança',
        'Troubleshooting de sistemas',
        'Otimização de processos',
        'Implementação de soluções inovadoras'
      ],
      color: 'cyber-green'
    },
    {
      title: 'Organização',
      description: 'Gestão eficiente de tarefas, projetos e tempo, mantendo alta qualidade nos entregáveis.',
      icon: Calendar,
      examples: [
        'Planejamento de projetos',
        'Documentação estruturada',
        'Gestão de prazos',
        'Priorização de atividades'
      ],
      color: 'cyber-purple'
    },
    {
      title: 'Comprometimento',
      description: 'Dedicação total aos objetivos, buscando sempre a excelência e melhoria contínua.',
      icon: Heart,
      examples: [
        'Aprendizado autodidata',
        'Participação em comunidades',
        'Atualização constante',
        'Ética profissional'
      ],
      color: 'cyber-orange'
    },
    {
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva, compartilhamento de conhecimento e contribuição para o sucesso coletivo.',
      icon: Users,
      examples: [
        'Projetos colaborativos',
        'Mentoria de colegas',
        'Code reviews',
        'Compartilhamento de conhecimento'
      ],
      color: 'cyber-blue'
    }
  ];

  return (
    <section id="soft-skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Soft Skills</span>
            </h2>
            <p className="text-muted-foreground">
              Competências comportamentais essenciais para o sucesso profissional
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={skill.title} className="hover:cyber-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className={`w-8 h-8 text-${skill.color}`} />
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Exemplos de Aplicação:</h4>
                    <ul className="space-y-2">
                      {skill.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Matrix */}
          <Card className="cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Matriz de Competências Comportamentais
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Competências Interpessoais</h4>
                  <div className="space-y-3">
                    {['Comunicação Efetiva', 'Trabalho em Equipe', 'Liderança', 'Empatia'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div 
                              key={level} 
                              className={`w-3 h-3 rounded-full ${
                                level <= 4 ? 'bg-primary' : 'bg-muted'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Competências Pessoais</h4>
                  <div className="space-y-3">
                    {['Autodisciplina', 'Adaptabilidade', 'Pensamento Crítico', 'Proatividade'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div 
                              key={level} 
                              className={`w-3 h-3 rounded-full ${
                                level <= 5 ? 'bg-accent' : 'bg-muted'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Development Goals */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Áreas de Desenvolvimento Contínuo</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Liderança Técnica', 'Public Speaking', 'Mentoring', 'Gestão de Projetos'].map((goal) => (
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

export default SoftSkills;