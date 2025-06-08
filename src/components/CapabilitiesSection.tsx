
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  BookOpen, 
  Globe, 
  Code, 
  Music, 
  Camera,
  Calendar,
  Mail,
  FileText,
  PieChart,
  Languages,
  Lightbulb
} from 'lucide-react';

const capabilities = [
  {
    category: 'Produtividade',
    icon: FileText,
    items: [
      'Criação e edição de documentos',
      'Organização de tarefas e agenda',
      'Análise de dados e relatórios',
      'Gestão de emails e comunicação'
    ]
  },
  {
    category: 'Educação',
    icon: BookOpen,
    items: [
      'Explicações de conceitos complexos',
      'Ajuda com lições de casa',
      'Preparação para provas',
      'Pesquisas acadêmicas'
    ]
  },
  {
    category: 'Tecnologia',
    icon: Code,
    items: [
      'Programação e debugging',
      'Análise de código',
      'Soluções técnicas',
      'Automação de processos'
    ]
  },
  {
    category: 'Idiomas',
    icon: Languages,
    items: [
      'Tradução em tempo real',
      'Ensino de idiomas',
      'Correção gramatical',
      'Prática de conversação'
    ]
  },
  {
    category: 'Criatividade',
    icon: Lightbulb,
    items: [
      'Brainstorming de ideias',
      'Criação de conteúdo',
      'Roteiros e histórias',
      'Design e arte conceitual'
    ]
  },
  {
    category: 'Análise',
    icon: PieChart,
    items: [
      'Interpretação de dados',
      'Insights de negócio',
      'Relatórios detalhados',
      'Tendências e padrões'
    ]
  }
];

const CapabilitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que posso fazer por{' '}
            <span className="bg-gradient-axel bg-clip-text text-transparent">
              você?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minhas capacidades são vastas e estão em constante evolução. 
            Aqui estão algumas das principais áreas onde posso te ajudar.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gray-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-axel rounded-full group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {capability.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start text-gray-600"
                    >
                      <div className="w-2 h-2 bg-gradient-axel rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            E isso é só o começo! Posso me adaptar às suas necessidades específicas.
          </p>
          <button className="bg-gradient-axel text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
