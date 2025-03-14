import Container from "./components/Container";
import Link from 'next/link';
import Image from 'next/image';
import { fetchPostsForHome } from "@/lib/posts";
import styles from './page.module.scss';

export default async function Home() {
  const posts = await fetchPostsForHome();

  return (
    <Container>
      <h1>Headless WP</h1>
      <div>
        <h2>Blog</h2>
        <div className={styles.articleList}>
          {posts.edges.map((post) => (
            <article className={styles.article} key={post.node.id}>
              {null != post.node.featuredImage ? (
                <div>
                  <div className={post.node.featuredImage.node.sourceUrl} />
                  <Image 
                    src={post.node.featuredImage.node.sourceUrl}
                    alt={post.node.title}
                    width={post.node.featuredImage.node.mediaDetails.width}
                    height={post.node.featuredImage.node.mediaDetails.height}
                    srcSet={post.node.featuredImage.node.srcSet}
                  />
                </div>
              ) : (
                <Image 
                  src="/default-thumbnail.png"
                  alt="Default Thumbnail"
                  width={500}
                  height={300}
                />
              )}
              <Link href={`/${post.node.slug}`} className="">
                <h3>{post.node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};
