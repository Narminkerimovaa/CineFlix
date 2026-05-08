import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  disabled = false,
  onClick,
  type     = 'button',
  fullWidth = false,
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children:  PropTypes.node.isRequired,
  variant:   PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size:      PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled:  PropTypes.bool,
  fullWidth: PropTypes.bool,
  type:      PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick:   PropTypes.func,
};