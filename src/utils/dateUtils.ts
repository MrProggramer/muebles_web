// Utilidades para manejo de fechas

/**
 * Obtiene el año actual
 * @returns {number} El año actual
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * Obtiene el año actual como string
 * @returns {string} El año actual como string
 */
export const getCurrentYearString = (): string => {
  return getCurrentYear().toString();
};

/**
 * Obtiene el año actual con formato específico
 * @param format - Formato deseado ('short' para 24, 'full' para 2024)
 * @returns {string} El año formateado
 */
export const getFormattedYear = (format: 'short' | 'full' = 'full'): string => {
  const year = getCurrentYear();
  return format === 'short' ? year.toString().slice(-2) : year.toString();
};
