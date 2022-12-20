import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, notification } from "antd"
import FormComponent from './FormComponent'
import { useDispatch } from 'react-redux'
import { editTask } from '../../../features/home/HomeAction'

const EditComponent = ((props) => {
    const [form] = Form.useForm()
    const [saving, setSaving] = useState(false)
    const [isDisabled, setDisabled] = useState(true)
    const dispatch = useDispatch()
    const close = () => {
        setDisabled(true)
        setSaving(false)
        form.resetFields()
        props.close()
    }

    const handleChange = () => {
        form.validateFields().then((data) => {
            setDisabled(false)
        }).catch(e => {
            if (e.errorFields && e.errorFields.length > 0) {
                setDisabled(true)
            }
        })
    }

    const handleSubmit = (data) => {
        setSaving(true)
        dispatch(editTask({ ...data, id: props.visible.id }))
        notification.success({ placement: "bottomRight", duration: 3, message: "Task updated successfully" })
        props.close()
    }

    useEffect(() => {
        form.setFieldsValue({
            tital: props.visible.tital,
            desc: props.visible.desc,
            status: props.visible.status
        })
    }, [form, props.visible])

    return (
        <Modal
            visible={props.visible}
            onCancel={close}
            placement='center'
            width={'30%'}
            destroyOnClose={true}
            title='Edit Details'
            footer={[
                <div className="text-center">
                    <Button form='addEditForm' key={1} className="mr-10" loading={saving} htmlType="submit" type="primary" disabled={isDisabled}>Update</Button>
                    <Button onClick={close} key={2}>Cancel</Button>
                </div>
            ]}
        >
            <FormComponent
                form={form}
                handleChange={handleChange}
                onFinish={handleSubmit}
                setDisabled={setDisabled}
            />
        </Modal>
    )
})

export default EditComponent