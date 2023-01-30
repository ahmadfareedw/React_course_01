import { Link } from "react-router-dom"

const PRODUCTS = [
    {id: 'p1', title: 'product-1'},
    {id: 'p2', title: 'product-2'},
    {id: 'p3', title: 'product-3'},
    {id: 'p4', title: 'product-4'},
    {id: 'p5', title: 'product-5'},
    {id: 'p6', title: 'product-6'},
    {id: 'p7', title: 'product-7'}
]

function ProductsPage() {
    return <>
        <h1>The Products Page</h1>
        <ul>
            {PRODUCTS.map(prod => (
                <li>
                    <Link to={prod.id} relative="path" >{prod.title}</Link>
                </li>
            ))}
        </ul>
    </>
}

export default ProductsPage