// Utilidades para manejar imágenes de forma fácil

// 1. Unsplash - Imágenes reales de muebles (RECOMENDADO)
export const getUnsplashImage = (width: number = 600, height: number = 600): string => {
  return `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=${width}&h=${height}&fit=crop&crop=center&q=80`;
};

// 2. Picsum - Imágenes aleatorias de alta calidad
export const getPicsumImage = (id: number, width: number = 600, height: number = 600): string => {
  return `https://picsum.photos/${width}/${height}?random=${id}`;
};

// 3. Placeholder - Para desarrollo rápido
export const getPlaceholderImage = (text: string, width: number = 600, height: number = 600): string => {
  const encodedText = encodeURIComponent(text);
  return `https://via.placeholder.com/${width}x${height}/4F46E5/FFFFFF?text=${encodedText}`;
};

// 4. Imágenes específicas de muebles de Unsplash
export const furnitureImages = {
  sofa: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
  table: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&crop=center",
  chair: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop&crop=center",
  bed: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
  desk: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&crop=center",
  shelf: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop&crop=center"
};

// Función para obtener imagen por tipo de mueble
export const getFurnitureImage = (type: keyof typeof furnitureImages): string => {
  return furnitureImages[type];
};

// Función para obtener imagen aleatoria
export const getRandomFurnitureImage = (): string => {
  const images = Object.values(furnitureImages);
  return images[Math.floor(Math.random() * images.length)];
};
