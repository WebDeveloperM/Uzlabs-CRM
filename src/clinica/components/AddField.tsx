import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};


export default function AddField() {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    return (
        <Form
            name="dynamic_form_item"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.List
                name="names"
                rules={[
                    {
                        validator: async (_, names) => {
                            if (!names || names.length < 2) {
                                return Promise.reject(new Error('At least 2 passengers'));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field, index) => (
                            <>
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Home' : ''}
                                    required={false}
                                    key={field.key}
                                    className='py-0'
                                >

                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Maydonni to'ldirish majburiy",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="passenger name" className='focus:ring-1 focus:ring-secondary focus:outline-none' style={{ width: '60%' }} />
                                    </Form.Item>
                                </Form.Item>
                                {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => remove(field.name)}
                                    />
                                ) : null}

                            </>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                style={{ width: '60%' }}
                                className='m-0 p-0'
                                icon={<PlusOutlined />}
                            >
                                Maydon qo'shish
                            </Button>

                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
}



