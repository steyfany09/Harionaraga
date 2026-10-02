import React from 'react';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { formatRupiah } from '../data/products';

interface ProductPlaceholderProps {
  name: string;
  price?: number;
  categoryLabel?: string;
  size?: 'card' | 'modal';
}

export const ProductPlaceholder: React.FC<ProductPlaceholderProps> = ({
  name,
  price,
  categoryLabel,
  size = 'card',
}) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-br from-[#FFF5F7] via-[#FAF2EB] to-[#FFF0F4] relative overflow-hidden ${size === 'modal' ? 'p-6' : 'p-4'}`}>
      {/* Subtle decorative circles */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FCE7EC]/50 blur-sm pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#F5EFEB]/60 blur-sm pointer-events-none" />

      {/* Brand & Heart Icon */}
      <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[#F2DEE4] shadow-xs flex items-center justify-center mb-2.5 z-10">
        <Heart className="w-6 h-6 text-[#D84C74] fill-[#D84C74]/20" />
      </div>

      {/* Product Title */}
      <h4 className="font-heading font-bold text-sm sm:text-base text-[#4A2F25] z-10 max-w-[90%] line-clamp-2">
        {name}
      </h4>

      {/* Category / Series */}
      {categoryLabel && (
        <p className="text-[11px] font-medium text-[#9E8273] mt-0.5 z-10">
          {categoryLabel}
        </p>
      )}

      {/* Price if passed */}
      {price && (
        <span className="font-heading font-bold text-xs sm:text-sm text-[#D84C74] mt-1.5 px-2.5 py-0.5 rounded-full bg-white/80 border border-[#F5E1E7] z-10">
          {formatRupiah(price)}
        </span>
      )}

      {/* Placeholder Note Badge */}
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[#A68A7C] bg-white/70 px-2 py-0.5 rounded-md border border-[#EFE5DE] z-10">
        <ImageIcon className="w-3 h-3 text-[#D84C74]" />
        <span>Placeholder Foto Produk</span>
      </div>
    </div>
  );
};
