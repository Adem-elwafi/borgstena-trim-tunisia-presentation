export default function ServiceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Service de stage
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Service informatique
              </h3>
              <p className="text-gray-600 text-lg">
                Gestion et maintenance des systèmes d'information
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Réseau et infrastructure
              </h3>
              <p className="text-gray-600 text-lg">
                Architecture réseau et serveurs
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Support utilisateurs
              </h3>
              <p className="text-gray-600 text-lg">
                Assistance technique quotidienne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
