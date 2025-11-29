
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { getCurrentYear } from '../utils/dateUtils';

const Hero: React.FC = () => {
  const currentYear = getCurrentYear();
  
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-8">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30">
              <Star className="w-4 h-4" />
              <span>Muebles Premium desde 2010</span>
            </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white font-display">
                    Diseña tu
                    <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                      Espacio Ideal
                    </span>
                  </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Muebles únicos que transforman cualquier habitación en un 
                <span className="text-amber-400 font-semibold"> hogar perfecto</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center space-x-2">
                <span>Explorar Colección</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-slate-400 text-slate-300 hover:border-amber-400 hover:text-amber-400 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Envío Gratis</div>
                  <div className="text-sm text-slate-400">En compras +$500</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Garantía 2 Años</div>
                  <div className="text-sm text-slate-400">En todos los productos</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Calidad Premium</div>
                  <div className="text-sm text-slate-400">Materiales seleccionados</div>
                </div>
              </div>
            </div>
          </div>

              {/* Visual Elements */}
              <div className="lg:col-span-5 relative">
                {/* Main Product Showcase */}
                <div className="relative">
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl transform rotate-3"></div>

                  {/* Main Card */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {/* Product Images Grid */}
                    <div className="aspect-square rounded-2xl relative overflow-hidden">
                      {/* Furniture Images Grid */}
                      <div className="grid grid-cols-2 gap-3 w-full h-full">
                        {/* Sofá Moderno */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
                            alt="Sofá Moderno"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            OFERTA
                          </div>
                        </div>

                        {/* Mesa de Centro */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center"
                            alt="Mesa de Centro"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            NUEVO
                          </div>
                        </div>

                        {/* Silla Ejecutiva */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop&crop=center"
                            alt="Silla Ejecutiva"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            PREMIUM
                          </div>
                        </div>

                        {/* Cama King */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=400&fit=crop&crop=center"
                            alt="Cama King Size"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            DESTACADO
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2 font-display">Colección {currentYear}</h3>
                      <p className="text-slate-300 text-sm">Diseños únicos para tu hogar</p>
                    </div>
                  </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Calificación</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Envío</div>
                    <div className="text-xs text-gray-600">24-48h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-slate-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
