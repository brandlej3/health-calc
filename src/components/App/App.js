import React from 'react';
import './App.css';
import { Form } from './../Form/Form';
import Header from './../Header/Header';
import { Macro } from './../Macro/Macro';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export const App = () =>
  (
    <div>
      < Header />
      <Tabs>
        <TabList className="tabholder">
          <Tab className="tabs">Calories</Tab>
          <Tab className="tabs">Macros</Tab>
        </TabList>
        <TabPanel>
            < Form />
        </TabPanel>
        <TabPanel>
            < Macro />
        </TabPanel>
      </Tabs>
    </div>
  )