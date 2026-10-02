import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { Product, CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // default order in array
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="katalog" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#B54968] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D84C74]" />
            <span>Katalog Produk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#3E271E] tracking-tight">
            Koleksi Aksesori Manis Harionaraga
          </h2>
          <p className="text-[#695144] text-sm sm:text-base mt-2.5">
            Temukan bag charm, gantungan kunci, dan phone strap favoritmu. Klik produk untuk rincian lengkap atau pesan langsung via DM Instagram resmi kami.
          </p>
        </div>

        {/* Filter, Search & Sort Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#F0E4DC] shadow-xs mb-8 space-y-4">
          
          {/* Top row: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-[#9E8273] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pita, gantungan daisy, mutiara, phone strap..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8DCD4] bg-[#FFFDFC] text-[#4A2F25] focus:outline-none focus:ring-2 focus:ring-[#D84C74]/20 focus:border-[#D84C74] placeholder-[#A89387]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#9E8273] hover:text-[#54382B]"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#705649] shrink-0 font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D84C74]" />
                <span>Urutkan:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Urutkan produk berdasarkan harga atau rekomendasi"
                className="px-3 py-2 text-xs font-medium rounded-xl border border-[#E8DCD4] bg-white text-[#4A2F25] focus:outline-none focus:ring-2 focus:ring-[#D84C74]/20 focus:border-[#D84C74] cursor-pointer"
              >
                <option value="featured">Rekomendasi</option>
                <option value="price-asc">Harga Terendah</option>
                <option value="price-desc">Harga Tertinggi</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-1 border-t border-[#F7EFEA]">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-[#D84C74] text-white shadow-2xs'
                      : 'bg-[#F7EFEA] text-[#695144] hover:bg-[#EFE5DE] hover:text-[#3E271E]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Count Indicator */}
        <div className="flex items-center justify-between text-xs text-[#8F7466] mb-6 px-1">
          <span>
            Menampilkan <strong className="text-[#4A2F25]">{filteredProducts.length}</strong> produk
            {selectedCategory !== 'all' && ` pada kategori "${CATEGORIES.find(c => c.id === selectedCategory)?.label}"`}
          </span>
          <span className="text-[11px] text-[#A68F83] hidden sm:inline">
            Klik card untuk melihat detail lengkap & request kustom
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-10 text-center border border-[#F0E4DC] max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FCE7EC] text-[#D84C74] flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#3E271E]">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-xs text-[#7A6154] mt-1.5">
              Tidak ada produk yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba cari dengan kata kunci lain.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#D84C74] bg-[#FCE7EC] hover:bg-[#F9D5DF] rounded-xl transition-colors"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
