/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { OrderStepsSection } from './components/OrderStepsSection';
import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { GuideModal } from './components/GuideModal';
import { Product, INSTAGRAM_URL } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#4A3B32]">
      {/* Top Navigation */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Catalog Section with filters, search, and ordering */}
        <CatalogSection onSelectProduct={(product) => setSelectedProduct(product)} />

        {/* 3. Keunggulan Harionaraga */}
        <AdvantagesSection />

        {/* 4. Cara Pemesanan */}
        <OrderStepsSection />

        {/* 5. Tentang Kami (Academic & Brand Story) */}
        <AboutSection />

        {/* 6. Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Product Detail & Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Guide Modal for Student / Owner */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Floating Instagram Quick Button for Mobile & Quick Inquiries */}
      <aside aria-label="Aksi Cepat" className="fixed bottom-5 right-5 z-30">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#D84C74] hover:bg-[#C23C62] text-white rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
          title="Kunjungi & Pesan via Instagram @harionaraga.id"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-bold tracking-wide pr-1">
            Pesan via Instagram
          </span>
        </a>
      </aside>
    </div>
  );
}
