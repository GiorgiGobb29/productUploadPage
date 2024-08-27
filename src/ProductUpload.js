import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './productUpload.css';

const ProductUpload = () => {
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        setImage(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            productName,
            productId,
            price,
            description,
            image,
        };
        console.log('Form Data:', formData);
    };

    return (
        <div className='full-screen'>
            <div className='small-screen'>
                <h2 className='header'>Product Upload Form</h2>

                <form onSubmit={handleSubmit} className='form'>
                    {/* Row for Product Name and Product ID */}
                    <div className='row'>
                        <div className='input-group'>
                            <label>Product Name:</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-group'>
                            <label>Product ID:</label>
                            <input
                                type="text"
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Row for Price */}
                    <div className='row'>
                        <div className='input-group'>
                            <label>Price:</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Row for Description */}
                    <div className='row full-width'>
                        <div className='input-group full-width'>
                            <label>Description:</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload Section */}
                    <div {...getRootProps()} className='dropzone'>
                        <input {...getInputProps()} />
                        {image ? (
                            <p>{image.name}</p>
                        ) : (
                            <p>Drag & drop a product image here, or click to select one</p>
                        )}
                    </div>
                    <button type="submit" className='submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ProductUpload;
