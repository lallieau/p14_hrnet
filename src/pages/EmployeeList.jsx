import styled from 'styled-components';
import { EmployeeTable } from '../components/EmployeeTable';
import { Layout } from '../components/Layout';

const Title = styled.h1`
  margin-top: 46px;
  text-align: center;
`;

export const EmployeeList = () => {
  return (
    <Layout title="HRnet | Employee List">
      <Title>Employee List</Title>
      <EmployeeTable />
    </Layout>
  );
};
