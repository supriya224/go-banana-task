import PostList from 'src/components/core/PostList';
import SearchList from 'src/components/core/SearchList';
import { MainLayout } from 'src/layouts';

function HomePage() {
  return (
    <MainLayout>
      {/* search components */}
      <SearchList />
      {/* postlist components */}
      <PostList />
    </MainLayout>
  );
}

export default HomePage;
