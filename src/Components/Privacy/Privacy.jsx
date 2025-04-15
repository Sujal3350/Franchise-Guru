import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import './Privacy.css';

function Privacy() {
  const privacySections = [
    {
      title: '1. Introduction',
      content: `
        At Franchise Guru ("the Platform"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website or services.
      `,
    },
    {
      title: '2. Information We Collect',
      content: `
        We may collect the following types of information:
        - **Personal Information**: Name, email address, phone number, and other details you provide when registering or contacting us.
        - **Usage Data**: Information about how you interact with the Platform, such as IP address, browser type, pages visited, and time spent.
        - **Cookies**: We use cookies to enhance your experience, analyze usage, and personalize content.
      `,
    },
    {
      title: '3. How We Use Your Information',
      content: `
        We use your information to:
        - Provide and improve our services, including franchise listings and application processes.
        - Communicate with you about your account, inquiries, or updates.
        - Analyze usage trends to enhance the Platform’s functionality.
        - Comply with legal obligations.
      `,
    },
    {
      title: '4. Sharing Your Information',
      content: `
        We may share your information with:
        - **Franchise Partners**: To facilitate your application process, with your consent.
        - **Service Providers**: Third parties who assist with hosting, analytics, or customer support, under strict confidentiality agreements.
        - **Legal Authorities**: When required by law or to protect our rights.
      `,
    },
    {
      title: '5. Cookies and Tracking',
      content: `
        We use cookies to improve your experience. You can manage cookie preferences through your browser settings. Some features of the Platform may not function properly if cookies are disabled.
      `,
    },
    {
      title: '6. Data Security',
      content: `
        We implement industry-standard measures to protect your information, including encryption and secure servers. However, no system is completely secure, and we cannot guarantee absolute security.
      `,
    },
    {
      title: '7. Your Rights',
      content: `
        You have the right to:
        - Access, correct, or delete your personal information.
        - Opt out of marketing communications.
        - Request information about how your data is used.
        Contact us to exercise these rights.
      `,
    },
    {
      title: '8. Third-Party Links',
      content: `
        The Platform may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
      `,
    },
    {
      title: '9. Changes to This Policy',
      content: `
        We may update this Privacy Policy periodically. Changes will be posted on this page, and significant updates will be communicated via email or Platform notifications.
      `,
    },
    {
      title: '10. Contact Us',
      content: `
        If you have questions about this Privacy Policy, please contact us at:
        - Email: support@franchiseguru.com
        - Phone: +91 123-456-7890
      `,
    },
  ];

  return (
    <motion.div
      className="privacy-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="privacy-container">
        {/* Sticky Header */}
        <motion.div
          className="privacy-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Privacy Policy</h1>
          <p>Last updated: April 15, 2025</p>
        </motion.div>

        {/* Privacy Content */}
        <div className="privacy-content">
          {privacySections.map((section, index) => (
            <motion.section
              key={index}
              className="privacy-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{section.title}</h2>
              <p>{section.content.trim()}</p>
            </motion.section>
          ))}
        </div>

        {/* CTA to Other Pages */}
        <motion.div
          className="privacy-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: privacySections.length * 0.2 + 0.2 }}
        >
          <h3>Explore Franchise Opportunities</h3>
          <Link to="/categories">
            <motion.button
              className="explore-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Browse Franchises
            </motion.button>
          </Link>
          <Link to="/terms-and-conditions" className="policy-link">
            View Terms and Conditions
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Privacy;