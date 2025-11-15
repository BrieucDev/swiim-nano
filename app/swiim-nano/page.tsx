'use client'

import { useState, useEffect } from 'react'

type View = 'steps' | 'loading' | 'form'

export default function SwiimNanoPage() {
  const [view, setView] = useState<View>('steps')

  // Load Tally script
  useEffect(() => {
    if (view === 'form') {
      const script = document.createElement('script')
      script.innerHTML = `
        var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
      `
      document.body.appendChild(script)
    }
  }, [view])

  // Generate current date and time for receipt
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('fr-FR', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  })
  const formattedTime = currentDate.toLocaleTimeString('fr-FR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })

  // Receipt line items (placeholder data)
  const lineItems = [
    { name: 'Croissant au beurre', price: 1.50 },
    { name: 'Café allongé', price: 2.80 },
    { name: 'Pain aux raisins', price: 2.20 },
    { name: 'Jus d\'orange bio', price: 3.50 },
  ]

  const total = lineItems.reduce((sum, item) => sum + item.price, 0)

  const handleGetReceipt = () => {
    setView('loading')
  }

  // Auto-transition from loading to form after 2 seconds
  useEffect(() => {
    if (view === 'loading') {
      const timer = setTimeout(() => {
        setView('form')
        // Scroll to form section after transition
        setTimeout(() => {
          const formSection = document.getElementById('form-section')
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 500)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [view])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">swiim</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-swiim-accent ml-1"></span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* VIEW 1: INTRO */}
        {view === 'steps' && (
          <div className="animate-fadeIn">
            {/* Hero Section - Minimal & Action-Focused */}
            <section className="text-center py-12 sm:py-16">
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Recevez votre ticket numérique & vos points fidélité
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                  Vous venez de payer en caisse. Cliquez ci-dessous pour recevoir votre ticket par email et activer vos points fidélité.
                </p>

                {/* Primary CTA */}
                <div className="pt-4">
                  <button
                    onClick={handleGetReceipt}
                    className="inline-flex items-center justify-center rounded-full bg-[#C7FF06] px-8 py-4 text-base font-semibold text-gray-900 shadow-lg shadow-[#C7FF06]/40 hover:shadow-xl hover:shadow-[#C7FF06]/50 transition duration-150 w-full sm:w-auto hover:scale-[1.02] transform"
                  >
                    <span>Récupérer mon ticket</span>
                    <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Micro-copy */}
                <p className="text-xs text-gray-500 mt-3">
                  Vous pourrez fermer la page dès que votre demande est envoyée.
                </p>

                {/* Data safety line */}
                <p className="text-[11px] text-gray-400 mt-1">
                  Vos données sont utilisées uniquement pour vous envoyer votre ticket et vos points.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: LOADING */}
        {view === 'loading' && (
          <div className="animate-fadeIn min-h-[70vh] flex flex-col items-center justify-center">
            <div className="text-center max-w-2xl">
              {/* Loading spinner */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200 border-t-swiim-accent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">🧾</span>
                  </div>
                </div>
              </div>

              {/* Loading text */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 px-4">
                Chargement...
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 px-4">
                Voici à quoi pourrait ressembler votre ticket.
              </p>

              {/* Preview ticket card */}
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 animate-pulse-slow">
                <div className="text-center border-b border-gray-200 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Boulangerie</h3>
                  <p className="text-sm text-gray-500 mt-1">{formattedDate} à {formattedTime}</p>
                </div>

                <div className="space-y-3 mb-4">
                  {lineItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-gray-900">
                        {item.price.toFixed(2)} €
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-base font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">
                    {total.toFixed(2)} €
                  </span>
                </div>

                <div className="text-center">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                    Ticket numérique (prototype)
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Préparation de votre formulaire sécurisé...
              </p>
            </div>
          </div>
        )}

        {/* VIEW 3: FORM */}
        {view === 'form' && (
          <div className="animate-fadeIn">
            {/* Success message */}
            <div className="mb-8 bg-white rounded-2xl shadow-lg shadow-gray-200/70 p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 mb-4">
                <span className="text-2xl sm:text-3xl">✓</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Votre ticket est prêt !
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Remplissez le formulaire ci-dessous pour le recevoir par email et commencer à gagner des points fidélité.
              </p>
            </div>

            {/* Form Section */}
            <section id="form-section">
              {/* Tally Form Embed */}
              <div className="rounded-2xl bg-white p-3 sm:p-6 shadow-lg shadow-gray-200/70 border border-gray-100">
                <div className="relative rounded-xl overflow-hidden">
                  <iframe 
                    data-tally-src="https://tally.so/embed/7RRKo2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    marginHeight={0}
                    marginWidth={0}
                    title="Recevez votre ticket numérique"
                    className="w-full"
                  />
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8">
        <p className="text-xs text-gray-400 text-center">
          Propulsé par <span className="font-semibold">swiim</span> · Prototype Nano · Aucun vrai ticket n'est encore généré.
        </p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
