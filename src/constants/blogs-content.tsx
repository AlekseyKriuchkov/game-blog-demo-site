import {ReactNode} from "react";

export const BlogSlugs = {
  Trips: "top-winter-destinations",
  HealthyLifestyle: "better-sleep-tips",
  Cooking: "perfect-morning-smoothie",
} as const

export type BlogSlug = (typeof BlogSlugs)[keyof typeof BlogSlugs]

export type BlogArticle = {
  title: string
  slug: string
  content: ReactNode
}

export const BLOG_ARTICLES: {[K in BlogSlug]: BlogArticle} = {
  [BlogSlugs.Trips]: {
    title: "Winter Destinations",
    slug: BlogSlugs.Trips,
    content: (
      <>
        <h3>Top 5 Places to Travel This Winter</h3>
        <p>
          Winter is the time for magical travel. In this article, we will tell you about five of the most amazing places to spend a winter holiday: cozy mountain cabins in the Alps, the northern lights in Iceland, exotic beaches of Bali, snowy streets of Prague and the New Year's atmosphere of New York. Find the perfect destination for your winter vacation!
        </p>
      </>
    )
  },

  [BlogSlugs.HealthyLifestyle]: {
    title: "Healthy Lifestyle",
    slug: BlogSlugs.HealthyLifestyle,
    content: (
      <>
        <h3>5 Simple Steps to Better Sleep</h3>
        <p>
          Good sleep is the foundation of health and productivity. In this article, we’ll discuss how to create the perfect sleep environment, from adjusting your bedroom lighting and temperature to developing good evening habits. Following these simple steps will help you feel more energized and focused every day.
        </p>
      </>
    ),
  },

  [BlogSlugs.Cooking]: {
    title: "Cooking",
    slug: BlogSlugs.Cooking,
    content: (
      <>
        <h3>The Perfect Morning Smoothie Recipe</h3>
        <p>
          Breakfast is the most important meal of the day, and what could be better than a fresh smoothie? We share a recipe that includes fruits, vegetables, nuts, and superfoods to ensure you get the most nutrients. This smoothie is ready in just 5 minutes and will become your favorite way to start your day!
        </p>
      </>
    )
  },
}