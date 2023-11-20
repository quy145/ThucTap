import axios from 'axios';
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const Slide = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    //get products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/get-product`);
            console.log("slide", data.products);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts()
    }, []);
    return (
        <>
            <div className="col-lg-12">
                <div className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height rounded">
                    <div className="newrealease-contens">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            {products.map((p) => (
                                <SwiperSlide key={p._id} style={{width: '300px', height: '300px'}}>
                                    <a onClick={() => navigate(`/product/${p.slug}`)}>
                                        <img src={`/api/v1/product/product-photo/${p._id}`} className="img-fluid w-100 rounded" />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide
