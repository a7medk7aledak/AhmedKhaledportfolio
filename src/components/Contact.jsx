/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Alert } from "@material-tailwind/react";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Ahmed Khaled",
                    from_email: form.email,
                    to_email: "ahmadkhaled20011@gmail.com", // Your email address here
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setAlert({
                        show: true,
                        message: "Thank you. I will get back to you as soon as possible.",
                        type: "success",
                    });
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });

                    setTimeout(() => {
                        setAlert({ ...alert, show: false });
                    }, 5000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setAlert({
                        show: true,
                        message: "Ahh, something went wrong. Please try again.",
                        type: "error",
                    });

                    setTimeout(() => {
                        setAlert({ ...alert, show: false });
                    }, 5000);
                }
            );
    };

    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert({ ...alert, show: false });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [alert.show]);

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>

                {alert.show && (
                    <div
                        className={`mt-4 p-4 rounded-lg flex items-center ${alert.type === "success" ? "bg-green-500" : "bg-red-500"
                            } text-white transition-opacity duration-500 ease-in-out`}
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
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
