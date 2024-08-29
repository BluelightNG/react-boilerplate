import Button from '@components/Button';
import Card from '@components/Card';
import Container from '@components/Container';
import Grid from '@components/Grid';
import Typography from '@components/Typography';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography as="h1">Welcome to the Home Page</Typography>
      <Typography as="p">
        This page uses custom mixins to apply consistent styles across
        components.
      </Typography>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Grid columns={3} gap="24px">
        <Card>
          <Typography as="h2">Card 1</Typography>
          <Typography as="p">
            This is a sample card with grid layout and animations.
          </Typography>
        </Card>
        <Card>
          <Typography as="h2">Card 2</Typography>
          <Typography as="p">
            This card uses the boxShadow, fadeIn, and margin/padding mixins.
          </Typography>
        </Card>
        <Card>
          <Typography as="h2">Card 3</Typography>
          <Typography as="p">
            Cards are responsive and adjust based on screen size.
          </Typography>
        </Card>
      </Grid>
    </Container>
  );
};

export default HomePage;
