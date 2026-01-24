export default function SupportSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Support technique
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Microsoft HelpDesk
              </h3>
              <p className="text-gray-600 text-lg">
                Plateforme centralisée de gestion
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Tickets
              </h3>
              <p className="text-gray-600 text-lg">
                Suivi des demandes utilisateurs
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Niveaux de support
              </h3>
              <p className="text-gray-600 text-lg">
                Escalade et priorisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
