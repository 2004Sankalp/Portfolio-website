import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "099a9a13-4e4b-4b2a-8d7d-5a9e3a6a9a9a", // Note: User should replace this with their own key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-600 text-center font-medium"
                  >
                    ✨ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                ) : (
                  <Button 
                    type="submit" 
                    className="w-full rounded-full h-12 group"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right side - Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:sankalp@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">2004sankalp@gmail.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+917080027353"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 7080027353</p>
                  </div>
                </motion.a>

                {/* Website/Domain */}
                <motion.a
                  href="https://sankalpkumar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Portfolio Domain</p>
                    <p className="text-muted-foreground">sankalpkumar.com</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/2004sankalp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                >
                  <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sankalp-kumar-6a1990324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                >
                  <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white"
            >
              <h4 className="font-semibold mb-2">Let's Collaborate!</h4>
              <p className="text-blue-100">
                I'm always excited to work on new projects and connect with fellow developers. 
                Whether it's a hackathon, open-source contribution, or a freelance opportunity, 
                let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
