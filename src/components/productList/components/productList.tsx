import {useQuery} from "react-query";
import {getAllProducts} from "../../../api/productList";
import {Grid, Loader} from "@mantine/core";
import ProductListItem from "./productListItem";
import {useState} from "react";
import {Button} from '@mantine/core';

const itemsPerPage = 10;
const ProductList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const {data, isLoading, isError} = useQuery(
        "components",
        getAllProducts,
        {
            keepPreviousData: true,
        }
    );
    const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
    const visibleData = data?.slice(startIndex, endIndex);


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    if (isLoading) {
        return <Loader variant="bars"/>;
    }

    if (isError) {
        return <Loader variant="bars"/>;
    }

    console.log(data)
    return (
        <Grid>
            {visibleData && visibleData.map((product) => {
                    return (
                        <Grid.Col span={3} key={product.id}>
                            <ProductListItem product={product}/>
                        </Grid.Col>
                    )
                }
            )}

            <Grid.Col span={12}>
                <Button style={{margin: '1rem'}} variant="filled"  onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
                <Button variant="filled" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
            </Grid.Col>
        </Grid>
    )
}

export default ProductList