import { fetchPostBySlug } from '@/lib/posts.js';
import Container from "@/app/components/Container";
import styles from './page.module.scss';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug( slug );

  return (
    <Container>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </Container>
  );
};
