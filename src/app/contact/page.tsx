"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
  service: string;
  phone: string;
  [key: string]: string;
}

interface InfoItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const info: InfoItem[] = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kamilerdogmus96@gmail.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setForm((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_69s82qi",
        "template_isme23h",
        {
          from_name: form.name,
          to_name: "Kamil",
          from_email: form.email,
          to_email: "kamilerdogmus96@gmail.com",
          message: form.message,
          phone: form.phone,
          service: form.service,
        },
        "Y1oob1tL3LohQ-nAQ"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((err) => {
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">Description</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name="name"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>

              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="frontend">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="backend">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="fullstack">
                      FullStack Development
                    </SelectItem>
                    <SelectItem value="mobile">
                      Mobile Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                onChange={handleChange}
                name="message"
                required
                className="h-52"
                placeholder="Type your message here"
              />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-3xl">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
