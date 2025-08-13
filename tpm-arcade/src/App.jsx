import React from 'react';

export default function CicloPDCA() {
  // Ícones SVG para substituir os ícones do Lucide-React que causaram o erro de importação.
  const PlayCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  );

  const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  );

  const MessageSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );

  return (
    // Container principal da tela
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-gray-800 antialiased">
      {/* Header fixo no topo da página */}
      <header className="bg-[#0D3A6D] text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="bg-white text-[#0D3A6D] font-extrabold text-xl px-3 py-1 rounded-lg">B</div>
          <h1 className="text-2xl font-bold tracking-wide">TPM Arcade</h1>
        </div>
        
        {/* Navegação e perfil do usuário */}
        <div className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Início</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Treinamentos</a>
          <div className="ml-4 text-right">
            <div className="font-semibold text-lg">João Silva</div>
            <div className="text-sm text-gray-300">Mat: 123456</div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal e barra lateral */}
      <main className="p-8 flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Seção de conteúdo principal */}
        <div className="flex-1">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            
            {/* Título e nível do curso */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-[#0D3A6D]">Ciclo PDCA</h2>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Intermediário</span>
            </div>
            
            {/* Descrição do curso */}
            <p className="mb-4 text-gray-600 leading-relaxed">
              Aprenda a aplicar o ciclo Plan-Do-Check-Act para melhoria contínua dos processos industriais, uma metodologia fundamental para o TPM.
            </p>
            
            {/* Barra de progresso */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0D3A6D] h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 block">75% concluído</span>
            </div>
            
            {/* Tabs de navegação */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button className="flex items-center gap-2 pb-3 border-b-2 border-[#0D3A6D] text-[#0D3A6D] font-semibold transition-colors duration-200">
                <PlayCircleIcon /> Jogo Interativo
              </button>
              <button className="flex items-center gap-2 pb-3 text-gray-500 hover:text-[#0D3A6D] transition-colors duration-200">
                <BookOpenIcon /> Material de Apoio
              </button>
              <button className="flex items-center gap-2 pb-3 text-gray-500 hover:text-[#0D3A6D] transition-colors duration-200">
                <MessageSquareIcon /> Discussão
              </button>
            </div>
            
            {/* Seção de Simulação */}
            <div className="border border-gray-300 bg-gray-50 rounded-xl p-6 mb-6 shadow-inner">
              <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg mb-4">
                <button className="bg-[#0D3A6D] text-white px-6 py-3 rounded-full text-lg font-bold shadow-md hover:bg-[#0B2C5A] transition-colors duration-200">
                  Iniciar Simulação
                </button>
              </div>
              
              {/* Controles da simulação */}
              <div className="flex gap-3 items-center flex-wrap">
                <button className="px-4 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
                  Iniciar
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
                  Pausar
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
                  Reiniciar
                </button>
                <span className="ml-auto text-gray-500 text-sm md:text-base">Tempo restante: 15:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra lateral */}
        <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
          
          {/* Objetivos de Aprendizagem */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 border-b pb-2 border-gray-200">Objetivos de Aprendizagem</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Compreender os fundamentos do ciclo PDCA</li>
              <li>Aplicar cada etapa do ciclo em situações práticas</li>
              <li>Identificar oportunidades de melhoria contínua</li>
              <li>Desenvolver planos de ação eficazes</li>
            </ul>
          </div>
          
          {/* Módulos do Curso */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 border-b pb-2 border-gray-200">Módulos do Curso</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex justify-between items-center">
                <span>Introdução ao PDCA</span>
                <span className="text-sm font-medium">10 min</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Plan - Planejamento</span>
                <span className="text-sm font-medium">15 min</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Do - Execução</span>
                <span className="text-sm font-medium">10 min</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Check - Verificação</span>
                <span className="text-sm font-medium">8 min</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Act - Ação</span>
                <span className="text-sm font-medium">12 min</span>
              </li>
            </ul>
          </div>
          
          {/* Tags */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 border-b pb-2 border-gray-200">Tags</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">LPP</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Qualidade</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Melhoria Contínua</span>
            </div>
          </div>
          
          {/* Botões da barra lateral */}
          <div className="flex flex-col gap-4">
            <button className="bg-[#0D3A6D] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#0B2C5A] transition-colors duration-200">
              Continuar Treinamento
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200">
              Ver Material
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200">
              Enviar Feedback
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
