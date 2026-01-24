export default function WorkstationsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Intégration des postes
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Windows
              </h3>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-5xl mb-4">📂</div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Active Directory
              </h3>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Domaine
              </h3>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mt-12">
            <img 
              src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80" 
              alt="Workstation setup"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
