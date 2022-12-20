import { Col, Form, Input, Row, Select } from 'antd';
import React from 'react'
const { Option } = Select;

const FormComponent = ({ form, onFinish, handleChange }) => {
    return (
        <Form
            form={form}
            id='addEditForm'
            layout='vertical'
            onFinish={onFinish}
        >
            <Row gutter={24}>
                <Col span={24}>
                    <Form.Item
                        name="tital"
                        label="Tital"
                        onChange={handleChange}
                        rules={[
                            {
                                required: true,
                                message: 'Tital is required'
                            },
                        ]}
                    >
                        <Input placeholder='Enter Tital' />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="desc"
                        label="Decription"
                        onChange={handleChange}
                        rules={[
                            {
                                required: true,
                                message: 'Decription is required'
                            },
                        ]}
                    >
                        <Input placeholder='Enter Decription' />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select status"
                            onChange={handleChange}
                            allowClear={false}
                        >
                            <Option value="compeleted">Compeleted</Option>
                            <Option value="incompeleted">Incompeleted</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form >
    )
}

export default FormComponent