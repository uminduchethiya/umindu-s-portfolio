import projectDiscussionImage from "../assets/ServicePage/discussion.png";
const ContactSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4 text-left">
                        Initiating Your <span className="text-blue-600">Project</span>{" "}
                        Consultation
                    </h2>
                    <p className="text-gray-600 mb-8 font-semibold text-xl text-justify font-montserrat">
                        At ZyGen Labs, we are ready to bring your vision to life. Let’s collaborate to explore the
                        potential of your project and uncover innovative solutions that ensure seamless execution.
                        Connect with us to experience our commitment to excellence in delivering impactful digital
                        solutions. Partner with a team that excels at transforming ideas into reality. Your vision,
                        our expertise – together, we will create something exceptional.
                    </p>
                    <div className="flex flex-col md:flex-row justify-start items-start space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=0WkW-6lPLwog&format=png&color=000000"
                                alt="Phone Icon"
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold text-2xl">Call Us</p>
                                <p className="font-semibold text-xl pt-1"><span className="font-semibold text-xl text-blue-600">Sri Lanka</span>:+94 76 205 0235</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=tiHbAqWU3ZCQ&format=png&color=000000"
                                alt="Email Icon"
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold text-2xl">Email Us</p>
                                <a href="mailto:info@zygenlabs.com"
                                   className="text-xl text-blue-600 font-semibold pt-1">
                                    info@zygenlabs.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={projectDiscussionImage}
                        alt="Project Discussion"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
