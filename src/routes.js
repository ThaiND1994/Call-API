import React from 'react';
import HomePage from './page/HomePage/homePage';
import NotFoundPage from './page/NotFoundPage/notFoundPage';
import ProductList from './page/ProductListPage/productListPage';
import ProductAdd from './page/ProductActionPage/productActionPage';
const routes=[
    {
        path:'/',
        exact:true,
        main:()=> <HomePage /> 
    },
    {
        path:'/products',
        exact:false,
        main:()=> <ProductList /> 
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=> <ProductAdd history={history}/> 
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match,history})=> <ProductAdd match={match} history={history} /> 
    },
    {
        path:null,
        exact:false,
        main:()=> <NotFoundPage /> 
    }
];

export default routes;