import React from 'react';
import {Button, Card, Text} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {Product} from "../../../types/types";

interface ProductListItemProps {
    product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`products/${product.id}`);
    };

    return (
        <Card shadow="xs" style={{marginBottom: '10px', minHeight: '250px', justifyContent: 'space-between'}}>
            <Text size="xl">{product.title}</Text>
            <Text size="sm">Price: {Math.floor(Math.random() * 1000) + 1}</Text>
            <Text size="sm">{product.body}</Text>
            <Button onClick={handleViewMore}>View More</Button>
        </Card>
    );
};

export default ProductListItem