import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  icon?: ReactNode;
  title: ReactNode;
  desc?: ReactNode;
  dark?: boolean;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({ label, icon, title, desc, dark, align = 'center', className = '' }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${textAlign} ${className}`}
    >
      <span className={`font-bold tracking-wider text-sm uppercase mb-4 block ${icon ? 'flex items-center gap-2' : ''} ${align === 'center' && icon ? 'justify-center' : ''} ${dark ? 'text-[#4ade80]' : 'text-[#176B36]'}`}>
        {icon}{label}
      </span>
      <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {desc && (
        <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-white/50' : 'text-gray-500'}`}>
          {desc}
        </p>
      )}
    </motion.div>
  );
}
