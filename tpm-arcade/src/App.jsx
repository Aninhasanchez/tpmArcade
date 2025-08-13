import React from 'react';

export default function TpmArcadeDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
      {/* Header */}
      <header className="bg-[#0D3A6D] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="bg-white text-[#0D3A6D] font-extrabold text-xl px-3 py-1 rounded-lg shadow-md">B</div>
          <h1 className="text-2xl font-bold tracking-wide">TPM Arcade</h1>
        </div>
        <div className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors">Início</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Treinamentos</a>
          <div className="flex items-center space-x-2">
            <div className="bg-white text-[#0D3A6D] font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-md">JS</div>
            <div className="text-right">
              <div className="font-semibold text-lg">João Silva</div>
              <div className="text-sm text-gray-300">Mat: 123456</div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Boas-vindas */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-2 text-[#0D3A6D]">Bem-vindo ao TPM Arcade</h2>
          <p className="max-w-2xl text-gray-600 mb-6">
            Uma plataforma de treinamentos em Total Productive Maintenance (TPM). Desenvolva suas habilidades através de conteúdos interativos e conquiste certificações.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0D3A6D] text-white font-bold px-6 py-3 rounded-full shadow hover:bg-[#0B2C5A] transition-colors">
              Explorar Treinamentos
            </button>
            <button className="border border-[#0D3A6D] text-[#0D3A6D] font-bold px-6 py-3 rounded-full hover:bg-[#0D3A6D] hover:text-white transition-colors">
              Continuar Último
            </button>
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Progresso Geral', value: '68%' },
            { label: 'Conquistas', value: '12' },
            { label: 'Horas Estudadas', value: '24h' },
            { label: 'Posição Ranking', value: '#23' }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm text-gray-500 font-semibold">{item.label}</span>
              <span className="block text-4xl font-bold text-[#0D3A6D] mt-1">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Treinamentos e Lateral */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Treinamentos em Destaque</h3>
              <a href="#" className="text-[#0D3A6D] hover:underline">Ver todos</a>
            </div>
            <div className="space-y-4">
              {/* Cards de Treinamento */}
              {[
                { title: 'Ciclo PDCA', tag1: 'Metodologia', tag2: 'Intermediário', progress: '75%' },
                { title: '5S na Prática', tag1: 'Organização', tag2: 'Básico', progress: '0%' },
                { title: 'Lubrificação Industrial', tag1: 'Manutenção', tag2: 'Avançado', progress: '100%' }
              ].map((t, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold">{t.title}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">{t.tag1}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">{t.tag2}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-1">
                    <div className="bg-[#0D3A6D] h-2 rounded-full" style={{ width: t.progress }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Progresso</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lateral */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Últimos Acessados</h3>
              {/* ... conteúdo igual ao original ... */}
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conquistas Recentes</h3>
              {/* ... conteúdo igual ao original ... */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
