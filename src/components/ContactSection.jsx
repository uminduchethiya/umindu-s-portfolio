import projectDiscussionImage from "../assets/ServicePage/discussion.png";

const ContactSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4 text-left">
                        Let&apos;s Discuss Your <span className="text-blue-600">Project</span>{" "}
                        Ideas
                    </h2>
                    <p className=" mb-8 text-gray-800 text-justify ">
                        Hi, I&apos;m Umindu Chethiya! I&apos;m passionate about turning your vision into reality through 
                        innovative technology solutions. Whether you need a dynamic web application, mobile app, 
                        or custom software solution, I&apos;m here to help bring your ideas to life. Let&apos;s collaborate 
                        to explore the potential of your project and create something exceptional together. 
                        Your vision, my expertise – let&apos;s build the future!
                    </p>
                    <div className="flex flex-col md:flex-row justify-start items-start space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=0WkW-6lPLwog&format=png&color=000000"
                                alt="Phone Icon"
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold text-2xl">Call Me</p>
                                <p className="font-semibold text-xl pt-1">
                                    <span className="font-semibold text-xl text-blue-600">Sri Lanka</span>: +94 77 293 3146
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=tiHbAqWU3ZCQ&format=png&color=000000"
                                alt="Email Icon"
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold text-2xl">Email Me</p>
                                <a href="mailto:uminduchethiya@gmail.com"
                                   className="text-xl text-blue-600 font-semibold pt-1 hover:underline">
                                    uminduchethiya@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    {/* Additional Contact Options */}
                    <div className="mt-8 flex flex-col md:flex-row justify-start items-start space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=8818&format=png&color=000000"
                                alt="LinkedIn Icon"
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold text-2xl">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/umindu-chethiya/" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-xl text-blue-600 font-semibold pt-1 hover:underline">
                                    Connect with me
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                                alt="GitHub Icon"
                                className="w-10 h-10 space-x-20 md:ml-24"
                            />
                            <div>
                                <p className="font-semibold text-2xl">GitHub</p>
                                <a href="https://github.com/uminduchethiya" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-xl text-blue-600 font-semibold pt-1 hover:underline">
                                    View my work
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-green-700 font-semibold text-lg">
                                Available for new projects
                            </p>
                        </div>
                        <p className="text-green-600 text-sm mt-1">
                            Currently accepting freelance and full-time opportunities
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <img
                        src={projectDiscussionImage}
                        alt="Let's discuss your project"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;