export default function ContextSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Contexte du stage
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Étudiant – 1ère année TI
              </h3>
              <p className="text-gray-600 text-lg">
                Formation en techniques de l'informatique
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Stage d'initiation
              </h3>
              <p className="text-gray-600 text-lg">
                Première immersion en entreprise
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Découverte du milieu professionnel
              </h3>
              <p className="text-gray-600 text-lg">
                Observer et participer aux activités du service IT
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Objectif
              </h3>
              <p className="text-gray-600 text-lg">
                Acquérir des compétences pratiques et comprendre le fonctionnement d'un département informatique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}