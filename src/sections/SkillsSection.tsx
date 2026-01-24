export default function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Compétences acquises
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Compétences techniques
              </h3>
              <p className="text-gray-600 text-lg">
                Réseau, serveurs, et infrastructure IT
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Organisation
              </h3>
              <p className="text-gray-600 text-lg">
                Gestion du temps et des priorités
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Travail en équipe
              </h3>
              <p className="text-gray-600 text-lg">
                Collaboration et communication professionnelle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
