
import React from 'react';
import { Testimonial } from '../types';

const TestimonialsList: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  return (
    <div className="space-y-4">
      {testimonials.map(t => (
        <div key={t.id} className="bg-[#F1F6FF] border border-[#BFD0EA] p-4 rounded-sm flex space-x-4">
          <div className="text-center space-y-1">
            <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-sm border border-white shadow-sm" />
            <div className="text-[10px] font-bold text-orkut-text-blue max-w-[60px] leading-tight">{t.author}</div>
          </div>
          <div className="flex-1 text-xs text-gray-700 italic relative">
            <span className="text-4xl text-orkut-pink opacity-20 absolute -top-2 -left-2">"</span>
            {t.content}
            <span className="text-4xl text-orkut-pink opacity-20 absolute -bottom-4 right-0 rotate-180">"</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsList;
