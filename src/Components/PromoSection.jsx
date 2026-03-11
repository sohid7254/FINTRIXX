import React from 'react';
import chart from '../assets/chart.png'
import review from "../assets/review.png"
import amz from "../assets/amz.png"


const PromoSection = () => {
    return (
        <section className="w-full py-15 bg-linear-to-b from-white to-[#ffa600]/20 ">
            <div className="max-w-360 mx-auto px-4 flex justify-center items-center">
                {/* Left Side Chary */}
                <div>
                    <img src={chart} alt="" className="w-56.75" />
                </div>
                {/* Middle Word */}
                <div>
                    <div className="flex items-center justify-center gap-1 text-center">
                        <img src={amz} alt="amz" className="w-16 h-7.5 " />
                        <p>
                            Your Full-Service <span className="word">Amazon Partner</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-7xl">
                            Turn Your Amazon Struggles <br /> into Success-Save Time, <br />
                            <span className="word">Maximize Profits!</span>
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <button className="custom-btn mt-4">Book a Free Consultation</button>
                    </div>
                </div>
                {/* right side review */}
                <div>
                    <img src={review} alt="" className="w-59" />
                </div>
            </div>
        </section>
    );
};

export default PromoSection;