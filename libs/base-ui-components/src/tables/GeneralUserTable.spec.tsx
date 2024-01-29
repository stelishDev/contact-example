import React from 'react';
import { render } from '@testing-library/react';
import { GeneralUserTable, GeneralUserTableData } from './GeneralUserTable';

test('renders table with data', () => {
  const testData: GeneralUserTableData[] = [
    { field1: 'test', field2: 'suite', field3: 'option1' },
  ];
  const { container } = render(<GeneralUserTable data={testData} />);
  expect(container.querySelector('table')).toBeInTheDocument();
});

test('renders table with empty data', () => {
  const { container } = render(<GeneralUserTable data={[]} />);
  expect(container.querySelector('table')).toBeInTheDocument();
});
