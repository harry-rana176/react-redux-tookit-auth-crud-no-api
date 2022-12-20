import React from 'react'
import PageNotFound from '../pages/PageNotFound'
import { Routes, Route } from 'react-router-dom'
import { RouterConfig } from '../config/RouterConfig'
import { useSelector } from 'react-redux'

const AppRouter = () => {
    const { userToken } = useSelector((state) => state.auth)
    return (
        <Routes>
            {
                RouterConfig.map((item, index) => {
                    var exact = true
                    if (item.errorpage === true) {
                        exact = false
                    }
                    if (userToken && item.errorpage && [].includes(item.path)) {
                        return <Route key={index} exact={exact} path={item.path} element={<PageNotFound />} />
                    } else {
                        return <Route key={index} exact={exact} path={item.path} element={<item.component />} />
                    }

                })
            }
        </Routes>
    )
}

export default AppRouter
