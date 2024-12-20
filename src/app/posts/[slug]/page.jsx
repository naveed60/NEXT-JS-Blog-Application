import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
   console.log("ressssss")
    if (!res.ok) {
      throw new Error(`Failed to fetch post with slug: ${slug}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  console.log("dataaaaa",data)

  if (!data) {
    return (
      <div className={styles.container}>
        <h1>Post not found</h1>
        <p>Please check the URL or try again later.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image ? (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.user?.image}
                  alt="User Avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
            ) : (
              <div className={styles.userImageContainer}>
                <Image
                  src="/default-avatar.png"
                  alt="Default Avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data?.img} alt="Post Image" fill className={styles.avatar} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
