import { Button, Space, Table } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddComponent from './component/AddComponent';
import DeleteComponent from './component/DeleteComponent';
import EditComponent from './component/EditComponent';

const Dashboard = () => {
	const { taskList } = useSelector((state) => state.home)
	const [addVisible, setAddVisible] = useState(false)
	const [editVisible, setEditVisible] = useState(false)
	const [deleteVisible, setDeleteVisible] = useState(false)

	const openEditModal = (data) => {
		setEditVisible(data)
	}

	const closeEditModal = () => {
		setEditVisible(false)
	}

	const openAddModal = () => {
		setAddVisible(true)
	}

	const closeAddModal = () => {
		setAddVisible(false)
	}

	const openDeleteModal = (data) => {
		setDeleteVisible(data)
	}

	const closeDeleteModal = () => {
		setDeleteVisible(false)
	}

	const columns = [
		{
			tital: 'SR. No',
			key: 'sr_no',
			render: (_, record, index) => (
				index + 1
			)
		},
		{
			title: 'Task Name',
			dataIndex: 'tital',
			key: 'tital',
		},
		{
			title: 'Task Decription',
			dataIndex: 'desc',
			key: 'desc',
		},
		{
			title: 'Task Status',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button type="primary" onClick={() => openEditModal(record)}>Edit</Button>
					<Button type="primary" onClick={() => openDeleteModal(record)} danger>Delete</Button>
				</Space>
			),
		},
	];

	return (
		<>
			<Button type="primary" style={{ marginLeft: 'auto', display: 'table', marginBottom: '10px' }} onClick={openAddModal}>Add</Button>
			<Table dataSource={taskList} columns={columns} />
			<AddComponent visible={addVisible} close={closeAddModal} />
			<EditComponent visible={editVisible} close={closeEditModal} />
			<DeleteComponent visible={deleteVisible} close={closeDeleteModal} />
		</>
	)
}

export default Dashboard
