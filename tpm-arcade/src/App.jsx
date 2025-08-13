import React from "react";

export default function CicloPDCA() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#0D3A6D] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-white text-[#0D3A6D] font-bold w-10 h-10 flex items-center justify-center rounded-full">
            T
          </div>
          <h1 className="text-lg font-bold">TPM Arcade</h1>
        </div>
        <nav className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Início
          </a>
          <a href="#" className="hover:underline">
            Treinamentos
          </a>
          <a href="#" className="hover:underline">
            Conquistas
          </a>
          <a href="#" className="hover:underline">
            Perfil
          </a>
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="p-8 max-w-7xl mx-auto space-y-4">
        {/* Boas-vindas */}
        <div className="bg-[#0D3A6D] text-white rounded-2xl shadow-md p-6">
          <h2 className="text-3xl font-bold mb-2">Bem-vindo ao TPM Arcade</h2>
          <p className="max-w-2xl mb-4 text-gray-200">
            Uma plataforma de treinamentos em Total Productive Maintenance (TPM). Desenvolva suas habilidades através de conteúdos interativos e conquiste certificações.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-[#0D3A6D] font-bold px-5 py-2.5 rounded-full shadow hover:bg-gray-100 transition-colors">
              Explorar Treinamentos
            </button>
            <button className="border border-white text-white font-bold px-5 py-2.5 rounded-full hover:bg-white hover:text-[#0D3A6D] transition-colors">
              Continuar Último
            </button>
          </div>
        </div>


        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
            <p className="text-sm text-gray-500">Treinamentos Concluídos</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
            <p className="text-sm text-gray-500">Certificações</p>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
            <p className="text-sm text-gray-500">Pontuação</p>
            <p className="text-2xl font-bold">1.250</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
            <p className="text-sm text-gray-500">Ranking</p>
            <p className="text-2xl font-bold">3º</p>
          </div>
        </div>

        {/* Treinamentos e Lateral */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Lista de Treinamentos */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-5 space-y-4">
            <h3 className="text-xl font-bold text-[#0D3A6D]">Treinamentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 shadow">
                <h4 className="font-bold">Ciclo PDCA</h4>
                <p className="text-sm text-gray-600">
                  Aprenda sobre o método de melhoria contínua PDCA.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 shadow">
                <h4 className="font-bold">5S</h4>
                <p className="text-sm text-gray-600">
                  Conheça a metodologia japonesa para organização.
                </p>
              </div>
            </div>
          </div>

          {/* Lateral */}
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5">
              <h3 className="text-lg font-bold text-[#0D3A6D] mb-2">
                Últimos Acessados
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Ciclo PDCA</li>
                <li>5S</li>
                <li>Manutenção Autônoma</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5">
              <h3 className="text-lg font-bold text-[#0D3A6D] mb-2">
                Conquistas
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Iniciante TPM</li>
                <li>Especialista 5S</li>
                <li>Master PDCA</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
