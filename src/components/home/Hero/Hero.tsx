"use client";

import { FaDownload, FaPlay, FaStar } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Button from '@/components/global/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
    const [hideCard, setHideCard] = useState(false);

    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className={styles.hero_map} />

            {/* Left */}
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="bold-52 lg:bold-70">Bumi Perkemahan Manglayang</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[720px] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque porro suscipit voluptate dolore, quisquam qui tempore magni. Quibusdam temporibus ipsa quas nulla? Ex officiis fugit quidem, velit ducimus aspernatur?</p>
                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => {
                            return (
                                <FaStar className="text-yellow-500 my-auto" size={24} key={index} />
                            );
                        })}

                        <p className="bold-16 lg:bold-20 text-blue-70 ms-3 my-auto">
                            198K
                            <span className="regular-16 lg:regular-20 ms-1">Reviews</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Download App"
                        variant="btn_green"
                        icon={<FaDownload />}
                        iconPosition="left"
                        onClick={() => console.log('Button is clicked')}
                    />
                    <Button
                        type="button"
                        title="How we work?"
                        variant="btn_white_text"
                        icon={<FaPlay className="text-green-500" />}
                        iconPosition="left"
                        onClick={() => console.log('Button is clicked')}
                    />
                </div>
            </div>

            {/* Right */}
            <div className="relative flex flex-1 items-start">
                {!hideCard && (
                    <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                        <div className="flex flex-col">
                            <div className="flexBetween">
                                <p className="regular-16 text-gray-20">Location</p>
                                <FaTimes onClick={() => setHideCard(true)} role="button" className="text-gray-20 mb-1" />
                            </div>
                            <p className="bold-20 text-white">Sumedang Regency</p>
                        </div>
                        <div className="flexBetween">
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Distance</p>
                                <p className="bold-20 text-white">170.0mi</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Elevation</p>
                                <p className="bold-20 text-white">20km</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default Hero;
