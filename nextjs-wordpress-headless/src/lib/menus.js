import { client } from '@/lib/api';
import { GET_MENU } from './queries';

export async function fetchMenu() {
  try {
    return await client.query({
      query: GET_MENU,
    });
  } catch (error) {
    console.error('Error fetching menu:', error);
    return { menuItems: { nodes: [] } };
  }
}