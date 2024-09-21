import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLink, FaLock, FaChartBar, FaThumbsUp, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState('');
    const navigate = useNavigate();

    const handleShorten = (e) => {
        e.preventDefault();
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
                The only URL Shortener <br /> you&rsquo;ll ever need! 👇
            </h2>
            <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
                <Input type="url"
                    value={longUrl}
                    placeholder="Enter your long URL"
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="h-full flex-1 py-4 px-4"
                />
                <Button className="h-full" type="submit" variant="destructive">Shorten!</Button>
            </form>

            <div className="w-full md:px-11 my-10 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">A fast and simple URL shortener</h3>
                <p className="text-lg">
                    Free URL Shortener for transforming long, ugly links into nice, memorable, and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos. Our service is the best free alternative to generic URL shorteners like Bitly and TinyURL.
                </p>
            </div>

            <div className="w-full md:px-11 my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaLink className="text-3xl text-blue-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Easy</h3>
                            <p>ShortURL is easy and fast, enter the long link to get your shortened link</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaThumbsUp className="text-3xl text-green-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Shortened</h3>
                            <p>Use any link, no matter what size, ShortURL always shortens</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaShieldAlt className="text-3xl text-red-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Secure</h3>
                            <p>It is fast and secure, our service has HTTPS protocol and data encryption</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaChartBar className="text-3xl text-yellow-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Statistics</h3>
                            <p>Check the number of clicks that your shortened URL received</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaLock className="text-3xl text-purple-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Reliable</h3>
                            <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <FaMobileAlt className="text-3xl text-teal-400" />
                        <div className="text-white">
                            <h3 className="text-xl font-bold">Devices</h3>
                            <p>Compatible with smartphones, tablets and desktop</p>
                        </div>
                    </div>
                </div>
            </div>

            <Accordion type="multiple" collapsible className="w-full md:px-11">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        How does the Trimlly URL shortener work?
                    </AccordionTrigger>
                    <AccordionContent>
                        When you enter a long URL, our system generates a shorter version of
                        that URL. This shortened URL redirects to the original long URL when
                        accessed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Do I need an account to use the app?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. Creating an account allows you to manage your URLs, view
                        analytics, and customize your short URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What analytics are available for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can view the number of clicks, geolocation data of the clicks
                        and device types (mobile/desktop) for each of your shortened URLs.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default LandingPage;
