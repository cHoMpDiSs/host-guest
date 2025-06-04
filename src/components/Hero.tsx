import Link from 'next/link'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        >
          {/* Gradient overlay - adjusted for this specific image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-40 pb-56">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Your Home Away</span>
              <span className="block text-blue-400">from Home</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with welcoming host families, offering an affordable and enriching alternative to traditional housing.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <Link href="/search">
                  <Button size="lg" className="w-full sm:w-auto">
                    Find a Home
                  </Button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/host">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900"
                  >
                    Become a Host
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 