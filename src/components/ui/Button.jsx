import { Link } from 'react-router-dom';

export default function Button({ to, variant = 'primary', icon: Icon, iconPosition = 'right', children, ...props }) {
  const baseClass = 'button';
  const variantClass = variant === 'primary' ? 'button-primary' : variant === 'ghost' ? 'button-ghost' : 'button-link';
  const className = `${baseClass} ${variantClass}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {iconPosition === 'left' && Icon && <Icon size={16} aria-hidden="true" />}
        {children}
        {iconPosition === 'right' && Icon && <Icon size={16} aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {iconPosition === 'left' && Icon && <Icon size={16} aria-hidden="true" />}
      {children}
      {iconPosition === 'right' && Icon && <Icon size={16} aria-hidden="true" />}
    </button>
  );
}
