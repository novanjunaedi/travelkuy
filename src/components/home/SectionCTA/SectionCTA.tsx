"use client"

import Button from "@/components/global/Button/Button";
import styles from "./SectionCTA.module.css"
import { FaAndroid, FaApple } from "react-icons/fa6";
import Image from "next/image";

const SectionCTA = () => {
    return (
        <section className="flexCenter w-full flex-col pb-[100px]" id="cta">
            <div className={styles.get_app}>
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[400px]">Get for free now!</h2>
                    <p className="regular-16 text-gray-10">Available on Android and IOS</p>

                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            variant="btn_white"
                            icon={<FaApple size={25} className="mb-1" />}
                            iconPosition="left"
                            full
                            onClick={() => console.log('Button is clicked')}
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            variant="btn_dark_green_outline"
                            icon={<FaAndroid size={25} className="mb-1" />}
                            iconPosition="left"
                            full
                            onClick={() => console.log('Button is clicked')}
                        />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src="/assets/img/phones.png"
                        alt="phone"
                        width={550}
                        height={870}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionCTA;
