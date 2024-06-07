/* eslint-disable react/function-component-definition */
import React from 'react';
import { MainLayout } from '../../layouts';
import useFetchData from '../../hooks/fetchData';

const PostList: React.FC = () => {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      <div>
        <h1>Posts</h1>
        <ul className="">
          {data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p className="">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default PostList;
