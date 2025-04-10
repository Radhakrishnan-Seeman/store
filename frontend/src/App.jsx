import { Routes, Route, Router, useLocation } from 'react-router-dom';
import Products from './components/Products/Products';
import AppBar from './components/AppBar/AppBar';
import Login from './components/Authendication/Login';
import Dashboard from './components/DashBoard/DashBoard';
import PrivateRoute from './components/Auth/PrivateRoute';
import { use } from 'react';

function App() {
    const location = useLocation();

    const showAppBar = location.pathname !== '/dashboard';
    debugger;
    return (
        <>
            {showAppBar && <AppBar></AppBar> }
            <Routes >
                <Route element={<PrivateRoute/>}>
                    <Route path='/dashboard' element={<Dashboard/>} />
                </Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/products' element={<Products></Products>}></Route>
            </Routes>
        </>
    )
}

export default App;