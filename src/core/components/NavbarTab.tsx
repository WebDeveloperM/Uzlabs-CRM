import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import NavbarTabItem from './NavbarTabItem';


const App: React.FC = () => (
    <Tabs
        defaultActiveKey="2"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);
            return {
                key: id,
                label: `Tab ${id}`,
                children: <NavbarTabItem data={"Hello guys"} />,
                icon: <Icon />,
            };
        })}
    />
);

export default App;