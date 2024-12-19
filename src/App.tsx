import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { loadSettings} from './utils';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSettings();
    setIsLoading(false);
  }, []);
  return <div>{isLoading ? <p>Loading....</p> : <HomePage />}</div>;
};
