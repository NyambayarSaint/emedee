import Axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';
import { Parser } from 'html-to-react';
import Link from 'next/link';
const parser = new Parser();

const Twosidenews = () => {

    const [news, setNews] = React.useState(null);

    React.useEffect(() => {
        go();
    }, []);

    const go = async () => {
        let res = await Axios(process.env.serverUrl + '/posts?Slug=mod-turns-counter-strike-into-a-tekken-clone-with-fighting-chickens');
        setNews(res.data);
    }

    return (
        <Container>
            {news?.map(el => (
                <div className="news-con" key={Math.random()}>
                    <Link href={process.env.newsUrl+el.Slug}><a><img src={minimize(el.Thumb)} /></a></Link>
                    {parser.parse(el.Content)}
                </div>
            ))}
        </Container>
    );
};

export default Twosidenews;

const Container = styled.div`
    padding:50px 10vw;
    border:1px solid rgba(0,0,0,0.1);
    margin:50px 0px;
    display:flex;
    .news-con{
        flex:1;
        margin-right:30px;
        &:last-child{
            margin-right:0px;
        }
        img{
            width:100%;
        }
    }
`