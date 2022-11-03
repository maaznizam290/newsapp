import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Data from '../screen/data';
import Details from '../screen/deatail';


function AppRouter() {
    return (
        <div>
            <>hello</>
            <Router>
                <Routes>
                    <Route path='/' element={<Data />} />
                    <Route path='details' element={<Details />} />
                </Routes>

            </Router>


        </div>
    )
}

export default AppRouter
