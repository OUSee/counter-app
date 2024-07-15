
import styles from "./styles.module.css"


interface iPost{
    key: string,
    post: Post
}

export const Post = ({post }: iPost) => {

    return (
        <div className={styles.postContainer}>
            <h2 className={styles.postName}>{post.title.toUpperCase()}</h2>
            <p className={styles.postBody}>{post.body}</p>
            <span className={styles.postId}>POST ID: { post.id }</span>
        </div>
    )
}