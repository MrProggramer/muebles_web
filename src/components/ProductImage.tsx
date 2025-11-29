import { getFurnitureImage, getPicsumImage } from '../utils/imageUtils';

interface ProductImageProps {
  productName: string;
  productId: number;
  className?: string;
  width?: number;
  height?: number;
}

const ProductImage = ({ 
  productName, 
  productId, 
  className = "", 
  width = 400, 
  height = 400 
}: ProductImageProps) => {
  // Mapeo de nombres de productos a tipos de muebles
  const getImageType = (name: string): keyof typeof import('../utils/imageUtils').furnitureImages => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('sofá') || lowerName.includes('sofa')) return 'sofa';
    if (lowerName.includes('mesa')) return 'table';
    if (lowerName.includes('silla')) return 'chair';
    if (lowerName.includes('cama')) return 'bed';
    if (lowerName.includes('escritorio')) return 'desk';
    if (lowerName.includes('estantería') || lowerName.includes('estante')) return 'shelf';
    return 'sofa'; // Default
  };

  // Obtener imagen específica o aleatoria
  const imageUrl = getFurnitureImage(getImageType(productName));

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={productName}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
        onError={(e) => {
          // Fallback a imagen aleatoria si falla
          const target = e.target as HTMLImageElement;
          target.src = getPicsumImage(productId, width, height);
        }}
      />
    </div>
  );
};

export default ProductImage;
