import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { LayoutWrapper, OutletWrapper, MainLayout } from './style-components/Wrapper'

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideBar />

      <MainLayout>

        <Header />

        <OutletWrapper>
          <Outlet />
        </OutletWrapper>

      </MainLayout>

    </LayoutWrapper>
  )
}

export default Layout

// outlet -> tıklandığında yansıtılacak componentleri temsil eder.
// outlet'i nerede tanımlarsan yerine geçecek componentler de oraya yazdırılır.