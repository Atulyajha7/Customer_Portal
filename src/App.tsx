import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import './styles.css';

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Customer Details</h1>
      </div>
      <div className="content-container">
        <CustomerList
          selectedCustomer={selectedCustomer}
          onSelectCustomer={setSelectedCustomer}
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;


