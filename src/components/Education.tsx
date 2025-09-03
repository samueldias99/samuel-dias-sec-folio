import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      title: 'Segurança Cibernética',
      institution: 'Uniasselvi',
      type: 'Graduação Tecnológica',
      status: 'Em Andamento',
      period: '2023 - 2025',
      description: 'Curso focado em análise de vulnerabilidades, gestão de riscos, implementação de políticas de segurança e resposta a incidentes.',
      icon: GraduationCap,
      color: 'cyber-blue'
    }
  ];

  const courses = [
    {
      title: 'Redes para Segurança da Informação',
      platform: 'Udemy',
      instructor: 'Instrutor Especializado',
      duration: '40 horas',
      status: 'Concluído',
      description: 'Fundamentos de redes TCP/IP, protocolos de segurança, análise de tráfego e configuração de firewalls.',
      skills: ['TCP/IP', 'Protocolos de Rede', 'Firewalls', 'VPN', 'Análise de Tráfego'],
      icon: BookOpen,
      color: 'cyber-green'
    },
    {
      title: 'Python para Hackers',
      platform: 'Udemy',
      instructor: 'Especialista em Ethical Hacking',
      duration: '60 horas',
      status: 'Concluído',
      description: 'Desenvolvimento de ferramentas de segurança, automação de testes de penetração e análise de vulnerabilidades usando Python.',
      skills: ['Python', 'Ethical Hacking', 'Automação', 'Web Scraping', 'Network Programming'],
      icon: BookOpen,
      color: 'cyber-purple'
    }
  ];

  const certifications = [
    { name: 'Python Essentials', provider: 'Cisco', year: '2024' },
    { name: 'Network Security', provider: 'Coursera', year: '2024' },
    { name: 'Linux Fundamentals', provider: 'Linux Professional Institute', year: '2023' }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Formação e Cursos</span>
            </h2>
            <p className="text-muted-foreground">
              Minha jornada educacional em cibersegurança e tecnologia
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Formação Acadêmica</h3>
            {education.map((edu, index) => (
              <Card key={edu.title} className="cyber-glow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <edu.icon className={`w-8 h-8 text-${edu.color}`} />
                      <div>
                        <CardTitle className="text-xl">{edu.title}</CardTitle>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{edu.status}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Cursos Especializados</h3>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <Card key={course.title} className="hover:cyber-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <course.icon className={`w-6 h-6 text-${course.color}`} />
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{course.platform}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge>{course.status}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">{course.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">Competências Desenvolvidas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Education;