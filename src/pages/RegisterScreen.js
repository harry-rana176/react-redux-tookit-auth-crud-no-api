import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Form, Input, Button, Popover } from 'antd'
import { registerUser } from '../features/auth/authActions'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
	const [form] = Form.useForm()
	const [tooltip, setTooltip] = useState(false)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	// make function call to login
	const handleSubmit = (data) => {
		setLoading(true)
		dispatch(registerUser(data))
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
				<Card title="Register">
					<Form.Item name="username" rules={[{required: true, message: 'Username can not be empty'}]}>
						<Input placeholder='username' />
					</Form.Item>
					<Form.Item name='full_name' rules={[{required: true, message: 'Full Name can not be empty'}]}>
						<Input placeholder='Enter your Full Name' />
					</Form.Item>
					<Form.Item name="email" rules={[{ required: true, message: "Email Address cannot be empty." }, { pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i, message: "Invalid email address, please enter the valid email address" }]}>
						<Input placeholder="Email Address" />
					</Form.Item>
					<Popover placement="topRight" content={passwordTooltip} visible={tooltip}>
						<Form.Item name="password" rules={[{ required: true, message: "Password cannot be empty." }, { pattern: /(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/, message: "Password entry does not meet criteria." }]} hasFeedback >
							<Input.Password placeholder="Password" onBlur={() => setTooltip(false)} onChange={handleChangePassword} onFocus={handleChangePassword} />
						</Form.Item>
					</Popover>
					<Form.Item name="cn_password" rules={[{ required: true, message: "Password cannot be empty." }, { pattern: /(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/, message: "Password entry does not meet criteria." }]} hasFeedback >
							<Input.Password placeholder="Password" onBlur={() => setTooltip(false)} onChange={handleChangePassword} onFocus={handleChangePassword} />
						</Form.Item>
					<div className="text-center">
						<Button loading={loading} htmlType="submit" block type="primary">Register</Button>
					</div>
					<div className="d-flex justify-content-end" style={{ marginTop: '10px' }}>
						<Link to="/" type="link" style={{ float: 'right' }}><b>Already have an account?</b></Link>
					</div>
				</Card>
			</Form>
		</div>
	)
}

export default RegisterScreen
