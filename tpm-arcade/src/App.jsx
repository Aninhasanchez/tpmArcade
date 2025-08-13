import React from "react";

export default function CicloPDCA() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
  {/* Header */}
  <header className="bg-[#0D3A6D] text-white px-6 py-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <div className="bg-white text-[#0D3A6D] font-bold px-3 py-1 rounded">B</div>
      <h1 className="text-lg font-semibold">TPM Arcade</h1>
    </div>
    <div className="flex items-center space-x-4">
      <span>Início</span>
      <span>Treinamentos</span>
      <div className="ml-4 text-right">
        <div>João Silva</div>
        <div className="text-sm text-gray-300">Mat: 123456</div>
      </div>
    </div>
  </header>

  <main className="p-6 flex gap-6">
    {/* Conteúdo principal */}
    <div className="flex-1 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Ciclo PDCA</h2>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Intermediário</span>
      </div>
      <p className="mb-2 text-gray-700">
        Aprenda a aplicar o ciclo Plan-Do-Check-Act para melhoria contínua dos processos industriais, uma metodologia fundamental para o TPM.
      </p>
      <div className="mb-4">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="bg-[#0D3A6D] h-2 rounded-full" style={{ width: "75%" }}></div>
        </div>
        <span className="text-sm text-gray-500">75%</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b">
        <button className="pb-2 border-b-2 border-[#0D3A6D] font-semibold">Jogo Interativo</button>
        <button className="pb-2 text-gray-500">Material de Apoio</button>
        <button className="pb-2 text-gray-500">Discussão</button>
      </div>

      {/* Simulação */}
      <div className="border border-gray-300 rounded p-4 mb-4">
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded mb-4">
          <button className="bg-[#0D3A6D] text-white px-4 py-2 rounded hover:bg-[#0B2C5A]">
            Iniciar Simulação
          </button>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Iniciar</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Pausar</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Reiniciar</button>
          <span className="ml-auto text-gray-500">Tempo restante: 15:30</span>
        </div>
      </div>
    </div>

    {/* Barra lateral */}
    <aside className="w-72 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="font-bold mb-2">Objetivos de Aprendizagem</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Compreender os fundamentos do ciclo PDCA</li>
          <li>Aplicar cada etapa do ciclo em situações práticas</li>
          <li>Identificar oportunidades de melhoria contínua</li>
          <li>Desenvolver planos de ação eficazes</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="font-bold mb-2">Módulos do Curso</h3>
        <ul className="text-gray-700 space-y-1">
          <li>Introdução ao PDCA - 10 min</li>
          <li>Plan - Planejamento - 15 min</li>
          <li>Do - Execução - 10 min</li>
          <li>Check - Verificação - 8 min</li>
          <li>Act - Ação - 12 min</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="font-bold mb-2">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-200 px-2 py-1 rounded">LPP</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Qualidade</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Melhoria Contínua</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-[#0D3A6D] text-white px-4 py-2 rounded hover:bg-[#0B2C5A]">
          Continuar Treinamento
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
          Ver Material
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
          Enviar Feedback
        </button>
      </div>
    </aside>
  </main>
</div>
  )

}
