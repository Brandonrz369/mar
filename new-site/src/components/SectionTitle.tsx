interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  tag = '',
  centered = false,
  className = ''
}) => {
  return (
    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {tag && (
        <span className="text-accent uppercase tracking-wider font-bold block mb-2">
          {tag}
        </span>
      )}
      
      <h2 className="section-title">
        {title}
      </h2>
      
      <div className={`w-24 h-1 bg-accent my-6 ${centered ? 'mx-auto' : ''}`}></div>
      
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;