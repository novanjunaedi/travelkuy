import Image from "next/image";
import Link from "next/link";
import FooterColumn from "./FooterColumn";

const Footer = () => {
    const footerLinks = [
        {
            title: 'Learn More',
            links: [
                'About Hilink',
                'Press Releases',
                'Environment',
                'Jobs',
                'Privacy Policy',
                'Contact Us',
            ],
        },
        {
            title: 'Our Community',
            links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
        }
    ];

    const footerContactInfos = {
        title: 'Contact Us',
        links: [
            { label: 'Admin Officer', value: '123-456-7890' },
            { label: 'Email Officer', value: 'hilink@akinthil.com' },
        ],
    };

    const footerSocials = {
        title: 'Social',
        links: [
            '/assets/img/facebook.svg',
            '/assets/img/instagram.svg',
            '/assets/img/twitter.svg',
            '/assets/img/youtube.svg',
            '/assets/img/wordpress.svg',
        ],
    };

    return (
        <footer className="flexCenter mb-10">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link className="mb-10" href="/">
                        <Image src="/assets/img/hilink-logo.svg" alt="Hilink" width={74} height={29} />
                    </Link>

                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {footerLinks.map((columns, index) => {
                            return (
                                <FooterColumn title={columns.title} key={index}>
                                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                        {columns.links.map((link) => {
                                            return (
                                                <li key={link}>
                                                    <Link href="/">
                                                        {link}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </FooterColumn>
                            );
                        })}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={footerContactInfos.title}>
                                {footerContactInfos.links.map((link) => {
                                    return (
                                        <Link className="flex gap-4 md:flex-col lg:flex-row" href="/" key={link.label}>
                                            <p className="whitespace-nowrap">
                                                {link.label}:
                                            </p>
                                            <p className="medium-14 whitespace-nowrap text-blue-70">
                                                {link.value}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={footerSocials.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {footerSocials.links.map((link) => {
                                        return (
                                            <li key={link}>
                                                <Link href="/">
                                                    <Image src={link} width={25} height={25} alt={link} />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">&copy; 2024 - Hilink. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
