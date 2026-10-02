import React, { useState, useEffect } from 'react';
import { X, Instagram, Check, Package } from 'lucide-react';
import { Product, formatRupiah, INSTAGRAM_URL } from '../data/products';
import { ProductPlaceholder } from './ProductPlaceholder';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [customNote, setCustomNote] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setCustomNote('');
    setImgError(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const hasImage = Boolean(product.image && !imgError);
  const isAvailable = product.stock > 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-[#F0E4DC] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#63493D] hover:text-[#D84C74] shadow-xs transition-colors border border-[#EFE5DE]"
          aria-label="Tutup jendela detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Product Image Box */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF2EB] border border-[#F2E5DC]">
              {hasImage ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  onError={() => setImgError(true)}
                />
              ) : (
                <ProductPlaceholder
                  name={product.name}
                  price={product.price}
                  categoryLabel={product.categoryLabel}
                  size="modal"
                />
              )}

              {/* Status & Stock badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                {isAvailable ? (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-lg shadow-2xs backdrop-blur-xs bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    Stok tersedia: {product.stock} buah
                  </span>
                ) : (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-lg shadow-2xs backdrop-blur-xs bg-rose-50 text-rose-600 border border-rose-200/60">
                    Stok habis
                  </span>
                )}
              </div>
            </div>

            {/* Product Quick Info */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-[#9E8273] tracking-wide uppercase">
                  {product.categoryLabel}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#3E271E] mt-1 leading-snug">
                  {product.name}
                </h3>
              </div>

              {/* Price & Stock Display */}
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#D84C74] tabular-nums block">
                  {formatRupiah(product.price)}
                </span>
                <p className="text-xs text-[#705649]">
                  {isAvailable ? (
                    <span className="text-emerald-700 font-medium">✓ Siap dipesan ({product.stock} buah tersedia)</span>
                  ) : (
                    <span className="text-rose-600 font-medium">✕ Produk saat ini sedang habis</span>
                  )}
                </p>
              </div>

              {/* Lead Time Note */}
              <div className="flex items-center gap-2 text-xs text-[#705649] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EFE5DE]">
                <Package className="w-4 h-4 text-[#D84C74] shrink-0" />
                <span>Pemesanan langsung via DM Instagram resmi @harionaraga.id</span>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1 text-xs text-[#6B5347]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Koleksi resmi katalog produk Harionaraga</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pengiriman dari Yogyakarta via JNE & Lion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bisa konsultasi kustom warna atau inisial via DM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section (Only if provided) */}
          {product.description && (
            <div className="space-y-2 border-t border-[#F0E4DC] pt-4">
              <h4 className="text-sm font-bold text-[#4A2F25] font-heading">Deskripsi Produk</h4>
              <p className="text-sm text-[#695144] leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 border-t border-[#F0E4DC]">
            {isAvailable ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-98 shadow-sm transition-all cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
                <span>Pesan Sekarang via Instagram</span>
              </a>
            ) : (
              <button
                disabled
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-[#8F7466] bg-[#F2E7E0] cursor-not-allowed opacity-80"
              >
                <span>Stok Habis — Pemesanan Ditutup</span>
              </button>
            )}
            <p className="text-center text-[11px] text-[#9E8273] mt-2">
              Tautan akan membuka profil dan DM Instagram resmi @harionaraga.id di tab baru
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
