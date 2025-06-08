
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, User } from 'lucide-react';

const ExperienceSection = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Olá! 👋 Sou o Axel AI. Como posso te ajudar hoje?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    'Como você pode me ajudar?',
    'Quais são suas principais funcionalidades?',
    'Pode me ajudar com programação?',
    'Como funciona sua inteligência artificial?'
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: message }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (message.toLowerCase().includes('ajudar')) {
        response = 'Posso te ajudar com uma grande variedade de tarefas! Desde responder perguntas, ajudar com trabalhos, programação, análise de dados, criação de conteúdo e muito mais. O que você gostaria de fazer?';
      } else if (message.toLowerCase().includes('funcionalidades')) {
        response = 'Minhas principais funcionalidades incluem: conversação natural, análise de texto, programação, traduções, criação de conteúdo, resolução de problemas matemáticos e muito mais. Estou sempre aprendendo!';
      } else if (message.toLowerCase().includes('programação')) {
        response = 'Claro! Posso te ajudar com programação em várias linguagens como Python, JavaScript, Java, C++, e muitas outras. Posso explicar conceitos, revisar código, encontrar bugs e sugerir melhorias. Qual linguagem você está usando?';
      } else if (message.toLowerCase().includes('inteligência artificial')) {
        response = 'Sou baseado em um modelo de linguagem avançado que me permite entender e gerar texto de forma natural. Fui treinado em uma vasta quantidade de dados para poder ajudar com diversas tarefas. É como ter um assistente que nunca dorme! 🤖';
      } else {
        response = 'Interessante! Conte-me mais sobre isso. Estou aqui para ajudar com qualquer dúvida ou tarefa que você tenha.';
      }
      
      setMessages(prev => [...prev, { type: 'ai', content: response }]);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experimente o{' '}
            <span className="bg-gradient-axel bg-clip-text text-transparent">
              Axel AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Teste minhas capacidades agora mesmo! Faça uma pergunta ou use uma das sugestões abaixo.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-gray-600">
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs md:max-w-md lg:max-w-lg ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-gradient-axel' : 'bg-gray-600'}`}>
                        {message.type === 'user' ? 
                          <User className="w-4 h-4 text-white" /> : 
                          <MessageSquare className="w-4 h-4 text-white" />
                        }
                      </div>
                      <div className={`p-4 rounded-lg ${message.type === 'user' ? 'bg-gradient-axel text-white' : 'bg-gray-700 text-gray-100'}`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-600 p-6">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button 
                    onClick={() => handleSendMessage(inputValue)}
                    className="bg-gradient-axel hover:opacity-90 px-6"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Questions */}
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-3">Perguntas rápidas:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="text-xs bg-gray-700 text-gray-300 px-3 py-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
