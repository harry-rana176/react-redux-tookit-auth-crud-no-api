import React, { useState, useEffect } from 'react'
import { Layout, Spin } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RouterConfig } from '../config/RouterConfig';
import Header from './Header'

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
    const { userToken, loading } = useSelector((state) => state.auth)
    const [setting, setSetting] = useState(null)
    const [internalLoader, setInternalLoader] = useState(true)

    let navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        if (!loading) {
            const redirectDefault = RouterConfig.find(x => x.default)
            const redirectAuthDefault = RouterConfig.find(x => x.authdefault)

            let path = RouterConfig.find(x => x.path === location.pathname.trimRight('/'))
            if (path && path.auth && userToken === null) {
                navigate(redirectDefault.path)
            } else if (path && !path.auth && userToken && !path.errorpage) {
                navigate(redirectAuthDefault.path)
            }
        } else {
            setInternalLoader(true)
        }
        let route = RouterConfig.find(x => x.path === location.pathname.trimRight('/'))
        if (route && route.setting) {
            setSetting(route.setting)
        } else {
            if (setting === null) { setSetting({ header: true, nav: true }) }
        }
        setTimeout(() => {
            setInternalLoader(false)
        }, 500)
    }, [loading, location, userToken, navigate, setting])

    return (loading || internalLoader) ? (
        <div className="fullscreen__spinner">
            <Spin size="large" />
        </div>
    ) : (
        <Layout className="main__layout__wrapper">
            <Layout className="site-layout">
                {/* {
					(userToken && setting && setting.header && (
						<HeaderComponent logout={Logout} user={user} collapsed={collapsed} setCollapsed={setCollapsed} />
					))
				} */}
                {(userToken && setting && setting.nav && (
                    <Header />
                ))}

                {(userToken && setting && (setting.header || setting.nav)) ? (
                    <Content
                        className="site-layout-background"
                        style={{
                            paddingTop: 15,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingBottom: 24,
                            minHeight: 280,
                            height: '100%'
                        }}
                    >
                        {children}
                    </Content>
                ) : (<>{children}</>)}
            </Layout>
        </Layout>
    )
}

export default LayoutComponent