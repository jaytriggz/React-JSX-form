import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Shop from './core/Shop'
import Product from './core/Product'

const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" element={<Home />}/>
<Route exact path="/" element={<Shop />}/>
<Route exact path="/" element={<Product />}/>
</Routes>
</div> 
)
}

const ShopRouter = () => {
    return ( <div>
        <Routes>
            <Route exact path="/" element={<Shop />}/>
        </Routes>
    </div>)
}

const ProductRouter = () => {
    return ( <div>
        <Routes>
            <Route exact path="/" element={<Product />}/>
        </Routes>
    </div>)
}

export default MainRouter
