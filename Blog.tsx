import React, { useState } from 'react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "How to Calculate Profit Margin: A Beginner's Guide",
    excerpt: "Learn the basics of calculating profit margins and ROI for your small business. Simple formulas and examples included.",
    content: `
      <h2>Understanding Profit Margin</h2>
      <p>Profit margin is a financial metric used to assess a company's financial health and business model. It reveals the proportion of money left over from revenues after accounting for the cost of goods sold (COGS).</p>
      
      <h2>How to Calculate Net Profit</h2>
      <p>Net profit is the actual profit you make after deducting all expenses. The formula is extremely simple:</p>
      <p><strong>Net Profit = Total Revenue - Total Expenses</strong></p>
      <p>For example, if you buy a product for $50 and sell it for $80, your net profit is $30.</p>
      
      <h2>What is ROI (Return on Investment)?</h2>
      <p>ROI helps you understand how much you're getting back compared to what you put in. To calculate ROI, divide your net profit by your investment cost, then multiply by 100 to get a percentage.</p>
      <p>Using our previous example ($30 profit on a $50 investment), your ROI is (30 / 50) * 100 = 60%.</p>
      
      <h2>Why Use an Online Profit Calculator?</h2>
      <p>While the math is straightforward, doing it repeatedly for multiple products can be tedious. Using online tools like the Profit Calculator on our site can save you hours of manual calculation and prevent costly mathematical errors.</p>
    `
  },
  {
    id: 2,
    title: "10 Best Free Online Tools for Freelancers in 2026",
    excerpt: "Discover the top free online tools that every freelancer and remote worker needs to boost productivity.",
    content: `
      <h2>The Digital Toolbox</h2>
      <p>Working as a freelancer means managing your own time, clients, and projects. Having the right set of tools can make the difference between barely surviving and truly thriving.</p>
      
      <h2>Essential Productivity Tools</h2>
      <p>Time is money. Tools like Word Counters and GPA Calculators might seem niche, but they save precious seconds. For writers, knowing your exact word count helps you quote prices accurately and meet publisher guidelines flawlessly.</p>
      
      <h2>Financial Calculators</h2>
      <p>Whether it is converting currency from USD to BDT or calculating your monthly EMI for a new laptop, having instant access to clean, ad-free financial calculators helps you make better business decisions.</p>
      
      <h2>Security and Passwords</h2>
      <p>We work with multiple clients, which means juggling dozens of logins. A strong Password Generator is not just a luxury; it is a necessity to protect client data and your own digital assets.</p>
    `
  },
  {
    id: 3,
    title: "How to Earn Online: Real Ways to Make Money on the Internet",
    excerpt: "A practical guide to starting your online earning journey without falling for scams.",
    content: `
      <h2>The Reality of Online Earning</h2>
      <p>The internet is full of promises of easy money, but the truth is that earning online requires actual skill and dedication. However, the barrier to entry has never been lower.</p>
      
      <h2>Freelancing Your Skills</h2>
      <p>If you can write, design, code, or manage social media, platforms like Upwork and Fiverr are waiting for you. The key is to start small, build your portfolio, and slowly increase your rates.</p>
      
      <h2>Content Creation</h2>
      <p>Starting a blog or a YouTube channel requires patience, but it can turn into a passive income stream through AdSense, sponsorships, and affiliate marketing. Remember, quality and consistency are your best friends here.</p>
      
      <h2>Tools for Online Earners</h2>
      <p>To succeed, you need to work smart. Use our YouTube Title Generator to get ideas for your next viral video, or our Profit Calculator to figure out if your new dropshipping idea actually makes mathematical sense.</p>
    `
  },
  {
    id: 4,
    title: "Ultimate YouTube Tips: How to Gain Views and Subscribers",
    excerpt: "Unlock the secrets to YouTube growth with these proven optimization techniques.",
    content: `
      <h2>Nailing the First Impression</h2>
      <p>Your thumbnail and title are the most important elements of your video. Even the best content will fail if nobody clicks it. Use tools like a YouTube Title Generator to brainstorm hooks that spark curiosity.</p>
      
      <h2>Audience Retention is King</h2>
      <p>YouTube pushes videos that keep people on the platform. Review your analytics to see where viewers drop off. Hook them in the first 10 seconds, and cut out any fluff that doesn't serve the story.</p>
      
      <h2>SEO Basics for Creators</h2>
      <p>Write detailed descriptions using your target keywords naturally. Include chapters so viewers can navigate easily, and always add relevant tags to help YouTube understand your context.</p>
      
      <h2>Consistency vs Quality</h2>
      <p>Aim for the highest quality you can consistently produce without burning out. It is better to upload one great video a week than three mediocre ones. Keep improving your audio, lighting, and editing with each upload.</p>
    `
  },
  {
    id: 5,
    title: "Mastering Time Management for Freelancers",
    excerpt: "Learn how to budget your time effectively to maximize earning potential and reduce burnout.",
    content: `
      <h2>The Freelancer's Dilemma</h2>
      <p>When you work for yourself, the line between work and personal life blurs. Without a boss looking over your shoulder, it's easy to either procrastinate or work yourself to exhaustion.</p>
      <h2>Time Blocking Strategies</h2>
      <p>Divide your day into dedicated blocks. For example, use the morning for creative work and the afternoon for administrative tasks and calculating your finances using our Profit Calculator.</p>
      <h2>Minimize Distractions</h2>
      <p>Turn off notifications on your phone while working on high-priority projects. Focused work for 4 hours yields better results than 8 hours of distracted work.</p>
    `
  },
  {
    id: 6,
    title: "Understanding Color Psychology in Web Design",
    excerpt: "How choosing the right colors can increase traffic, improve user experience, and boost sales.",
    content: `
      <h2>Why Colors Matter</h2>
      <p>Colors evoke emotions and influence decision-making. High-converting websites don't just pick colors randomly; they use psychology to guide the user's journey.</p>
      <h2>The Power of Blue</h2>
      <p>Statistically, blue is the color of trust and stability. This is why major tech platforms and financial institutions use it heavily. It puts users at ease.</p>
      <h2>Testing with the Color Converter</h2>
      <p>When tweaking your website's design, use our Color Converter tool to translate your chosen HEX codes into RGB or HSL formats quickly for your CSS files.</p>
    `
  },
  {
    id: 7,
    title: "What is Base64 and Why Do Developers Use It?",
    excerpt: "A beginner-friendly explanation of Base64 encoding and its practical applications.",
    content: `
      <h2>Data Translation</h2>
      <p>Computers communicate in binary, but not all protocols can handle binary data safely. Base64 encoding translates binary data into a safe string of ASCII characters.</p>
      <h2>Common Use Cases</h2>
      <p>You'll frequently see Base64 used to embed small images directly into HTML/CSS to reduce HTTP requests, or to encode email attachments.</p>
      <h2>Using Our Base64 Tool</h2>
      <p>Need to decode a string or encode some text? Head over to our tools section and use the Base64 Encode/Decode utility for instant results.</p>
    `
  },
  {
    id: 8,
    title: "How to Protect Your Privacy Online in 2026",
    excerpt: "Essential cybersecurity habits everyone should practice to keep their data safe.",
    content: `
      <h2>The Reality of Data Tracking</h2>
      <p>Every click, search, and page interaction leaves a footprint. While you can't be completely invisible, you can drastically reduce your exposure.</p>
      <h2>Strong Password Hygiene</h2>
      <p>The first line of defense is using a strong, unique password for every account. Stop using your pet's name. Utilize our Password Generator to create secure, uncrackable credentials.</p>
      <h2>Enable Two-Factor Authentication (2FA)</h2>
      <p>Even if a hacker gets your password, 2FA acts as a secondary lock. Always enable it on your email, banking, and primary social media accounts.</p>
    `
  },
  {
    id: 9,
    title: "What is JSON and How is it Used on the Web?",
    excerpt: "An introduction to JavaScript Object Notation (JSON) and why it's the language of the modern web.",
    content: `
      <h2>The Universal Data Format</h2>
      <p>JSON is a lightweight format for storing and transporting data. It is highly readable for both humans and machines, making it the preferred method for APIs.</p>
      <h2>Structure matters</h2>
      <p>Working with large JSON files can be difficult if they aren't formatted properly. Raw API responses are often minified (squished into one line) to save bandwidth.</p>
      <h2>Beautifying JSON</h2>
      <p>Whenever you are debugging, just paste the raw data into our JSON Formatter tool. It instantly beautifies the code so you can read the object structure clearly.</p>
    `
  },
  {
    id: 10,
    title: "Top 5 Mistakes Beginners Make with AdSense",
    excerpt: "Are you losing money on your blog? Avoid these common Google AdSense pitfalls.",
    content: `
      <h2>1. Ad Clutter</h2>
      <p>Placing too many ads makes your site look like spam and frustrates users. This increases your bounce rate and actually lowers your overall revenue.</p>
      <h2>2. Clicking Your Own Ads</h2>
      <p>Never, ever click your own ads. Google is very smart and will ban your account permanently for invalid traffic.</p>
      <h2>3. Ignoring Mobile Traffic</h2>
      <p>Most of your users will visit via their phones. Ensure your ads are responsive and that your layout remains clean and readable on small screens.</p>
    `
  },
  {
    id: 11,
    title: "Why You Need a URL Encoder Tool",
    excerpt: "Understanding the importance of URL encoding when passing data across the web.",
    content: `
      <h2>Reserved Characters</h2>
      <p>URLs can only be sent over the Internet using the ASCII character set. If your URL contains special characters (like spaces or symbols), they must be encoded.</p>
      <h2>How it Works</h2>
      <p>URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits. For example, a space becomes "%20".</p>
      <h2>Quick Encoding</h2>
      <p>Instead of doing this manually, you can use our built-in URL Encoder/Decoder tool to properly format your query strings before adding them to your application.</p>
    `
  },
  {
    id: 12,
    title: "The Ultimate Guide to SEO Headings",
    excerpt: "How to structure your articles using H1, H2, and H3 tags to rank higher on Google.",
    content: `
      <h2>Hierarchy is Everything</h2>
      <p>Search engines read your headings to understand what your content is about. Your H1 is the title of the book, H2s are the chapters, and H3s are the sub-sections.</p>
      <h2>Only One H1</h2>
      <p>Never use more than one H1 tag per page. It confuses crawlers and dilutes the main topic of your article.</p>
      <h2>Keyword Placement</h2>
      <p>Try to naturally include your secondary keywords in your H2 tags. Don't stuff them; make sure it still reads well for a human audience.</p>
    `
  },
  {
    id: 13,
    title: "How to Work Flexibly While Traveling",
    excerpt: "Tips for digital nomads who want to maintain productivity while seeing the world.",
    content: `
      <h2>The Digital Nomad Lifestyle</h2>
      <p>Working from a beach sounds amazing, but the reality is battling bad Wi-Fi and time zone differences. Preparation is key.</p>
      <h2>Offline Tools are Lifesavers</h2>
      <p>Find web applications that work smoothly. Our Smart Tools Hub is lightweight and fast, meaning you can access calculators and converters even on a poor 3G connection.</p>
      <h2>Managing Currency</h2>
      <p>When hopping countries, keep an eye on exchange rates. Use tools like the USD to BDT converter to know exactly how much you are spending in your home currency.</p>
    `
  },
  {
    id: 14,
    title: "Demystifying the GPA System",
    excerpt: "A simple explanation of how Grade Point Averages are calculated and why they matter.",
    content: `
      <h2>Credit Hours vs Grades</h2>
      <p>Your GPA isn't just an average of your grades; it's a weighted average based on the credit hours of each course. A 4-credit course affects your GPA much more than a 1-credit course.</p>
      <h2>The Math Behind It</h2>
      <p>To calculate it, multiply your grade value by the course credits, add them all up, and divide by the total number of credits attempted.</p>
      <h2>The Simple Way</h2>
      <p>Math errors can cause unnecessary stress calculating this manually. Use our dedicated GPA Calculator to simply plug in your subjects and get your accurate semester GPA instantly.</p>
    `
  },
  {
    id: 15,
    title: "Dakhil & SSC Exam 2026-2028: Complete Preparation Guide",
    excerpt: "Essential tips and strategies for Madrasah and School students aiming for a Golden A+ in their board exams.",
    content: `
      <h2>The New Curriculum vs Traditional Board Exams</h2>
      <p>As we approach the 2026, 2027, and 2028 board exams (Dakhil and SSC), staying updated with the syllabus distribution is paramount. Students must balance core subjects like Math and English with specialized subjects like Quran, Hadith, and Arabic.</p>
      <h2>Utilizing the 4th Subject Advantage</h2>
      <p>Many students overlook the Optional (4th) Subject. Under the Bangladesh Education Board system, the points from your 4th subject (above 2.0) are added directly to your total, making it exponentially easier to achieve a GPA 5.00. Focus heavily on Agriculture or Higher Math to boost your final score.</p>
      <h2>Creating a Bulletproof Routine</h2>
      <p>Consistency is more important than pulling all-nighters. Try using our 'Study Routine Maker' tool. Start your day early with Fajr prayers followed by memorization subjects when your brain is freshest.</p>
    `
  },
  {
    id: 16,
    title: "Top 5 Study Techniques for Board Candidates",
    excerpt: "Science-backed methods to retain more information in less time for your upcoming Dakhil or SSC exams.",
    content: `
      <h2>1. The Pomodoro Technique</h2>
      <p>Studying for 3 hours straight leads to brain fatigue. Instead, study intensely for 45 minutes and take a 10-minute break. This keeps your mind sharp.</p>
      <h2>2. Test Papers are Your Best Friend</h2>
      <p>For candidates appearing in 2026 and 2027, solving the last 5 years of board test papers is non-negotiable. It helps you recognize question patterns.</p>
      <h2>3. Active Recall over Passive Reading</h2>
      <p>Don't just highlight text. Close the book and try to write down everything you remember. This forces your brain to build strong neural pathways.</p>
    `
  }
];

