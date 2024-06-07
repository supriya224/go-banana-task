import React from 'react';
import PostList from 'src/components/core/PostList';
import { MainLayout } from 'src/layouts';

function HomePage() {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
}

export default HomePage;
