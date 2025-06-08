
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/60 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/60 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse-glow"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="animate-float">
            <Logo className="w-24 h-24 md:w-32 md:h-32" />
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Olá, sou o{' '}
          <span className="bg-gradient-axel bg-clip-text text-transparent">
            Axel AI
          </span>
          ,<br />
          seu assistente virtual!
        </h1>
        
        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Estou aqui para facilitar sua vida e te ajudar com o que for preciso. 
          Quer saber mais sobre como posso te ajudar ou já quer começar a experimentar?
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-axel hover:opacity-90 text-white border-0 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Sobre
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Experimentar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
