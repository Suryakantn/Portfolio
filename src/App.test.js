import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the LinkedIn profile details', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hi, I’m Suryakant Nirmal/ })).toBeInTheDocument();
  expect(screen.getByText('Building Scalable FinTech Platforms.')).toBeInTheDocument();
  expect(screen.getByText(/7\+ years of experience/)).toBeInTheDocument();
  expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer II')).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: 'Finicity, a Mastercard Company' })).toHaveLength(1);
  expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  expect(screen.getAllByText('RESTful APIs').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Code Review').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Snowflake').length).toBeGreaterThan(0);
  expect(screen.getAllByText('SonarQube').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Continuous Integration (CI)').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Angular Material').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Bitbucket').length).toBeGreaterThan(0);
  expect(screen.getAllByText('JavaServer Pages (JSP)').length).toBeGreaterThan(0);
  expect(screen.getByText(/Created an Express\.js automation tool integrated with GitLab, Snowflake, and Jira/)).toBeInTheDocument();
  expect(screen.getByText(/Created development and staging environments/)).toBeInTheDocument();
  expect(screen.getByText(/Implemented small modules to enhance the platform/)).toBeInTheDocument();
  expect(screen.getAllByText('Spring Boot').length).toBeGreaterThan(0);
  expect(screen.getByText('Best Roorki Award — Robocon 2017')).toBeInTheDocument();
});
