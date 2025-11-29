// Base de datos de productos para la aplicación de muebles

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOnSale?: boolean;
  description?: string;
  tags?: string[];
}

export const products: Product[] = [
  // SOFÁS
  {
    id: 1,
    name: "Sofá Moderno 3 Plazas",
    price: 850000,
    originalPrice: 950000,
    image: "sofa-moderno",
    category: "Sofás",
    rating: 4.8,
    reviews: 124,
    isOnSale: true,
    description: "Sofá de 3 plazas con tapizado premium y estructura de madera maciza",
    tags: ["moderno", "3 plazas", "tapizado", "premium"]
  },
  {
    id: 2,
    name: "Sofá Chesterfield Clásico",
    price: 920000,
    image: "sofa-chesterfield",
    category: "Sofás",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    description: "Sofá Chesterfield de cuero genuino con diseño clásico inglés",
    tags: ["chesterfield", "cuero", "clásico", "elegante"]
  },
  {
    id: 3,
    name: "Sofá Seccional L",
    price: 1200000,
    image: "sofa-seccional",
    category: "Sofás",
    rating: 4.7,
    reviews: 156,
    description: "Sofá seccional en forma de L con chaise longue incluida",
    tags: ["seccional", "L", "chaise", "grande"]
  },
  {
    id: 4,
    name: "Sofá 2 Plazas Minimalista",
    price: 650000,
    image: "sofa-2plazas",
    category: "Sofás",
    rating: 4.5,
    reviews: 78,
    description: "Sofá de 2 plazas con diseño minimalista y líneas limpias",
    tags: ["2 plazas", "minimalista", "moderno", "compacto"]
  },

  // MESAS
  {
    id: 5,
    name: "Mesa de Centro Elegante",
    price: 180000,
    image: "mesa-centro",
    category: "Mesas",
    rating: 4.6,
    reviews: 89,
    isNew: true,
    description: "Mesa de centro de vidrio templado con base de metal",
    tags: ["centro", "vidrio", "metal", "elegante"]
  },
  {
    id: 6,
    name: "Mesa de Comedor 6 Personas",
    price: 420000,
    image: "mesa-comedor",
    category: "Mesas",
    rating: 4.6,
    reviews: 78,
    description: "Mesa de comedor de madera maciza para 6 personas",
    tags: ["comedor", "6 personas", "madera", "maciza"]
  },
  {
    id: 7,
    name: "Mesa de Comedor 8 Personas",
    price: 580000,
    image: "mesa-comedor-8",
    category: "Mesas",
    rating: 4.8,
    reviews: 45,
    description: "Mesa de comedor extensible para 8 personas",
    tags: ["comedor", "8 personas", "extensible", "grande"]
  },
  {
    id: 8,
    name: "Mesa de Trabajo Moderna",
    price: 320000,
    image: "mesa-trabajo",
    category: "Mesas",
    rating: 4.4,
    reviews: 67,
    description: "Mesa de trabajo con cajones y diseño ergonómico",
    tags: ["trabajo", "cajones", "ergonómico", "oficina"]
  },
  {
    id: 9,
    name: "Mesa Auxiliar Rústica",
    price: 150000,
    image: "mesa-auxiliar",
    category: "Mesas",
    rating: 4.3,
    reviews: 34,
    description: "Mesa auxiliar de madera rústica con acabado natural",
    tags: ["auxiliar", "rústica", "madera", "natural"]
  },

  // SILLAS
  {
    id: 10,
    name: "Silla Ejecutiva Premium",
    price: 320000,
    originalPrice: 450000,
    image: "silla-ejecutiva",
    category: "Sillas",
    rating: 4.9,
    reviews: 203,
    isOnSale: true,
    description: "Silla ejecutiva ergonómica con soporte lumbar ajustable",
    tags: ["ejecutiva", "ergonómica", "lumbar", "ajustable"]
  },
  {
    id: 11,
    name: "Silla de Comedor Vintage",
    price: 180000,
    image: "silla-comedor-vintage",
    category: "Sillas",
    rating: 4.5,
    reviews: 56,
    description: "Silla de comedor estilo vintage con tapizado floral",
    tags: ["comedor", "vintage", "floral", "tapizado"]
  },
  {
    id: 12,
    name: "Silla Acapulco",
    price: 220000,
    image: "silla-acapulco",
    category: "Sillas",
    rating: 4.7,
    reviews: 89,
    description: "Silla Acapulco de cuerda con estructura de metal",
    tags: ["acapulco", "cuerda", "metal", "exterior"]
  },
  {
    id: 13,
    name: "Silla Barra Alta",
    price: 190000,
    image: "silla-barra",
    category: "Sillas",
    rating: 4.4,
    reviews: 42,
    description: "Silla de barra con respaldo alto y asiento acolchado",
    tags: ["barra", "alta", "acolchado", "respaldo"]
  },
  {
    id: 14,
    name: "Silla Plegable",
    price: 120000,
    image: "silla-plegable",
    category: "Sillas",
    rating: 4.2,
    reviews: 28,
    description: "Silla plegable de madera para uso ocasional",
    tags: ["plegable", "madera", "ocasional", "compacta"]
  },

  // DORMITORIO
  {
    id: 15,
    name: "Cama King Size",
    price: 750000,
    originalPrice: 900000,
    image: "cama-king",
    category: "Dormitorio",
    rating: 4.7,
    reviews: 156,
    isOnSale: true,
    description: "Cama King Size de madera maciza con cabecero tapizado",
    tags: ["king", "madera", "cabecero", "tapizado"]
  },
  {
    id: 16,
    name: "Cama Queen Size",
    price: 650000,
    image: "cama-queen",
    category: "Dormitorio",
    rating: 4.6,
    reviews: 134,
    description: "Cama Queen Size con diseño minimalista y líneas limpias",
    tags: ["queen", "minimalista", "moderna", "limpia"]
  },
  {
    id: 17,
    name: "Cama Individual",
    price: 380000,
    image: "cama-individual",
    category: "Dormitorio",
    rating: 4.4,
    reviews: 67,
    description: "Cama individual de madera con cajones de almacenamiento",
    tags: ["individual", "cajones", "almacenamiento", "madera"]
  },
  {
    id: 18,
    name: "Cómoda 6 Cajones",
    price: 280000,
    image: "comoda-6",
    category: "Dormitorio",
    rating: 4.5,
    reviews: 89,
    description: "Cómoda de 6 cajones con espejo incluido",
    tags: ["cómoda", "6 cajones", "espejo", "almacenamiento"]
  },
  {
    id: 19,
    name: "Mesa de Luz Moderna",
    price: 150000,
    image: "mesa-luz",
    category: "Dormitorio",
    rating: 4.3,
    reviews: 45,
    description: "Mesa de luz con cajón y diseño moderno",
    tags: ["mesa de luz", "cajón", "moderna", "dormitorio"]
  },
  {
    id: 20,
    name: "Ropero 3 Puertas",
    price: 450000,
    image: "ropero-3puertas",
    category: "Dormitorio",
    rating: 4.6,
    reviews: 78,
    description: "Ropero de 3 puertas con espejo central",
    tags: ["ropero", "3 puertas", "espejo", "almacenamiento"]
  },

  // OFICINA
  {
    id: 21,
    name: "Escritorio Minimalista",
    price: 280000,
    image: "escritorio-minimalista",
    category: "Oficina",
    rating: 4.4,
    reviews: 92,
    isNew: true,
    description: "Escritorio minimalista de madera con cajones laterales",
    tags: ["escritorio", "minimalista", "cajones", "madera"]
  },
  {
    id: 22,
    name: "Escritorio Ejecutivo",
    price: 520000,
    image: "escritorio-ejecutivo",
    category: "Oficina",
    rating: 4.8,
    reviews: 67,
    description: "Escritorio ejecutivo de madera maciza con gavetas",
    tags: ["ejecutivo", "madera maciza", "gavetas", "profesional"]
  },
  {
    id: 23,
    name: "Estantería de Oficina",
    price: 320000,
    image: "estanteria-oficina",
    category: "Oficina",
    rating: 4.5,
    reviews: 43,
    description: "Estantería de oficina con 5 estantes ajustables",
    tags: ["estantería", "oficina", "5 estantes", "ajustable"]
  },
  {
    id: 24,
    name: "Silla de Oficina Ergonómica",
    price: 380000,
    image: "silla-oficina-ergonomica",
    category: "Oficina",
    rating: 4.7,
    reviews: 89,
    description: "Silla de oficina ergonómica con soporte lumbar y reposabrazos",
    tags: ["oficina", "ergonómica", "lumbar", "reposabrazos"]
  },

  // ALMACENAMIENTO
  {
    id: 25,
    name: "Estantería Modular",
    price: 150000,
    image: "estanteria-modular",
    category: "Almacenamiento",
    rating: 4.5,
    reviews: 67,
    description: "Estantería modular de 4 estantes con diseño versátil",
    tags: ["modular", "4 estantes", "versátil", "almacenamiento"]
  },
  {
    id: 26,
    name: "Biblioteca 5 Estantes",
    price: 280000,
    image: "biblioteca-5",
    category: "Almacenamiento",
    rating: 4.6,
    reviews: 54,
    description: "Biblioteca de 5 estantes con puertas de vidrio",
    tags: ["biblioteca", "5 estantes", "vidrio", "puertas"]
  },
  {
    id: 27,
    name: "Cajonera 4 Cajones",
    price: 220000,
    image: "cajonera-4",
    category: "Almacenamiento",
    rating: 4.4,
    reviews: 38,
    description: "Cajonera de 4 cajones con ruedas para fácil movilidad",
    tags: ["cajonera", "4 cajones", "ruedas", "movilidad"]
  },
  {
    id: 28,
    name: "Baúl de Almacenamiento",
    price: 180000,
    image: "baul-almacenamiento",
    category: "Almacenamiento",
    rating: 4.3,
    reviews: 29,
    description: "Baúl de almacenamiento de mimbre con tapa",
    tags: ["baúl", "mimbre", "tapa", "almacenamiento"]
  },

  // ILUMINACIÓN
  {
    id: 29,
    name: "Lámpara de Pie Moderna",
    price: 120000,
    image: "lampara-pie",
    category: "Iluminación",
    rating: 4.3,
    reviews: 45,
    description: "Lámpara de pie con pantalla de tela y base de metal",
    tags: ["pie", "tela", "metal", "moderna"]
  },
  {
    id: 30,
    name: "Lámpara de Mesa Vintage",
    price: 95000,
    image: "lampara-mesa-vintage",
    category: "Iluminación",
    rating: 4.5,
    reviews: 32,
    description: "Lámpara de mesa estilo vintage con pantalla de cristal",
    tags: ["mesa", "vintage", "cristal", "elegante"]
  },
  {
    id: 31,
    name: "Lámpara Colgante Industrial",
    price: 150000,
    image: "lampara-colgante",
    category: "Iluminación",
    rating: 4.4,
    reviews: 41,
    description: "Lámpara colgante estilo industrial con cable de metal",
    tags: ["colgante", "industrial", "metal", "moderna"]
  },
  {
    id: 32,
    name: "Lámpara de Techo LED",
    price: 180000,
    image: "lampara-techo-led",
    category: "Iluminación",
    rating: 4.6,
    reviews: 58,
    description: "Lámpara de techo LED con control de intensidad",
    tags: ["techo", "LED", "control", "intensidad"]
  },

  // DECORACIÓN
  {
    id: 33,
    name: "Espejo Decorativo Grande",
    price: 220000,
    image: "espejo-decorativo",
    category: "Decoración",
    rating: 4.5,
    reviews: 67,
    description: "Espejo decorativo grande con marco de madera tallada",
    tags: ["espejo", "decorativo", "madera", "tallada"]
  },
  {
    id: 34,
    name: "Cuadro Abstracto Moderno",
    price: 85000,
    image: "cuadro-abstracto",
    category: "Decoración",
    rating: 4.2,
    reviews: 23,
    description: "Cuadro abstracto moderno con marco de metal",
    tags: ["cuadro", "abstracto", "moderno", "metal"]
  },
  {
    id: 35,
    name: "Jarrón de Cerámica",
    price: 65000,
    image: "jarron-ceramica",
    category: "Decoración",
    rating: 4.1,
    reviews: 18,
    description: "Jarrón de cerámica artesanal con diseño único",
    tags: ["jarrón", "cerámica", "artesanal", "único"]
  },
  {
    id: 36,
    name: "Candelabro de Cristal",
    price: 140000,
    image: "candelabro-cristal",
    category: "Decoración",
    rating: 4.4,
    reviews: 35,
    description: "Candelabro de cristal con 5 brazos para velas",
    tags: ["candelabro", "cristal", "5 brazos", "velas"]
  },

  // EXTERIOR
  {
    id: 37,
    name: "Mesa de Jardín",
    price: 320000,
    image: "mesa-jardin",
    category: "Exterior",
    rating: 4.6,
    reviews: 89,
    description: "Mesa de jardín de madera tratada para exterior",
    tags: ["jardín", "exterior", "madera", "tratada"]
  },
  {
    id: 38,
    name: "Sillas de Jardín Set 4",
    price: 180000,
    image: "sillas-jardin-set",
    category: "Exterior",
    rating: 4.5,
    reviews: 56,
    description: "Set de 4 sillas de jardín con cojines incluidos",
    tags: ["jardín", "set 4", "cojines", "exterior"]
  },
  {
    id: 39,
    name: "Hamaca de Jardín",
    price: 250000,
    image: "hamaca-jardin",
    category: "Exterior",
    rating: 4.7,
    reviews: 43,
    description: "Hamaca de jardín con estructura de metal y tela resistente",
    tags: ["hamaca", "jardín", "metal", "resistente"]
  },
  {
    id: 40,
    name: "Pergola de Madera",
    price: 850000,
    image: "pergola-madera",
    category: "Exterior",
    rating: 4.8,
    reviews: 67,
    description: "Pérgola de madera de teca con estructura resistente",
    tags: ["pérgola", "madera", "teca", "resistente"]
  }
];

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Función para buscar productos por texto
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Función para obtener productos en oferta
export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.isOnSale);
};

// Función para obtener productos nuevos
export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};
