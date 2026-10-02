import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Heart, Check, Package, Sparkles } from 'lucide-react';
import { Product, formatRupiah, buildProductWhatsAppUrl } from '../data/products';
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

  const handleOrder = () => {
    const waUrl = buildProductWhatsAppUrl(product, customNote);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const hasImage = Boolean(product.image && !imgError);

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

              {/* Status badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg shadow-2xs backdrop-blur-xs bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  {product.stockStatus}
                </span>
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

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#D84C74] tabular-nums">
                  {formatRupiah(product.price)}
                </span>
              </div>

              {/* Lead Time Note */}
              <div className="flex items-center gap-2 text-xs text-[#705649] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EFE5DE]">
                <Package className="w-4 h-4 text-[#D84C74] shrink-0" />
                <span>Pemesanan & Konfirmasi Langsung via WhatsApp</span>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1 text-xs text-[#6B5347]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Koleksi resmi katalog produk Harionaraga</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pengiriman aman dengan kemasan rapi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bisa konsultasi kustom warna atau inisial</span>
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

          {/* Custom Request Input */}
          <div className="space-y-2 border-t border-[#F0E4DC] pt-4">
            <label htmlFor="custom-note" className="block text-xs font-bold text-[#4A2F25] font-heading">
              Catatan Pemesanan / Request Kustom (Opsional):
            </label>
            <textarea
              id="custom-note"
              rows={2}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Contoh: Mau tanya stok atau request warna / inisial..."
              className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#E2D4CC] bg-[#FFFDFC] text-[#4A2F25] focus:outline-none focus:ring-2 focus:ring-[#D84C74]/30 focus:border-[#D84C74] placeholder-[#A89387] resize-none"
            />
            <p className="text-[11px] text-[#8F7466]">
              Catatan ini akan otomatis disertakan saat Anda mengirim pesan ke WhatsApp admin.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleOrder}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-98 shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Pesan Sekarang via WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-[#9E8273] mt-2">
              Format pesanan akan otomatis terisi dan siap dikirim
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
