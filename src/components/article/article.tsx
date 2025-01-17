import {FC} from 'react';
import {BLOG_ARTICLES, BlogSlug} from "@/constants/blogs-content";
import style from './styles.module.scss'
import {notFound} from "next/navigation";

type Props = {
  params: {
    slug: string
  }
}

export const Article: FC<Props> = async ({params}) => {
  const {slug} = params
  const article = BLOG_ARTICLES[slug as BlogSlug]
  if(!article) return notFound()

  return (
    <section className={style.section}>
      <h1>{article.title}</h1>
      {article.content}
    </section>
  );
};