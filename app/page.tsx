import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gray-900">swiim</span>
          <span className="inline-block w-2 h-2 rounded-full bg-swiim-accent ml-1"></span>
        </h1>
        <p className="text-gray-600 mb-8">Plateforme de tickets numériques & fidélité</p>
        <Link 
          href="/swiim-nano"
          className="inline-block bg-swiim-accent hover:bg-[#b3e605] text-gray-900 font-semibold px-8 py-3 rounded-full transition duration-150"
        >
          Voir le prototype Nano →
        </Link>
      </div>
    </main>
  )
}

