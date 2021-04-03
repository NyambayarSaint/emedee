import React from "react";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import checkLanguage from '@/miscs/checkLanguage';
import decrease from "@/components/miscs/decrease";
import minimize from "@/components/miscs/minimize";
import Axios from "axios";

const Blog = ({news, other}) => {
    console.log(news,'news');
    console.log(other,'other');
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Root seo={{title: news.Name, description: decrease(news.Content, 120), thumb: minimize(news.Thumb, 'medium')}}>
                {news.Name}
            </Root>
        </motion.div>
    );
};

export default Blog;

export async function getServerSideProps({params, req}){

    let data = await checkLanguage(`/posts?Slug=${params.id}`, req, true);
    await Axios.post(process.env.serverUrl+'/posts/addCount/'+data.data[0].id, {id: data.data[0].id});
    let other = await checkLanguage('/posts', req, true);
    return {props: {news: data.data[0], other: other.data}}

}
