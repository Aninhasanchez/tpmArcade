import React from 'react';

export default function TpmArcadeDashboard() {
  return (
    // Container principal da tela, com fundo cinza claro e fonte Inter.
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
      {/* Header fixo no topo da página com fundo azul escuro */}
      <header className="bg-[#0D3A6D] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Logo do TPM Arcade */}
          <div className="bg-white text-[#0D3A6D] font-extrabold text-xl px-3 py-1 rounded-lg shadow-md">B</div>
          <h1 className="text-2xl font-bold tracking-wide">TPM Arcade</h1>
        </div>
        
        {/* Navegação e perfil do usuário */}
        <div className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Início</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Treinamentos</a>
          
          <div className="flex items-center space-x-2">
            <div className="bg-white text-[#0D3A6D] font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-md">JS</div>
            <div className="text-right">
              <div className="font-semibold text-lg">João Silva</div>
              <div className="text-sm text-gray-300">Mat: 123456</div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal com padding e largura máxima */}
      <main className="p-8 max-w-7xl mx-auto">
        {/* Seção de Boas-vindas com fundo azul e bordas arredondadas */}
        <div className="bg-[#0D3A6D] text-white p-8 rounded-2xl mb-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-2">Bem-vindo ao TPM Arcade</h2>
          <p className="max-w-2xl text-gray-200 mb-6 leading-relaxed">
            Uma plataforma de treinamentos em Total Productive Maintenance (TPM). Desenvolva suas habilidades através de conteúdos interativos e conquiste certificações.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#0D3A6D] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200">
              Explorar Treinamentos
            </button>
            <button className="border border-white text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-[#0D3A6D] transition-colors duration-200">
              Continuar Último
            </button>
          </div>
        </div>

        {/* Seção de Métricas em um grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between transition-transform duration-200 hover:scale-105">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Progresso Geral</span>
              <span className="text-4xl font-bold text-[#0D3A6D]">68%</span>
            </div>
            <div className="text-gray-400">
              {/* Ícone de progresso (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.2 8.4V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.4"></path>
                <path d="M12.4 17a2 2 0 0 0 2 2h3.2a2 2 0 0 0 2-2V8.4"></path>
                <rect x="2" y="2" width="20" height="6" rx="2"></rect>
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between transition-transform duration-200 hover:scale-105">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Conquistas</span>
              <span className="text-4xl font-bold text-[#0D3A6D]">12</span>
            </div>
            <div className="text-gray-400">
              {/* Ícone de conquista (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z"></path>
                <path d="M12 2v2"></path>
                <path d="M22 12h-2"></path>
                <path d="M4 12H2"></path>
                <path d="M12 22v-2"></path>
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between transition-transform duration-200 hover:scale-105">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Horas Estudadas</span>
              <span className="text-4xl font-bold text-[#0D3A6D]">24h</span>
            </div>
            <div className="text-gray-400">
              {/* Ícone de horas (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between transition-transform duration-200 hover:scale-105">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Posição Ranking</span>
              <span className="text-4xl font-bold text-[#0D3A6D]">#23</span>
            </div>
            <div className="text-gray-400">
              {/* Ícone de ranking (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a3 3 0 0 0-3.1-3H8.1a3 3 0 0 0-3.1 3v8a3 3 0 0 0 3.1 3h6.8a3 3 0 0 0 3.1-3V8z"></path>
                <circle cx="12" cy="13" r="1.5"></circle>
                <path d="M12 8v5"></path>
                <line x1="8" y1="18" x2="16" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>

        {/* Seções de Treinamentos em Destaque e Últimos Acessados, em um grid de 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seção de Treinamentos em Destaque */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Treinamentos em Destaque</h3>
              <a href="#" className="text-[#0D3A6D] hover:underline">Ver todos</a>
            </div>
            <div className="space-y-4">
              {/* Card de treinamento 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-6 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold">Ciclo PDCA</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">Metodologia</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">Intermediário</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Aprenda a aplicar o ciclo Plan-Do-Check-Act para melhoria contínua.</p>
                  <div className="text-xs text-gray-500 mb-2">
                    <span>45 min</span> | <span>234 participantes</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-[#0D3A6D] h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
                <button className="bg-[#0D3A6D] text-white font-semibold px-6 py-2 rounded-full self-center hover:bg-[#0B2C5A] transition-colors duration-200">
                  Continuar
                </button>
              </div>
              
              {/* Card de treinamento 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-6 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold">5S na Prática</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">Organização</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">Básico</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Metodologia japonesa para organização e produtividade no ambiente de trabalho.</p>
                  <div className="text-xs text-gray-500 mb-2">
                    <span>30 min</span> | <span>189 participantes</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-[#0D3A6D] h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
                <button className="bg-[#0D3A6D] text-white font-semibold px-6 py-2 rounded-full self-center hover:bg-[#0B2C5A] transition-colors duration-200">
                  Iniciar
                </button>
              </div>

              {/* Card de treinamento 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-6 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold">Lubrificação Industrial</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">Manutenção</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">Avançado</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Técnicas avançadas de lubrificação para equipamentos industriais.</p>
                  <div className="text-xs text-gray-500 mb-2">
                    <span>50 min</span> | <span>156 participantes</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-[#0D3A6D] h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
                <button className="bg-[#0D3A6D] text-white font-semibold px-6 py-2 rounded-full self-center hover:bg-[#0B2C5A] transition-colors duration-200">
                  Continuar
                </button>
              </div>
            </div>
          </div>
          
          {/* Seção de Acessos e Conquistas */}
          <div>
            {/* Últimos Acessados */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Últimos Acessados</h3>
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">Ciclo PDCA</span>
                    <span className="text-xs text-gray-500">Há 2 dias</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded-full">
                    <div className="bg-[#0D3A6D] h-1 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
                {/* Item 2 */}
                <div className="hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">Análise de Falhas</span>
                    <span className="text-xs text-gray-500">Há 1 semana</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded-full">
                    <div className="bg-[#0D3A6D] h-1 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
                {/* Item 3 */}
                <div className="hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">TPM Pilar Autônomo</span>
                    <span className="text-xs text-gray-500">Há 2 semanas</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded-full">
                    <div className="bg-[#0D3A6D] h-1 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Progresso</span>
                </div>
              </div>
            </div>

            {/* Conquistas Recentes */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conquistas Recentes</h3>
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="bg-[#E9F0FD] text-[#0D3A6D] p-3 rounded-xl shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l-2 5h-6l5 3-2 5 5-3 5 3-2-5 5-3h-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Expert em 5S</div>
                    <div className="text-xs text-gray-500">Há 3 dias</div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="bg-[#E9F0FD] text-[#0D3A6D] p-3 rounded-xl shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l-2 5h-6l5 3-2 5 5-3 5 3-2-5 5-3h-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Primeiro Treinamento</div>
                    <div className="text-xs text-gray-500">Há 1 semana</div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                  <div className="bg-[#E9F0FD] text-[#0D3A6D] p-3 rounded-xl shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l-2 5h-6l5 3-2 5 5-3 5 3-2-5 5-3h-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Estudioso</div>
                    <div className="text-xs text-gray-500">Há 2 semanas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
