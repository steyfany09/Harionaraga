import React from 'react';
import { ORDER_STEPS } from '../data/products';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const OrderStepsSection: React.FC = () => {
  return (
    <section id="cara-pesan" className="py-14 sm:py-20 bg-white border-t border-[#F0E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#B54968] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D84C74]" />
            <span>Alur Praktis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#3E271E] tracking-tight">
            Cara Pemesanan di Harionaraga
          </h2>
          <p className="text-[#695144] text-sm sm:text-base mt-2.5">
            Pemesanan dibuat sesimpel mungkin tanpa perlu registrasi akun atau pengisian form yang rumit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ORDER_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative p-6 rounded-3xl bg-[#FAF7F2] border border-[#F0E4DC] flex flex-col justify-between hover:bg-[#FFF9FA] hover:border-[#F9B7C7] transition-colors"
            >
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#D84C74]/50 mb-3 block">
                  {stepItem.step}
                </span>
                <h3 className="font-heading font-bold text-base text-[#3E271E]">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E564A] mt-2 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              {index < ORDER_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-[#E8DCD4] flex items-center justify-center text-[#9E8273]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
