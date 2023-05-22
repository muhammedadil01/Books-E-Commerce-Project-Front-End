
import Headernav from './Headers/Headernav';
import {  Route, Routes } from "react-router-dom"
import Registerform from './Headers/Registerform';
import Loginform from './Headers/Loginform';
import Home from './Headers/Home';
import BookTable from './BodyComponentes/BookTable';
import CreateBook from './BodyComponentes/CreateBook';
import Read from './BodyComponentes/CRUD/Read';
import Update from './BodyComponentes/CRUD/Update';
import CreateClient from './BodyComponentes/Client/CreateClient';
import Client from './BodyComponentes/Client/Client';
import ClientRead from './BodyComponentes/Client/Client CRUD/ClientRead';
import ClientUpdate from './BodyComponentes/Client/Client CRUD/ClientUpdate';
import Createcustomer from './BodyComponentes/Customer/Createcustomer';
import CustomerTable from './BodyComponentes/Customer/CustomerTable';
import CustomerRead from './BodyComponentes/Customer/Customer CRUD/CustomerRead';
import CustomerUpdate from './BodyComponentes/Customer/Customer CRUD/CustomerUpdate';
import CreateTeamMember from './BodyComponentes/Team Member/CreateTeamMember';
import TeamMemberTable from './BodyComponentes/Team Member/TeamMemberTable';
import TeamMemberRead from './BodyComponentes/Team Member/TeamMember CRUD/TeamMemberRead';
import TeamMemberUpdate from './BodyComponentes/Team Member/TeamMember CRUD/TeamMemberUpdate';
import OrderCreate from './BodyComponentes/Order/OrderCreate';
import OrderTable from './BodyComponentes/Order/OrderTable';
import OrderRead from './BodyComponentes/Order/Order CRUD/OrderRead';
import OrderUpdate from './BodyComponentes/Order/Order CRUD/OrderUpdate';
import UserRegister from './Headers/UserRegister';
import UserLogin from './Headers/UserLogin';
import UserHome from './Headers/UserHome';
import BookCart from './Headers/BookCart';

function App() {



  
  return (
    <div>
      
        <Headernav/>
      <Routes>
        <Route path='/navabar' element={<Headernav/>}/>
        <Route path='/Adminregister' element={<Registerform/>} />
        <Route path='/Adminlogin' element={<Loginform/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/booktable' element={<BookTable/>}/>
        <Route path='/createbook' element={<CreateBook/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/createclient' element={<CreateClient/>}/>
        <Route path='/clienttable' element={<Client/>}/>
        <Route path='/clientread/:id' element={<ClientRead/>}/>
        <Route path='/clientupdate/:id' element={<ClientUpdate/>}/>
        <Route path='/customercreate' element={<Createcustomer/>}/>
        <Route path='/customertable' element={<CustomerTable/>}/>
        <Route path='/customerread/:id' element={<CustomerRead/>}/>
        <Route path='/customerupdate/:id' element={<CustomerUpdate/>}/>
        <Route path='/createteammember' element={<CreateTeamMember/>}/>
        <Route path='/teammembertable' element={<TeamMemberTable/>}/>
        <Route path='/teammemberread/:id' element={<TeamMemberRead/>}/>
        <Route path='/teammemberupdate/:id' element={<TeamMemberUpdate/>}/>
        <Route path='/createorder' element={<OrderCreate/>}/>
        <Route path='/ordertable' element={<OrderTable/>}/>
        <Route path='/orderread/:id' element={<OrderRead/>}/>
        <Route path='/orderupdate/:id' element={<OrderUpdate/>}/> 
        <Route path='/userregister' element={<UserRegister/>} />
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/bookcart' element={<BookCart/>}/>
      </Routes>
      
         
    </div>
  );
}

export default App;
