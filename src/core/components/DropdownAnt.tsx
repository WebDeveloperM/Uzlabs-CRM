import { ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={"/"} rel="noopener noreferrer">
                <span className={`origin-left text-base group-hover:text-secondary  duration-200 text-secondary`}>Signout</span>
            </Link>
        ),
    },

];

type Props = {
    children: ReactNode
}

export default function DropdownAnt({ children }: Props) {
    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown menu={{ items }} placement="topRight">
                    <Button className='btn-dropdown  '>
                        {children}
                    </Button>
                </Dropdown>
            </Space>
        </Space>
    )
}


