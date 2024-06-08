/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState, ChangeEvent } from 'react';
import { MainLayout } from 'src/layouts';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, Grid } from '@mui/material';
import useFetchData from '../../hooks/fetchData';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const SearchList: React.FC = () => {
  const { data } = useFetchData();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Post[]>(data);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleButtonClick = (): void => {
    filterData(searchTerm);
  };

  const filterData = (value: string) => {
    const filtered = data.filter(
      (post: Post) =>
        post.title.toLowerCase().includes(value) || // if title matches then show the item
        post.body.toLowerCase().includes(value) || // if body matches then show the item
        post.userId.toString().includes(value), // if userId matches then show the item
    );
    setFilteredData(filtered);
  };
  const theme = useTheme();
  return (
    <MainLayout>
      <div className="flex items-center justify-center my-12">
        <TextField
          id="outlined-basic"
          label="search items here from the api..."
          variant="outlined"
          onChange={handleInputChange}
          value={searchTerm}
          sx={{ width: 400, mx: 3 }}
        />
        <Button
          variant="contained"
          sx={{ height: 52 }}
          onClick={handleButtonClick}
        >
          search
        </Button>
      </div>
      <ul>
        {/* ui for searching element */}
        <Grid
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {filteredData.map((post: Post) => (
            <Card
              sx={{
                maxWidth: 400,
                mx: 2,
                my: 8,
                boxShadow: 1,
              }}
              key={post.id}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, gap: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {post.userId}
                </Typography>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.primary }}
                >
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </ul>
    </MainLayout>
  );
};

export default SearchList;
