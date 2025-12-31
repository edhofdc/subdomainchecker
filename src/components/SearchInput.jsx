import React, { useState } from 'react';
import styles from './SearchInput.module.css';

/**
 * Komponen SearchInput menangani input domain dari user.
 * @param {Object} props
 * @param {Function} props.onSearch - Callback saat tombol scan ditekan.
 * @param {boolean} props.isLoading - Status loading.
 */
const SearchInput = ({ onSearch, isLoading }) => {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain.trim()) {
      onSearch(domain.trim());
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter domain (e.g. example.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button 
        type="submit" 
        className={styles.button}
        disabled={isLoading || !domain.trim()}
      >
        {isLoading ? 'SCANNING...' : 'SCAN'}
      </button>
    </form>
  );
};

export default SearchInput;
