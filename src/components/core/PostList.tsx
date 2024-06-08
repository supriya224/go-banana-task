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
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      {/* <CustomCard> */}
      <ul className="">
        <Grid
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data.map((post) => (
            <Card
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
                  {/* <CustomTypography variant="h6"> */}
                  {post.userId}
                  {/* </CustomTypography> */}
                </Typography>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>

                <Typography variant="body2">{post.body}</Typography>
                <CardActions>
                  <Button size="large">View More</Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </ul>
    </MainLayout>
  );
};

export default PostList;
