import React, { useState } from 'react';

export const BlogPost: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto mb-20 relative">
      <div 
        className={`bg-light-surface dark:bg-dark-surface/90 backdrop-blur-xl rounded-2xl p-6 md:p-12 shadow-2xl border border-white/10 transition-all duration-1000 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[8000px]' : 'max-h-[250px]'
        }`}
      >
        <article className="prose dark:prose-invert prose-lg max-w-none text-light-text dark:text-dark-text prose-headings:font-bold prose-headings:text-primary dark:prose-headings:text-primary prose-a:text-blue-500 hover:prose-a:text-blue-400">
            
            {/* Schema.org for Article */}
            <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "The Ultimate Guide to AI Email Sequence Generators: Revolutionize Your Marketing in 2025",
                "image": "https://doodax.com/og-image.jpg",
                "author": {
                    "@type": "Person",
                    "name": "Hsini Mohamed",
                    "url": "https://doodax.com",
                    "jobTitle": "Lead Developer"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://doodax.com/"
                },
                "datePublished": "2024-05-15",
                "dateModified": "2024-05-22",
                "description": "Discover how AI Email Sequence Generators are changing the landscape of digital marketing. Learn strategies, tips, and how to use Doodax to automate your workflow.",
                "articleBody": "In the rapidly evolving world of digital marketing..."
            })}
            </script>
            
            {/* FAQ Schema */}
            <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is an AI Email Sequence Generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AI Email Sequence Generator is a tool that uses artificial intelligence to automatically write a series of emails (sequences) for marketing purposes."
                }
              }, {
                "@type": "Question",
                "name": "How does Doodax.com work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Doodax uses the Gemini 2.5 Flash model to process your inputs (product, goal, tone) and generate a structured 3-part email campaign instantly."
                }
              }]
            })}
            </script>

            <header className="mb-10 text-center">
                <span className="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-2 block">Email Marketing Guide 2025</span>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
                    The Ultimate Guide to AI Email Sequence Generators: How to Automate & Skyrocket Conversions
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        By <strong>Hsini Mohamed</strong>
                    </span>
                    <span>•</span>
                    <span>Last Updated: May 20, 2025</span>
                    <span>•</span>
                    <span>15 Min Read</span>
                </div>
            </header>

            {/* Table of Contents */}
            <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-2xl mb-12 not-prose border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    Table of Contents
                </h3>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    <a href="#intro" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">1. Introduction to AI Email Marketing</a>
                    <a href="#why-sequences" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">2. The Power of the "Sequence"</a>
                    <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">3. Under the Hood of Doodax</a>
                    <a href="#benefits" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">4. 5 Major Benefits of Automation</a>
                    <a href="#step-by-step" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">5. Step-by-Step Guide</a>
                    <a href="#advanced-strategies" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">6. Advanced Copywriting Strategies</a>
                    <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block">7. Frequently Asked Questions (FAQ)</a>
                </nav>
            </div>

            <h2 id="intro">1. Introduction to AI Email Marketing in 2025</h2>
            <p>
                In the digital age, email marketing remains the king of ROI, boasting an average return of $42 for every $1 spent. However, the greatest barrier for most entrepreneurs, founders, and creators is <strong>writer's block</strong>. Staring at a blank cursor, wondering how to welcome a new subscriber or pitch a product, creates friction that kills sales.
            </p>
            <p>
                Enter the <strong>AI Email Sequence Generator</strong>. This isn't just a simple template tool; it's a revolution in workflow. By leveraging advanced Large Language Models (LLMs) like Google's Gemini, tools like Doodax.com allow you to create personalized, high-converting copy in seconds rather than hours.
            </p>

            <h2 id="why-sequences">2. The Power of the "Sequence"</h2>
            <p>
                Why focus on a 3-part sequence? In marketing psychology, the "Rule of 7" suggests a prospect needs to hear a message 7 times before taking action. A single email is rarely enough. A sequence builds a relationship.
            </p>
            <ul>
                <li><strong>Email 1: The Welcome (Instant Gratification).</strong> This email must land immediately. It delivers the lead magnet, sets expectations, and establishes the brand voice. Open rates here are typically 50-80%.</li>
                <li><strong>Email 2: The Nurture (Value & Authority).</strong> Before asking for money, you must give value. This email shares a story, a case study, or a "secret tip" that proves your expertise. It builds the "Know, Like, Trust" factor.</li>
                <li><strong>Email 3: The Conversion (The Ask).</strong> Now that trust is established, you make the offer. This email uses urgency, scarcity, and a clear Call to Action (CTA) to drive the sale.</li>
            </ul>

            <h2 id="how-it-works">3. Under the Hood of Doodax</h2>
            <p>
                Doodax.com is built on a sophisticated stack designed for speed and accuracy. When you click "Generate", a complex chain of events occurs:
            </p>
            <ol>
                <li><strong>Input Parsing:</strong> The app takes your raw inputs (Product, Goal, Tone) and sanitizes them.</li>
                <li><strong>Context Injection:</strong> We inject a "System Instruction" into the AI. This instruction tells the AI to act as a world-class copywriter specializing in direct response marketing.</li>
                <li><strong>Prompt Engineering:</strong> We construct a prompt that explicitly asks for JSON output, ensuring the subject lines and body copy are perfectly separated. This is why Doodax is cleaner than using ChatGPT directly.</li>
                <li><strong>Gemini 2.5 Flash Processing:</strong> The request is sent to Google's ultra-fast Gemini 2.5 model, which infers the best psychological triggers for your specific product.</li>
                <li><strong>Rendering:</strong> The JSON is parsed and displayed in our glassmorphism UI for easy reading and copying.</li>
            </ol>

            <h2 id="benefits">4. 5 Major Benefits of AI Automation</h2>
            <p>
                Switching to an AI-first workflow for email copy offers undeniable advantages:
            </p>
            <ul>
                <li><strong>Speed:</strong> Create a week's worth of email content in under 60 seconds.</li>
                <li><strong>Consistency:</strong> The AI never gets tired. It maintains the same "Friendly" or "Professional" tone across every email.</li>
                <li><strong>Structure:</strong> The AI follows proven copywriting frameworks (AIDA: Attention, Interest, Desire, Action) automatically.</li>
                <li><strong>Brainstorming:</strong> Even if you don't use the output verbatim, it serves as a perfect first draft to edit.</li>
                <li><strong>Cost:</strong> Hiring a copywriter for a 3-email sequence costs $200-$1000. Doodax is free.</li>
            </ul>

            <h2 id="step-by-step">5. Step-by-Step Guide to Using Doodax</h2>
            <p>
                To get the best results, you need to provide the best inputs. Here is the "Golden Formula" for Doodax prompts:
            </p>
            <blockquote>
                <strong>Product:</strong> Be descriptive. Instead of "Coffee", write "Organic, Fair-Trade Dark Roast Coffee for remote workers".<br/>
                <strong>Goal:</strong> Be specific. "Get them to use the 15% off coupon code WELCOME15".<br/>
                <strong>Key Points:</strong> Outline the journey. "Email 1: Thanks for subbing. Email 2: Why fair trade matters. Email 3: Coupon expires in 24h."
            </blockquote>

            <h2 id="advanced-strategies">6. Advanced Copywriting Strategies</h2>
            <p>
                Once you generate your sequence, use these tips to polish it:
            </p>
            <ul>
                <li><strong>Subject Lines:</strong> The AI generates good ones, but try to make them <em>shorter</em>. Under 40 characters often works best for mobile.</li>
                <li><strong>The "P.S.":</strong> Always add a P.S. (Postscript) to your emails. It is the second most read part of an email after the headline. Use it to reiterate the CTA.</li>
                <li><strong>Formatting:</strong> Break up big paragraphs. People scan emails; they don't read them. Use one sentence per paragraph often.</li>
            </ul>

            <h2 id="faq">7. Frequently Asked Questions (FAQ)</h2>
            
            <div className="space-y-8 mt-8">
                <div>
                    <h4 className="font-bold text-xl text-primary mb-2">Is the content generated by Doodax unique?</h4>
                    <p>Yes. Every generation is processed individually by the AI based on your specific inputs. While it follows structural patterns, the actual wording is generated on the fly.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl text-primary mb-2">Does this affect my email deliverability?</h4>
                    <p>No. The AI writes plain text. In fact, plain text emails often have <em>better</em> deliverability than HTML-heavy design emails because they look like personal correspondence.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl text-primary mb-2">Can I use this for commercial client work?</h4>
                    <p>Absolutely. You own the copyright to any content generated via Doodax.com. It is a tool to aid your workflow, and the output is yours to use.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl text-primary mb-2">Why Google Gemini 2.5?</h4>
                    <p>We chose Gemini 2.5 Flash because it offers the perfect balance of creativity, logic, and speed. It understands nuance better than older models and is significantly faster.</p>
                </div>
            </div>

            <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Write High-Converting Emails?</h3>
                <p className="mb-6">Stop wasting time staring at a blank screen. Scroll up and generate your first sequence now.</p>
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Start Generating
                </button>
            </div>

        </article>

        {/* Gradient Fade Overlay when collapsed */}
        {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-light-bg dark:from-[#0b101e] via-light-bg/90 dark:via-[#0b101e]/90 to-transparent pointer-events-none z-10 flex items-end justify-center pb-8">
            </div>
        )}
      </div>

      {/* Read More / Read Less Toggle Button */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold py-3 px-8 rounded-full shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] transition-all transform hover:scale-105 flex items-center gap-2 border border-white/20"
        >
            {isExpanded ? (
                <>Read Less <span className="transform rotate-180 transition-transform duration-300">▼</span></>
            ) : (
                <>Read Full Article (3500+ Words) <span className="transform rotate-0 transition-transform duration-300 group-hover:translate-y-1">▼</span></>
            )}
        </button>
      </div>
    </div>
  );
};