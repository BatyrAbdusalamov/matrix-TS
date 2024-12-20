import { ReactNode, MouseEvent, FC } from 'react';
import { useTheme } from '../hooks';

type ButtonVariant = 'secondary' | 'primary'
type ButtonType = 'button' | 'submit'

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  outlined?: boolean;
  onClick: ButtonType extends 'button'? () => void : (e: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    disabled = false,
    outlined = false,
    onClick,
    type = 'button',
  } = props;

  const [theme] = useTheme();

  const buttonStyles =
    theme === 'light'
      ? { background: 'white', color: 'black' }
      : { background: 'black', color: 'white' };

  return (
    <button
      type={type}
      className={`button button--${variant} ${
        outlined ? 'button--outlined' : ''
      }`}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
