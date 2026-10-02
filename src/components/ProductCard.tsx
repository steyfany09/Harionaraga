import React, { useState } from 'react';
import { Instagram, Eye } from 'lucide-react';
import { Product, formatRupiah, INSTAGRAM_URL } from '../data/products';
import { ProductPlaceholder } from './ProductPlaceholder';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = Boolean(product.image && !imageError);
  const isAvailable = product.stock > 0;

  return (
    <div
      onClick={() => onSelect(product)}
      className="group flex flex-col bg-white rounded-3xl border border-[#F2E5DC] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    >
      {/* Product Image Slot (3:4 ratio matches 960x1280 photos perfectly) */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF2EB]">
        {hasImage ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <ProductPlaceholder
            name={product.name}
            price={product.price}
            categoryLabel={product.categoryLabel}
            size="card"
          />
        )}

        {/* Quick detail overlay badge on hover */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 text-xs font-semibold text-[#4A2F25] bg-white/95 rounded-full shadow-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#D84C74]" />
            <span>Lihat Detail</span>
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Stock Status */}
          <div className="flex items-center justify-between text-xs text-[#8F7466] mb-1 gap-2">
            <span className="font-medium truncate">{product.categoryLabel}</span>
            {isAvailable ? (
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 whitespace-nowrap">
                Stok: {product.stock} buah
              </span>
            ) : (
              <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100 whitespace-nowrap">
                Stok habis
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-heading font-bold text-base text-[#3E271E] group-hover:text-[#D84C74] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Render description only if provided (strictly avoid making up descriptions) */}
          {product.description && (
            <p className="text-xs text-[#705649] mt-1.5 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-[#F5EBE4] flex items-center justify-between gap-2">
          <div>
            <span className="text-[11px] text-[#9E8273] block">Harga</span>
            <span className="font-heading font-bold text-lg text-[#D84C74] tabular-nums">
              {formatRupiah(product.price)}
            </span>
          </div>

          {/* Direct Instagram Order Button */}
          {isAvailable ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-95 rounded-xl shadow-2xs transition-all whitespace-nowrap cursor-pointer"
              title={`Pesan ${product.name} langsung via Instagram`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Pesan via Instagram</span>
            </a>
          ) : (
            <button
              disabled
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#8F7466] bg-[#F2E7E0] rounded-xl shadow-none cursor-not-allowed opacity-75 whitespace-nowrap"
            >
              <span>Stok Habis</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
