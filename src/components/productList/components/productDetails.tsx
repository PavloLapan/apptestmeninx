import {useParams} from "react-router-dom";
import React from 'react';
import {useQuery} from "react-query";
import {getProduct} from "../../../api/product";
import {Card, Loader, Text} from "@mantine/core";

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery(
        ["product", id],
        () => getProduct(id)
    );

    if (isLoading || !data) {
        return <Loader variant="bars"/>;
    }

    if (isError) {
        return <Loader variant="bars"/>;
    }

    return(
        <Card  shadow="xs" style={{ marginBottom: '10px', minHeight: '250px', }}>
            <Text size="xl">Name: {data.title}</Text>
            <Text size="sm">Price: {Math.floor(Math.random() * 1000) + 1}</Text>
            <Text size="sm">Description: {data.body}</Text>
        </Card>
    )
}

export default ProductDetails