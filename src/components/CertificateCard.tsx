import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, X } from 'lucide-react';

interface CertificateProps {
  title: string;
  institution: string;
  hours: number;
  date: string;
  description: string;
  imageUrl: string; // URL para a imagem/badge do certificado
  linkUrl: string; // URL de validação ou link para a imagem grande
}

const CertificateCard: React.FC<CertificateProps> = ({
  title,
  institution,
  hours,
  date,
  description,
  imageUrl,
  linkUrl,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card 
        className="cyber-glow hover:shadow-lg transition-all duration-300 group bg-card text-card-foreground border-border rounded-xl shadow-md p-6 md:p-8">
        <CardContent className="flex flex-col md:flex-row items-start gap-6">
          <div
            className="w-[300px] h-[200px] flex-shrink-0 bg-black/5 rounded-lg overflow-hidden cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
            role="button"
            aria-label={`Ver certificado ${title}`}
          >
            <img
              src={imageUrl}
              alt={`Certificado ${title}`}
              className="w-full h-full object-contain rounded-lg border border-border group-hover:border-cyan-500 transition-colors"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <CardTitle className="text-lg font-bold leading-tight group-hover:text-cyan-400 transition-colors mb-1">
                  {title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{institution}</p>
              </div>
              <Award className="w-6 h-6 text-cyan-500 flex-shrink-0 ml-4" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-xs">
                  {hours}h
                </Badge>
                <span className="text-muted-foreground">{date}</span>
              </div>
              <a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-block">
                <Badge variant="outline" className="text-xs">
                  Ver Certificado
                </Badge>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowModal(false)}>
          <div className="relative max-w-7xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full h-[90vh] bg-black/20 rounded-lg flex items-center justify-center">
              <img
                src={imageUrl}
                alt={`Certificado ${title}`}
                className="w-full h-full object-contain rounded-lg p-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
