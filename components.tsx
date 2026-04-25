import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, ExternalLink, ShieldAlert, Plane, Briefcase, Map, DollarSign, Info, Bot, Sparkles } from 'lucide-react';

export function AiEarningGuide() {
  const [targetType, setTargetType] = useState<'app' | 'website' | ''>('');
  const [device, setDevice] = useState<'pc' | 'phone' | ''>('');
  const [showGuide, setShowGuide] = useState(false);

  const handleGenerate = () => {
    if (targetType && device) {
      setShowGuide(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" /> এআই (AI) দিয়ে অ্যাপ/ওয়েবসাইট বানিয়ে ইনকাম
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xl font-medium text-slate-700 mb-2">আপনি কি বানাতে চান?</label>
            <select
              value={targetType}
              onChange={(e) => { setTargetType(e.target.value as any); setShowGuide(false); }}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-xl font-medium"
            >
              <option value="">নির্বাচন করুন...</option>
              <option value="app">মোবাইল অ্যাপ (Mobile App)</option>
              <option value="website">ওয়েবসাইট (Website)</option>
            </select>
          </div>
          <div>
            <label className="block text-xl font-medium text-slate-700 mb-2">আপনি কোন ডিভাইসে বানাবেন?</label>
            <select
              value={device}
              onChange={(e) => { setDevice(e.target.value as any); setShowGuide(false); }}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-xl font-medium"
            >
              <option value="">নির্বাচন করুন...</option>
              <option value="phone">মোবাইল ফোন (Phone)</option>
              <option value="pc">কম্পিউটার (PC/Laptop)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!targetType || !device}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-6 h-6" /> গাইড দেখুন
        </button>
      </div>

      {showGuide && (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80" alt="Building with AI" className="w-full h-48 md:h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold border-b-2 border-slate-100 pb-4 text-indigo-700">
                ১. {targetType === 'app' ? 'অ্যাপ' : 'ওয়েবসাইট'} তৈরির প্রসেস ({device === 'pc' ? 'পিসি দিয়ে' : 'মোবাইল দিয়ে'})
              </h3>

              {targetType === 'website' && device === 'pc' && (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>🔹 <strong>এআই টুলস ব্যবহার:</strong> পিসিতে ওয়েবসাইট বানানোর জন্য <a href="https://v0.dev" target="_blank" rel="noreferrer" className="text-blue-600 underline">v0.dev</a>, <a href="https://lovable.dev" target="_blank" rel="noreferrer" className="text-blue-600 underline">Lovable.dev</a> বা <a href="https://bolt.new" target="_blank" rel="noreferrer" className="text-blue-600 underline">Bolt.new</a> ব্যবহার করুন।</p>
                  <p>🔹 <strong>প্রম্পট (Prompt):</strong> "আমাকে একটি ব্লগিং বা ই-কমার্স ওয়েবসাইট বানিয়ে দাও" লিখে নির্দেশ দিন। এআই কয়েক সেকেন্ডে আপনার সম্পূর্ণ ওয়েবসাইট ডিজাইন ও কোডিং করে দেবে।</p>
                  <p>🔹 <strong>কাস্টমাইজ:</strong> আপনার পছন্দমতো কালার, ছবি এবং লেখা পরিবর্তন করার জন্য এআইকে আবার নির্দেশ দিন। কোডিং জানার কোনো প্রয়োজন নেই।</p>
                </div>
              )}

              {targetType === 'website' && device === 'phone' && (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>🔹 <strong>এআই টুলস ব্যবহার:</strong> ফোনে ব্রাউজার ওপেন করে ডেস্কটপ মোড (Desktop mode) চালু করে নিন। এরপর <a href="https://v0.dev" target="_blank" rel="noreferrer" className="text-blue-600 underline">v0.dev</a> বা <a href="https://bolt.new" target="_blank" rel="noreferrer" className="text-blue-600 underline">Bolt.new</a> সাইটে যান।</p>
                  <p>🔹 <strong>নির্দেশনা:</strong> বাংলায় বা ইংরেজিতে লিখুন আপনি কেমন ওয়েবসাইট চান (যেমন: পোর্টফোলিও বা নিউজ সাইট)।</p>
                  <p>🔹 <strong>নিয়ন্ত্রণ:</strong> স্ক্রিন ছোট হওয়ায় একটু মানিয়ে নিতে হবে। এআই পুরো সাইট রেডি করে দিলে আপনি সরাসরি সেভ করে নিতে পারবেন।</p>
                </div>
              )}

              {targetType === 'app' && device === 'pc' && (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>🔹 <strong>এআই টুলস ব্যবহার:</strong> <a href="https://flutterflow.io" target="_blank" rel="noreferrer" className="text-blue-600 underline">FlutterFlow AI</a> বা <a href="https://lovable.dev" target="_blank" rel="noreferrer" className="text-blue-600 underline">Lovable</a> ব্যবহার করুন।</p>
                  <p>🔹 <strong>প্রম্পট:</strong> "একটি শপিং অ্যাপ বা ক্যালকুলেটর অ্যাপ বানিয়ে দাও" লিখে কমান্ড দিন। এআই স্ক্রিন, বাটন এবং ডিজাইন রেডি করে দেবে।</p>
                  <p>🔹 <strong>ডেটাবেস:</strong> Firebase বা Supabase কানেক্ট করে অ্যাপটিকে একটি সত্যিকারের কাজ করা অ্যাপে রূপান্তর করুন।</p>
                </div>
              )}

              {targetType === 'app' && device === 'phone' && (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>🔹 <strong>এআই টুলস ব্যবহার:</strong> মোবাইল দিয়ে অ্যাপ বানানোর জন্য <a href="https://chatgpt.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">ChatGPT</a> বা <a href="https://claude.ai" target="_blank" rel="noreferrer" className="text-blue-600 underline">Claude AI</a> এর সাহায্য নিতে পারেন।</p>
                  <p>🔹 <strong>প্রসেস:</strong> এআইকে বলুন "আমি একটি অ্যাপ বানাতে চাই, আমাকে কোড লিখে দাও।" এআই কোড দিলে, আপনি Sketchware বা AIDE অ্যাপ ডাউনলোড করে সেখানে কোড পেস্ট করে অ্যাপ বানাতে পারেন।</p>
                  <p>🔹 <strong>সহজ উপায়:</strong> চাইলে ওয়েবসাইট বানিয়ে Web2App টুলস দিয়ে ফ্রিতে সেটাকে ফোনে অ্যাপ (APK) বানিয়ে নিতে পারবেন।</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80" alt="Publishing to the Internet" className="w-full h-48 md:h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold border-b-2 border-slate-100 pb-4 text-indigo-700">
                ২. নেটে (ইন্টারনেটে) আপলোড করার নিয়ম
              </h3>
              
              {targetType === 'website' ? (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>✅ <strong>ফ্রি হোস্টিং:</strong> শুরুতে ফ্রিতে লাইভ করার জন্য Vercel, Netlify বা GitHub Pages ব্যবহার করুন।</p>
                  <p>✅ <strong>ডোমেইন:</strong> আপনি চাইলে Namecheap বা GoDaddy থেকে একটি .com ডোমেইন (যেমন: amarshop.com) কিনে আপনার ওয়েবসাইটের সাথে যুক্ত করতে পারেন।</p>
                  <p>✅ <strong>পাবলিশ:</strong> Bolt.new বা Lovable এ "Deploy" বাটনে ক্লিক করলেই ২ মিনিটের মধ্যে ওয়েবসাইটটি সবার জন্য ইন্টারনেটে লাইভ হয়ে যাবে।</p>
                </div>
              ) : (
                <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4 font-medium">
                  <p>✅ <strong>Google Play Store:</strong> অ্যাপটিকে বিশ্বব্যাপী মানুষের কাছে পৌঁছাতে গুগল প্লে কনসোল (Google Play Console) অ্যাকাউন্ট খুলতে হবে (২৫ ডলার ফি)। এরপর অ্যাপের APK বা AAB ফাইল আপলোড করে দিন।</p>
                  <p>✅ <strong>Alternative Store:</strong> ফ্রিতে অ্যাপ শেয়ার করতে চাইলে Amazon Appstore, GetApps, বা নিজের ওয়েবসাইটে APK ফাইল আপলোড করে লিংক শেয়ার করতে পারেন।</p>
                  <p>✅ <strong>শেয়ার:</strong> ফেসবুক, টিকটক বা ইউটিউবে ভিডিও বানিয়ে আপনার অ্যাপের প্রমোশন করুন যাতে মানুষ ডাউনলোড করে।</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&auto=format&fit=crop&q=80" alt="Make Money" className="w-full h-48 md:h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold border-b-2 border-slate-100 pb-4 text-emerald-600">
                ৩. টাকা ইনকাম করার উপায়গুলো 💸
              </h3>
              
              <ul className="list-disc pl-6 text-xl md:text-2xl text-slate-700 space-y-4 font-medium marker:text-emerald-500">
                <li>
                  <strong className="text-emerald-700">গুগল অ্যাডসেন্স (Google AdSense):</strong> আপনার অ্যাপ (AdMob) বা ওয়েবসাইটে (AdSense) গুগলের বিজ্ঞাপন বসিয়ে টাকা ইনকাম করতে পারবেন। মানুষ আপনার সাইটে আসলে বা অ্যাপ চালালে বিজ্ঞাপন দেখবে এবং আপনার ডলার জমা হবে।
                </li>
                <li>
                  <strong className="text-emerald-700">অ্যাফিলিয়েট মার্কেটিং (Affiliate Marketing):</strong> অ্যামাজন (Amazon), আলিবাবা বা দারাজের প্রোডাক্টের লিংক আপনার অ্যাপ/সাইটে রাখুন। কেউ সেই লিংকে ক্লিক করে কিছু কিনলে আপনি কমিশন পাবেন।
                </li>
                <li>
                  <strong className="text-emerald-700">প্রিমিয়াম ফিচার / সাবস্ক্রিপশন:</strong> অ্যাপে বা সাইটে কিছু স্পেশাল ফিচার রাখুন যা ব্যবহারের জন্য ইউজারদের টাকা বা সাবস্ক্রিপশন কিনতে হবে (যেমন Netflix বা ChatGPT Plus)।
                </li>
                <li>
                  <strong className="text-emerald-700">ক্লায়েন্টের কাজ (Freelancing):</strong> এআই দিয়ে দ্রুত সাইট/অ্যাপ বানাতে পারলে আপনি ফ্রিল্যান্সিং সাইট (Upwork, Fiverr) বা লোকাল দোকানদারদের ওয়েবসাইট বানিয়ে দিয়ে সরাসরি ১০ থেকে ২০ হাজার টাকা আয় করতে পারবেন।
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-xl md:text-2xl font-bold text-emerald-800 text-center">
                  💡 শুরু করার জন্য আর দেরি কেন? এখনই AI ব্যবহার করে আপনার নিজের প্রজেক্ট তৈরি করুন!
                </p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export function AbroadGuide() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // If the user already clicked generate and then changes an option, just auto-update or hide
    if (showResult && (!origin || !destination || !purpose)) {
      setShowResult(false);
    }
  }, [origin, destination, purpose, showResult]);

  const originCountries = [
    "Bangladesh", "India", "Pakistan", "Nepal", "Sri Lanka", "Philippines",
    "Indonesia", "Vietnam", "Myanmar", "Thailand", "Nigeria", "Egypt",
    "Morocco", "Ethiopia", "Kenya", "Mexico", "Guatemala", "Brazil", "China"
  ].sort();
  
  const destinationCountries = [
    {
      name: "Saudi Arabia",
      currency: "SAR",
      cost: "300,000 - 500,000 ৳",
      jobs: "Construction, Driving, Retail, Hospitality, Medical",
      hours: "8-10",
      salary: "$400 - $1500 / month",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&auto=format&fit=crop&q=80",
      description: "Saudi Arabia is a prominent Middle Eastern powerhouse, blending deep-rooted Islamic heritage with futuristic mega-projects. It is a major hub for international foreign workers seeking opportunities in construction, healthcare, and engineering. The country has also recently opened its doors to tourism, offering breathtaking ancient landscapes and massive modern entertainment cities.",
      spots: [
        { name: "Mecca & Medina", desc: "The spiritual centers of Islam, drawing millions annually for Hajj and Umrah." },
        { name: "Riyadh", desc: "A bustling capital city featuring modern skylines, luxury shopping, and deep cultural museums." },
        { name: "AlUla", desc: "A historic oasis city with stunning Nabataean rock tombs and incredible desert landscapes." }
      ]
    },
    {
      name: "United Arab Emirates",
      currency: "AED",
      cost: "250,000 - 450,000 ৳",
      jobs: "Construction, Delivery, Hotel/Restaurant, IT, Sales",
      hours: "8-9",
      salary: "$500 - $2000 / month",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
      description: "The United Arab Emirates, especially Dubai and Abu Dhabi, is a global epicenter for business, luxury tourism, and striking modern architecture. It offers a tax-free income environment that attracts expats worldwide. The lifestyle is fast-paced, modern, and filled with massive shopping malls, artificial islands, and towering skyscrapers.",
      spots: [
        { name: "Burj Khalifa", desc: "The tallest building in the world offering breathtaking views of the entire city skyline." },
        { name: "Palm Jumeirah", desc: "An architectural marvel, this tree-shaped artificial island is packed with luxury resorts." },
        { name: "Sheikh Zayed Grand Mosque", desc: "A massive, breathtakingly beautiful mosque in Abu Dhabi made of pure white marble." }
      ]
    },
    {
      name: "Qatar",
      currency: "QAR",
      cost: "350,000 - 550,000 ৳",
      jobs: "Oil & Gas, Construction, Hospitality, Driving",
      hours: "8",
      salary: "$450 - $1800 / month",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?w=800&auto=format&fit=crop&q=80",
      description: "Qatar is a small but incredibly wealthy peninsular Arab country, renowned for its futuristic skyscrapers and cutting-edge Islamic architecture. Powered by natural gas, its economy provides numerous opportunities in infrastructure and hospitality. It is rapidly expanding its tourism and cultural footprint on the global stage.",
      spots: [
        { name: "Museum of Islamic Art", desc: "An architectural gem on the Doha Corniche housing centuries of exquisite Islamic art." },
        { name: "Souq Waqif", desc: "A traditional marketplace offering spices, garments, and a deep taste of old Qatari culture." },
        { name: "The Pearl-Qatar", desc: "A fascinating artificial island featuring luxury shopping, marinas, and fine international dining." }
      ]
    },
    {
      name: "Kuwait",
      currency: "KWD",
      cost: "350,000 - 550,000 ৳",
      jobs: "Construction, Domestic Work, Retail, Oil & Gas",
      hours: "8",
      salary: "KWD 120 - 400 / month",
      image: "https://images.unsplash.com/photo-1548679847-1c19b0aa93ac?w=800&auto=format&fit=crop&q=80",
      description: "Kuwait is an oil-rich nation on the Persian Gulf. It offers a high value currency and tax-free income. The country relies heavily on a foreign workforce for infrastructure and domestic services.",
      spots: [
        { name: "Kuwait Towers", desc: "An iconic group of three water towers offering panoramic views." },
        { name: "Grand Mosque", desc: "The largest mosque in Kuwait known for its impressive architecture." },
        { name: "Souq Al Mubarakiya", desc: "A traditional market where you can experience the old Kuwait authentic feel." }
      ]
    },
    {
      name: "Oman",
      currency: "OMR",
      cost: "250,000 - 450,000 ৳",
      jobs: "Construction, Hospitality, Retail, Domestic Work",
      hours: "8-9",
      salary: "OMR 100 - 350 / month",
      image: "https://images.unsplash.com/photo-1590488961730-14e3047d8969?w=800&auto=format&fit=crop&q=80",
      description: "Oman is known for its breathtaking natural beauty, peaceful environment, and friendly locals. The job market is stable and offers opportunities in construction and hospitality.",
      spots: [
        { name: "Sultan Qaboos Grand Mosque", desc: "A glorious piece of modern Islamic architecture." },
        { name: "Wadi Shab", desc: "A stunning gorge with emerald pools and a hidden waterfall." },
        { name: "Mutrah Souq", desc: "A bustling traditional souq on the beautiful Muscat corniche." }
      ]
    },
    {
      name: "Bahrain",
      currency: "BHD",
      cost: "250,000 - 450,000 ৳",
      jobs: "Construction, Hospitality, Finance, Retail",
      hours: "8",
      salary: "BHD 100 - 400 / month",
      image: "https://images.unsplash.com/photo-1589823528220-4354c000fbea?w=800&auto=format&fit=crop&q=80",
      description: "Bahrain is an island nation in the Persian Gulf known for its more relaxed lifestyle compared to its neighbors. It is a historical trading hub with a growing financial and tourism sector.",
      spots: [
        { name: "Bahrain National Museum", desc: "Showcases the rich history and culture of the island." },
        { name: "Qal'at al-Bahrain", desc: "An ancient archaeological site and former capital of Dilmun." },
        { name: "Bab Al Bahrain", desc: "A historical building located in robust customs square." }
      ]
    },
    {
      name: "Malaysia",
      currency: "MYR",
      cost: "400,000 - 600,000 ৳",
      jobs: "Manufacturing, Plantation, Construction, IT, Services",
      hours: "8 + OT",
      salary: "$300 - $800 / month",
      image: "https://images.unsplash.com/photo-1518684079-3c830ef2f211?w=800&auto=format&fit=crop&q=80",
      description: "Malaysia is a Southeast Asian gem known for its stunning beaches, dense rainforests, and vibrant multicultural urban landscape. It balances a rapidly growing economy with affordable living, making it highly attractive for both labor forces and tourists. From the bustling streets of Kuala Lumpur to quiet islands, there is something for everyone.",
      spots: [
        { name: "Petronas Twin Towers", desc: "Iconic twin skyscrapers dominating the Kuala Lumpur skyline, joined by a spectacular skybridge." },
        { name: "Batu Caves", desc: "A series of cave temples situated on a limestone hill, guarded by a massive golden statue." },
        { name: "Langkawi", desc: "An archipelago of 99 islands known for pristine sandy beaches, mangroves, and duty-free shopping." }
      ]
    },
    {
      name: "Singapore",
      currency: "SGD",
      cost: "500,000 - 700,000 ৳",
      jobs: "Construction, Marine, Domestic Work, Finance, Services",
      hours: "8-10",
      salary: "$600 - $2500 / month",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80",
      description: "Singapore is a global financial center and a hyper-modern island city-state known for its spotless streets, strict laws, and incredibly green urban planning. It boasts a world-class economy and offers high-paying job opportunities, though the cost of living is equally high. It is a stunning blend of nature and advanced technology.",
      spots: [
        { name: "Gardens by the Bay", desc: "A futuristic nature park featuring massive Supertrees and climate-controlled lush biodomes." },
        { name: "Marina Bay Sands", desc: "An iconic luxury hotel and casino featuring a massive rooftop infinity pool overlooking the bay." },
        { name: "Sentosa Island", desc: "A dedicated island resort offering incredible theme parks, beaches, and Universal Studios." }
      ]
    },
    {
      name: "Thailand",
      currency: "THB",
      cost: "300,000 - 500,000 ৳",
      jobs: "Manufacturing, Agriculture, Hospitality",
      hours: "8-10",
      salary: "THB 10,000 - 25,000 / month",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop&q=80",
      description: "Thailand is famous for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. It's a huge tourist destination but also hires many foreign workers in manufacturing.",
      spots: [
        { name: "Grand Palace", desc: "A complex of spectacular buildings at the heart of Bangkok." },
        { name: "Phi Phi Islands", desc: "Famous for stunning limestone cliffs and crystal-clear waters." },
        { name: "Ayutthaya", desc: "An ancient city and archaeological site featuring magnificent ruins." }
      ]
    },
    {
      name: "Japan",
      currency: "JPY",
      cost: "600,000 - 900,000 ৳",
      jobs: "Factory, Agriculture, Caregiving, IT",
      hours: "8 (Strict)",
      salary: "JPY 150,000 - 300,000 / month",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80",
      description: "Japan seamlessly blends advanced technology with deep-rooted traditions. Due to an aging population, Japan is increasingly opening its doors to foreign workers in caregiving, agriculture, and tech.",
      spots: [
        { name: "Mount Fuji", desc: "Japan's iconic, snow-capped volcano and highest peak." },
        { name: "Kyoto Temples", desc: "Historic city known for classical Buddhist temples, gardens, and imperial palaces." },
        { name: "Tokyo Skytree", desc: "A broadcasting and observation tower dominating the Tokyo skyline." }
      ]
    },
    {
      name: "South Korea",
      currency: "KRW",
      cost: "400,000 - 700,000 ৳",
      jobs: "Manufacturing, Agriculture, Construction",
      hours: "8 + OT",
      salary: "KRW 1.8M - 3M / month",
      image: "https://images.unsplash.com/photo-1537248384260-29db42a3250d?w=800&auto=format&fit=crop&q=80",
      description: "South Korea is a dynamic and highly developed nation. The EPS (Employment Permit System) allows many foreign nationals to work in small to medium-sized manufacturing and agricultural businesses.",
      spots: [
        { name: "Gyeongbokgung Palace", desc: "A magnificent royal palace in northern Seoul." },
        { name: "N Seoul Tower", desc: "An iconic landmark offering panoramic views of the entire city." },
        { name: "Jeju Island", desc: "A volcanic island known for its beach resorts and volcanic landscape." }
      ]
    },
    {
      name: "Italy",
      currency: "EUR",
      cost: "700,000 - 1,200,000 ৳",
      jobs: "Agriculture, Hospitality, Factory, Domestic",
      hours: "40 / week",
      salary: "€1000 - €2000 / month",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=80",
      description: "Italy is a European country with a long Mediterranean coastline, leaving a powerful, lasting mark on Western culture and cuisine. It holds incredible economic potential in agriculture and seasonal hospitality. For tourists, it's an absolute paradise of historical ruins, classic art galleries, high fashion, and incredible culinary experiences.",
      spots: [
        { name: "Colosseum", desc: "An ancient amphitheater in the center of Rome, the largest ever built during the Roman Empire." },
        { name: "Venice Canals", desc: "A magical city built on water, world-famous for its romantic gondolas and stunning architecture." },
        { name: "Amalfi Coast", desc: "A stunning stretch of coastline featuring sheer rocky cliffs and vibrant colorful coastal towns." }
      ]
    },
    {
      name: "Poland",
      currency: "PLN",
      cost: "700,000 - 1,000,000 ৳",
      jobs: "Factory, Warehouse, Construction, IT",
      hours: "40 / week",
      salary: "PLN 3,500 - 6,000 / month",
      image: "https://images.unsplash.com/photo-1511475730419-54b1f485121b?w=800&auto=format&fit=crop&q=80",
      description: "Poland has a fast-growing economy in Central Europe. It has become a major gateway for foreign workers entering the EU, especially in manufacturing, meat processing, and logistics.",
      spots: [
        { name: "Kraków Old Town", desc: "A historic center filled with stunning architecture and rich heritage." },
        { name: "Wieliczka Salt Mine", desc: "An incredible deep underground mine featuring chapels carved from salt." },
        { name: "Tatra Mountains", desc: "A spectacular mountain range perfect for hiking and winter sports." }
      ]
    },
    {
      name: "Romania",
      currency: "RON",
      cost: "600,000 - 900,000 ৳",
      jobs: "Construction, Factory, Delivery, Hospitality",
      hours: "40 / week",
      salary: "€500 - €1000 / month",
      image: "https://images.unsplash.com/photo-1584473453303-911e389e02bb?w=800&auto=format&fit=crop&q=80",
      description: "Romania is a rapidly developing southeastern European nation known for the forested region of Transylvania and beautifully preserved medieval towns. It has become a significant destination for foreign laborers looking to enter the European market, particularly in the construction and delivery sectors. It offers rich history with an affordable cost of living.",
      spots: [
        { name: "Bran Castle", desc: "Often associated with the Dracula legend, this imposing fortress sits dramatically on a high hill." },
        { name: "Palace of the Parliament", desc: "A massive, heavy architectural marvel in Bucharest, and one of the heaviest buildings in the world." },
        { name: "Transfagarasan Highway", desc: "A spectacular, winding mountain road offering thrilling drives and absolutely unbelievable vistas." }
      ]
    },
    {
      name: "Spain",
      currency: "EUR",
      cost: "800,000 - 1,200,000 ৳",
      jobs: "Agriculture, Hospitality, Delivery, Construction",
      hours: "40 / week",
      salary: "€1,200 - €2,000 / month",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop&q=80",
      description: "Spain is beloved for its relaxed lifestyle, incredible food, and beautiful weather. Many foreign workers find seasonal jobs in agriculture and hospitality in its vibrant coastal regions.",
      spots: [
        { name: "Sagrada Familia", desc: "An incredible, unfinished basilica in Barcelona designed by Gaudi." },
        { name: "Alhambra", desc: "A stunning palace and fortress complex located in Granada." },
        { name: "Park Güell", desc: "A public park system composed of gardens and architectonic elements." }
      ]
    },
    {
      name: "Canada",
      currency: "CAD",
      cost: "900,000 - 1,600,000 ৳",
      jobs: "Truck Driving, Agriculture, Caregiver, Tech, Trades",
      hours: "40 / week",
      salary: "$2500 - $5000 / month",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80",
      description: "Canada is known for its boundless natural beauty, extremely polite society, and highly inclusive immigration policies. The nation boasts a booming economy that urgently requires skilled trades, tech workers, and medical staff due to demographic shifts. The quality of life is extremely high, with robust healthcare systems.",
      spots: [
        { name: "Niagara Falls", desc: "A breathtaking and incredibly powerful massive set of waterfalls situated on the US border." },
        { name: "Banff National Park", desc: "Canada's oldest national park featuring turquoise glacial lakes and rugged mountain peaks." },
        { name: "CN Tower", desc: "A defining structural marvel on the Toronto skyline offering thrilling transparent edge walks." }
      ]
    },
    {
      name: "Australia",
      currency: "AUD",
      cost: "1,200,000 - 1,800,000 ৳",
      jobs: "Hospitality, Agriculture, IT, Healthcare, Mining",
      hours: "38 / week",
      salary: "$3500 - $6000 / month",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=80",
      description: "Australia is both a country and a continent, famous for its vast red outback, incredible unique wildlife, and laid-back beach culture. Its immensely strong economy offers excellent wages and working conditions, making it an ideal destination for skilled migrants and holiday-makers. The diverse ecosystem is truly one of a kind.",
      spots: [
        { name: "Sydney Opera House", desc: "A globally recognized performing arts center featuring an iconic, futuristic sail-like design." },
        { name: "Great Barrier Reef", desc: "The world's largest coral reef system, visible from space, and an absolute paradise for diving." },
        { name: "Uluru (Ayers Rock)", desc: "A massive sandstone monolith in the Northern Territory holding deep indigenous significance." }
      ]
    },
    {
      name: "New Zealand",
      currency: "NZD",
      cost: "1,000,000 - 1,500,000 ৳",
      jobs: "Agriculture, Dairy Farming, Hospitality, Trades",
      hours: "40 / week",
      salary: "NZD 3,500 - 5,500 / month",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&auto=format&fit=crop&q=80",
      description: "New Zealand is a breathtaking island nation with a high quality of life. The economy heavily relies on agriculture and dairy farming, providing ample opportunities for seasonal and semi-skilled workers.",
      spots: [
        { name: "Milford Sound", desc: "A stunning fiord known for towering peaks and cascading waterfalls." },
        { name: "Hobbiton Movie Set", desc: "The charming village movie set for the Lord of the Rings." },
        { name: "Tongariro National Park", desc: "Features dramatic volcanic landscapes and vibrant emerald lakes." }
      ]
    },
    {
      name: "United States",
      currency: "USD",
      cost: "2,000,000 - 3,000,000 ৳",
      jobs: "Tech, Healthcare, Engineering, Hospitality",
      hours: "40 / week",
      salary: "$3000 - $8000 / month",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=80",
      description: "The United States is a vast country known for its incredible diversity and thriving tech hubs. From the bustling streets of New York to the tech-focused Silicon Valley, it offers immense opportunities for skilled professionals and diverse landscapes for exploration.",
      spots: [
        { name: "Statue of Liberty", desc: "An iconic symbol of freedom and democracy standing proudly in New York Harbor." },
        { name: "Grand Canyon", desc: "A massive, awe-inspiring natural gorge carved by the Colorado River." },
        { name: "Golden Gate Bridge", desc: "A famous suspension bridge offering incredible views of the San Francisco Bay." }
      ]
    },
    {
      name: "United Kingdom",
      currency: "GBP",
      cost: "1,500,000 - 2,500,000 ৳",
      jobs: "Healthcare, IT, Agriculture, Student Work",
      hours: "37.5 / week",
      salary: "£2000 - £4000 / month",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80",
      description: "The United Kingdom boasts a deep history, prestigious universities, and a strong global economy. It remains a major destination for international students and skilled healthcare professionals looking for long-term career growth.",
      spots: [
        { name: "Big Ben & Parliament", desc: "The iconic clock tower and political heart situated in central London." },
        { name: "Stonehenge", desc: "A prehistoric, mysterious monument formed of massive standing stones." },
        { name: "Edinburgh Castle", desc: "A historic fortress dominating the skyline of Scotland's capital city." }
      ]
    },
    {
      name: "France",
      currency: "EUR",
      cost: "700,000 - 1,200,000 ৳",
      jobs: "Hospitality, Tourism, IT, Healthcare",
      hours: "35 / week",
      salary: "€1500 - €3000 / month",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80",
      description: "France is celebrated globally for its art, incredible cuisine, and romantic cities. While it thrives on a massive tourism industry, it also has strong sectors in luxury goods, agriculture, and cutting-edge tech innovation.",
      spots: [
        { name: "Eiffel Tower", desc: "The globally recognized symbol of Paris offering sweeping city views." },
        { name: "Louvre Museum", desc: "The world's largest art museum and home to the Mona Lisa." },
        { name: "French Riviera", desc: "A stunning Mediterranean coastline famous for glamorous beach towns." }
      ]
    },
    {
      name: "Switzerland",
      currency: "CHF",
      cost: "1,500,000 - 2,500,000 ৳",
      jobs: "Finance, IT, Healthcare, Tourism",
      hours: "41 / week",
      salary: "CHF 4000 - 8000 / month",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80",
      description: "Switzerland offers breathtaking Alpine scenery alongside one of the highest living standards in the world. It is a hub for global banking, advanced precision manufacturing, and world-class luxury hospitality.",
      spots: [
        { name: "Matterhorn", desc: "One of the most famous and photographed mountains in the world." },
        { name: "Lake Geneva", desc: "A massive, beautiful crescent-shaped lake surrounded by the Alps." },
        { name: "Interlaken", desc: "A traditional resort town perfectly situated between two stunning alpine lakes." }
      ]
    },
    {
      name: "Turkey",
      currency: "TRY",
      cost: "300,000 - 600,000 ৳",
      jobs: "Textile, Construction, Tourism, Retail",
      hours: "45 / week",
      salary: "₺15000 - ₺30000 / month",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
      description: "Turkey sits perfectly at the crossroads of Europe and Asia, resulting in an incredibly rich cultural landscape. It has booming tourism and textile industries, making it a popular destination for regional migrant workers.",
      spots: [
        { name: "Hagia Sophia", desc: "A stunning architectural marvel that has served as both a church and a mosque." },
        { name: "Cappadocia", desc: "Famous for its unique rock formations and magical hot air balloon rides." },
        { name: "Grand Bazaar", desc: "One of the largest and oldest covered traditional markets in the world." }
      ]
    },
    {
      name: "India",
      currency: "INR",
      cost: "20,000 - 50,000 ৳",
      jobs: "IT, Medical, Textiles, BPO",
      hours: "40-48 / week",
      salary: "₹15000 - ₹50000 / month",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop&q=80",
      description: "India is a vast and dynamic country with a rapidly expanding economy. Primarily a source country, it also attracts professionals in the IT sector and people seeking affordable, high-quality medical tourism.",
      spots: [
        { name: "Taj Mahal", desc: "An ivory-white marble mausoleum and global symbol of eternal love." },
        { name: "Jaipur", desc: "The vibrant 'Pink City' known for historic palaces, forts, and rich culture." },
        { name: "Kerala Backwaters", desc: "A beautiful network of tranquil lagoons, lakes, and canals perfect for houseboating." }
      ]
    },
    {
      name: "Nepal",
      currency: "NPR",
      cost: "20,000 - 60,000 ৳",
      jobs: "Tourism, Trekking, Agriculture",
      hours: "40-48 / week",
      salary: "Rs 20000 - 50000 / month",
      image: "https://images.unsplash.com/photo-1555412654-72a95a495858?w=800&auto=format&fit=crop&q=80",
      description: "Nepal is famous as the home of the majestic Himalayas and is an absolute paradise for trekkers. While its broader economy is developing, the tourism and guided expedition sectors are robust.",
      spots: [
        { name: "Mount Everest Base Camp", desc: "The legendary gateway to the highest peak in the world." },
        { name: "Kathmandu Valley", desc: "The cultural heart filled with ancient temples, bustling squares, and history." },
        { name: "Pokhara", desc: "A beautiful lakeside city that serves as a gateway to the Anapurna circuit." }
      ]
    },
    {
      name: "Indonesia",
      currency: "IDR",
      cost: "150,000 - 300,000 ৳",
      jobs: "Factory, Tourism, Agriculture",
      hours: "40 / week",
      salary: "Rp 3M - 7M / month",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=80",
      description: "Indonesia is a massive archipelago composed of thousands of islands, most famously Bali. It boasts a thriving creative, digital, and tourism sector, drawing expats and remote workers from globally.",
      spots: [
        { name: "Bali", desc: "The island of the gods, world-famous for its volcanic mountains, beaches, and coral reefs." },
        { name: "Borobudur", desc: "The world's largest Buddhist temple offering spectacular sunrise views." },
        { name: "Komodo National Park", desc: "A protected ecosystem covering volcanic islands, home to the giant Komodo dragon." }
      ]
    }
  ];

  const destData = destinationCountries.find(d => d.name === destination);
  const result = destData ? { ...destData, origin, purpose } : null;

  const getProcessSteps = (country: string, origin: string) => [
    `Initial Preparation: Ensure your passport is valid for at least 6 months. Gather all your educational, professional, and experience certificates.`,
    `Find a Verified Purpose: If traveling for work, secure a legitimate, verifiable job offer from a registered company in ${country}. If for tourism, plan your hotel bookings, dates, and exact travel itinerary.`,
    `Medical & Clearance: Complete your mandatory medical fitness tests from authorized medical centers approved by the ${country} embassy located in ${origin}. Get police clearance if required.`,
    `Visa Application: Submit your visa application formally through the official embassy or authorized VFS Global center. Do not use shady, unverified third-party agencies.`,
    `Biometrics & Interview: Attend any mandatory embassy interviews confidently. Provide your biometric data (fingerprints/photos) securely at the visa center.`,
    `Final Travel: Do not book non-refundable flight tickets until the visa is fully stamped and verified online. Register with your local expatriate welfare desk at your departure airport.`
  ];

  const getWarningsLines = (country: string) => [
    `Always cross-verify your ${country} visa on the official ${country} government immigration portal before paying any large sums.`,
    `Never hand over your original passport to local, unauthorized brokers or middlemen. Keep it safe in your possession.`,
    `If applying for a work visa, ensure you have a legitimate Employment Contract directly from the employing company in ${country}, not just a fake promise from a middleman.`,
    `Beware of "Free Visa" scams! There is no such thing as a magical free visa where you can just go and find any job legally in ${country} without a sponsor.`,
    `Verify your recruiting agency's license validity with your local government expatriate ministry before making any financial transactions.`
  ];

  const handleGenerate = () => {
    if(!origin || !destination || !purpose) return;
    setShowResult(true);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">From (Origin)</label>
          <select value={origin} onChange={(e) => { setOrigin(e.target.value); setShowResult(false); }} className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm">
            <option value="">Select country...</option>
            {originCountries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">To (Destination)</label>
          <select value={destination} onChange={(e) => { setDestination(e.target.value); setShowResult(false); }} className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm">
            <option value="">Select country...</option>
            {destinationCountries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Purpose</label>
          <select value={purpose} onChange={(e) => { setPurpose(e.target.value); setShowResult(false); }} className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm">
            <option value="">Select purpose...</option>
            <option value="Work">Work / Job</option>
            <option value="Tour">Tourism / Travel</option>
          </select>
        </div>
      </div>

      <button onClick={handleGenerate} disabled={!origin || !destination || !purpose} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2 text-lg">
        <Plane className="w-6 h-6" /> Get Complete Guide
      </button>

      {showResult && result && (
        <div className="mt-10 space-y-8 animate-in zoom-in-95 duration-500">
          
          {/* Header & Description */}
          <div className="bg-white border text-center border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <img 
              src={result.image} 
              alt={result.name} 
              className="w-full h-64 md:h-80 object-cover" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://image.pollinations.ai/prompt/high%20quality%20photography%20of%20beautiful%20landmarks%20in%20${encodeURIComponent(result.name)}?width=800&height=400&nologo=true`;
              }}
            />
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 notranslate">{result.origin} ➔ {result.name}</h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                {result.description}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                 <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full text-sm">Currency: {result.currency}</span>
                 <span className="bg-indigo-100 text-indigo-800 font-bold px-4 py-2 rounded-full text-sm">Purpose: {result.purpose}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Work specific info */}
             {result.purpose === 'Work' && (
                <>
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black flex items-center gap-3 mb-6 text-slate-900"><Briefcase className="w-6 h-6 text-indigo-500"/> Job Opportunities & Details</h4>
                  <div className="space-y-4 text-base">
                    <p className="text-slate-700"><span className="font-bold text-slate-900 block mb-1">Common Sectors</span> {result.jobs}</p>
                    <hr className="border-slate-100" />
                    <p className="text-slate-700"><span className="font-bold text-slate-900 block mb-1">Working Hours</span> {result.hours} hours/day approx.</p>
                    <hr className="border-slate-100" />
                    <p className="text-slate-700"><span className="font-bold text-slate-900 block mb-1">Estimated Monthly Salary</span> <span className="text-emerald-600 font-bold text-lg">{result.salary}</span></p>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black flex items-center gap-3 mb-6 text-slate-900"><DollarSign className="w-6 h-6 text-emerald-500"/> Financial Estimates</h4>
                  <div className="space-y-4 text-base">
                    <p className="text-slate-700">The estimated total visa processing, agency, and flight cost from <strong>{result.origin}</strong> usually falls between:</p>
                    <p className="text-2xl font-black text-rose-600 bg-rose-50 p-4 rounded-xl text-center border border-rose-100">{result.cost}</p>
                    <p className="text-sm text-slate-500 mt-4 italic">*Note: This varies heavily based on the exact visa category and local agency fees.</p>
                  </div>
                </div>
                </>
             )}

             {/* Tourist / Spots Info (Shown prominently for Tour, but also available as general info) */}
             <div className={`bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${result.purpose === 'Tour' ? 'lg:col-span-2' : 'lg:col-span-2'}`}>
                <h4 className="text-xl font-black flex items-center gap-3 mb-6 text-slate-900"><Map className="w-6 h-6 text-rose-500"/> Beautiful Tourist Destinations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {result.spots.map((spot: any, i: number) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                       <h5 className="font-bold text-slate-900 mb-2">{spot.name}</h5>
                       <p className="text-sm text-slate-600 leading-relaxed">{spot.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Process Section */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
             <h4 className="text-2xl font-black flex items-center gap-3 mb-6 text-slate-900"><Info className="w-7 h-7 text-blue-500"/> How to go to {result.name} (Step-by-Step)</h4>
             <div className="space-y-4 text-lg">
                {getProcessSteps(result.name, result.origin).map((step, idx) => {
                  const [title, ...rest] = step.split(':');
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                       <div className="bg-blue-100 text-blue-700 font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-blue-200">
                         {idx + 1}
                       </div>
                       <p className="text-slate-700 pt-1">
                          <strong className="text-slate-900 block sm:inline">{title}:</strong> {rest.join(':')}
                       </p>
                    </div>
                  )
                })}
             </div>
          </div>

          {/* High Alert Warning Section (Black Box) */}
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <ShieldAlert className="w-32 h-32 text-white" />
             </div>
             <h4 className="text-2xl md:text-3xl font-black flex items-center gap-4 mb-8 text-white relative z-10">
               <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-rose-500"/> 
               Extremely Important Warnings
             </h4>
             <ul className="text-lg md:text-xl text-slate-200 space-y-6 list-disc pl-8 relative z-10 font-medium">
                {getWarningsLines(result.name).map((warn, i) => (
                  <li key={i}>{warn}</li>
                ))}
             </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// 1. Profit Calculator
export function ProfitCalculator() {

  const [buy, setBuy] = useState('');
  const [sell, setSell] = useState('');

  const buyPrice = parseFloat(buy);
  const sellPrice = parseFloat(sell);
  
  const profit = sellPrice - buyPrice;
  const roi = ((profit / buyPrice) * 100).toFixed(2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-500 mb-1">Buy Price</label>
          <input type="number" value={buy} onChange={e => setBuy(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" placeholder="e.g. 100" />
        </div>
        <div>
          <label className="block text-sm text-slate-500 mb-1">Sell Price</label>
          <input type="number" value={sell} onChange={e => setSell(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" placeholder="e.g. 150" />
        </div>
      </div>
      {!isNaN(profit) && buyPrice > 0 && (
        <div className="bg-slate-100 p-4 rounded-lg mt-4 border border-slate-300">
          <p className="text-lg">Profit: <span className={profit >= 0 ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>${profit.toFixed(2)}</span></p>
          <p className="text-lg">ROI: <span className={profit >= 0 ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>{roi}%</span></p>
        </div>
      )}
    </div>
  );
}

// 2. Age Calculator
export function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [ageStr, setAgeStr] = useState('');

  const calculate = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    
    setAgeStr(`${years} Years, ${months} Months, ${days} Days`);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-slate-500 mb-1">Date of Birth</label>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
      </div>
      <button onClick={calculate} className="w-full bg-indigo-600 hover:bg-indigo-500 text-slate-900 font-medium py-2 rounded-md transition-colors">Calculate Age</button>
      {ageStr && (
        <div className="bg-slate-100 p-4 rounded-lg text-center border border-slate-300">
          <p className="text-xl font-bold text-indigo-400">{ageStr}</p>
        </div>
      )}
    </div>
  );
}

// 3. Word Counter
export function WordCounter() {
  const [text, setText] = useState('');
  
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;

  return (
    <div className="space-y-4">
      <textarea 
        value={text} 
        onChange={e => setText(e.target.value)} 
        rows={5} 
        className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        placeholder="Type or paste your text here..."
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-100 p-3 rounded-lg text-center border border-slate-300">
          <p className="text-2xl font-bold text-slate-900">{words}</p>
          <p className="text-xs text-slate-500 uppercase tracking-wider">Words</p>
        </div>
        <div className="bg-slate-100 p-3 rounded-lg text-center border border-slate-300">
          <p className="text-2xl font-bold text-slate-900">{chars}</p>
          <p className="text-xs text-slate-500 uppercase tracking-wider">Characters</p>
        </div>
      </div>
    </div>
  );
}

// 4. Password Generator
export function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const generate = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pwd = "";
    for(let i=0; i<length; i++){
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-sm text-slate-500">Password Length: {length}</label>
        </div>
        <input type="range" min="6" max="32" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full" />
      </div>
      <button onClick={generate} className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-900 font-medium py-2 rounded-md transition-colors">Generate Password</button>
      {password && (
        <div className="bg-white border border-slate-300 p-4 rounded-lg flex justify-between items-center break-all">
          <span className="font-mono text-lg text-emerald-400">{password}</span>
          <button onClick={() => navigator.clipboard.writeText(password)} className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded border border-slate-600 transition-colors ml-4 shrink-0">Copy</button>
        </div>
      )}
    </div>
  );
}

// 5. Currency Converter
export function CurrencyConverter() {
  const rates: Record<string, number> = {
    USD: 1,
    BDT: 127,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.50,
    CAD: 1.37,
    AUD: 1.54,
    JPY: 154.00,
    AED: 3.67,
    SAR: 3.75,
    PKR: 278.50,
    MYR: 4.78,
    SGD: 1.36,
  };

  const [amount, setAmount] = useState('1');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('BDT');

  const numAmount = parseFloat(amount) || 0;
  
  // calculation
  const result = (numAmount / rates[from]) * rates[to];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-500 mb-1">From</label>
          <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900">
            {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-500 mb-1">To</label>
          <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900">
            {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-500 mb-1">Amount</label>
        <input type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
      </div>
      {numAmount > 0 && (
        <div className="bg-slate-100 p-4 rounded-lg text-center border border-slate-300">
           <p className="text-sm text-slate-500 mb-1">1 {from} = {(rates[to] / rates[from]).toFixed(4)} {to}</p>
           <p className="text-2xl sm:text-3xl font-bold text-amber-400">{result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} {to}</p>
        </div>
      )}
    </div>
  );
}

// 6. EMI Calculator
export function EMICalculator() {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('10');
  const [months, setMonths] = useState('12');

  const p = parseFloat(principal);
  const r = parseFloat(rate) / 100 / 12;
  const n = parseFloat(months);

  let emi = 0;
  if (p && r && n) {
    emi = p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-slate-500 mb-1">Loan Amount</label>
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
        </div>
        <div>
          <label className="block text-sm text-slate-500 mb-1">Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
        </div>
        <div>
          <label className="block text-sm text-slate-500 mb-1">Tenure (Months)</label>
          <input type="number" value={months} onChange={e => setMonths(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
        </div>
      </div>
      {emi > 0 && (
         <div className="bg-slate-100 p-4 rounded-lg text-center border border-slate-300 mt-2">
            <p className="text-sm text-slate-500">Monthly EMI</p>
            <p className="text-2xl font-bold text-rose-400">${emi.toFixed(2)}</p>
            <p className="text-xs text-slate-500 mt-1">Total Payment: ${(emi * n).toFixed(2)}</p>
         </div>
      )}
    </div>
  );
}


// 27. AI Links Directory
export function AILinksDirectory() {
  const aiCategories = [
    {
      title: 'Chat, Writing & Research',
      tools: [
        { name: 'ChatGPT', desc: 'Best for versatile tasks, math, and everyday queries.', url: 'https://chatgpt.com', color: 'from-emerald-400 to-emerald-600' },
        { name: 'Claude', desc: 'Best for long-form writing, pdf reading, and analysis.', url: 'https://claude.ai', color: 'from-orange-400 to-orange-600' },
        { name: 'Gemini', desc: 'Best for live web search and Google integration.', url: 'https://gemini.google.com', color: 'from-blue-400 to-indigo-600' },
        { name: 'Perplexity', desc: 'Best AI search engine for research and citations.', url: 'https://perplexity.ai', color: 'from-cyan-400 to-cyan-600' },
      ]
    },
    {
      title: 'Coding & Development',
      tools: [
        { name: 'Cursor', desc: 'Best AI-powered code editor built on VS Code.', url: 'https://cursor.sh', color: 'from-slate-400 to-slate-600' },
        { name: 'v0.dev', desc: 'Best for generating React UIs instantly.', url: 'https://v0.dev', color: 'from-zinc-700 to-black' },
        { name: 'GitHub Copilot', desc: 'Best inline autocomplete for developers.', url: 'https://github.com/features/copilot', color: 'from-blue-600 to-purple-600' },
      ]
    },
    {
      title: 'Image & Design',
      tools: [
        { name: 'Midjourney', desc: 'Best for photorealistic and artistic image generation.', url: 'https://midjourney.com', color: 'from-indigo-600 to-purple-800' },
        { name: 'Leonardo AI', desc: 'Best free alternative to Midjourney with high control.', url: 'https://leonardo.ai', color: 'from-pink-500 to-rose-600' },
        { name: 'Ideogram', desc: 'Best for generating images with accurate text/typography.', url: 'https://ideogram.ai', color: 'from-teal-400 to-emerald-500' },
      ]
    },
    {
      title: 'Video & Audio',
      tools: [
        { name: 'Runway', desc: 'Best for generating and editing AI video.', url: 'https://runwayml.com', color: 'from-violet-500 to-fuchsia-500' },
        { name: 'Suno', desc: 'Best for generating full songs with vocals and music.', url: 'https://suno.com', color: 'from-amber-400 to-orange-500' },
        { name: 'ElevenLabs', desc: 'Best for ultra-realistic Text-to-Speech and voice cloning.', url: 'https://elevenlabs.io', color: 'from-slate-700 to-slate-900' },
      ]
    }
  ];

  return (
    <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
      {aiCategories.map(category => (
        <div key={category.title}>
          <h3 className="text-sm font-semibold text-slate-700 mb-3 border-b border-slate-200 pb-2">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.tools.map(tool => (
              <div key={tool.name} className="bg-white border border-slate-300 p-4 rounded-xl flex flex-col h-full group hover:border-blue-500/50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-bold text-slate-900 shadow-lg bg-gradient-to-br ${tool.color}`}>
                    {tool.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-100 font-semibold text-sm truncate">{tool.name}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-4 flex-1 leading-relaxed">{tool.desc}</p>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-blue-400 text-xs font-medium py-2 rounded-lg transition-colors border border-slate-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10"
                >
                  Open {tool.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}// 7. Unit Converter
export function UnitConverter() {
  const [value, setValue] = useState('1');
  const [unitClass, setUnitClass] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');

  const numValue = parseFloat(value) || 0;
  let result = 0;

  if (unitClass === 'length') {
    const toMeter = { 'km': 1000, 'm': 1, 'cm': 0.01, 'mm': 0.001, 'in': 0.0254, 'ft': 0.3048 };
    const meterVal = numValue * (toMeter[fromUnit as keyof typeof toMeter] || 1);
    result = meterVal / (toMeter[toUnit as keyof typeof toMeter] || 1);
  } else {
    const toKg = { 'kg': 1, 'g': 0.001, 'lb': 0.453592, 'oz': 0.0283495 };
    const kgVal = numValue * (toKg[fromUnit as keyof typeof toKg] || 1);
    result = kgVal / (toKg[toUnit as keyof typeof toKg] || 1);
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4 p-1 bg-white rounded-md border border-slate-300 w-max">
        <button className={`px-3 py-1 rounded text-sm ${unitClass === 'length' ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:text-slate-900'}`} onClick={() => { setUnitClass('length'); setFromUnit('m'); setToUnit('cm'); }}>Length</button>
        <button className={`px-3 py-1 rounded text-sm ${unitClass === 'weight' ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:text-slate-900'}`} onClick={() => { setUnitClass('weight'); setFromUnit('kg'); setToUnit('lb'); }}>Weight</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full bg-white border border-slate-300 rounded-t-md p-2 text-slate-900" />
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full bg-slate-100 border-x border-b border-slate-300 rounded-b-md p-2 text-slate-900 text-sm">
            {unitClass === 'length' ? (
              <>
                <option value="km">Kilometer</option><option value="m">Meter</option><option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option><option value="in">Inch</option><option value="ft">Foot</option>
              </>
            ) : (
              <>
                <option value="kg">Kilogram</option><option value="g">Gram</option><option value="lb">Pound</option><option value="oz">Ounce</option>
              </>
            )}
          </select>
        </div>
        <div>
          <div className="w-full bg-white border-t border-x border-slate-300 rounded-t-md p-2 text-slate-900 h-[42px] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap bg-opacity-50 text-slate-700 pointer-events-none">
            {result ? parseFloat(result.toPrecision(7)).toString() : '0'}
          </div>
          <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full bg-slate-100 border border-slate-300 rounded-b-md p-2 text-slate-900 text-sm">
             {unitClass === 'length' ? (
              <>
                <option value="km">Kilometer</option><option value="m">Meter</option><option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option><option value="in">Inch</option><option value="ft">Foot</option>
              </>
            ) : (
              <>
                <option value="kg">Kilogram</option><option value="g">Gram</option><option value="lb">Pound</option><option value="oz">Ounce</option>
              </>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

// 8. GPA Calculator
export function GPACalculator() {
  const [subjects, setSubjects] = useState([{ credits: 3, grade: 4.0 }]);

  const addSub = () => setSubjects([...subjects, { credits: 3, grade: 4.0 }]);
  const updateSub = (index: number, field: string, val: number) => {
    const newSubs = [...subjects];
    newSubs[index] = { ...newSubs[index], [field]: val };
    setSubjects(newSubs);
  };
  const removeSub = (index: number) => {
    if(subjects.length === 1) return;
    setSubjects(subjects.filter((_, i) => i !== index));
  }

  let totalCredits = 0;
  let totalGradePoints = 0;
  subjects.forEach(s => {
    totalCredits += s.credits;
    totalGradePoints += (s.credits * s.grade);
  });
  const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';

  return (
    <div className="space-y-4">
      {subjects.map((sub, i) => (
        <div key={i} className="flex gap-2 items-center">
          <div className="flex-1">
             <label className="block text-xs text-slate-500 mb-1">Credits</label>
             <input type="number" min="1" value={sub.credits} onChange={e => updateSub(i, 'credits', parseFloat(e.target.value) || 0)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
          </div>
          <div className="flex-1">
             <label className="block text-xs text-slate-500 mb-1">Grade (e.g. 4.0)</label>
             <input type="number" step="0.1" value={sub.grade} onChange={e => updateSub(i, 'grade', parseFloat(e.target.value) || 0)} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
          </div>
          <button onClick={() => removeSub(i)} className="p-2 self-end text-slate-500 hover:text-rose-400 bg-slate-100 rounded mb-[2px]">×</button>
        </div>
      ))}
      <button onClick={addSub} className="text-sm text-indigo-400 hover:text-indigo-300 py-1">+ Add Subject</button>
      <div className="bg-slate-100 p-4 rounded-lg text-center border border-slate-300 mt-4">
         <p className="text-sm text-slate-500">Semester GPA</p>
         <p className="text-3xl font-bold text-slate-900">{gpa}</p>
      </div>
    </div>
  );
}

// 9. Image Size Checker
export function ImageSizeChecker() {
  const [fileInfo, setFileInfo] = useState<{name: string, size: string, dimensions: string} | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        setFileInfo({
          name: file.name,
          size: (file.size / 1024).toFixed(2) + ' KB',
          dimensions: `${img.width} × ${img.height} px`
        });
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-100/50 transition-colors cursor-pointer relative">
        <input type="file" accept="image/*" onChange={handleFile} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
        <span className="text-slate-500">Click or Drag Image Here</span>
      </div>
      {fileInfo && (
        <div className="bg-slate-100 p-4 rounded border border-slate-300 space-y-2">
          <p className="text-sm text-slate-700"><span className="text-slate-500">Name:</span> {fileInfo.name}</p>
          <p className="text-sm text-slate-700"><span className="text-slate-500">Size:</span> {fileInfo.size}</p>
          <p className="text-sm text-slate-700"><span className="text-slate-500">Dimensions:</span> {fileInfo.dimensions}</p>
        </div>
      )}
    </div>
  );
}

// 10. YouTube Title Generator
export function YTTitleGenerator() {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState<string[]>([]);

  const generate = () => {
    if (!topic.trim()) return;
    const t = topic.trim();
    const templates = [
      `The Ultimate Guide to ${t}`,
      `${t}: Everything You Need to Know`,
      `How to Master ${t} in 10 Minutes`,
      `Why Everyone is Talking About ${t}`,
      `Top 5 Secrets of ${t} Revealed`,
      `${t} Explained for Beginners`,
      `I Tried ${t} And Here Is What Happened`,
      `Stop Doing This If You Want to Succeed in ${t}`,
    ];
    // Shuffle and pick 5
    setTitles(templates.sort(() => 0.5 - Math.random()).slice(0, 5));
  };

  return (
    <div className="space-y-4">
      <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter video topic (e.g. Graphic Design)" className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900" />
      <button onClick={generate} className="w-full bg-red-600 hover:bg-red-500 text-slate-900 font-medium py-2 rounded-md transition-colors">Generate Titles</button>
      {titles.length > 0 && (
        <ul className="space-y-2 mt-4">
          {titles.map((title, i) => (
            <li key={i} className="bg-slate-100 p-3 rounded border border-slate-300 flex justify-between items-center group">
              <span className="text-sm text-slate-800 block">{title}</span>
              <button onClick={() => navigator.clipboard.writeText(title)} className="opacity-0 group-hover:opacity-100 text-xs bg-slate-200 px-2 py-1 rounded transition-opacity shrink-0 ml-2">Copy</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 11. Case Converter
export function CaseConverter() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4">
      <textarea 
        value={text} 
        onChange={e => setText(e.target.value)} 
        rows={4} 
        className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Type or paste your text here..."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <button onClick={() => setText(text.toUpperCase())} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm py-2 rounded border border-slate-300 transition">UPPERCASE</button>
        <button onClick={() => setText(text.toLowerCase())} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm py-2 rounded border border-slate-300 transition">lowercase</button>
        <button onClick={() => setText(text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm py-2 rounded border border-slate-300 transition">Title Case</button>
        <button onClick={() => navigator.clipboard.writeText(text)} className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-sm py-2 rounded border border-blue-500/30 transition">Copy</button>
      </div>
    </div>
  );
}

// 12. JSON Formatter
export function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const format = (space: number) => {
    try {
      if(!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, space));
      setError('');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-4">
       <textarea value={input} onChange={e => setInput(e.target.value)} rows={4} className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900 text-sm font-mono" placeholder="Paste JSON here..." />
       {error && <p className="text-rose-400 text-xs">{error}</p>}
       <div className="flex gap-2">
         <button onClick={() => format(2)} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Beautify</button>
         <button onClick={() => format(0)} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Minify</button>
       </div>
       {output && (
         <div className="relative group">
           <textarea readOnly value={output} rows={6} className="w-full bg-slate-100 border border-slate-200 rounded-md p-3 text-emerald-400 text-sm font-mono" />
           <button onClick={() => navigator.clipboard.writeText(output)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-100 text-xs px-2 py-1 rounded text-slate-700 transition-opacity border border-slate-300">Copy</button>
         </div>
       )}
    </div>
  );
}

// 13. Base64 Converter
export function Base64Converter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => setOutput(btoa(input));
  const decode = () => { try { setOutput(atob(input)); } catch { setOutput('Invalid Base64 string'); } };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={3} className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900" placeholder="Text or Base64..." />
      <div className="flex gap-2">
         <button onClick={encode} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Encode</button>
         <button onClick={decode} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Decode</button>
      </div>
      {output && (
         <textarea readOnly value={output} rows={3} className="w-full bg-slate-100 border border-slate-200 rounded-md p-3 text-blue-400 font-mono break-all text-sm" />
      )}
    </div>
  );
}

// 14. URL Encoder
export function UrlEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => setOutput(encodeURIComponent(input));
  const decode = () => { try { setOutput(decodeURIComponent(input)); } catch { setOutput('Invalid URL encoding'); } };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={3} className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900" placeholder="URL or string..." />
      <div className="flex gap-2">
         <button onClick={encode} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Encode</button>
         <button onClick={decode} className="flex-1 bg-slate-100 text-slate-700 text-sm py-2 rounded border border-slate-300 hover:bg-slate-200">Decode</button>
      </div>
      {output && (
         <textarea readOnly value={output} rows={3} className="w-full bg-slate-100 border border-slate-200 rounded-md p-3 text-blue-400 font-mono break-all text-sm" />
      )}
    </div>
  );
}

// 15. Color Converter
export function ColorConverter() {
  const [hex, setHex] = useState('#3b82f6');
  const [rgb, setRgb] = useState('rgb(59, 130, 246)');

  const hexToRgb = (h: string) => {
    let r = 0, g = 0, b = 0;
    if (h.length === 4) {
      r = parseInt(h[1] + h[1], 16); g = parseInt(h[2] + h[2], 16); b = parseInt(h[3] + h[3], 16);
    } else if (h.length === 7) {
      r = parseInt(h.substring(1, 3), 16); g = parseInt(h.substring(3, 5), 16); b = parseInt(h.substring(5, 7), 16);
    }
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleHex = (val: string) => {
    setHex(val);
    if (/^#([0-9A-F]{3}){1,2}$/i.test(val)) setRgb(hexToRgb(val));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
         <input type="color" value={hex.length === 7 ? hex : '#000000'} onChange={e => handleHex(e.target.value)} className="w-16 h-16 rounded cursor-pointer bg-white border-0" />
         <div className="flex-1 space-y-2">
           <div>
             <label className="text-xs text-slate-500">HEX</label>
             <input type="text" value={hex} onChange={e => handleHex(e.target.value)} className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-sm text-slate-900" />
           </div>
           <div>
             <label className="text-xs text-slate-500">RGB</label>
             <input type="text" value={rgb} readOnly className="w-full bg-slate-100 border border-slate-200 rounded px-2 py-1 text-sm text-slate-500" />
           </div>
         </div>
      </div>
    </div>
  );
}

// 16. Hashtag Generator
export function HashtagGenerator() {
  const [topic, setTopic] = useState('');
  const [tags, setTags] = useState('');

  const generate = () => {
    if (!topic.trim()) return;
    const baseWords = topic.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const trending = ['viral', 'trending', 'fyp', 'foryou', 'explorepage', 'explore', 'foryoupage', 'contentcreator', 'viralvideo', 'newpost'];
    
    let generated = new Set<string>();
    baseWords.forEach(w => {
      generated.add('#' + w);
      generated.add('#' + w + 'life');
      generated.add('#' + w + 'tips');
    });
    
    // Add some random trending ones
    const activeTrending = trending.sort(() => 0.5 - Math.random()).slice(0, 5);
    activeTrending.forEach(t => generated.add('#' + t));

    setTags(Array.from(generated).join(' '));
  };

  return (
    <div className="space-y-4">
      <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic (e.g. fitness, cooking, travel)..." className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
      <button onClick={generate} className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Generate Hashtags</button>
      {tags && (
        <div className="relative group">
          <textarea readOnly value={tags} rows={4} className="w-full bg-slate-100 border border-slate-200 rounded-md p-3 text-blue-400 text-sm resize-none" />
          <button onClick={() => navigator.clipboard.writeText(tags)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-100 text-xs px-2 py-1 rounded text-slate-700 transition-opacity border border-slate-300">Copy</button>
        </div>
      )}
    </div>
  );
}

// 17. Script Timer
export function ScriptTimer() {
  const [script, setScript] = useState('');
  const [speed, setSpeed] = useState(130); // words per minute

  const words = script.trim() ? script.trim().split(/\s+/).length : 0;
  const minutes = Math.floor(words / speed);
  const seconds = Math.round((words % speed) / (speed / 60));

  const totalSeconds = minutes * 60 + seconds;
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;

  return (
    <div className="space-y-4">
      <textarea 
        value={script} 
        onChange={e => setScript(e.target.value)} 
        rows={5} 
        className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Paste your YouTube or TikTok script here..."
      />
      <div>
        <label className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Speaking Speed: {speed} words per minute</span>
          <span>{speed === 130 ? '(Average)' : speed > 130 ? '(Fast)' : '(Slow)'}</span>
        </label>
        <input type="range" min="100" max="180" step="10" value={speed} onChange={e => setSpeed(parseInt(e.target.value))} className="w-full" />
      </div>
      <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 flex justify-between items-center">
        <div>
           <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Estimated Time</p>
           <p className="text-3xl font-bold text-slate-900">{mm.toString().padStart(2, '0')}:{ss.toString().padStart(2, '0')}</p>
        </div>
        <div className="text-right">
           <p className="text-2xl font-bold text-slate-700">{words}</p>
           <p className="text-xs text-slate-500 uppercase tracking-wider">Words</p>
        </div>
      </div>
    </div>
  );
}

// 18. Social Media Character Counter
export function SocialCounter() {
  const [text, setText] = useState('');
  const chars = text.length;

  const limits = [
    { name: 'Twitter / X', max: 280 },
    { name: 'Instagram Caption', max: 2200 },
    { name: 'TikTok Caption', max: 2200 },
    { name: 'YouTube Title', max: 100 },
    { name: 'YouTube Desc', max: 5000 },
  ];

  return (
    <div className="space-y-4">
      <textarea 
        value={text} 
        onChange={e => setText(e.target.value)} 
        rows={4} 
        className="w-full bg-white border border-slate-300 rounded-md p-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Type your caption or post..."
      />
      <div className="text-center py-2">
        <span className="text-3xl font-bold text-slate-900">{chars}</span>
        <span className="text-xs text-slate-500 uppercase ml-2">Characters</span>
      </div>
      <div className="space-y-2">
        {limits.map(l => (
          <div key={l.name} className="bg-slate-100 p-3 rounded-md border border-slate-300 flex justify-between items-center text-sm">
            <span className="text-slate-700 font-medium">{l.name}</span>
            <span className={chars > l.max ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
              {chars} / {l.max}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 19. Script Outline Generator
export function ScriptOutlineGenerator() {
  const [topic, setTopic] = useState('');
  const [outline, setOutline] = useState<string | null>(null);

  const generate = () => {
    if (!topic.trim()) return;
    const t = topic.trim();
    const result = `
[HOOK] (0:00 - 0:05)
"If you struggle with ${t}, you're not alone. Here is the secret nobody tells you..."

[INTRO] (0:05 - 0:15)
"In today's video, I'm going to show you exactly how to master ${t} in just 3 simple steps. By the end of this, you will never have to worry about this again."

[BODY: STEP 1] (0:15 - 0:45)
- The Biggest Mistake people make with ${t}.
- The correct approach.

[BODY: STEP 2] (0:45 - 1:15)
- My personal strategy for ${t}.
- Example/Proof of why it works.

[BODY: STEP 3] (1:15 - 1:45)
- The Pro-Tip: How to accelerate your results.
- Common roadblock to avoid.

[CTA / OUTRO] (1:45 - 2:00)
"If you found these ${t} tips helpful, leave a comment below with your biggest takeaway, and don't forget to subscribe. See you in the next one!"
    `.trim();
    setOutline(result);
  };

  return (
    <div className="space-y-4">
      <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic (e.g. Budgeting, Video Editing)..." className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
      <button onClick={generate} className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Generate Outline</button>
      {outline && (
        <div className="relative group mt-4">
          <textarea readOnly value={outline} rows={12} className="w-full bg-slate-100 border border-slate-200 rounded-md p-4 text-blue-300 text-sm font-mono resize-none leading-relaxed" />
          <button onClick={() => navigator.clipboard.writeText(outline)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-100 text-xs px-3 py-1.5 rounded text-slate-700 transition-opacity border border-slate-300 hover:bg-slate-200">Copy</button>
        </div>
      )}
    </div>
  );
}

// 20. Viral Topic Generator
export function ViralTopicGenerator() {
  const [niche, setNiche] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);

  const generate = () => {
    if (!niche.trim()) return;
    const n = niche.trim().toLowerCase();
    
    setIdeas([
      `I Tried \[Famous Person's\] ${n} Routine For 7 Days`,
      `How I Make $10k/Month doing ${n} (Step-by-Step)`,
      `The Brutal Truth About ${n} in ${new Date().getFullYear()}`,
      `Stop Doing This! The Biggest ${n} Mistake Everyone Makes`,
      `I Reviewed the Top 5 ${n} Tools So You Don't Have To`,
      `A Beginner's Ultimate Guide to ${n}`
    ]);
  };

  return (
    <div className="space-y-4">
      <input type="text" value={niche} onChange={e => setNiche(e.target.value)} placeholder="Enter your niche (e.g. fitness, crypto, design)..." className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
      <button onClick={generate} className="w-full bg-rose-600 hover:bg-rose-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Find Viral Ideas</button>
      {ideas.length > 0 && (
        <div className="space-y-2 mt-4">
          {ideas.map((idea, i) => (
            <div key={i} className="bg-slate-100 p-3 rounded-md border border-slate-300 flex justify-between items-center group">
              <span className="text-slate-700 text-sm font-medium">{idea}</span>
              <button onClick={() => navigator.clipboard.writeText(idea)} className="opacity-0 group-hover:opacity-100 bg-slate-200 text-xs px-2 py-1 rounded text-slate-700 transition-opacity shrink-0 ml-2">Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 21. Trend Search Helper
export function TrendSearchHelper() {
  const [keyword, setKeyword] = useState('');

  const links = [
    { name: 'Google Trends', base: 'https://trends.google.com/trends/explore?q=', color: 'hover:border-blue-500 hover:bg-blue-500/10' },
    { name: 'YouTube Search', base: 'https://www.youtube.com/results?search_query=', color: 'hover:border-rose-500 hover:bg-rose-500/10' },
    { name: 'TikTok Discover', base: 'https://www.tiktok.com/search?q=', color: 'hover:border-slate-400 hover:bg-slate-100' },
    { name: 'Twitter / X Search', base: 'https://twitter.com/search?q=', color: 'hover:border-cyan-500 hover:bg-cyan-500/10' },
  ];

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-500 mb-2">
        Type a keyword to instantly check its popularity across major platforms.
      </div>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Keyword (e.g. AI tools, ASMR)..." className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
      
      <div className="grid grid-cols-2 gap-3 mt-4">
        {links.map(l => (
          <a
            key={l.name}
            href={keyword ? `${l.base}${encodeURIComponent(keyword)}` : '#'}
            target="_blank"
            rel="noreferrer"
            className={`block border border-slate-300 bg-slate-100 text-center p-3 rounded-lg text-sm text-slate-700 transition-all ${l.color} ${!keyword ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
          >
            {l.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// 22. Compound Interest Calculator
export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [compoundFreq, setCompoundFreq] = useState(12);

  const calculate = () => {
    const P = principal;
    const r = rate / 100;
    const n = compoundFreq;
    const t = years;
    const A = P * Math.pow(1 + r / n, n * t);
    return A.toFixed(2);
  };

  const total = calculate();
  const interest = (parseFloat(total) - principal).toFixed(2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Principal Amount ($)</label>
          <input type="number" min="0" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Interest Rate (%)</label>
          <input type="number" min="0" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Years to Grow</label>
          <input type="number" min="1" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Compound Frequency</label>
          <select value={compoundFreq} onChange={e => setCompoundFreq(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm">
            <option value="1">Annually (1/yr)</option>
            <option value="4">Quarterly (4/yr)</option>
            <option value="12">Monthly (12/yr)</option>
            <option value="365">Daily (365/yr)</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 flex justify-between items-center mt-4">
        <div>
           <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Value</p>
           <p className="text-3xl font-bold text-emerald-400">${Number(total).toLocaleString()}</p>
        </div>
        <div className="text-right">
           <p className="text-xl font-medium text-slate-700">+${Number(interest).toLocaleString()}</p>
           <p className="text-xs text-slate-500 uppercase tracking-wider">Interest Earned</p>
        </div>
      </div>
    </div>
  );
}

// 23. Discount & Tax Calculator
export function DiscountCalculator() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(20);
  const [tax, setTax] = useState(8);

  const calculate = () => {
    const p = price || 0;
    const d = discount || 0;
    const t = tax || 0;

    const discountAmount = p * (d / 100);
    const discountedPrice = p - discountAmount;
    const taxAmount = discountedPrice * (t / 100);
    const finalPrice = discountedPrice + taxAmount;

    return {
      save: discountAmount.toFixed(2),
      taxAdd: taxAmount.toFixed(2),
      final: finalPrice.toFixed(2)
    };
  };

  const res = calculate();

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Original Price ($)</label>
        <input type="number" min="0" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Discount (%)</label>
          <input type="number" min="0" max="100" value={discount} onChange={e => setDiscount(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm text-green-400" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Tax Rate (%)</label>
          <input type="number" min="0" value={tax} onChange={e => setTax(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm text-rose-400" />
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 mt-4">
        <div className="flex justify-between items-center mb-2">
           <p className="text-xs text-slate-500 uppercase tracking-wider">Final Price</p>
           <p className="text-3xl font-bold text-slate-900">${res.final}</p>
        </div>
        <div className="flex justify-between mt-4 text-sm">
           <span className="text-emerald-400">Saved: ${res.save}</span>
           <span className="text-rose-400">Tax added: ${res.taxAdd}</span>
        </div>
      </div>
    </div>
  );
}

// 24. Salary Calculator
export function SalaryCalculator() {
  const [hourly, setHourly] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  const calculate = () => {
    const h = hourly || 0;
    const hw = hoursPerWeek || 0;
    const w = weeksPerYear || 0;

    const weekly = h * hw;
    const annual = weekly * w;
    const monthly = annual / 12;

    return {
      weekly: weekly.toFixed(2),
      monthly: monthly.toFixed(2),
      annual: annual.toFixed(2)
    };
  };

  const res = calculate();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Hourly ($)</label>
          <input type="number" min="0" value={hourly} onChange={e => setHourly(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm text-center" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Hours/Week</label>
          <input type="number" min="0" max="168" value={hoursPerWeek} onChange={e => setHoursPerWeek(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm text-center" />
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider mb-1 block">Weeks/Year</label>
          <input type="number" min="0" max="52" value={weeksPerYear} onChange={e => setWeeksPerYear(Number(e.target.value))} className="w-full bg-white border border-slate-300 rounded-md p-2 text-slate-900 text-sm text-center" />
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 mt-4 space-y-4">
        <div className="flex justify-between items-end border-b border-slate-300 pb-3">
           <p className="text-sm text-slate-500">Annual Salary</p>
           <p className="text-3xl font-bold text-emerald-400">${Number(res.annual).toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-end">
           <p className="text-xs text-slate-500">Monthly Gross</p>
           <p className="text-lg font-medium text-slate-700">${Number(res.monthly).toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-end">
           <p className="text-xs text-slate-500">Weekly Gross</p>
           <p className="text-lg font-medium text-slate-700">${Number(res.weekly).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

// 25. Dakhil / SSC GPA Calculator (Bangladesh Board)
export function DakhilGpaCalculator() {
  const [subjects, setSubjects] = useState<string[]>(Array(9).fill('5.0')); // 9 optional subjects
  const [optionalSubject, setOptionalSubject] = useState('5.0'); // 4th subject

  const gradeOptions = [
    { label: 'A+ (80-100)', value: '5.0' },
    { label: 'A (70-79)', value: '4.0' },
    { label: 'A- (60-69)', value: '3.5' },
    { label: 'B (50-59)', value: '3.0' },
    { label: 'C (40-49)', value: '2.0' },
    { label: 'D (33-39)', value: '1.0' },
    { label: 'F (0-32)', value: '0.0' },
  ];

  const updateSubject = (index: number, val: string) => {
    const newSubs = [...subjects];
    newSubs[index] = val;
    setSubjects(newSubs);
  };

  let isFailed = subjects.some(s => s === '0.0');
  let totalPoints = subjects.reduce((acc, curr) => acc + parseFloat(curr), 0);
  
  // Calculate 4th subject contribution
  let optPoint = parseFloat(optionalSubject);
  let optAdded = optPoint > 2.0 ? optPoint - 2.0 : 0;

  let gpa = 0.00;
  if (!isFailed) {
    let rawGpa = (totalPoints + optAdded) / subjects.length;
    gpa = rawGpa > 5.0 ? 5.0 : Math.round(rawGpa * 100) / 100;
  }

  return (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
       <div className="space-y-2">
         {subjects.map((sub, i) => (
           <div key={i} className="flex justify-between items-center bg-white border border-slate-200 p-2 rounded-md">
              <span className="text-sm text-slate-700">Subject {i + 1}</span>
              <select value={sub} onChange={e => updateSubject(i, e.target.value)} className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded p-1 outline-none focus:border-blue-500">
                {gradeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
           </div>
         ))}
         
         <div className="flex justify-between items-center bg-blue-900/20 border border-blue-800/50 p-2 rounded-md mt-4">
            <span className="text-sm text-blue-300 font-medium">4th Subject (Optional)</span>
            <select value={optionalSubject} onChange={e => setOptionalSubject(e.target.value)} className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded p-1 outline-none focus:border-blue-500">
              {gradeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
         </div>
       </div>

       <div className={`p-4 rounded-xl border mt-4 text-center ${isFailed ? 'bg-rose-900/20 border-rose-800/50' : 'bg-emerald-900/20 border-emerald-800/50'}`}>
         <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Final Board GPA</p>
         <p className={`text-4xl font-bold ${isFailed ? 'text-rose-400' : 'text-emerald-400'}`}>
           {isFailed ? 'F (Fail)' : gpa.toFixed(2)}
         </p>
         {!isFailed && <p className="text-xs text-slate-500 mt-2">Points from 4th subject: +{optAdded}</p>}
       </div>
    </div>
  );
}

// 26. Study Routine Maker (2026-2028 Candidates)
export function StudyRoutineMaker() {
  const [year, setYear] = useState('2026');
  const [shift, setShift] = useState('morning');
  const [routine, setRoutine] = useState<{time: string, task: string}[] | null>(null);

  const generateRoutine = () => {
    let base = [];
    if (shift === 'morning') {
      base = [
        { time: '05:00 AM - 06:00 AM', task: 'Wake up, Fajr & Light Review' },
        { time: '06:00 AM - 08:00 AM', task: 'Hard Subjects (Math/Arabic/English)' },
        { time: '08:00 AM - 02:00 PM', task: 'School/Madrasah Classes' },
        { time: '02:00 PM - 04:00 PM', task: 'Lunch, Zuhr & Rest' },
        { time: '04:00 PM - 05:30 PM', task: 'Optional/Science Subject Practice' },
        { time: '05:30 PM - 06:30 PM', task: 'Asr, Play/Exercise, Maghrib' },
        { time: '06:30 PM - 09:00 PM', task: 'Memorization & Reading (Hadith/Quran/Bangla)' },
        { time: '09:00 PM - 10:00 PM', task: 'Dinner & Isha' },
        { time: '10:00 PM - 11:00 PM', task: 'Next day prep & Sleep' },
      ];
    } else {
      base = [
        { time: '06:00 AM - 07:00 AM', task: 'Wake up & Fajr' },
        { time: '07:00 AM - 10:00 AM', task: 'Strong Focus Study (Math/Science)' },
        { time: '10:30 AM - 04:30 PM', task: 'School/Madrasah Day Shift' },
        { time: '04:30 PM - 06:00 PM', task: 'Asr, Rest & Snack' },
        { time: '06:00 PM - 08:00 PM', task: 'Review class notes & Homework' },
        { time: '08:00 PM - 09:00 PM', task: 'Reading Subjects (Bangla/Islamic Studies)' },
        { time: '09:00 PM - 10:00 PM', task: 'Dinner & Isha' },
        { time: '10:00 PM - 11:30 PM', task: 'Solve Test Papers (Target ' + year + ')' },
        { time: '11:30 PM - 06:00 AM', task: 'Sleep' },
      ];
    }
    setRoutine(base);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-500 uppercase mb-1 block">Exam Year</label>
          <select value={year} onChange={e => setYear(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded outline-none focus:border-blue-500">
            <option value="2026">Dakhil / SSC 2026</option>
            <option value="2027">Dakhil / SSC 2027</option>
            <option value="2028">Dakhil / SSC 2028</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase mb-1 block">Class Shift</label>
          <select value={shift} onChange={e => setShift(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded outline-none focus:border-blue-500">
            <option value="morning">Morning Shift</option>
            <option value="day">Day Shift</option>
          </select>
        </div>
      </div>
      <button onClick={generateRoutine} className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 py-2 rounded-md transition-colors text-sm font-medium">Create My Routine</button>
      
      {routine && (
        <div className="mt-4 space-y-2">
           <div className="text-center mb-4">
             <span className="bg-slate-100 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/20">Target: Board Exam {year}</span>
           </div>
           {routine.map((r, i) => (
             <div key={i} className="flex flex-col sm:flex-row bg-white border border-slate-200 p-3 rounded-lg text-sm group hover:border-blue-500/30 transition-colors">
               <span className="text-blue-400 font-medium sm:w-40 shrink-0">{r.time}</span>
               <span className="text-slate-700 mt-1 sm:mt-0">{r.task}</span>
             </div>
           ))}
        </div>
      )}
    </div>
  );
}


// 28. Love Calculator
export function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const calculate = () => {
    if (!name1 || !name2) return;
    const combine = (name1.toLowerCase() + name2.toLowerCase()).replace(/\s+/g, '');
    let sum = 0;
    for (let i = 0; i < combine.length; i++) {
       sum += combine.charCodeAt(i);
    }
    setScore((sum % 101)); // score between 0 and 100
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Your Name</label>
           <input type="text" value={name1} onChange={e => setName1(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
        </div>
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Crush's Name</label>
           <input type="text" value={name2} onChange={e => setName2(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
        </div>
      </div>
      <button onClick={calculate} className="w-full bg-pink-600 hover:bg-pink-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Calculate Love</button>
      
      {score !== null && (
        <div className="bg-pink-900/20 border border-pink-800/50 p-4 rounded-xl text-center mt-4">
          <p className="text-sm text-pink-300 font-medium mb-1">Love Match</p>
          <p className="text-5xl font-bold text-pink-500 mb-2">{score}%</p>
          <p className="text-xs text-pink-400 italic">
            {score > 80 ? "Perfect Match ❤️" : score > 50 ? "There is a chance! 😉" : score > 25 ? "Needs work 🤔" : "Just friends... 💔"}
          </p>
        </div>
      )}
    </div>
  );
}

// 29. Zodiac Finder
export function ZodiacFinder() {
  const [date, setDate] = useState('');
  const [zodiac, setZodiac] = useState<{name: string, emoji: string, traits: string} | null>(null);

  const findZodiac = () => {
    if (!date) return;
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1; // 1-12
    
    let sign = '';
    let emoji = '';
    let traits = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) { sign = 'Aries'; emoji = '♈'; traits = 'Courageous, determined, confident'; }
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) { sign = 'Taurus'; emoji = '♉'; traits = 'Reliable, patient, practical'; }
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) { sign = 'Gemini'; emoji = '♊'; traits = 'Gentle, affectionate, curious'; }
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) { sign = 'Cancer'; emoji = '♋'; traits = 'Tenacious, highly imaginative, loyal'; }
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) { sign = 'Leo'; emoji = '♌'; traits = 'Creative, passionate, generous'; }
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) { sign = 'Virgo'; emoji = '♍'; traits = 'Loyal, analytical, kind'; }
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) { sign = 'Libra'; emoji = '♎'; traits = 'Cooperative, diplomatic, gracious'; }
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) { sign = 'Scorpio'; emoji = '♏'; traits = 'Resourceful, brave, passionate'; }
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) { sign = 'Sagittarius'; emoji = '♐'; traits = 'Generous, idealistic, great sense of humor'; }
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) { sign = 'Capricorn'; emoji = '♑'; traits = 'Responsible, disciplined, self-control'; }
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) { sign = 'Aquarius'; emoji = '♒'; traits = 'Progressive, original, independent'; }
    else { sign = 'Pisces'; emoji = '♓'; traits = 'Compassionate, artistic, intuitive'; }

    setZodiac({name: sign, emoji, traits});
  }

  return (
    <div className="space-y-4">
      <div>
         <label className="text-xs text-slate-500 uppercase mb-1 block">Your Date of Birth</label>
         <input type="date" value={date} onChange={e => {setDate(e.target.value); setZodiac(null);}} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
      </div>
      <button onClick={findZodiac} className="w-full bg-indigo-600 hover:bg-indigo-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Find My Sign</button>
      
      {zodiac && (
         <div className="bg-indigo-900/20 border border-indigo-800/50 p-4 rounded-xl text-center mt-4">
           <div className="text-5xl mb-2">{zodiac.emoji}</div>
           <h3 className="text-xl font-bold text-indigo-400 mb-1">{zodiac.name}</h3>
           <p className="text-sm text-indigo-200/70">{zodiac.traits}</p>
         </div>
      )}
    </div>
  );
}

// 30. Magic 8 Ball
export function Magic8Ball() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const answers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.",
    "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
    "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
    "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
  ];

  const ask = () => {
    if (!question.trim()) return;
    setIsShaking(true);
    setTimeout(() => {
      setAnswer(answers[Math.floor(Math.random() * answers.length)]);
      setIsShaking(false);
    }, 800);
  }

  return (
    <div className="space-y-4">
      <div>
         <label className="text-xs text-slate-500 uppercase mb-1 block">Ask a Yes/No Question</label>
         <input type="text" value={question} onChange={e => {setQuestion(e.target.value); setAnswer(null);}} placeholder="Will I be rich?" className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
      </div>
      <button onClick={ask} className="w-full bg-purple-600 hover:bg-purple-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Ask the Magic 8 Ball</button>
      
      {answer && (
         <div className={`mt-6 flex flex-col items-center justify-center transition-transform ${isShaking ? 'animate-bounce' : ''}`}>
           <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-black rounded-full shadow-xl flex items-center justify-center relative border-2 border-slate-300/50">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-center p-2 absolute">
               <span className="text-[10px] font-bold text-blue-900 leading-tight">{answer}</span>
             </div>
           </div>
         </div>
      )}
    </div>
  );
}

// 31. QR Code Generator
export function QrGenerator() {
  const [text, setText] = useState('');

  const qrUrl = text.trim() ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text.trim())}` : '';

  return (
    <div className="space-y-4">
      <div>
         <label className="text-xs text-slate-500 uppercase mb-1 block">Link or Text</label>
         <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="https://youtube.com..." className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
      </div>
      
      {qrUrl ? (
         <div className="mt-4 flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-slate-300">
           <div className="bg-white p-3 rounded-lg shadow-xl mb-4">
             <img src={qrUrl} alt="QR Code" className="w-40 h-40 object-contain" />
           </div>
           <a href={qrUrl} download="qrcode.png" target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full transition-colors">
             Download / Open
           </a>
         </div>
      ) : (
         <div className="mt-4 flex flex-col items-center justify-center p-12 bg-slate-100/50 rounded-xl border border-dashed border-slate-300 text-slate-500 text-sm">
            Please enter some text or a link
         </div>
      )}
    </div>
  );
}

// 32. BMI Calculator
export function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Assume height in cm
    if (w > 0 && h > 0) {
      setBmi(Number((w / (h * h)).toFixed(1)));
    } else {
      setBmi(null);
    }
  };

  let status = '';
  let colorClass = '';
  if (bmi !== null) {
    if (bmi < 18.5) { status = 'Underweight'; colorClass = 'text-amber-400 border-amber-500/50 bg-amber-900/20'; }
    else if (bmi < 24.9) { status = 'Normal Weight'; colorClass = 'text-emerald-400 border-emerald-500/50 bg-emerald-900/20'; }
    else if (bmi < 29.9) { status = 'Overweight'; colorClass = 'text-orange-400 border-orange-500/50 bg-orange-900/20'; }
    else { status = 'Obese'; colorClass = 'text-rose-500 border-rose-500/50 bg-rose-900/20'; }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Weight (KG)</label>
           <input type="number" min="1" value={weight} onChange={e => setWeight(e.target.value)} onKeyUp={calculate} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md font-mono" />
        </div>
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Height (CM)</label>
           <input type="number" min="1" value={height} onChange={e => setHeight(e.target.value)} onKeyUp={calculate} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md font-mono" />
        </div>
      </div>
      <button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-900 font-medium py-2 rounded-md transition-colors text-sm">Calculate BMI</button>

      {bmi !== null && (
         <div className={`mt-4 p-4 rounded-xl border text-center ${colorClass}`}>
           <p className="text-xs uppercase tracking-wider mb-1 opacity-80">Your BMI</p>
           <p className="text-4xl font-bold mb-1">{bmi}</p>
           <p className="font-medium">{status}</p>
         </div>
      )}
    </div>
  );
}

// 33. Bill Splitter
export function BillSplitter() {
  const [total, setTotal] = useState('');
  const [tipPercent, setTipPercent] = useState('0');
  const [people, setPeople] = useState('2');

  const t = parseFloat(total) || 0;
  const tip = parseFloat(tipPercent) || 0;
  const p = parseInt(people) || 1;

  const tipAmount = t * (tip / 100);
  const grandTotal = t + tipAmount;
  const perPerson = Math.max(0, grandTotal / p);

  return (
    <div className="space-y-4">
       <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Total Bill Amount</label>
           <div className="relative">
             <span className="absolute left-3 top-2 text-slate-500">$</span>
             <input type="number" min="0" value={total} onChange={e => setTotal(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md py-2 pl-8 pr-3 text-slate-900 font-mono" />
           </div>
       </div>

       <div className="grid grid-cols-2 gap-4">
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Tip %</label>
            <select value={tipPercent} onChange={e => setTipPercent(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md">
              <option value="0">0% (None)</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
            </select>
         </div>
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Split Between</label>
            <input type="number" min="1" value={people} onChange={e => setPeople(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md font-mono" />
         </div>
       </div>

       <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 mt-4 space-y-3">
         <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Tip Amount</span>
            <span className="text-slate-800">${tipAmount.toFixed(2)}</span>
         </div>
         <div className="flex justify-between items-center text-sm border-b border-slate-300 pb-3">
            <span className="text-slate-500">Grand Total</span>
            <span className="text-slate-800">${grandTotal.toFixed(2)}</span>
         </div>
         <div className="flex justify-between items-center pt-2">
            <span className="text-amber-400 font-medium">Per Person</span>
            <span className="text-2xl font-bold text-amber-400">${perPerson.toFixed(2)}</span>
         </div>
       </div>
    </div>
  );
}

// 34. Coin Flipper
export function CoinFlipper() {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flip = () => {
    setIsFlipping(true);
    setResult(null);
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? 'Heads' : 'Tails');
      setIsFlipping(false);
    }, 800);
  };

  return (
    <div className="space-y-4">
      <button onClick={flip} disabled={isFlipping} className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 text-slate-900 font-medium py-3 rounded-md transition-colors text-sm">
        {isFlipping ? 'Flipping...' : 'Flip a Coin'}
      </button>

      <div className={`mt-6 flex flex-col items-center justify-center transition-transform ${isFlipping ? 'animate-[spin_0.2s_linear_infinite]' : ''}`}>
        <div className={`w-32 h-32 rounded-full shadow-2xl flex items-center justify-center border-4 ${result === 'Heads' ? 'bg-amber-500 border-amber-300' : result === 'Tails' ? 'bg-slate-300 border-white' : 'bg-amber-900 border-amber-700'}`}>
           <span className="text-2xl font-bold text-slate-900">
             {result ? result : '?'}
           </span>
        </div>
      </div>
    </div>
  );
}

// 35. Joke Generator
export function JokeGenerator() {
  const [joke, setJoke] = useState('');
  
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "What do you call a fake noodle? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    "I told my doctor that I broke my arm in two places. He told me to stop going to those places.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "I'm afraid for the calendar. Its days are numbered."
  ];

  const getJoke = () => {
    let nextJoke = jokes[Math.floor(Math.random() * jokes.length)];
    while (nextJoke === joke) {
      nextJoke = jokes[Math.floor(Math.random() * jokes.length)];
    }
    setJoke(nextJoke);
  };

  return (
    <div className="space-y-4">
      <button onClick={getJoke} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-medium py-3 rounded-md transition-colors text-sm">
        Tell me a joke
      </button>
      
      {joke && (
        <div className="bg-teal-900/20 border border-teal-800/50 p-6 rounded-xl text-center mt-4 min-h-[120px] flex items-center justify-center">
          <p className="text-lg font-medium text-teal-300 leading-relaxed">"{joke}"</p>
        </div>
      )}
    </div>
  );
}

// 36. Truth or Dare
export function TruthOrDare() {
  const [current, setCurrent] = useState<{type: 'Truth' | 'Dare', text: string} | null>(null);

  const truths = [
    "When was the last time you lied?",
    "What's the most embarrassing music you listen to?",
    "What's your biggest regret?",
    "What's the weirdest dream you've ever had?",
    "What is your worst habit?",
    "What's the dumbest thing you've ever done?",
    "Have you ever peed in the pool?",
    "What's your most irrational fear?",
    "Who is your secret crush?",
    "What's the worst meal you've ever cooked?"
  ];

  const dares = [
    "Do 20 pushups.",
    "Let someone check your search history.",
    "Sing the chorus of your favorite song.",
    "Speak in an accent for the next 5 minutes.",
    "Eat a spoonful of hot sauce.",
    "Do your best impression of a baby being born.",
    "Try to lick your elbow.",
    "Call a friend and sing Happy Birthday.",
    "Do a plank for a full minute.",
    "Let the group choose your profile picture for 24 hours."
  ];

  const getTruth = () => {
    setCurrent({type: 'Truth', text: truths[Math.floor(Math.random() * truths.length)]});
  };

  const getDare = () => {
    setCurrent({type: 'Dare', text: dares[Math.floor(Math.random() * dares.length)]});
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
         <button onClick={getTruth} className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 font-bold py-4 rounded-xl transition-colors text-lg shadow-lg">
           Truth
         </button>
         <button onClick={getDare} className="w-full bg-rose-600 hover:bg-rose-500 text-slate-900 font-bold py-4 rounded-xl transition-colors text-lg shadow-lg">
           Dare
         </button>
      </div>

      {current && (
         <div className={`p-6 rounded-xl border text-center mt-6 ${current.type === 'Truth' ? 'bg-blue-900/20 border-blue-800/50' : 'bg-rose-900/20 border-rose-800/50'}`}>
           <h3 className={`text-sm uppercase font-bold tracking-widest mb-3 ${current.type === 'Truth' ? 'text-blue-400' : 'text-rose-400'}`}>{current.type}</h3>
           <p className="text-xl text-slate-100 font-medium leading-relaxed">"{current.text}"</p>
         </div>
      )}
    </div>
  );
}

// 37. Trading Guide
export function TradingGuide() {
  const [market, setMarket] = useState<'home' | 'forex' | 'binary'>('home');
  const [lang, setLang] = useState<'en' | 'bn' | null>(null);

  const guideData = {
    forex: {
      en: {
        title: "Forex & Crypto Trading Guide",
        intro: "Forex and Crypto are highly liquid markets. Successful trading requires patience, discipline, and managing risk properly.",
        howToTrade: [
          "Use a regulated broker to open an account and deposit funds.",
          "Analyze the market using Technical Analysis (charts) and Fundamental Analysis (news).",
          "Always use a Stop Loss to protect your capital (risk 1-2% per trade).",
          "Identify the market trend to avoid trading against major momentum."
        ],
        strategies: [
          {
            name: "1. Support & Resistance Bounce",
            howToFind: "Identify strong horizontal levels on H1 or H4 timeframes where price has reversed multiple times.",
            session: "London or New York Session overlaps.",
            execution: "Wait for the price to touch the level. Look for a rejection candlestick pattern (like a Pin Bar or Bullish/Bearish Engulfing). Enter the trade with a stop loss just outside the rejection candle."
          },
          {
            name: "2. Golden Cross (Moving Average Crossover)",
            howToFind: "Apply 50-period and 200-period Exponential Moving Averages (EMA) on the chart.",
            session: "London Session or highly volatile market conditions.",
            execution: "When the 50 EMA crosses ABOVE the 200 EMA, look for BUY setups. When it crosses BELOW, look for SELL setups."
          },
          {
            name: "3. Breakout Strategy",
            howToFind: "Highlight a consolidation or range in the market where price is moving sideways.",
            session: "London Open or NY Open.",
            execution: "Wait for a strong candle to close outside the range. Wait for a retest, then enter in the direction of the breakout."
          },
          {
            name: "4. Smart Money Concepts (SMC)",
            howToFind: "Look for Order Blocks (OB), Fair Value Gaps (FVG), and Break of Structure (BOS) or Change of Character (ChoCh) created by large institutional volume.",
            session: "London & New York Sessions.",
            execution: "Wait for the price to return to an unmitigated Order Block or FVG. Once price taps into the zone, enter the trade in the direction of the trend."
          },
          {
            name: "5. Inner Circle Trader (ICT) - Silver Bullet",
            howToFind: "Identify a sweep of liquidity (taking out previous day/session highs or lows) followed by a strong displacement leaving a Fair Value Gap (FVG).",
            session: "Specific ICT Time Windows (e.g., 10:00 AM - 11:00 AM NY Time).",
            execution: "Enter the market when the price retraces back into the FVG after the liquidity sweep."
          },
          {
            name: "6. Multiple Timeframe Analysis (MTFA)",
            howToFind: "Analyze the Higher Timeframe (e.g., Daily or H4) to find the overall trend and major key levels. Then zoom in to a Lower Timeframe (e.g., H1 or M15).",
            session: "Any major session depending on the pair.",
            execution: "Only take trades on the lower timeframe that align with the higher timeframe trend. Use the lower timeframe for precise entries."
          }
        ]
      },
      bn: {
        title: "ফরেক্স এবং ক্রিপ্টো ট্রেডিং গাইড",
        intro: "ফরেক্স এবং ক্রিপ্টো হলো হাই-লিকুইড মার্কেট। ট্রেডিংয়ে সফল হতে হলে ধৈর্য, শৃঙ্খলা এবং সঠিক রিস্ক ম্যানেজমেন্ট প্রয়োজন।",
        howToTrade: [
          "একটি রেগুলেটেড ব্রোকারে অ্যাকাউন্ট খুলে মূলধন জমা করুন।",
          "টেকনিক্যাল (চার্ট) এবং ফান্ডামেন্টাল (নিউজ) অ্যানালাইসিস ব্যবহার করে মার্কেট অ্যানালাইজ করুন।",
          "ক্যাপিটাল সুরক্ষিত রাখতে সবসময় স্টপ লস ব্যবহার করুন (প্রতি ট্রেডে ১-২% এর বেশি রিস্ক নেবেন না)।",
          "মার্কেটের ট্রেন্ড আইডেন্টিফাই করুন।"
        ],
        strategies: [
          {
            name: "১. সাপোর্ট এবং রেজিস্ট্যান্স বাউন্স",
            howToFind: "H1 বা H4 চার্টে এমন শক্তিশালী লেভেল খুঁজুন যেখান থেকে প্রাইস আগে একাধিকবার ঘুরে গেছে।",
            session: "লন্ডন বা নিউ ইয়র্ক সেশন।",
            execution: "প্রাইস ওই লেভেলে আসার জন্য অপেক্ষা করুন। রিজেকশন ক্যান্ডেল (যেমন পিন বার বা এঙ্গালফিং) তৈরি হলে স্টপ লস রেখে এন্ট্রি নিন।"
          },
          {
            name: "২. মুভিং এভারেজ ক্রসওভার",
            howToFind: "চার্টে 50-EMA এবং 200-EMA সেট করুন।",
            session: "লন্ডন বা হাই-ভলিউম সেশন।",
            execution: "যখন 50-EMA 200-EMA কে ছেদ করে উপরে ওঠে, তখন Buy এন্ট্রি খুঁজুন। ছেদ করে নিচে নামলে Sell খুঁজুন।"
          },
          {
            name: "৩. ব্রেকআউট স্ট্রেটেজি",
            howToFind: "মার্কেটে কনসোলিডেশন (একই রেঞ্জের মধ্যে প্রাইস ঘোরাঘুরি) বক্স বা প্যাটার্ন খুঁজুন।",
            session: "লন্ডন বা নিউ ইয়র্ক সেশন ওপেনিং।",
            execution: "বক্সের বাইরে একটি শক্তিশালী ক্যান্ডেল ক্লোজ হওয়ার জন্য অপেক্ষা করুন। প্রাইস আবার সেই ভাঙা লেভেল টেস্ট করতে আসলে ব্রেকআউটের দিকে ট্রেড নিন।"
          },
          {
            name: "৪. স্মার্ট মানি কনসেপ্টস (SMC)",
            howToFind: "মার্কেটে প্রাতিষ্ঠানিক ভলিউমের কারণে তৈরি হওয়া Order Block (OB), Fair Value Gap (FVG), এবং Break of Structure (BOS) বা Change of Character (ChoCh) খুঁজুন।",
            session: "লন্ডন এবং নিউ ইয়র্ক সেশন।",
            execution: "প্রাইস যখন কোনো আনটেস্টেড Order Block বা FVG-তে ফিরে আসে, তখন ছোট টাইমফ্রেমে রিজেকশন বা কনফার্মেশন দেখে মূল ট্রেন্ডের দিকে ট্রেড এন্ট্রি নিন।"
          },
          {
            name: "৫. ইনার সার্কেল ট্রেডার (ICT) - সিলভার বুলেট",
            howToFind: "লিকুইডিটি সুইপ (আগের দিনের বা সেশনের হাই/লো ভেঙে লিকুইডিটি নেওয়া) হওয়ার পর স্ট্রং মুভমেন্ট এবং Fair Value Gap (FVG) তৈরি হওয়া খুঁজুন।",
            session: "ICT টাইম উইন্ডো (যেমন: নিউ ইয়র্ক সময় সকাল ১০:০০ - ১১:০০ টা)।",
            execution: "লিকুইডিটি নেওয়ার পর প্রাইস যখন আবার FVG-তে ফিরে আসবে, তখন এন্ট্রি নিন। টার্গেট রাখুন বিপরীত দিকের লিকুইডিটি পুল।"
          },
          {
            name: "৬. মাল্টিপল টাইমফ্রেম অ্যানালাইসিস (MTFA)",
            howToFind: "প্রথমে বড় টাইমফ্রেমে (যেমন Daily বা H4) মূল ট্রেন্ড এবং মেজর সাপোর্ট/রেজিস্ট্যান্স খুঁজুন। এরপর ছোট টাইমফ্রেমে (যেমন H1 বা M15) জুম ইন করুন।",
            session: "যেকোনো মেজর সেশন।",
            execution: "ছোট টাইমফ্রেমে শুধুমাত্র বড় টাইমফ্রেমের ট্রেন্ডের দিকেই ট্রেড খুঁজুন। এন্ট্রি পজিশন পারফেক্ট করতে ছোট টাইমফ্রেম ব্যবহার করুন যাতে স্টপ লস ছোট হয় এবং প্রফিট বেশি হয়।"
          }
        ]
      }
    },
    binary: {
      en: {
        title: "Binary Options Warning",
        intro: "Important Notice: Binary options trading is highly speculative and is considered Gambling (Haram) in Islamic Shariah.",
        howToTrade: [
          "In binary options, you predict whether a price will be higher or lower in a fixed time frame.",
          "If you win, you get a fixed percentage (e.g., 80%). If you lose, you lose 100% of your bet.",
          "Because of this fixed time and fixed payout structure, the odds are mathematically against you."
        ],
        strategies: [
          {
            name: "Why is it considered Gambling (Haram in Islam)?",
            howToFind: "1. Lack of Asset Ownership:",
            session: "Unlike real Forex or Crypto spot trading, you don't buy or sell any real currency or asset. You merely bet against the broker.",
            execution: "2. Time-bound betting (Maysir): Relying on where a price will be in exactly 1 minute is entirely based on chance. It resembles a casino game more than a business transaction."
          }
        ]
      },
      bn: {
        title: "বাইনারি অপশন সতর্কতা (ইসলামী শরীয়ত)",
        intro: "গুরুত্বপূর্ণ নোটিশ: বাইনারি অপশন ট্রেডিং একটি উচ্চ ঝুঁকিপূর্ণ পদ্ধতি এবং ইসলামী শরীয়ত অনুযায়ী এটি সম্পূর্ণ হারাম বা জুয়া হিসেবে বিবেচিত।",
        howToTrade: [
          "বাইনারি অপশনে আপনি নির্দিষ্ট সময়ের জন্য (যেমন ১ মিনিট) প্রাইস উপরে যাবে নাকি নিচে যাবে তার ওপর বাজি ধরেন।",
          "জিতলে আপনি নির্দিষ্ট পার্সেন্টেজ (যেমন ৮০%) পান, আর হারলে পুরো ১০০% টাকা হারান।",
          "এর কোনো বাস্তব ভিত্তি নেই, ব্রোকাররা নিজেরাই এই চার্ট বা সিস্টেম নিয়ন্ত্রণ করে অনেক সময়।"
        ],
        strategies: [
          {
            name: "কেন এটি জুয়া এবং হারাম?",
            howToFind: "১. কোনো সম্পদের মালিকানা নেই:",
            session: "আপনি প্রকৃতপক্ষে কোনো কারেন্সি বা সম্পদ কিনছেন না বা বিক্রি করছেন না। আপনি শুধু ব্রোকারের সাথে বাজিতে অংশ নিচ্ছেন নির্দিষ্ট সময়ে প্রাইস কোথায় যাবে তার ওপর।",
            execution: "২. সময়ের ওপর নির্ভরশীল বাজি (Maysir): একটি নির্দিষ্ট সময়ে (যেমন ১ বা ২ মিনিট) প্রাইস কোথায় থাকবে তা অনুমান করা সম্পূর্ণ ভাগ্যের ওপর নির্ভরশীল। এখানে ব্যবসার কোনো উপাদান নেই। লস হলে ১০০% যায়, লাভ হলে ৮০% আসে, যা গাণিতিকভাবে ক্যাসিনোর মতো। তাই এটি শরীয়ত মতে সম্পূর্ণ জুয়া বা হারাম।"
          }
        ]
      }
    }
  };

  const handleBack = () => {
    if (lang) {
      setLang(null);
    } else {
      setMarket('home');
    }
  };

  if (market === 'home') {
    return (
      <div className="space-y-4">
        <h3 className="text-sm text-slate-500 mb-4 text-center">Select Market</h3>
        <div className="grid grid-cols-1 gap-4">
          <button onClick={() => setMarket('forex')} className="bg-blue-600 hover:bg-blue-500 text-slate-900 font-bold py-5 rounded-xl transition-colors shadow-lg text-lg flex flex-col items-center">
            <span>Forex & Crypto</span>
            <span className="text-xs font-normal text-blue-200 mt-1">Currencies & Digital Assets</span>
          </button>
          <button onClick={() => setMarket('binary')} className="bg-emerald-600 hover:bg-emerald-500 text-slate-900 font-bold py-5 rounded-xl transition-colors shadow-lg text-lg flex flex-col items-center">
            <span>Binary Options</span>
            <span className="text-xs font-normal text-emerald-200 mt-1">Short-term Options</span>
          </button>
        </div>
      </div>
    );
  }

  if (!lang) {
    return (
      <div className="space-y-4">
        <button onClick={handleBack} className="text-xs text-blue-400 hover:text-blue-300 mb-4 flex items-center">&larr; Back to Markets</button>
        <h3 className="text-sm text-slate-500 mb-4 text-center">Select Language / ভাষা নির্বাচন করুন</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={() => setLang('en')} className="bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-900 font-bold py-4 rounded-xl transition-colors text-base">
            English
          </button>
          <button onClick={() => setLang('bn')} className="bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-900 font-bold py-4 rounded-xl transition-colors text-base">
            বাংলা (Bengali)
          </button>
        </div>
      </div>
    );
  }

  const content = guideData[market][lang];

  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
      <div className="sticky top-0 bg-white pb-4 border-b border-slate-200 z-10 flex items-center justify-between">
        <button onClick={handleBack} className="text-xs bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md transition-colors">
          &larr; Back
        </button>
        <span className="text-xs font-medium text-slate-500 uppercase">{market === 'forex' ? 'Forex & Crypto' : 'Binary'} • {lang === 'en' ? 'ENG' : 'BAN'}</span>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-3">{content.title}</h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">{content.intro}</p>

        <h3 className="text-lg font-semibold text-emerald-400 mb-3 border-b border-slate-200 pb-2">
          {lang === 'en' ? 'How to Trade' : 'কিভাবে ট্রেড করবেন'}
        </h3>
        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-2 mb-8">
          {content.howToTrade.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-rose-400 mb-4 border-b border-slate-200 pb-2">
          {lang === 'en' ? 'Trading Strategies' : 'ট্রেডিং স্ট্রেটেজি'}
        </h3>
        
        <div className="space-y-6">
          {content.strategies.map((strategy, i) => (
            <div key={i} className="bg-slate-100/50 border border-slate-300 p-4 md:p-5 rounded-xl">
              <h4 className="font-bold text-amber-400 mb-4 text-base md:text-lg">{strategy.name}</h4>
              
              <div className="space-y-4">
                <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-200/50">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    {lang === 'en' ? '1. How to find in market' : '১. মার্কেটে কীভাবে খুঁজবেন:'}
                  </span>
                  <p className="text-sm text-slate-800">{strategy.howToFind}</p>
                </div>
                
                <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-200/50">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    {lang === 'en' ? '2. Best Session' : '২. কোন সেশনে ট্রেড করবেন:'}
                  </span>
                  <p className="text-sm text-slate-800">{strategy.session}</p>
                </div>

                <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-200/50">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    {lang === 'en' ? '3. How to Execute' : '৩. কীভাবে ট্রেড এন্ট্রি নিবেন:'}
                  </span>
                  <p className="text-sm text-slate-800">{strategy.execution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 38. Fancy Text Generator
export function FancyTextGenerator() {
  const [text, setText] = useState('HelloWorld');
  const [copied, setCopied] = useState<number | null>(null);

  const alphabets = {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    bold: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    italic: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
    cursive: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    gothic: "𝔄𝔅𝔆𝔇𝔈𝔉𝔊𝔋𝔌𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔Ր𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔷𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
    bubble: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    monospaced: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣"
  };

  const convertText = (str: string, type: keyof typeof alphabets) => {
    const normalArr = Array.from(alphabets.normal);
    const targetArr = Array.from(alphabets[type]);
    return Array.from(str).map(char => {
      const idx = normalArr.indexOf(char);
      if (idx !== -1 && targetArr[idx]) {
        return targetArr[idx];
      }
      return char;
    }).join('');
  };

  const handleCopy = (str: string, index: number) => {
    navigator.clipboard.writeText(str);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const styles = ['bold', 'italic', 'cursive', 'gothic', 'bubble', 'monospaced'] as const;

  return (
    <div className="space-y-4">
      <div>
         <label className="text-xs text-slate-500 uppercase mb-1 block">Your Text</label>
         <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type something..." className="w-full bg-white border border-slate-300 text-slate-900 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-shadow" />
      </div>

      <div className="space-y-3 mt-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {styles.map((style, i) => {
          const result = convertText(text || 'HelloWorld', style);
          return (
            <div key={style} className="bg-slate-100 border border-slate-300 rounded-xl p-3 flex justify-between items-center group">
               <div className="overflow-x-auto pr-4 custom-scrollbar whitespace-nowrap">
                 <p className="text-lg text-slate-800">{result}</p>
                 <span className="text-[10px] text-slate-500 uppercase font-bold">{style}</span>
               </div>
               <button onClick={() => handleCopy(result, i)} className="bg-slate-200 hover:bg-teal-600 text-slate-700 hover:text-slate-900 shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-colors">
                 {copied === i ? 'COPIED!' : 'COPY'}
               </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 39. Fake Tweet Generator
export function FakeTweetGenerator() {
  const [name, setName] = useState('Elon Musk');
  const [username, setUsername] = useState('elonmusk');
  const [content, setContent] = useState('I am buying the internet today.');
  const [time, setTime] = useState('10:45 AM');
  const [date, setDate] = useState('Apr 24, 2026');
  const [likes, setLikes] = useState('1.5M');
  const [retweets, setRetweets] = useState('450K');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Name</label>
           <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
        </div>
        <div>
           <label className="text-xs text-slate-500 uppercase mb-1 block">Username</label>
           <div className="relative">
             <span className="absolute left-3 top-2 text-slate-500">@</span>
             <input type="text" value={username} onChange={e => setUsername(e.target.value.replace('@',''))} className="w-full bg-white border border-slate-300 rounded-md py-2 pl-7 pr-3 text-slate-900" />
           </div>
        </div>
      </div>
      <div>
         <label className="text-xs text-slate-500 uppercase mb-1 block">Tweet Content</label>
         <textarea value={content} onChange={e => setContent(e.target.value)} rows={3} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md custom-scrollbar" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Time</label>
            <input type="text" value={time} onChange={e => setTime(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
         </div>
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Date</label>
            <input type="text" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
         </div>
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Retweets</label>
            <input type="text" value={retweets} onChange={e => setRetweets(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
         </div>
         <div>
            <label className="text-xs text-slate-500 uppercase mb-1 block">Likes</label>
            <input type="text" value={likes} onChange={e => setLikes(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-900 p-2 rounded-md" />
         </div>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-2xl mx-auto shadow-2xl mt-8 max-w-[500px]">
         <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl overflow-hidden shadow-inner">
                 {name.charAt(0).toUpperCase() || '?'}
               </div>
               <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 leading-tight">{name}</span>
                    <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-4 h-4 text-blue-500 fill-current"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.728 2.73 1.83 3.42-.09.387-.132.793-.132 1.208 0 2.21 1.71 3.998 3.918 3.998.5 0 .963-.09 1.4-.258C9.25 21.05 10.537 22 12 22s2.75-.95 3.28-2.28c.437.168.902.258 1.4.258 2.21 0 3.918-1.792 3.918-4 0-.415-.042-.82-.132-1.208 1.1-.69 1.83-1.96 1.83-3.42zm-12.283 5.483l-3.566-3.566 1.414-1.414 2.15 2.15 5.892-5.893 1.414 1.414-7.304 7.31z"></path></g></svg>
                  </div>
                  <div className="text-slate-500 text-sm leading-tight">@{username}</div>
               </div>
            </div>
            <div className="text-slate-500">...</div>
         </div>
         <div className="text-slate-900 text-[1.15rem] leading-snug font-normal mb-4" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            {content}
         </div>
         <div className="text-slate-500 text-sm pb-3 border-b border-slate-100 font-medium whitespace-pre-wrap">
            {time} · {date}
         </div>
         <div className="flex items-center gap-6 py-3 border-b border-slate-100 text-sm text-slate-600 font-bold">
            <div><span className="text-slate-900">{retweets}</span> Retweets</div>
            <div><span className="text-slate-900">{likes}</span> Likes</div>
         </div>
      </div>
      <p className="text-center text-xs text-slate-500 mt-2">Take a screenshot to save and share!</p>
    </div>
  );
}

// 41. Stopwatch & Timer
export function StopwatchTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="space-y-4">
      <div className="font-mono text-5xl md:text-6xl text-center py-8 text-slate-800">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
      <div className="flex gap-4 p-4 text-center items-center justify-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-lg transition-colors" onClick={() => { setIsRunning(false); setTime(0) }}>
          Reset
        </button>
      </div>
    </div>
  )
}

// 42. Random Number Generator
export function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<number[]>([]);

  const generate = () => {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);
    const generated = []
    for(let i=0; i<count; ++i)
      generated.push(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
    setResult(generated);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Minimum</label>
          <input type="number" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={min} onChange={(e) => setMin(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Maximum</label>
          <input type="number" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={max} onChange={(e) => setMax(Number(e.target.value))} />
        </div>
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-1">Count</label>
           <input type="number" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={count} min={1} max={100} onChange={(e) => setCount(Number(e.target.value))} />
        </div>
      </div>
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors" onClick={generate}>
        Generate Number{count > 1 ? 's' : ''}
      </button>
      {result.length > 0 && (
         <div className="mt-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Result:</h3>
            <div className="bg-slate-100 p-4 rounded-md font-mono text-xl whitespace-pre-wrap break-all flex flex-wrap gap-2">
              {result.map((num, i) => <span key={i} className="bg-white px-2 py-1 rounded shadow-sm border border-slate-200">{num}</span>)}
            </div>
         </div>
      )}
    </div>
  )
}

// 43. Lorem Ipsum Generator
export function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [wordsPerParagraph, setWordsPerParagraph] = useState(50);
  const [result, setResult] = useState('');

  const generateLoremIpsum = () => {
    const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const words = defaultText.split(' ');

    let generatedText = '';
    for (let i = 0; i < paragraphs; i++) {
       let p = '';
       for(let j=0; j<wordsPerParagraph; ++j) {
         p += words[Math.floor(Math.random() * words.length)] + ' ';
       }
       p = p.trim() + '.';
       // capitalize first letter
       p = p.charAt(0).toUpperCase() + p.slice(1);
       generatedText += p + '\n\n';
    }

    setResult(generatedText.trim());
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Paragraphs</label>
          <input type="number" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={paragraphs} min={1} max={20} onChange={(e) => setParagraphs(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Words / Paragraph</label>
          <input type="number" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={wordsPerParagraph} min={5} max={100} onChange={(e) => setWordsPerParagraph(Number(e.target.value))} />
        </div>
      </div>
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors" onClick={generateLoremIpsum}>
        Generate Text
      </button>
      {result && (
         <div className="mt-6 relative group">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Generated Text:</h3>
            <textarea readOnly className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm leading-relaxed" value={result}></textarea>
            <button className="absolute top-10 right-2 bg-white/80 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-200" onClick={() => navigator.clipboard.writeText(result)} title="Copy to clipboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
         </div>
      )}
    </div>
  )
}

// 44. Pomodoro Timer
export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
       setIsActive(false);
       alert("Timer finished!");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const switchMode = (newMode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setMode(newMode);
    setIsActive(false);
    if (newMode === 'pomodoro') setTimeLeft(25 * 60);
    if (newMode === 'shortBreak') setTimeLeft(5 * 60);
    if (newMode === 'longBreak') setTimeLeft(15 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-6 flex flex-col items-center py-4">
      <div className="flex bg-slate-100 rounded-full p-1 space-x-1">
         <button onClick={() => switchMode('pomodoro')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'pomodoro' ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:bg-slate-200'}`}>Work</button>
         <button onClick={() => switchMode('shortBreak')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'shortBreak' ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:bg-slate-200'}`}>Short Break</button>
         <button onClick={() => switchMode('longBreak')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'longBreak' ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:bg-slate-200'}`}>Long Break</button>
      </div>
      <div className="text-7xl font-mono text-slate-800 font-light">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-4">
        <button onClick={() => setIsActive(!isActive)} className={`font-bold py-3 px-8 rounded-xl transition-colors ${isActive ? 'bg-rose-100 text-rose-600 hover:bg-rose-200' : 'bg-rose-600 text-white hover:bg-rose-500'}`}>
          {isActive ? 'PAUSE' : 'START'}
        </button>
        <button onClick={() => switchMode(mode)} className="bg-slate-100 text-slate-600 font-bold py-3 px-6 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
      </div>
    </div>
  );
}

// 45. IP Address Checker
export function IpChecker() {
  const [ipData, setIpData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchIp = async () => {
    setLoading(true);
    setError('');
    try {
      // First get IP
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipJson = await ipRes.json();
      
      // Then get details
      const geoRes = await fetch(`https://ipapi.co/${ipJson.ip}/json/`);
      const geoJson = await geoRes.json();
      
      if (geoJson.error) throw new Error("Could not fetch details");
      setIpData(geoJson);
    } catch (err) {
      setError('Could not fetch IP details. You might be using an ad blocker or VPN that blocks these requests.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div className="space-y-4">
       {loading ? (
          <div className="py-12 text-center text-slate-500 flex flex-col items-center">
             <div className="w-8 h-8 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
             Checking connection...
          </div>
       ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
             {error}
             <button onClick={fetchIp} className="mt-2 text-sm underline md:block">Try again</button>
          </div>
       ) : ipData ? (
          <div className="space-y-4">
             <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-lg">
                <p className="text-indigo-100 mb-2 uppercase tracking-wide text-xs font-bold">Your IP Address</p>
                <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight">{ipData.ip}</h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: 'City', value: ipData.city },
                 { label: 'Region', value: ipData.region },
                 { label: 'Country', value: ipData.country_name },
                 { label: 'ISP', value: ipData.org }
               ].map((item, i) => (
                 <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 font-medium mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-slate-900 truncate" title={item.value}>{item.value || '-'}</p>
                 </div>
               ))}
             </div>
          </div>
       ) : null}
    </div>
  );
}

// 46. To-Do List
export function TodoList() {
  const [todos, setTodos] = useState<{id: number, text: string, done: boolean}[]>(() => {
    const saved = localStorage.getItem('smarttools_todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('smarttools_todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleDone = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-4">
      <form onSubmit={addTodo} className="flex gap-2">
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" className="flex-1 border-slate-300 rounded-xl shadow-sm focus:ring-amber-500 focus:border-amber-500 px-4 py-3" />
         <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">Add</button>
      </form>
      
      {todos.length === 0 ? (
         <div className="text-center py-12 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
           <p>No tasks yet. Add one above!</p>
           <p className="text-xs mt-2">Tasks are saved automatically in your browser.</p>
         </div>
      ) : (
         <ul className="space-y-2">
            {todos.map(todo => (
               <li key={todo.id} className="flex flex-row items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl shadow-sm group">
                  <button onClick={() => toggleDone(todo.id)} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${todo.done ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300 hover:border-amber-400'}`}>
                    {todo.done && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </button>
                  <span className={`flex-1 text-sm ${todo.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{todo.text}</span>
                  <button onClick={() => removeTodo(todo.id)} className="text-slate-300 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                  </button>
               </li>
            ))}
         </ul>
      )}
    </div>
  );
}

// 47. Text to Speech
export function TextToSpeech() {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
         setSelectedVoice(availableVoices[0].name);
      }
    };
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [selectedVoice]);

  const speak = () => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      const voice = voices.find(v => v.name === selectedVoice);
      if (voice) utterance.voice = voice;
    }
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="space-y-4">
       <textarea 
          className="w-full h-40 border-slate-300 rounded-xl shadow-sm focus:ring-purple-500 focus:border-purple-500 p-4 resize-y"
          placeholder="Type or paste text here to hear it read aloud..."
          value={text}
          onChange={(e) => setText(e.target.value)}
       ></textarea>
       
       {voices.length > 0 && (
         <div>
            <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Select Voice / Language</label>
            <select className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white text-sm" value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)}>
               {voices.map((v, idx) => (
                 <option key={`${v.name}-${v.lang}-${idx}`} value={v.name}>{v.name} ({v.lang})</option>
               ))}
            </select>
         </div>
       )}

       <div className="flex gap-3">
         <button onClick={isSpeaking ? stop : speak} disabled={!text} className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl transition-colors ${!text ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : isSpeaking ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg'}`}>
           {isSpeaking ? (
             <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> Stop Audio</>
           ) : (
             <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Read Text</>
           )}
         </button>
         {text && (
            <button onClick={() => setText('')} className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-3 rounded-xl transition-colors font-medium">Clear</button>
         )}
       </div>
    </div>
  );
}

export function IslamicDuas() {
  const duas = [
    {
      title: "ঋণ থেকে মুক্তির দোয়া",
      arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      pronunciation: "আল্লাহুম্মাকফিনী বিহালালিকা আন হারামিকা, ওয়া আগনিনি বিফাদলিকা আম্মান সিওয়াকা।",
      meaning: "হে আল্লাহ! আপনি আমাকে আপনার হালাল রিজিক দিয়ে আপনার হারামকৃত বস্তু থেকে রক্ষা করুন এবং আপনার অনুগ্রহ দিয়ে আপনি ছাড়া অন্য সবার থেকে আমাকে অমুখাপেক্ষী করুন।",
      reference: "তিরমিযি, ৩৫৬৩"
    },
    {
      title: "ধন সম্পদ / রিজিক বৃদ্ধির দোয়া",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
      pronunciation: "আল্লাহুম্মা ইন্নি আসআলুকা ইলমান নাফিয়্যান, ওয়া রিযকান তায়্যিবান, ওয়া আমালান মুতাকা্ব্বালান।",
      meaning: "হে আল্লাহ! আমি আপনার কাছে উপকারী জ্ঞান, পবিত্র রিজিক এবং কবুলযোগ্য আমলের প্রার্থনা করছি।",
      reference: "ইবনে মাজাহ, ৯২৫"
    },
    {
      title: "বিপদ থেকে মুক্তির দোয়া (দোয়া ইউনূস)",
      arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      pronunciation: "লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নি কুনতু মিনায যালিমীন।",
      meaning: "তুমি ছাড়া সত্য কোনো উপাস্য নেই, তুমি পূতপবিত্র, নিশ্চয় আমি জালিমদের অন্তর্ভুক্ত।",
      reference: "তিরমিযি, ৩৫০৫ / আল-আম্বিয়া: ৮৭"
    },
    {
      title: "যানবাহনে ওঠার দোয়া (দুর্ঘটনা থেকে রক্ষার্থে)",
      arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
      pronunciation: "সুবহানাল্লাযী সাখখারা লানা হাযা ওয়া মা কুন্না লাহু মুকরিনীন। ওয়া ইন্না ইলা রাব্বিনা লামুনকালিবুন।",
      meaning: "পবিত্র সেই সত্তা যিনি এগুলোকে আমাদের বশীভূত করে দিয়েছেন, অথচ আমরা এদের বশীভূত করতে সক্ষম ছিলাম না। আর নিশ্চয়ই আমরা আমাদের রবের দিকেই ফিরে যাব।",
      reference: "সূরা যুখরুফ, ১৩-১৪ / মুসলিম, ১৩৪৬"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🌙 গুরুত্বপূর্ণ ছোট ও কার্যকরী দোয়া
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          জীবনের বিভিন্ন সময়ে আমাদের নানাবিধ সমস্যা ও প্রয়োজনের সম্মুখীন হতে হয়। হাদিস থেকে বর্ণিত এই দোয়াগুলো নিয়মিত পাঠ করলে আল্লাহ তা'আলা রহমত বর্ষণ করবেন ইনশাআল্লাহ।
        </p>

        <div className="space-y-6">
          {duas.map((dua, i) => (
            <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
               <div className="bg-emerald-600 px-5 py-3">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                   {dua.title}
                 </h3>
               </div>
               <div className="p-5 md:p-6 space-y-4">
                 <div className="bg-white border border-slate-100 rounded-lg p-5 text-right font-['Amiri',_'Lateef',_serif] text-3xl md:text-4xl text-emerald-800 leading-relaxed shadow-sm dir-rtl" dir="rtl">
                   {dua.arabic}
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-semibold mb-1">উচ্চারণ:</p>
                   <p className="text-slate-800 text-lg md:text-xl">{dua.pronunciation}</p>
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-semibold mb-1">অর্থ:</p>
                   <p className="text-slate-700 text-lg">{dua.meaning}</p>
                 </div>
                 <div className="pt-3 mt-3 border-t border-slate-200">
                   <p className="text-xs font-bold text-emerald-700 bg-emerald-100 inline-block px-3 py-1 rounded-full">
                     📚 সূত্র: {dua.reference}
                   </p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
