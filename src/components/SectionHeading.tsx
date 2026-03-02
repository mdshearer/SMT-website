interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {/* Decorative bar uses the brand gradient to visually anchor section headings */}
      <div className="w-24 h-1 bg-gradient-to-r from-church-blue to-church-green rounded-full mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold text-church-blue">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xl text-church-slate">{subtitle}</p>
      )}
    </div>
  );
}
