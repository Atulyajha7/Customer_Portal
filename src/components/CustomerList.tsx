import React, { useEffect, useState } from 'react';
import CustomerCard from './CustomerCard';
import { Customer } from '../types';

const CustomerList: React.FC<{ onSelectCustomer: (customer: Customer) => void; selectedCustomer: Customer | null; }> = ({ onSelectCustomer, selectedCustomer }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      const extendedData = Array.from({ length: 10 }).flatMap(() => data);

      const customerData = extendedData.map((user: any, index: number) => ({
        id: index + 1, 
        name: user.name,
        title: user.company.catchPhrase,
        address: `${user.address.street}, ${user.address.city}`,
      }));
      
      setCustomers(customerData);
    };

    fetchCustomers();
  }, []);

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onSelect={() => onSelectCustomer(customer)}
          isSelected={selectedCustomer?.id === customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerList;



