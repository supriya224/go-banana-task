/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useFetchData from '../../hooks/fetchData';
import { MainLayout } from '../../layouts';

const PostList: React.FC = () => {
  // fetch data from hooks
  const { data, loading, error } = useFetchData();

  // if data is available then fetch data and show loading
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  // if data is not available then fetch data and show error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // mainlayout imported from layout
    <MainLayout>
      {/* I have grid component from the material ui */}
      <Grid
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* fetching data from the hooks and use map to create new array and store to the data */}
        {data.map((post) => (
          <Card //  I have card component from the material ui
            sx={{
              maxWidth: 400,
              mx: 2,
              my: 8,
              boxShadow: 6,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 3,
            }}
            key={post.id}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14, gap: 12 }} gutterBottom>
                {post.userId}
              </Typography>
              <Typography variant="h6" component="div">
                {post.title}
              </Typography>

              <Typography variant="body2">{post.body}</Typography>
              <CardActions>
                {/*  I have Button component from the material ui */}
                <Button size="large">View More</Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default PostList;
