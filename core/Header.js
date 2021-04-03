import React from 'react';
import { MenuContext } from '@/miscs/ContextMenuProvider'
import { useContext } from "react";
import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
    const { headerMenu } = useContext(MenuContext);
    return (
        <Container>
            {headerMenu.length ?
                <div className="header-top">
                    {headerMenu.map(el =>
                        <div key={Math.random()}>
                            {el.Slug && <Link href={el.Slug}><a>{el.Text}</a></Link>}
                            {!el.Slug && el.Text}
                        </div>
                    )}
                </div>
                : ''}
        </Container>
    );
};

export default Header;

const Container = styled.div`

`