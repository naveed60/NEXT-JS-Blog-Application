import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res.ok) {
    return {
      props: {
        error: "Failed to load categories",
        data: [],
      },
    };
  }
  const data = await res.json();

  return {
    props: { data },
  };
}

const CategoryList = ({ data, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src="/style.png"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`} >
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`} >
          <Image
            src="/food.png"
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`} >
          <Image
            src="/travel.png"
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`} >
          <Image
            src="/culture.png"
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`} >
          <Image
            src="/coding.png"
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
