import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col max-h-[85vh] animate-fadeInScale">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#252525]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-8 overflow-y-auto text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalContent: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'about':
      return (
        <div className="space-y-4">
          <p className="text-lg"><strong>Doodax.com</strong> is a premier AI-powered utility platform designed to streamline digital marketing workflows for creators and businesses.</p>
          <p>The AI Email Sequence Generator is our flagship tool, helping entrepreneurs, creators, and marketers break through writer's block and launch successful email campaigns in seconds using Google's state-of-the-art Gemini AI technology.</p>
          <p>Our mission is to democratize high-converting copywriting. We believe everyone deserves access to professional marketing tools without the steep price tag.</p>
        </div>
      );
    case 'contact':
      return (
        <div className="space-y-6">
          <p className="text-lg">We'd love to hear from you! Whether you have a question about features, functionality, need a demo, or anything else, our team is ready to answer all your questions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-colors">
                <h4 className="font-bold text-primary mb-2">General Inquiries</h4>
                <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a></p>
                <p className="text-sm text-gray-500 mt-2">Response time: 24-48 hours</p>
            </div>
             <div className="p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-colors">
                <h4 className="font-bold text-primary mb-2">Visit Us</h4>
                <p><strong>Website:</strong> <a href="https://doodax.com" className="hover:underline">doodax.com</a></p>
            </div>
          </div>
        </div>
      );
    case 'guide':
      return (
        <div className="space-y-6">
          <h4 className="font-bold text-xl text-primary">How to Master the Email Generator</h4>
          <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h5 className="font-bold">1. Define Your Topic</h5>
                  <p className="text-sm mt-1">Be specific. Instead of just "Shoes", try "Sustainable Running Shoes for Marathon Runners".</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h5 className="font-bold">2. Set a Clear Goal</h5>
                  <p className="text-sm mt-1">What is the one thing you want the reader to do? (e.g., "Buy the shoes", "Read the blog", "Reply to the email").</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h5 className="font-bold">3. Outline Key Points</h5>
                  <p className="text-sm mt-1">Give the AI bullet points for the 3 emails. <br/>Email 1: Welcome & Gift. <br/>Email 2: Value & Education. <br/>Email 3: Hard Offer.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h5 className="font-bold">4. Choose Your Tone</h5>
                  <p className="text-sm mt-1">Match your brand. "Professional and corporate" yields different results than "Witty and casual".</p>
              </div>
          </div>
        </div>
      );
    case 'privacy':
      return (
        <div className="prose dark:prose-invert max-w-none text-sm">
            <p><strong>Effective Date:</strong> May 2025</p>
            <p>At Doodax.com, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax.com and how we use it.</p>
            
            <h4 className="text-lg font-bold mt-4">Information We Collect</h4>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            
            <h4 className="text-lg font-bold mt-4">Log Files</h4>
            <p>Doodax.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
            
            <h4 className="text-lg font-bold mt-4">Cookies and Web Beacons</h4>
            <p>Like any other website, Doodax.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            
            <h4 className="text-lg font-bold mt-4">Contact</h4>
            <p>For any privacy-related questions, please contact us at <span className="text-primary font-bold">hsini.web@gmail.com</span>.</p>
        </div>
      );
    case 'terms':
      return (
        <div className="prose dark:prose-invert max-w-none text-sm">
           <p><strong>Last Updated:</strong> May 2025</p>
           <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Doodax.com if you do not agree to take all of the terms and conditions stated on this page.</p>
           
           <h4 className="text-lg font-bold mt-4">License</h4>
           <p>Unless otherwise stated, Doodax.com and/or its licensors own the intellectual property rights for all material on Doodax.com. All intellectual property rights are reserved. You may access this from Doodax.com for your own personal use subjected to restrictions set in these terms and conditions.</p>
           
           <h4 className="text-lg font-bold mt-4">User Content</h4>
           <p>The content generated by our AI tools is provided for your use. You retain ownership of the output generated for your specific prompts.</p>
           
           <h4 className="text-lg font-bold mt-4">Disclaimer</h4>
           <p>The materials on Doodax.com are provided on an 'as is' basis. Doodax.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
      );
    case 'dmca':
      return (
        <div className="prose dark:prose-invert max-w-none">
            <p>Doodax.com respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
            <p className="mt-2">If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to <span className="text-primary font-bold">hsini.web@gmail.com</span> and include in your notice a detailed description of the alleged infringement.</p>
            <p className="mt-4 font-bold">You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
        </div>
      );
    default:
      return <p>Content not found.</p>;
  }
};