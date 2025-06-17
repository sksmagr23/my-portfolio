'use client';
import { useState } from "react";
import { motion } from "framer-motion";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div id="contact" className="m-h-screen border-t border-[#1a1abb] py-8 lg:py-12 relative">
      <div className="flex justify-center -translate-y-[2px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
          <span className="text-gradient">CONTACT</span>
        </h2>
          <div className="card-highlight relative rounded-xl overflow-hidden transition-all duration-300 shadow-2xl shadow-sky-800/20">
            <div className="border-[#798cd3a0] relative rounded-xl border glass-panel transition-all duration-200">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#64ffb9a8] to-transparent"></div>
              </div>
              
              <div className="px-3 lg:px-4 py-3">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs text-gray-400 ml-2">Contact_form.js</span>
                </div>
              </div>
              
              <div className="border-t border-blue-900/50 px-4 lg:px-6 py-5 lg:py-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#6b9dd1] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-[#0a1035] border border-[#0d2169] rounded-md focus:outline-none focus:ring-1 focus:ring-[#64ffb9] text-gray-200"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6b9dd1] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-[#0a1035] border border-[#0d226c] rounded-md focus:outline-none focus:ring-1 focus:ring-[#64ffb9] text-gray-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6b9dd1] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-[#0a1035] border border-[#1c3aa5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#64ffb9] text-gray-200"
                      placeholder="Message Subject"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6b9dd1] mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 bg-[#0a1035] border border-[#0c216b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#64ffb9] text-gray-200"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 px-4 bg-gradient-to-r from-[#13427c] to-[#64ffb97d] text-gray-200 font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-2 bg-emerald-400/20 border border-emerald-400/50 rounded-md text-emerald-400 text-sm text-center"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-2 bg-red-500/30 border border-red-500/100 rounded-md text-white text-sm text-center"
                      >
                        Failed to send message. Please try again
                      </motion.div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10"></div>
          </div>
        </div>
      </div>
  );
}

export default ContactSection;