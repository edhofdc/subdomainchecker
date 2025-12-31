import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ResultList from './components/ResultList';
import Loading from './components/Loading';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import { useSubdomainFinder } from './hooks/useSubdomainFinder';

function App() {
  const { results, isLoading, error, search, searchedDomain } = useSubdomainFinder();

  return (
    <>
      <MatrixBackground />
      <Header />
      
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <SearchInput onSearch={search} isLoading={isLoading} />
        
        {error && (
          <div style={{ 
            color: '#ff4d4d', 
            padding: '1rem', 
            border: '1px solid #ff4d4d', 
            borderRadius: '8px',
            background: 'rgba(255, 77, 77, 0.1)',
            marginBottom: '1rem',
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {isLoading && <Loading />}
        
        {!isLoading && !error && results.length > 0 && (
          <ResultList results={results} domain={searchedDomain} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
