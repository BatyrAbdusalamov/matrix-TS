import { ReactNode, useEffect, FC } from 'react';

interface ShowErrorProps { 
  children: ReactNode;
  onHide: () => void;
  delay: number; 
  show: boolean;
}

const ShowError: FC<ShowErrorProps> = (props) => {
  const { children, onHide, delay = 5000, show } = props;

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, delay);

      return () => clearTimeout(timer);
    }
  }, [show, delay, onHide]);

  return <div>{children}</div>;
};

export default ShowError;
