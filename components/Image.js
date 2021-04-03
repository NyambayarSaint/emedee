import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';

const Image = ({data}) => {
    console.log(data,'img');
    return (
        <Container>
            <img src={minimize(data.Image)}/>
        </Container>
    );
};

export default Image;

const Container = styled.div `
    border:1px solid rgba(0,0,0,0.1);
    background:grey;
    padding:50px 0px;
`