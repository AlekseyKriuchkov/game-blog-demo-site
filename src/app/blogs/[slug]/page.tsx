import React, {FC} from 'react';
import {BLOG_ARTICLES, BlogSlug} from "@/constants/blogs-content";
import style from './styles.module.scss'

type Props = {
  params: {
    slug: string
  }
}
const ArticlePage: FC<Props> = ({params}) => {
  const {slug} = params
  const article = BLOG_ARTICLES[slug as BlogSlug]

  return (
    <section className={style.section}>
      <h1>{article.title}</h1>
      {article.content}
    </section>
  );
};

export default ArticlePage;