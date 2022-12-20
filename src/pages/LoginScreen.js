import React, { useState } from 'react'
import { Card, Form, Input, Button, Popover } from 'antd'
import { useDispatch } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { Link } from 'react-router-dom'

const Login = () => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const [tooltip, setTooltip] = useState(false)

	const dispatch = useDispatch()

	// make function call to login
	const handleSubmit = (data) => {
		setLoading(true)
		dispatch(userLogin(data))
	}

	// password criteria tool tip
	const passwordTooltip = (
		<div>
			<div>at least 1 numeric character</div>
			<div>at least 1 special character</div>
			<div>at least 1 uppercase letter</div>
			<div>at least 8  character</div>
		</div>
	);

	// handle password tool tip visiblility
	const handleChangePassword = (e) => {
		form.validateFields(['password']).then(() => {
			setTooltip(false)
		}).catch(() => {
			setTooltip(true)
		})
	}

	return (
		<div className="login__wrapper" style={{ width: '410px', margin: '50px auto' }}>
			<Form form={form} onFinish={handleSubmit}>
				<Card title="Login">
					<Form.Item name="email" rules={[{ required: true, message: "Email Address cannot be empty." }, { pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i, message: "Invalid email address, please enter the valid email address" }]} hasFeedback>
						<Input placeholder="Email Address" />
					</Form.Item>
					<Popover placement="topRight" content={passwordTooltip} visible={tooltip}>
						<Form.Item name="password" rules={[{ required: true, message: "Password cannot be empty." }, { pattern: /(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/, message: "Password entry does not meet criteria." }]} hasFeedback >
							<Input.Password placeholder="Password" onBlur={() => setTooltip(false)} onChange={handleChangePassword} onFocus={handleChangePassword} />
						</Form.Item>
					</Popover>
					<div className="text-center">
						<Button loading={loading} htmlType="submit" block type="primary">LOGIN</Button>
					</div>
					<div className="d-flex justify-content-end" style={{ marginTop: '10px' }}>
						<Link to="/register" type="link" style={{ float: 'right' }}><b>Register Now!</b></Link>
					</div>
				</Card>
			</Form>
		</div>
	)
}

export default Login
