import projectDiscussionImage from "../assets/ServicePage/discussion.png";
const ContactSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4 text-left">
                        Initiating Your <span className="text-blue-600">Project</span>{" "}
                        Conversation
                    </h2>
                    <p className="text-gray-600 mb-8 font-semibold text-xl text-justify font-montserrat">
                        At Sterling Software Solution, we’re ready to turn your vision into reality. Let’s embark on a
                        journey of possibilities by delving into the details of your project. Connect with us to explore
                        the innovative solutions and seamless execution that define our commitment to excellence.
                        Join hands with a team that thrives on transforming ideas into impactful digital solutions.
                        Your vision, our expertise – let’s create something extraordinary together.
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
                                <p className="font-semibold text-xl pt-1"><span className="font-semibold text-xl text-blue-600">Sri Lanka</span>:762050235</p>
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
                                <p className="text-xl text-blue-600 font-semibold pt-1">info@sterlingbpo.com.au</p>
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
