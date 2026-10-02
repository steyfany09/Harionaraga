import React from 'react';
import { Sparkles, HeartHandshake, Palette, Gift, MessageCircle, Tag, CheckCircle2 } from 'lucide-react';
import { ADVANTAGES } from '../data/products';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#D84C74]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#D84C74]" />,
  Palette: <Palette className="w-5 h-5 text-[#D84C74]" />,
  Gift: <Gift className="w-5 h-5 text-[#D84C74]" />,
  MessageCircle: <MessageCircle className="w-5 h-5 text-[#D84C74]" />,
  Tag: <Tag className="w-5 h-5 text-[#D84C74]" />,
};

export const AdvantagesSection: React.FC = () => {
  return (
    <section id="keunggulan" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#FFF9FA] border-t border-[#F0E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#B54968] text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D84C74]" />
            <span>Mengapa Memilih Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#3E271E] tracking-tight">
            Keunggulan Harionaraga
          </h2>
          <p className="text-[#695144] text-sm sm:text-base mt-2.5">
            Dibuat dengan sepenuh hati untuk memberikan pengalaman memiliki aksesori lucu yang rapi, tahan lama, dan personal.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="bg-white p-6 rounded-3xl border border-[#F0E4DC] shadow-xs hover:border-[#F9B7C7] hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#FCE7EC] flex items-center justify-center mb-4 shadow-2xs">
                  {iconMap[adv.iconName] || <Sparkles className="w-5 h-5 text-[#D84C74]" />}
                </div>
                <h3 className="font-heading font-bold text-base text-[#3E271E]">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E564A] mt-2 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