export function Blog() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const article = articles.find(a => a.id === activeArticle);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        {!activeArticle ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Articles & Guides</h1>
              <p className="text-slate-600">Helpful tips, tutorials, and guides for productivity and online success.</p>
            </div>
            
            <AdPlaceholder format="horizontal" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map(article => (
                <article 
                  key={article.id} 
                  onClick={() => setActiveArticle(article.id)}
                  className="bg-white p-4 rounded-xl border border-slate-200 cursor-pointer group hover:border-blue-400 hover:shadow-md transition-all shadow-sm"
                >
                  <span className="text-[10px] text-blue-600 uppercase font-bold">Article</span>
                  <h4 className="font-bold mt-1 text-slate-900 group-hover:text-blue-600 transition-colors">{article.title}</h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.article 
            key="article"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white shadow-sm border border-slate-200 rounded-3xl p-6 md:p-12"
          >
            <button 
              onClick={() => setActiveArticle(null)}
              className="flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>
            <header className="mb-10 border-b border-slate-200 pb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{article?.title}</h1>
              <div className="flex items-center text-sm text-slate-500">
                <span>Smart Tools Hub</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </header>
            
            <AdPlaceholder format="horizontal" className="mb-8" />
            
            <div 
              className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-semibold prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: article?.content || '' }} 
            />
            
            <AdPlaceholder format="rectangle" className="mt-12" />
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
