export default function ConclusionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Conclusion
        </h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6 text-2xl text-gray-700">
            <p className="flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              <span>Stage enrichissant</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span>
              <span>Première expérience professionnelle</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-4xl">🚀</span>
              <span>Impact positif sur l'avenir</span>
            </p>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-300">
            <p className="text-xl text-gray-600">
              Merci pour votre attention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
