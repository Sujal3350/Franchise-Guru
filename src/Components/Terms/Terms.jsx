import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import './Terms.css';

function Terms() {
  const termsSections = [
    {
      title: '1. Acceptance of Terms',
      content: `
        By accessing or using Franchise Guru ("the Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use the Platform. These Terms apply to all users, including visitors, registered users, and franchise applicants.
      `,
    },
    {
      title: '2. Use of the Platform',
      content: `
        You agree to use the Platform only for lawful purposes and in accordance with these Terms. You may not:
        - Use the Platform to engage in any illegal or unauthorized activity.
        - Attempt to gain unauthorized access to any part of the Platform.
        - Post or transmit any content that is harmful, offensive, or violates third-party rights.
      `,
    },
    {
      title: '3. Account Registration',
      content: `
        To access certain features, you may need to create an account. You are responsible for:
        - Providing accurate and complete information during registration.
        - Maintaining the confidentiality of your account credentials.
        - Notifying us immediately of any unauthorized use of your account.
      `,
    },
    {
      title: '4. Franchise Listings',
      content: `
        Franchise Guru provides verified franchise listings for informational purposes. We do not guarantee the accuracy, completeness, or availability of any listing. Users are responsible for conducting their own due diligence before applying for or investing in any franchise.
      `,
    },
    {
      title: '5. Intellectual Property',
      content: `
        All content on the Platform, including text, images, logos, and designs, is owned by Franchise Guru or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.
      `,
    },
    {
      title: '6. Limitation of Liability',
      content: `
        Franchise Guru is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Platform, including but not limited to errors in listings, loss of data, or business interruptions.
      `,
    },
    {
      title: '7. Termination',
      content: `
        We reserve the right to suspend or terminate your access to the Platform at our discretion, with or without notice, for any violation of these Terms or for any other reason.
      `,
    },
    {
      title: '8. Changes to Terms',
      content: `
        We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of the Platform constitutes acceptance of the updated Terms.
      `,
    },
    {
      title: '9. Governing Law',
      content: `
        These Terms are governed by the laws of India. Any disputes arising from these Terms will be resolved in the courts of New Delhi, India.
      `,
    },
    {
      title: '10. Contact Us',
      content: `
        If you have any questions about these Terms, please contact us at:
        - Email: support@franchiseguru.com
        - Phone: +91 123-456-7890
      `,
    },
  ];

  return (
    <motion.div
      className="terms-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="terms-container">
        {/* Sticky Header */}
        <motion.div
          className="terms-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Terms and Conditions</h1>
          <p>Last updated: April 15, 2025</p>
        </motion.div>

        {/* Terms Content */}
        <div className="terms-content">
          {termsSections.map((section, index) => (
            <motion.section
              key={index}
              className="terms-section"
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
          className="terms-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: termsSections.length * 0.2 + 0.2 }}
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
          <Link to="/privacy-policy" className="policy-link">
            View Privacy Policy
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Terms;