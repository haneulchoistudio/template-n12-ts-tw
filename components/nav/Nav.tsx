interface NavProps {
    children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
    return <nav>{children}</nav>;
};

export default Nav;
