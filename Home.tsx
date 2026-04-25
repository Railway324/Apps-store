import React, { useState } from 'react';
import { toolsList } from '../tools/data';
import { ProfitCalculator, AgeCalculator, WordCounter, PasswordGenerator, CurrencyConverter, EMICalculator, UnitConverter, GPACalculator, ImageSizeChecker, YTTitleGenerator, CaseConverter, JsonFormatter, Base64Converter, UrlEncoder, ColorConverter, HashtagGenerator, ScriptTimer, SocialCounter, ScriptOutlineGenerator, ViralTopicGenerator, TrendSearchHelper, CompoundInterestCalculator, DiscountCalculator, SalaryCalculator, DakhilGpaCalculator, StudyRoutineMaker, AILinksDirectory, LoveCalculator, ZodiacFinder, Magic8Ball, QrGenerator, BmiCalculator, BillSplitter, CoinFlipper, JokeGenerator, TruthOrDare, TradingGuide, FancyTextGenerator, FakeTweetGenerator, AbroadGuide, AiEarningGuide, IslamicDuas, StopwatchTimer, RandomNumberGenerator, LoremIpsumGenerator, PomodoroTimer, IpChecker, TodoList, TextToSpeech } from '../tools/components';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const toolComponents: Record<string, React.FC> = {
  'profit-calculator': ProfitCalculator,
  'age-calculator': AgeCalculator,
  'word-counter': WordCounter,
  'password-generator': PasswordGenerator,
  'currency-converter': CurrencyConverter,
  'emi-calculator': EMICalculator,
  'unit-converter': UnitConverter,
  'gpa-calculator': GPACalculator,
  'dakhil-ssc-gpa': DakhilGpaCalculator,
  'study-routine-maker': StudyRoutineMaker,
  'image-size-checker': ImageSizeChecker,
  'youtube-title-generator': YTTitleGenerator,
  'text-case-converter': CaseConverter,
  'json-formatter': JsonFormatter,
  'base64-converter': Base64Converter,
  'url-encoder': UrlEncoder,
  'color-converter': ColorConverter,
  'hashtag-generator': HashtagGenerator,
  'script-timer': ScriptTimer,
  'social-counter': SocialCounter,
  'script-outline-generator': ScriptOutlineGenerator,
  'viral-topic-generator': ViralTopicGenerator,
  'trend-search-helper': TrendSearchHelper,
  'compound-interest-calculator': CompoundInterestCalculator,
  'discount-calculator': DiscountCalculator,
  'salary-calculator': SalaryCalculator,
  'ai-directory': AILinksDirectory,
  'love-calculator': LoveCalculator,
  'zodiac-finder': ZodiacFinder,
  'magic-8-ball': Magic8Ball,
  'qr-generator': QrGenerator,
  'bmi-calculator': BmiCalculator,
  'bill-splitter': BillSplitter,
  'coin-flipper': CoinFlipper,
  'joke-generator': JokeGenerator,
  'truth-or-dare': TruthOrDare,
  'trading-guide': TradingGuide,
  'fancy-text': FancyTextGenerator,
  'fake-tweet': FakeTweetGenerator,
  'abroad-guide': AbroadGuide,
  'ai-earning-guide': AiEarningGuide,
  'islamic-duas': IslamicDuas,
  'stopwatch': StopwatchTimer,
  'random-number': RandomNumberGenerator,
  'lorem-ipsum': LoremIpsumGenerator,
  'pomodoro-timer': PomodoroTimer,
  'ip-checker': IpChecker,
  'todo-list': TodoList,
  'text-to-speech': TextToSpeech,
};

export function Home() {
  const [search, setSearch] = useState('');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const filteredTools = toolsList.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
          Smart Tools Hub
        </h1>
        <p className="text-lg text-slate-600 pt-2">
          Your all-in-one platform for fast, free, and reliable online tools. Boost your productivity without installing anything.
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search for a tool..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-300 focus:border-blue-500 rounded-full py-4 pl-12 pr-6 text-slate-900 outline-none transition-colors shadow-sm"
          />
        </div>
      </section>

      <AdPlaceholder format="horizontal" />

      {/* Tools Grid */}
      <section id="tools" className="px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Utilities</h2>
            <p className="text-slate-500 mt-1">Instant results, no registration, zero trackers.</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500 mb-1 italic">Total Tools Available: {filteredTools.length}</p>
            <div className="h-1 w-32 bg-slate-200 rounded-full overflow-hidden ml-auto">
              <div className="bg-blue-600 h-full w-[85%]"></div>
            </div>
          </div>
        </div>
        
        {filteredTools.length === 0 ? (
          <div className="text-center py-12 text-slate-500">No tools found matching your search.</div>
        ) : (
          <div className="space-y-10">
            {Array.from(new Set(filteredTools.map(t => (t as any).category))).sort().map(category => {
              const categoryTools = filteredTools.filter(t => (t as any).category === category);
              if (categoryTools.length === 0) return null;
              
              return (
                <div key={category as string}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">{category as string}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {categoryTools.map((tool, i) => {
                      const Icon = tool.icon;
                      const colors = ['blue', 'emerald', 'cyan', 'amber', 'purple', 'rose', 'indigo', 'pink'];
                      // Generate a consistent color based on id length or name length
                      const color = colors[(tool.name.length + i) % colors.length];
                      return (
                        <div 
                          key={tool.id} 
                          onClick={() => setActiveTool(tool.id)}
                          className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400/50 shadow-sm transition-all cursor-pointer group hover:shadow-md"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                            color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                            color === 'pink' ? 'bg-pink-50 text-pink-600' :
                            color === 'amber' ? 'bg-amber-50 text-amber-600' :
                            color === 'cyan' ? 'bg-cyan-50 text-cyan-600' :
                            color === 'purple' ? 'bg-purple-50 text-purple-600' :
                            color === 'rose' ? 'bg-rose-50 text-rose-600' :
                            'bg-indigo-50 text-indigo-600'
                          }`}>
                            <Icon strokeWidth={1.5} className="w-5 h-5" />
                          </div>
                          <h3 className="font-semibold mb-1 text-sm text-slate-900 notranslate">{tool.name}</h3>
                          <p className="text-[11px] text-slate-500 line-clamp-2">{tool.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <AdPlaceholder format="horizontal" />

      {/* Tool Modal Context */}
      <AnimatePresence>
        {activeTool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveTool(null)}
          >
              <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white border border-slate-200 p-6 rounded-2xl w-full max-w-2xl shadow-xl relative my-auto"
            >
              <button 
                onClick={() => setActiveTool(null)}
                className="absolute right-4 top-4 text-slate-500 hover:text-slate-900 bg-slate-100 min-[400px]:p-1 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6 flex items-center gap-3">
                {(() => {
                  const t = toolsList.find(x => x.id === activeTool);
                  if(!t) return null;
                  const Icon = t.icon;
                  return (
                    <>
                      <div className="p-2 bg-blue-50 text-blue-600 rounded border border-blue-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 notranslate">{t.name}</h2>
                        <p className="text-xs text-slate-500">{t.description}</p>
                      </div>
                    </>
                  )
                })()}
              </div>

              <div className="py-2">
                {(() => {
                  const ToolComponent = toolComponents[activeTool];
                  return ToolComponent ? <ToolComponent /> : null;
                })()}
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
                <p>Use this tool for free • Smart Tools Hub</p>
                {/* Micro Ad placeholder in tool */}
                <div className="w-full h-[50px] bg-slate-50 border border-slate-200 mt-2 flex items-center justify-center rounded">
                  <span className="opacity-50">Ad</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
