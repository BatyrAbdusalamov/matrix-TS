import { ReactNode } from 'react';
import { useTheme } from '../hooks';

type ButtonVariant = 'secondary' | 'primary'
type ButtonType = 'button' | 'submit'

interface ButtonProps {
  children: ReactNode; // Button content
  variant?: ButtonVariant; // Optional button variant, default is "primary"
  disabled?: boolean; // Optional disabled state, default is `false` // TODO
  outlined?: boolean; // Optional outlined state, default is `false`
  onClick: ButtonType extends 'button'? () => void : (e: React.MouseEvent<HTMLButtonElement>) => void; // Click handler
  type?: ButtonType; // Optional button type, default is "button"
}

const Button: React.FC<ButtonProps> = (props) => {
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
