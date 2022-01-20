import { Tabs } from 'antd';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab5 from './Lab5';

const { TabPane } = Tabs;

const TabList = () => {
    return (
    <Tabs defaultActiveKey="1" type="card" size="small">
    <TabPane tab="Лабораторна робота 1" key="1">
    <Lab1/>
    </TabPane>
    <TabPane tab="Лабораторна робота 2" key="2">
    <Lab2/>
    </TabPane>
    <TabPane tab="Лабораторна робота 3" key="3">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 4" key="4">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 5" key="5">
     <Lab5/>
    </TabPane>
    <TabPane tab="Лабораторна робота 6" key="6">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 7" key="7">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 8" key="8">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 9" key="9">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 10" key="10">
      Content of card tab 10
    </TabPane>
    </Tabs>
)};

export default TabList;