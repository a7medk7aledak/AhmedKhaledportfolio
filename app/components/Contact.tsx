'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiCopy, FiCheck } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { CONTACT } from "../lib/constants/index";

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
    
    const [copiedStates, setCopiedStates] = useState({
        phone: false,
        email: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
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
                    console.log('FAILED...', error);
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

    const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates(prev => ({ ...prev, [type]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [type]: false }));
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Get in <span className="text-purple-400">Touch</span>
            </motion.h2>
            
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="mb-12 text-center"
            >
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <label className="flex flex-col flex-1">
                                <span className="text-white font-medium mb-4">First Name</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Your first name"
                                    className="bg-neutral-800 py-3 px-5 placeholder:text-neutral-400 text-white rounded-lg outline-none border border-neutral-700 focus:border-purple-500 transition-colors font-medium"
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
                                    className="bg-neutral-800 py-3 px-5 placeholder:text-neutral-400 text-white rounded-lg outline-none border border-neutral-700 focus:border-purple-500 transition-colors font-medium"
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
                                className="bg-neutral-900 py-3 px-5 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium"
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
                                className="bg-neutral-900 py-3 px-5 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium"
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
                                className="bg-neutral-900 py-3 px-5 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium resize-none"
                                required
                            />
                        </label>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>

                        {alert.show && (
                            <div
                                className={`p-4 rounded-lg flex items-center ${
                                    alert.type === "success" ? "bg-green-500" : "bg-red-500"
                                } text-white transition-opacity duration-500 ease-in-out`}
                            >
                                {alert.type === "success" ? (
                                    <FiCheckCircle size={24} className="mr-2" />
                                ) : (
                                    <FiXCircle size={24} className="mr-2" />
                                )}
                                {alert.message}
                            </div>
                        )}
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl p-8 border border-neutral-700/50 backdrop-blur-sm shadow-2xl">
                        <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Let's Connect
                        </h3>
                        <div className="space-y-8">
                            {/* Location */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 hover:bg-neutral-700/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                    <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-neutral-300 font-semibold text-lg">Location</p>
                                    <p className="text-neutral-400 text-sm">{CONTACT.address}</p>
                                </div>
                            </motion.div>
                            
                            {/* Phone */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 hover:bg-neutral-700/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                    <FaPhone className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-neutral-300 font-semibold text-lg">Phone</p>
                                    <a href={`tel:${CONTACT.phoneNo}`} className="text-neutral-400 hover:text-purple-400 transition-colors text-sm">
                                        {CONTACT.phoneNo}
                                    </a>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => copyToClipboard(CONTACT.phoneNo, 'phone')}
                                    className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                                    title="Copy phone number"
                                >
                                    {copiedStates.phone ? (
                                        <FiCheck className="w-4 h-4 text-green-400" />
                                    ) : (
                                        <FiCopy className="w-4 h-4 text-purple-400 group-hover/btn:text-purple-300" />
                                    )}
                                </motion.button>
                            </motion.div>
                            
                            {/* Email */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 hover:bg-neutral-700/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                    <FaEnvelope className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-neutral-300 font-semibold text-lg">Email</p>
                                    <a href={`mailto:${CONTACT.email}`} className="text-neutral-400 hover:text-purple-400 transition-colors text-sm break-all">
                                        {CONTACT.email}
                                    </a>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => copyToClipboard(CONTACT.email, 'email')}
                                    className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                                    title="Copy email address"
                                >
                                    {copiedStates.email ? (
                                        <FiCheck className="w-4 h-4 text-green-400" />
                                    ) : (
                                        <FiCopy className="w-4 h-4 text-purple-400 group-hover/btn:text-purple-300" />
                                    )}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Contact;
