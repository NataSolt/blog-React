import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading) {
     return <Loader />
    }

    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={< route.element />} key={route.path}/>
                )}
                <Route  path='/*' element={<Navigate to='/posts'/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={< route.element />} key={route.path}/>
                )}
                <Route  path='/*' element={<Navigate to='/login'/>} />
                {/*<Route path='/about' element={<About/>}/>*/}
                {/*<Route path='/' element={<Posts/>}/>*/}
                {/*<Route path='/posts' element={<Posts/>}/>*/}
                {/*<Route path='/posts/:id' element={<PostIdPage/>}/>*/}
                {/*<Route path="*" element={<Error/>} />*/}
            </Routes>
    );
};

export default AppRouter;