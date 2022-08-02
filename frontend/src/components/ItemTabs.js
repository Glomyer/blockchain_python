import React from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import ItemList from '../components/ItemList';

export default function ItemTabs() {
  return (
    <>
      <h1 className="py-5">List of Items</h1>
      <Tabs 
        fill 
        justify 
        defaultActiveKey="myItems" 
        id="uncontrolled-tab-example" 
        className="mb-3"
      >
        <Tab eventKey="myItems" title="My Inventory">
          <h1>A</h1>
        </Tab>
        <Tab eventKey="globalItems" title="Global Items">
          <h1>B</h1>
        </Tab>
      </Tabs>
    </>
  );
}
