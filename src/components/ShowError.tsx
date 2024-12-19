import { ReactNode, useEffect } from 'react';

interface ShowErrorProps { 
  children: ReactNode;
  onHide: () => void;
  delay: number; 
  show: boolean;
}

const ShowError: React.FC<ShowErrorProps> = (props) => {
  const { children, onHide, delay = 5000, show } = props;

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, delay);

      return () => clearTimeout(timer);
    }
  }, [show, delay]);

  return <div>{children}</div>;
};

export default ShowError;
