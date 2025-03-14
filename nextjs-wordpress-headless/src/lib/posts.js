import { client } from '@/lib/api';
import {
  GET_POST_BY_SLUG,
  GET_POSTS,
} from './queries';

export async function fetchPostBySlug(slug) {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug },
    });

    return data?.nodeByUri;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return { title: '', content: '' };
  }
}

export async function fetchPostsForHome() {
  try {
    const { data } = await client.query({
      query: GET_POSTS,
    });

    return data?.posts;
  } catch (error) {
    console.error('Error fetching posts for home:', error);
    return { edges: [] };
  }
}
