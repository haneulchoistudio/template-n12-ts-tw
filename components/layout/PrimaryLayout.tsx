import type { MetaOption } from 'types';
import MetaLayout from './MetaLayout';

interface PrimaryLayoutProps {
    children: React.ReactNode;
    metadata?: MetaOption;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
    children,
    metadata,
}) => {
    return (
        <>
            <MetaLayout {...metadata} />
            <div id="__next__layout" className="__next__layout__class">
                {children}
            </div>
        </>
    );
};

export default PrimaryLayout;
