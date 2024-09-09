import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            message: form.message,
        };

        emailjs
            .send('service_miocq0e', 'template_sjfnnar', templateParams, 'W7C1-gvt3VCRzz-va')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setAlert({
                        show: true,
                        message: "Thank you. We will get back to you as soon as possible.",
                        type: "success",
                    });
                    setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setAlert({
                        show: true,
                        message: "Failed to send the message. Please try again later.",
                        type: "error",
                    });
                }
            );

        setLoading(false);
        setTimeout(() => {
            setAlert((prev) => ({ ...prev, show: false }));
        }, 5000);
    };

    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.5] bg-black-100 p-6 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <label className="flex flex-col flex-1">
                            <span className="text-white font-medium mb-4">First Name</span>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="Your first name"
                                className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                required
                            />
                        </label>
                        <label className="flex flex-col flex-1">
                            <span className="text-white font-medium mb-4">Last Name</span>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="Your last name"
                                className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                required
                            />
                        </label>
                    </div>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Phone Number</span>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Your phone number (optional)"
                            className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>

                {alert.show && (
                    <div
                        className={`mt-4 p-4 rounded-lg flex items-center ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} text-white transition-opacity duration-500 ease-in-out`}
                    >
                        {alert.type === "success" ? <FiCheckCircle size={24} className="mr-2" /> : <FiXCircle size={24} className="mr-2" />}
                        {alert.message}
                    </div>
                )}
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                {/* <EarthCanvas /> */}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
