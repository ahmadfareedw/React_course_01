import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    return (
        <section>
            <h1>PRoduct Details</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;