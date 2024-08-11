import React from 'react';
import {Customer} from '../types';

interface CustomerCardProps {
  customer: Customer;
  onSelect: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({customer, onSelect, isSelected}) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
