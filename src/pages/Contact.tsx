import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7gk660a",      // Your Service ID
        "template_vwi62zr",     // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "4dCndDcbx2JYIPV7V"     // Your Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll reply soon.",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Your existing layout and UI are unchanged */}
      {/* Only the logic above is updated with EmailJS */}
    </Layout>
  );
};

export default Contact;
