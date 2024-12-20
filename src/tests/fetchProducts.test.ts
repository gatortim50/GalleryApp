import { fetchProducts } from '../api/fetchProducts';

global.fetch = jest.fn();

describe('fetchProducts', () => {
  it('fetches products successfully', async () => {
    const mockResponse = {
      products: [{ id: 1, title: 'Test Product', thumbnail: '', description: '', images: [] }],
    };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const products = await fetchProducts();
    expect(products).toEqual(mockResponse.products);
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products?limit=10&skip=0');
  });

  it('throws an error when the API fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');
  });
});
