import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FeedbackModal, ErrorModal } from "../modals";

const serviceId = "service_uesnlsd";
const templateId = "template_c0s0ecm";
const publicKey = "BQoy3ajZEaf5O6TSB";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (!form.name) {
      setSubmitError("Enter your name.");
      return false;
    }
    if (!form.email) {
      setSubmitError("Enter your email.");
      return false;
    }
    if (!form.message) {
      setSubmitError("Enter a message.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setOpen(true);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          form_name: form.name,
          to_name: "Eurico",
          from_email: form.email,
          to_email: "euricodande@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setOpen(true);
        setSubmitError(null); // Reset the error state on successful submission

        setForm({
          name: "",
          email: "",
          message: ""
        });
      }, (error) => {
        setLoading(false);
        setSubmitError(error.text || "An unexpected error occurred.");
        setOpen(true); // Show error modal in case of an emailjs error
      });
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your name</span>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your message</span>
              <textarea
                rows={7}
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <FeedbackModal name={form.name} open={open && !submitError} setOpen={setOpen} />
      {submitError && <ErrorModal error={submitError} open={open} setOpen={setOpen} />}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
