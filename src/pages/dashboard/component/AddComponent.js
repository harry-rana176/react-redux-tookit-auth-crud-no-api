import React, { useState } from 'react'
import { AddTask } from '../../../features/home/HomeAction'
import { Button, Form, Modal, notification } from "antd"
import FormComponent from './FormComponent'
import { useDispatch } from 'react-redux'

const AddComponent = ((props) => {
	const [form] = Form.useForm()
	const [saving, setSaving] = useState(false)
	const [isDisabled, setDisabled] = useState(true)
	const dispatch = useDispatch()

	const close = () => {
		setDisabled(true)
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
		dispatch(AddTask(data))
		notification.success({ placement: "bottomRight", duration: 3, message: "Task added successfully" })
		close()
		setSaving(false)
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
					<Button form='addEditForm' key={1} className="mr-10" loading={saving} htmlType="submit" type="primary" disabled={isDisabled}>Save</Button>
					<Button key='2' onClick={close}>Cancel</Button>
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

export default AddComponent