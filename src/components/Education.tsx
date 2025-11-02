import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CertificateCard from './CertificateCard';

const Education = () => {
  const education = [
    {
      title: 'Segurança Cibernética',
      institution: 'Uniasselvi',
      type: 'Graduação Tecnológica',
      status: 'Em Andamento',
      period: '2025 - 2027',
      description: 'Iniciei a graduação em 31 de julho de 2025, com foco em redes de computadores, programação, segurança da informação, computação em nuvem, governança de TI e gestão de projetos. O curso também abrange ethical hacking, engenharia reversa, análise de malware e perícia digital, preparando para atuar na proteção de sistemas, prevenção de ataques cibernéticos e defesa de ambientes tecnológicos.',
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
      color: 'cyber-green',
      imageUrl: '/certificados/redesseginfo.jpg',
      linkUrl: '/certificados/redesseginfo.jpg'
    },
    {
      title: 'Python para Hackers',
      platform: 'Udemy',
      instructor: 'Especialista em Ethical Hacking',
      duration: '60 horas',
      status: 'Em Andamento',
      description: 'Desenvolvimento de ferramentas de segurança, automação de testes de penetração e análise de vulnerabilidades usando Python.',
      skills: ['Python', 'Ethical Hacking', 'Automação', 'Web Scraping', 'Network Programming'],
      icon: BookOpen,
      color: 'cyber-purple',
  imageUrl: '/certificados/pythonparahackers.png',
  linkUrl: '/certificados/pythonparahackers.png'
    }
  ];

  const certifications = [
    {
      title: 'Bootcamp Santander Cibersegurança 2025',
      institution: 'DIO',
      hours: 40,
      date: '2025',
      description: 'Programa intensivo de cibersegurança oferecido pelo Santander em parceria com a DIO, focado em hacking ético, testes de invasão e engenharia social para desenvolver habilidades estratégicas e fortalecer a segurança de sistemas.',
  imageUrl: '/certificados/certificadocyber2025.png',
  linkUrl: '/certificados/certificadocyber2025.png'
    },
    {
      title: 'Formação GitHub Certification',
      institution: 'DIO',
      hours: 8,
      date: '2025',
      description: 'Formação focada no domínio do ecossistema Git e GitHub, capacitando profissionais em controle de versão, colaboração e administração de projetos. Habilidades desenvolvidas incluem gerenciamento de repositórios, workflows colaborativos, code reviews e práticas DevOps modernas.',
  imageUrl: '/certificados/certificadogithub.png',
  linkUrl: '/certificados/certificadogithub.png'
    }
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
                <CertificateCard
                  key={course.title}
                  title={course.title}
                  institution={course.platform}
                  hours={parseInt(course.duration.split(' ')[0])}
                  date={course.status}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  linkUrl={course.linkUrl}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Certificações</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <CertificateCard
                  key={cert.title}
                  title={cert.title}
                  institution={cert.institution}
                  hours={cert.hours}
                  date={cert.date}
                  description={cert.description}
                  imageUrl={cert.imageUrl}
                  linkUrl={cert.linkUrl}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
