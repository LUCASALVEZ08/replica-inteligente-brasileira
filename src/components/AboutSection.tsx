
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, Zap, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Inteligência Avançada',
    description: 'Powered by cutting-edge AI technology para entender e responder suas necessidades de forma inteligente.'
  },
  {
    icon: MessageSquare,
    title: 'Conversação Natural',
    description: 'Converse comigo como se fosse um amigo. Entendo contexto e mantenho conversas fluidas.'
  },
  {
    icon: Zap,
    title: 'Respostas Rápidas',
    description: 'Processamento instantâneo para te dar as respostas que você precisa sem demora.'
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Suas informações estão protegidas. Priorizo sua privacidade e segurança em todas as interações.'
  },
  {
    icon: Clock,
    title: 'Disponível 24/7',
    description: 'Estou sempre aqui quando você precisar, a qualquer hora do dia ou da noite.'
  },
  {
    icon: Users,
    title: 'Para Todos',
    description: 'Seja para trabalho, estudos ou diversão, posso me adaptar ao seu estilo e necessidades.'
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça o{' '}
            <span className="bg-gradient-axel bg-clip-text text-transparent">
              Axel AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um assistente virtual desenvolvido para tornar sua vida mais fácil e produtiva. 
            Com tecnologia de ponta, posso ajudar você em diversas tarefas do dia a dia.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card/70 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-axel rounded-full group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-axel rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experimente agora e descubra como posso transformar sua rotina 
              com soluções inteligentes e personalizadas.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
