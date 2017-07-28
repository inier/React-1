import React,{Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd'

const { Header } = Layout;

export default class headers extends Component{
	render(){
		return (
		<Header className="header" >
				<div className="logo"/>
				<h1 style={{color: 'white', }}>景城品雅苑 积分管理系统</h1>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				style={{ lineHeight: '64px' }}
			>
				{/* <Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>
				<Menu.Item key="3">nav 3</Menu.Item>
				<Menu.Item key="4">nav 3</Menu.Item> */}
			</Menu>
		</Header>
		)
	}
}