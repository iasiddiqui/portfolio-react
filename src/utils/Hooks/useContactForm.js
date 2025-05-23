import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import validator from "validator";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;

    if (!name) {
      toast.error("Name is required");
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }
    const isEmailValid = validator.isEmail(formData.email);
    if (!isEmailValid) {
      toast.error("Email is not valid");
      return;
    }
    if (!message) {
      toast.error("Message is required");
      return;
    }

    const toastId = toast.loading("Sending message...")

    const serviceId = "service_7lk5e9a";
    const templateId = "template_mjrgw0k";
    const publicKey = "YzrpwnVbkkn3FAJr0";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          form_name: formData.name,
          form_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Internal server error!");
      })
      .finally(() => {
        // Dismiss the loading toast
        toast.dismiss(toastId);
      })
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    formRef,
  };
};

export default useContactForm;