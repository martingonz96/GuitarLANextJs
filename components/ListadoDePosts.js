import Post from '../components/post'

import styles from "../styles/blog.module.css"

export default function ListadoDePosts({posts}) {
  return (
    <>
    <h2 className='heading'>Blog</h2>
    <div className={styles.blog}>
      {posts.map(post =>{
       return <Post
       post={post.attributes}
       key={post.id}
       />
      })}
    </div>
    </>
  )
}
