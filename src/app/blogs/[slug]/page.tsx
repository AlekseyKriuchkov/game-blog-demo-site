import {Article} from "@/components/article/article";

type Props = {
  params: {
    slug: string
  }
}

export default async function ArticlePage ({params}: Props)  {
  return <Article params={params} />
};
