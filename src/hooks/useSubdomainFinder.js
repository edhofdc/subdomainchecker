import { useState } from 'react';
import { fetchSubdomains } from '../services/crtshService';

/**
 * Custom hook untuk mengelola logika pencarian subdomain.
 * Berperan sebagai Presenter dalam pola MVP.
 */
export const useSubdomainFinder = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedDomain, setSearchedDomain] = useState('');

  const search = async (domain) => {
    setIsLoading(true);
    setError(null);
    setResults([]);
    setSearchedDomain(domain);

    try {
      const data = await fetchSubdomains(domain);
      if (data.length === 0) {
        setError('No subdomains found or rate limit reached.');
      } else {
        setResults(data);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    results,
    isLoading,
    error,
    search,
    searchedDomain
  };
};
