import { useState } from 'react';
import { useContactForm } from './custom-hooks/useContactForm';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const { loading, error, successMessage, submitContact } = useContactForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitContact(form)
      .then(() => {
        setForm({ name: '', email: '', message: '' }); // Reset form on success
      })
      .catch((err) => {
        console.error('Error submitting form:', err);
      });
  };

  const handleChange = (event) => {
    setForm({ ...form ,[event.target.name]: event.target.value});
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder='Your name' />
        <input name="email" value={form.email} onChange={handleChange} placeholder='Your email' />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder='Message' />


        <button type='submit' disabled={loading}  >
            {loading ? "Submitting..." : "Submit"}
        </button>
      </form>


      {successMessage &&  <p> {successMessage}</p>}
    </div>
  );
}

export default ContactForm;
