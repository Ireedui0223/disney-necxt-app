import { GetServerSideProps } from 'next';
import { Fragment, useState } from 'react';

interface BlogsPageProps {
  post: {
    id: number;
    title: string;
    description: string;
    height: string;
    countries: [];
    continent: string;
    image: string;
    dir: string;
    path: string;
    updatedAt: string;
  };
}

const Blogs = (props: BlogsPageProps[]) => {
  const [storePosts, setPosts] = useState<BlogsPageProps[]>(props || []);

  const addPost = (post: BlogsPageProps) => {
    const tuple: BlogsPageProps[] = storePosts;

    setPosts([...tuple, post]);
    // setPosts(posts => [...posts, {
    //   id: 10,
    //   title: "qwe",
    //   description: "Qwe",
    //   height: "string",
    //   countries: [],
    //   continent: "",
    //   image: "string",
    //   dir: "",
    //   path: "string",
    //   updatedAt: "string"
    // }])
  }
  // console.log('====================================');
  // console.log(storePosts);
  // console.log('====================================');
  return (<Fragment>
    {/* {storePosts.map(post => {
      return <div key={`${post.id}-post`}>
        {post.description || ""}
        {post.countries.map((country, key) =>
          <div key={`${key}-country`}>{country}</div>
        )}
      </div>
    })} */}
    <p>qwe</p>
    {/* <button onClick={addPost}>addPosts</button> */}
  </Fragment>
  )
}

export default Blogs;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.nuxtjs.dev/posts');
  const posts: BlogsPageProps[] = await res.json();

  return {
    props: {
      posts
    }
  }
}
