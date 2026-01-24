export default function DifficultiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Difficultés rencontrées
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-xl text-gray-700">
              <p className="flex items-center gap-3">
                <span className="text-3xl">🌱</span>
                <span>Nouvel environnement</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">🔧</span>
                <span>Outils professionnels</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">📈</span>
                <span>Adaptation progressive</span>
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Professional challenge"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
