import { twMerge } from 'tailwind-merge';
import ModalStyle from './Modal.module.css';
import BoxVariant from '../Variants/BoxVariant/BoxVariant';
import Button from '../Buttons/Button';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalBackgroundProps {
    children: React.ReactNode;
    className?: string;
    show?: boolean;
    onHide?: () => void;
}

const Modal: React.FC<ModalBackgroundProps> = ({
    className = '',
    children,
    show,
    onHide,
}) => {
    return (
        <BoxVariant
            className={twMerge(
                ModalStyle.main,
                className,
                show ? 'block' : 'hidden'
            )}
        >
            <BoxVariant variant="section" className={twMerge(ModalStyle.wrap)}>
                {children}
            </BoxVariant>
            <Button
                onClick={onHide}
                className={twMerge(ModalStyle['close-button'])}
            >
                <AiOutlineClose size={26} />
            </Button>
        </BoxVariant>
    );
};

export default Modal;
