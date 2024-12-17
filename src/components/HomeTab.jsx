// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeTab() {
    const [activeTab, setActiveTab] = useState('Mobile App');

    const tabContent = {
        'Mobile App': [
            'https://img.icons8.com/?size=100&id=58811&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=TwdB62yFXesu&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=20822&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=2586&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=2572&format=png&color=000000',
        ],
        CMS: [
            'https://img.icons8.com/?size=100&id=12472&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=PIkrB3sbBDNs&format=png&color=000000',
        ],
        Frontend: [
            'https://img.icons8.com/?size=100&id=58811&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=36387&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=3752&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=25764&format=png&color=000000',
        ],
        Backend: [
            'https://img.icons8.com/?size=100&id=114956&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=90519&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=2572&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=39852&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=12584&format=png&color=000000',
        ],
        DevOps: [
            'https://img.icons8.com/?size=100&id=GnSaXVsHWOQX&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000',
            'https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000',
        ],
    };

    return (
        <div>
            {/* Tabs */}
            <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-10 mb-10">
                {Object.keys(tabContent).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={
                            activeTab === tab
                                ? 'md:font-semibold border-b border-spacing-1 md:border-text-dark md:text-text-dark w-full'
                                : 'md:hover:text-text-dark md:hover:border-b md:hover:border-text-dark md:hover:font-semibold w-full'
                        }
                    >
                        {tab}
                    </button>
                ))}
            </div>

           {/*tab animation*/}
            <div className="block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-5 gap-4 sm:grid-cols-5 xs:grid-cols-2"
                    >
                        {tabContent[activeTab].map((src, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center"
                            >
                                <img src={src} alt="" className="w-16 h-16" />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
