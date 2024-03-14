import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom'




function Home() {

  return (
   
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:'sticky', top:'0' }}>
    <CDBSidebar textColor="white" backgroundColor="#ff2b24" >
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/booktable" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Books</CDBSidebarMenuItem>
          </NavLink>
          <NavLink to="/createbook"  activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table"  >Create Book</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/clienttable" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Client</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/createclient" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="users">Create Client</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/customertable" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="address-card">Customer</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/customercreate" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="calendar-plus">Create Customer</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/teammembertable" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="fas fa-user-pen">Team Member</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/createteammember" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="fas fa-user-plus">Create Team Member</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/ordertable" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="align-left">Order</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/createorder" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="align-center">Create Order</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
    
  </div>
  
   
  )
}

export default Home