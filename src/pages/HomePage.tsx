import Button from '@components/button/Button';
import Card from '@components/card/Card';
import Container from '@components/container/Container';
import Grid from '@components/grid/Grid';
import { Input } from '@components/input/input';
import { BasicModal } from '@components/modal/basic-modal';
import { Table } from '@components/table/table';
import { Column } from '@components/table/types';
import Typography from '@components/typography/Typography';
import React, { useState } from 'react';
import { toast } from 'sonner';
import styled from 'styled-components';
import { Search, Mail, Lock } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const mockData: User[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? 'Admin' : 'User',
  status: index % 4 === 0 ? 'inactive' : 'active',
  lastLogin: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
}));

const columns: Column<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (user: any) => (
      <span
        style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          backgroundColor: user.status === 'active' ? '#dcfce7' : '#fee2e2',
          color: user.status === 'active' ? '#166534' : '#991b1b',
        }}
      >
        {user.status}
      </span>
    ),
  },
  {
    key: 'lastLogin',
    header: 'Last Login',
    render: (user) => new Date(user.lastLogin).toLocaleDateString(),
  },
];

const HomePage: React.FC = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Typography as="h1">Welcome to the Home Page</Typography>
      <Typography as="p">
        This page uses custom mixins to apply consistent styles across
        components.
      </Typography>
      <Button
        variant="primary"
        onClick={() => {
          toast.success('Success!', {
            description: 'This is a success description',
          });
          toast.info('Info', { description: 'This is an info description' });
          toast.error('Error', { description: 'This is an error description' });
          toast.warning('Warning', {
            description: 'This is a warning description',
          });
        }}
      >
        Primary Button
      </Button>
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
      <Button variant="secondary" onClick={() => setBasicModalOpen(true)}>
        Basic Modal
      </Button>

      <BasicModal
        isOpen={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        title="Welcome!"
        content="This is a basic modal that can be used for simple messages or notifications. Click anywhere outside or the close button to dismiss."
      />

      <Section>
        <Title>Data Table Example</Title>
        <Table
          data={mockData}
          columns={columns}
          pageSize={10}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Section>

      <Input
        label="Search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        icon={<Search size={20} />}
        size="large"
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail size={20} />}
        helperText="We'll never share your email."
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock size={20} />}
        error
        helperText="Password must be at least 8 characters"
        size="small"
      />
    </Container>
  );
};

export default HomePage;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 2rem;
`;
