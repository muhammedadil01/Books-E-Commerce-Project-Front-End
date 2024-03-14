
import Headernav from './Componentes/clientComponent/Headernav';
import {  Route, Routes } from "react-router-dom"
import Registerform from './Componentes/authenticationComponents/adminAuthentication/Registerform';
import Loginform from './Componentes/authenticationComponents/adminAuthentication/Loginform';
import Home from './Componentes/clientComponent/Home';
import BookTable from './Componentes/adminComponents/Books/BookTable';
import CreateBook from './Componentes/adminComponents/Books/CreateBook';
import BookRead from './Componentes/adminComponents/Books/BooksRead';
import CreateClient from './Componentes/adminComponents/clientSection/CreateClient';
import Client from './Componentes/adminComponents/clientSection/Client';
import ClientRead from './Componentes/adminComponents/clientSection/ClientRead';
import ClientUpdate from './Componentes/adminComponents/clientSection/ClientUpdate';
import Createcustomer from './Componentes/adminComponents/customerSection/Createcustomer';
import CustomerTable from './Componentes/adminComponents/customerSection/CustomerTable';
import CustomerRead from './Componentes/adminComponents/customerSection/CustomerRead';
import CustomerUpdate from './Componentes/adminComponents/customerSection/CustomerUpdate';
import CreateTeamMember from './Componentes/adminComponents/teamMemberSection/CreateTeamMember';
import TeamMemberTable from './Componentes/adminComponents/teamMemberSection/TeamMemberTable';
import TeamMemberRead from './Componentes/adminComponents/teamMemberSection/TeamMemberRead';
import TeamMemberUpdate from './Componentes/adminComponents/teamMemberSection/TeamMemberUpdate';
import OrderCreate from './Componentes/adminComponents/orderSection/OrderCreate';
import OrderTable from './Componentes/adminComponents/orderSection/OrderTable';
import OrderRead from './Componentes/adminComponents/orderSection/OrderRead';
import OrderUpdate from './Componentes/adminComponents/orderSection/OrderUpdate';
import UserRegister from './Componentes/authenticationComponents/clientAuthentication/UserRegister';
import UserLogin from './Componentes/authenticationComponents/clientAuthentication/UserLogin';
import UserHome from './Componentes/clientComponent/UserHome';
import BookCart from './Componentes/clientComponent/BookCart';
import BookUpdate from './Componentes/adminComponents/Books/BooksUpdate';


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
        <Route path='/read/:id' element={<BookRead/>}/>
        <Route path='/update/:id' element={<BookUpdate/>}/>
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
