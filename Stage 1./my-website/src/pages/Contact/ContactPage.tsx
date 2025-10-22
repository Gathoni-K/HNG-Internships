import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactPage.module.css';

// Define types
interface FormData {
  fname: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  // State with TypeScript typing
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmittable, setSubmittable] = useState<boolean>(false);

  // Validation rules
  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fname':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      
      default:
        return '';
    }
  };

  // Handle input changes with real-time validation
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate the changed field
    const error = validateField(name as keyof FormData, value);
    
    // Update errors
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Check if form is submittable (all fields valid)
    const updatedFormData = { ...formData, [name]: value };
    const updatedErrors = { ...errors, [name]: error };
    
    const isFormValid = Object.keys(updatedFormData).every(key => 
      updatedFormData[key as keyof FormData].trim() !== '' && 
      !updatedErrors[key as keyof FormErrors]
    );
    
    setSubmittable(isFormValid);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!isSubmittable) return;
    
    // Submit logic here (API call, etc.)
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({ fname: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmittable(false);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.formWrapper}>
        <aside className={styles.imageWrapper}>
          <img src="naruto2.jpg" className={styles.image} alt="Naruto" />
        </aside>

        <main className={styles.form}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Full Names:</label>
            <input 
              type="text" 
              data-testid="test-contact-name" 
              id="fname" 
              name="fname"
              value={formData.fname} 
              onChange={handleChange}
            />
            {errors.fname && <span className={styles.error}>{errors.fname}</span>}

            <label htmlFor="email">Your email:</label>
            <input 
              type="email" 
              data-testid="test-contact-email" 
              id="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}

            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              data-testid="test-contact-subject" 
              id="subject" 
              name="subject"
              value={formData.subject} 
              onChange={handleChange}
            />
            {errors.subject && <span className={styles.error}>{errors.subject}</span>}

            <label htmlFor="message">Your message:</label>
            <textarea 
              data-testid="test-contact-message" 
              id="message" 
              name="message"
              value={formData.message} 
              onChange={handleChange}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
            
            <button 
              type="submit" 
              data-testid="test-contact-submit"
              disabled={!isSubmittable}
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;