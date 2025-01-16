import React from 'react';
import Link from "next/link";
import {BLOG_ARTICLES} from "@/constants/blogs-content";
import style from './styles.module.scss'

export default function Blogs () {
  return (
    <div className={style.blogsWrapper}>
      {Object.values(BLOG_ARTICLES).map((article, index) => (
        <div key={index}>
          <nav>
            <Link
              className={style.blog}
              href={`blogs/${article.slug}`}
            >
              {article.title}
            </Link>
          </nav>
        </div>
      ))}
    </div>
  );
};
