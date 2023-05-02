import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const{user, logout}=useContext(AuthContext)

    const handleLogOut=()=>{
logout()
    }

    return (
        <>
 <Navbar
  fluid={true}
  rounded={true}
  className='lg:mx-8'
>
  <Navbar.Brand to='/'>
    <img
      src="https://www.shutterstock.com/image-vector/bangladesh-restaurant-food-logo-flag-260nw-2283781361.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Banglar Chefs
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
 {
    user? <>
         <Tooltip
            content={
                user.displayName? user.displayName: 'Name not avilable'
            }
            trigger="hover"
          >
         <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
         {user?.displayName || 'Unknown'}
        </span>
        <span className="block truncate text-sm font-medium">
          {user?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogOut}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
          </Tooltip>
    </> 
    :
    <>
  <Link to='/login'>
  <Button gradientMonochrome="success">
      Login
    </Button>
  </Link>
  </>
 }
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
  <NavLink to='/'
  className={({ isActive }) =>
  isActive
    ? "active"
    : ''
}
  >Home</NavLink>
  <NavLink to='/blog'>Blog</NavLink>
  <NavLink to='/about'>About</NavLink>

  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Header;