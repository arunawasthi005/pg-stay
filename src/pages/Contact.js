// import { useRef } from "react";
// import emailjs from "emailjs-com";

// export default function Contact() {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm(
//                 "service_t7fbyo5",   // from EmailJS
//                 "template_v72ddyx",  // from EmailJS
//                 form.current,
//                 "pdCuaFXAVbBkGxnaJ"    // from EmailJS
//             )
//             .then(
//                 (result) => {
//                     alert("Message Sent Successfully!");
//                     console.log(result.text);
//                 },
//                 (error) => {
//                     alert("Failed to send message.");
//                     console.log(error.text);
//                 }
//             );
//     };

//     return (
//         <div className="p-10 max-w-lg mx-auto">
//             <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                 <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" />
//                 <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded" />
//                 <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     className="w-full p-2 border rounded"
//                 />
//                 <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
//             </form>
//         </div>
//     );
// }
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_t7fbyo5",   // EmailJS service ID
                "template_v72ddyx",  // EmailJS template ID
                form.current,
                "pdCuaFXAVbBkGxnaJ"  // EmailJS public key
            )
            .then(
                () => {
                    alert("✅ Message Sent Successfully!");
                },
                (error) => {
                    alert("❌ Failed to send message.");
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="p-10 max-w-3xl mx-auto text-black">
            <h2 className="text-4xl font-bold mb-8 text-center">📩 Contact Us</h2>

            {/* Contact Form - Upper side */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-semibold mb-5 text-gray-800">Send us a message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="4"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Details - Lower side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
                    <h4 className="text-xl font-semibold mb-2">📞 Call Us</h4>
                    <a href="tel:+919876543210" className="text-blue-600 font-medium hover:underline">
                        +91 98765 43210
                    </a>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
                    <h4 className="text-xl font-semibold mb-2">📧 Email</h4>
                    <a href="mailto:developers@indycium.com" className="text-blue-600 font-medium hover:underline break-words">
                        developers@indycium.com
                    </a>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
                    <h4 className="text-xl font-semibold mb-2">💬 WhatsApp</h4>
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-medium hover:underline"
                    >
                        Chat with us
                    </a>
                </div>
            </div>
        </div>
    );
}
