import React from 'react';
import styles from './ResultList.module.css';

/**
 * Komponen ResultList menampilkan daftar subdomain yang ditemukan.
 * @param {Object} props
 * @param {string[]} props.results - Array subdomain.
 */
const ResultList = ({ results, domain }) => {
  if (!results || results.length === 0) return null;

  const handleCopyAll = () => {
    const text = results.join('\n');
    navigator.clipboard.writeText(text);
    alert('All subdomains copied to clipboard!');
  };

  const handleExportTxt = () => {
    const text = results.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // Format: subdomain-target.com.txt
    a.download = `subdomain-${domain || 'unknown'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyItem = (item) => {
    navigator.clipboard.writeText(item);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.counter}>
          Found <span className={styles.highlight}>{results.length}</span> subdomains
        </div>
        <div className={styles.actions}>
          <button className={styles.actionButton} onClick={handleCopyAll}>
            COPY ALL
          </button>
          <button className={styles.actionButton} onClick={handleExportTxt}>
            EXPORT .TXT
          </button>
        </div>
      </div>

      <div className={styles.list}>
        {results.map((sub, index) => (
          <div key={index} className={styles.item} onClick={() => handleCopyItem(sub)} title="Click to copy">
            {sub}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultList;
