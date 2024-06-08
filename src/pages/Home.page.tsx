import React from 'react';
import PostList from 'src/components/core/PostList';
import SearchList from 'src/components/core/SearchList';
import { MainLayout } from 'src/layouts';

function HomePage() {
  return (
    <MainLayout>
      <SearchList />
      <PostList />
    </MainLayout>
  );
}

export default HomePage;
