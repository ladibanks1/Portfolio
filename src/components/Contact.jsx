import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Message from " + name);
    const body = encodeURIComponent(
`Dear Oladipupo Bankole,

    I hope this message finds you well.
      
    My name is ${name}, and I am reaching out regarding the following matter:
    ${message}
      
    You can reply to me at ${email}.
      
    Thank you for your attention to this matter. I look forward to your response.

Best regards,
${name}`
    );

    console.log(subject, body);
    const mailtoLink = `mailto:oladipupobankole24@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  return (
    <div>
      <div className="flex flex-col p-10 !text-right sm:p-10 sm:px-24 lg:flex-row lg:gap-20 lg:mt-4">
        <section className="!text-center lg:!text-left basis-full">
          <h1 className="text-5xl font-bold lg:font-extrabold lg:text-6xl">
            Contact
          </h1>
          <p className="text-sm lg:text-xl">
            I would love to hear about your project and how I could help. Please
            fill the form, and I'll get back to you as soon as possible
          </p>
        </section>
        <section className="basis-3/4">
          <form onSubmit={handleSubmit} method="POST" encType="text/plain">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="border-b-2 border-green-400 p-2 mt-10 animate-bounce hover:animate-none"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
      <hr className="w-[94%] mx-auto my-10" />
    </div>
  );
};

export default Contact;
