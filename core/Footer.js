import { MenuContext } from '@/components/miscs/ContextMenuProvider';
import React from 'react';

const Footer = () => {
    const {footerMenu, general} = React.useContext(MenuContext);
    console.log(footerMenu,'footer');
    console.log(general,'general');
    return (
        <div>
            Footer
        </div>
    );
};

export default Footer;