import { Button, Col, Form, Modal, notification, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../features/home/HomeAction';

const DeleteComponent = ((props) => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const close = () => {
        props.close()
    }

    const handleSubmit = () => {
        dispatch(deleteTask(props.visible.id))
        notification.success({ placement: "bottomRight", duration: 3, message: "Task deleted successfully" })
        props.close()
    }

    return (
        <Modal
            visible={props.visible}
            onCancel={close}
            placement='center'
            width={'30%'}
            destroyOnClose={true}
            title='Add Details'
            footer={[
                <div className="text-center">
                    <Button form='deleteform' key={1} className="mr-10" htmlType="submit" type="primary">Delete</Button>
                    <Button key='2' onClick={close}>Cancel</Button>
                </div>
            ]}
        >
            <Form form={form} id="deleteform" onFinish={handleSubmit}>
                {
                    <Row align="middle">
                        <Col span={20}>
                            <h3>Are you sure you want to remove <strong>{props.visible.tital}</strong> Task?</h3>
                        </Col>
                    </Row>
                }
            </Form>
        </Modal>
    )
})

export default DeleteComponent;