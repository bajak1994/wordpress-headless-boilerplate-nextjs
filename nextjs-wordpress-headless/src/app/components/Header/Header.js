import { fetchMenu } from '@/lib/menus.js';
import Link from 'next/link';
import styles from './Header.module.scss';

export default async function Header() {
  const { data } = await fetchMenu();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menuTop}>
          {data.menuItems.nodes.map((item) => (
            <li key={item.key} className={styles.menuItem}>
              <Link href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
  