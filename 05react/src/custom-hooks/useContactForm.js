import { useState, useEffect } from 'react';

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitContact = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const res = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit contact form');
      }

      setSuccessMessage(data.message || 'Form submitted successfully');
    } catch (error) {
      setError(
        error.message || 'Something went wrong while submitting the form'
      );
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    successMessage,
    submitContact,
  };
}
