import { memo } from 'react';
import styled from 'styled-components';

interface RowSelectorProps {
  value: number;
  options: number[];
  onChange: (value: number) => void;
}

export const RowSelector = memo<RowSelectorProps>(
  ({ value, options, onChange }) => (
    <Container>
      <Label htmlFor="rowSelector">Rows per page:</Label>
      <Select
        id="rowSelector"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  ),
);

RowSelector.displayName = 'RowSelector';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #6b7280;
  font-size: 0.875rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background: white;
  color: #374151;
  cursor: pointer;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;
