import React from 'react';
import { render } from '@testing-library/react-native';
import ProductList from '../components/ProductList';
import { Text } from 'react-native-paper';

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    thumbnail: 'https://example.com/thumbnail1.jpg',
    description: 'Description for Product 1',
    images: ['https://example.com/image1.jpg'],
    price: 10.99,
    discountPercentage: 5,
    rating: 4.5,
    stock: 20,
    category: 'Category 1',
    tags: ['tag1', 'tag2'],
    brand: 'Brand 1',
    sku: 'SKU1',
    weight: 1.0,
    dimensions: { width: 10, height: 5, depth: 2 },
    warrantyInformation: '1-year warranty',
    shippingInformation: 'Ships in 2-3 days',
    availabilityStatus: 'In Stock',
    reviews: [],
    returnPolicy: '30-day return policy',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
      barcode: '1234567890123',
      qrCode: 'https://example.com/qr-code1.png',
    },
  },
  {
    id: 2,
    title: 'Product 2',
    thumbnail: 'https://example.com/thumbnail2.jpg',
    description: 'Description for Product 2',
    images: ['https://example.com/image2.jpg'],
    price: 20.99,
    discountPercentage: 10,
    rating: 4.0,
    stock: 10,
    category: 'Category 2',
    tags: ['tag3', 'tag4'],
    brand: 'Brand 2',
    sku: 'SKU2',
    weight: 2.0,
    dimensions: { width: 15, height: 10, depth: 5 },
    warrantyInformation: '2-year warranty',
    shippingInformation: 'Ships in 1 week',
    availabilityStatus: 'Out of Stock',
    reviews: [],
    returnPolicy: 'No return policy',
    minimumOrderQuantity: 2,
    meta: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
      barcode: '9876543210987',
      qrCode: 'https://example.com/qr-code2.png',
    },
  },
];

describe('ProductList', () => {
  it('renders a list of products', () => {
    const { getByText } = render(
      <ProductList
        products={mockProducts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        refreshControl={undefined}
      />
    );

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
  });
});
