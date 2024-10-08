import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import ManageProduct from '../component/ManageProduct/ManageProduct';
import ManageHuman from '../component/ManageHuman/ManageHuman';
import ManageMachines from '../component/ManageMachines/ManageMachines';
import ManageContrast from '../component/ManageContrast/ManageContrast';
import ManageProfit from '../component/ManageProfit/ManageProfit';
import ManageSupplier from '../component/ManageSupplier/ManageSupplier';
import ManageWebsite from '../component/ManageWebsite/ManageWebsite';
import ProductionManagement from '../component/ProductionManagement/ProductionManagement';
import AbnormalityReport from '../component/AbnormalityReport/AbnormalityReport';

export default function ListRouter() {
    return (
     <Routes>
            <Route path='/vite-dataInsight' element={<Home />} />
            <Route path='/manageProduct' element={<ManageProduct />} />
            <Route path='/manageHuman' element={<ManageHuman />} />
            <Route path='/manageMachines' element={<ManageMachines />} />
            <Route path='/manageContrast' element={<ManageContrast />} />
            <Route path='/manageProfit' element={<ManageProfit />} />
            <Route path='/manageSupplier' element={<ManageSupplier />} />
            <Route path='/manageWebsite' element={<ManageWebsite />} />
            <Route path='/productionManagement' element={<ProductionManagement />} />
            <Route path='/abnormalityReport' element={<AbnormalityReport />} />

        </Routes> 
    //     <Routes>
    //     <Route path='/vite-dataInsight' element={<AbnormalityReport />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/manageProduct' element={<ManageProduct />} />
    //     <Route path='/manageHuman' element={<ManageHuman />} />
    //     <Route path='/manageMachines' element={<ManageMachines />} />
    //     <Route path='/manageContrast' element={<ManageContrast />} />
    //     <Route path='/manageProfit' element={<ManageProfit />} />
    //     <Route path='/manageSupplier' element={<ManageSupplier />} />
    //     <Route path='/manageWebsite' element={<ManageWebsite />} />

    // </Routes> 
    )
}
