export default function CompanySection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Présentation de l'entreprise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-xl text-gray-700">
              <p className="flex items-center gap-3">
                <span className="text-3xl">🏭</span>
                <span>Entreprise industrielle</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">🚗</span>
                <span>Secteur textile automobile</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                <span>Filiale du groupe Borgstena</span>
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
              alt="Industrial facility"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
