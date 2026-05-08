import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

export default function Dropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen]   = useState(false);
  const containerRef          = useRef(null);

  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => {
    const handleOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.triggerLabel}>
          {label && <span className={styles.triggerPrefix}>{label}</span>}
          <span className={styles.triggerValue}>
            {selected ? selected.label : options[0]?.label}
          </span>
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          ›
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles.option} ${option.value === value ? styles.optionActive : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {option.value === value && <span className={styles.check}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  label:    PropTypes.string,
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options:  PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};