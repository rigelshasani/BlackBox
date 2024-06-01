import{ IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
   icon: Icon,
   onClick 
}) => {
    return (
        <button
        type="button"
        onClick={onClick}
        className="
          inline-flex
          w-full
          justify-center
          rounded-md
          bg-neutral-900
          px-4
          py-2
          text-white
          shadow-sm
          ring-1
          ring-insert
          ring-gray-300
          hover: bg-grey-100
          focus: outline-offset-0
          "
          >
            <Icon/>

          </button>
    );
}

export default AuthSocialButton;