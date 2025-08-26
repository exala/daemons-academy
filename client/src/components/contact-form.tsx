import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}.
    
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}

Message: ${formData.message}

I'm interested in the Daemons Academy cybersecurity course.`;

    const whatsappUrl = `https://wa.me/923006212226?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp with your inquiry...",
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-mono text-cyber-green-bright mb-2">Name: *</label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Enter your name..."
          className="w-full bg-black/50 border-cyber-green/50 font-mono text-white focus:border-cyber-green focus:ring-cyber-green/20"
          data-testid="input-name"
          required
        />
      </div>

      <div>
        <label className="block font-mono text-cyber-green-bright mb-2">Email: *</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="your.email@domain.com"
          className="w-full bg-black/50 border-cyber-green/50 font-mono text-white focus:border-cyber-green focus:ring-cyber-green/20"
          data-testid="input-email"
          required
        />
      </div>

      <div>
        <label className="block font-mono text-cyber-green-bright mb-2">Phone: *</label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+92 XXX XXX XXXX"
          className="w-full bg-black/50 border-cyber-green/50 font-mono text-white focus:border-cyber-green focus:ring-cyber-green/20"
          data-testid="input-phone"
          required
        />
      </div>

      <div>
        <label className="block font-mono text-cyber-green-bright mb-2">Interest Level:</label>
        <Select onValueChange={(value) => handleInputChange('interest', value)} data-testid="select-interest">
          <SelectTrigger className="w-full bg-black/50 border-cyber-green/50 font-mono text-white focus:border-cyber-green focus:ring-cyber-green/20">
            <SelectValue placeholder="Select your interest..." />
          </SelectTrigger>
          <SelectContent className="bg-cyber-dark border-cyber-green">
            <SelectItem value="full-course" className="text-white hover:bg-cyber-green/20">Full Course (PKR 90,000)</SelectItem>
            <SelectItem value="per-module" className="text-white hover:bg-cyber-green/20">Pay Per Module</SelectItem>
            <SelectItem value="info-only" className="text-white hover:bg-cyber-green/20">Just Information</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block font-mono text-cyber-green-bright mb-2">Message:</label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder="Tell us about your cybersecurity goals..."
          rows={4}
          className="w-full bg-black/50 border-cyber-green/50 font-mono text-white focus:border-cyber-green focus:ring-cyber-green/20 resize-none"
          data-testid="textarea-message"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-cyber-green/20 border border-cyber-green px-6 py-4 font-mono text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 animate-pulse-green"
        data-testid="button-submit"
      >
        $ ./submit_inquiry.sh
      </Button>

      <div className="mt-6 p-4 bg-cyber-green-dark/20 border border-cyber-green-dark rounded">
        <p className="font-mono text-sm text-gray-400">
          <i className="fas fa-info-circle text-cyber-green mr-2"></i>
          Form submissions will redirect to WhatsApp for immediate response
        </p>
      </div>
    </form>
  );
}
