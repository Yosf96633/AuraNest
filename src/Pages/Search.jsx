import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Spin, Pagination, Button, notification } from 'antd';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Rate } from 'antd'; // Import Rate for the star ratings

const ITEMS_PER_PAGE = 10; // Adjust as necessary

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    // Simulate fetching data based on the search query
    const fetchData = async () => {
        setLoading(true);
        // Replace this with your actual API call
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        const result = await response.json();
        setSearchResults(result.products);
        setLoading(false);
    };

    useEffect(() => {
        if (searchQuery) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [searchQuery]);

    // Calculate pagination
    const totalResults = searchResults.length;
    const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalResults);
    const currentResults = searchResults.slice(startIndex, endIndex);

    return (
        <div className='w-screen min-h-screen py-8 px-6'>
            {loading ? (
                <div className='h-screen w-screen grid place-content-center'>
                    <Spin />
                </div>
            ) : (
                <div>
                    <h1 className='text-center text-2xl mb-4'>
                        Search Results for: <span className='font-bold text-blue-500'>{searchQuery}</span>
                    </h1>
                    {totalResults > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                            {currentResults.map(product => (
                                <div key={product.id} className="flex-shrink-0 flex flex-col space-y-2 justify-center items-center p-6 border rounded shadow bg-white">
                                    <Link className="flex flex-col space-y-4 justify-center items-center" to={`/products/${product.id}`}>
                                        <img className="object-cover w-3/5" src={product.thumbnail} alt={product.title} />
                                        <h1 className="text-xl max-sm:text-base text-center font-bold">
                                            {product.brand ? product.brand : product.title}
                                        </h1>
                                    </Link>
                                    <p className="space-x-2 text-center">
                                        <span className="font-bold text-lg text-blue-600">
                                            ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                                        </span>
                                        <span className="text-gray-500 text-base line-through">{product.price}</span>
                                    </p>
                                    <div className="text-center">
                                        <Rate allowHalf disabled value={product.rating} />
                                        <span>{`(${product.rating})`}</span>
                                    </div>
                                    <div className="flex space-x-1">
                                        <Button
                                            className="max-sm:text-xs max-sm:p-1" // Adjust size for small screens
                                            onClick={() => {
                                                console.log(product);
                                                dispatch(add_favorite(product));
                                                notification.success({ message: "Added to Favorites" });
                                            }}
                                            icon={<AiOutlineHeart />}
                                        >
                                            Favourite
                                        </Button>
                                        <Button
                                            className="max-sm:text-xs max-sm:p-1" // Adjust size for small screens
                                            onClick={() => {
                                                dispatch(add_cart({ ...product, quantityOfItem: 1 }));
                                                notification.success({ message: "Added to Cart" });
                                            }}
                                            icon={<AiOutlineShoppingCart />}
                                        >
                                            Cart
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h2 className='text-center text-xl'>No results found for "{searchQuery}".</h2>
                    )}
                    {totalResults > ITEMS_PER_PAGE && (
                        <div className='mt-4 flex justify-center'>
                            <Pagination
                                current={currentPage}
                                total={totalResults}
                                pageSize={ITEMS_PER_PAGE}
                                onChange={(page) => setCurrentPage(page)}
                                showSizeChanger={false}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
