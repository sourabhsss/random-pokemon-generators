import React, { useEffect } from 'react';
import { Code, Star, Target, Brain, Users, Shuffle, Filter, Zap, Shield, Heart, Sword } from 'lucide-react';
import { AccordionItem } from './info/AccordionItem';
import { FeatureCard } from './info/FeatureCard';

const SECTIONS = ['how-it-works', 'features', 'applications', 'tips', 'community'] as const;
type Section = typeof SECTIONS[number];

export function InfoContent() {
  const [openSections, setOpenSections] = React.useState<Set<Section>>(new Set());

  useEffect(() => {
    setOpenSections(new Set(SECTIONS));
  }, []);

  const toggleSection = (section: Section) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-16 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center mb-8">About the Random Pokémon Generator</h2>
          
          <AccordionItem
            title="How It Works"
            isOpen={openSections.has('how-it-works')}
            onToggle={() => toggleSection('how-it-works')}
            icon={<Code className="w-5 h-5 text-blue-500" />}
          >
            <div className="space-y-4">
              <p>Our Random Pokémon Generator utilizes the comprehensive PokéAPI to deliver an authentic and diverse Pokémon experience. Here's a detailed look at how it functions:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <FeatureCard
                  icon={Shuffle}
                  title="Random Selection"
                  description="Uses advanced algorithms to ensure truly random Pokémon selection from all available generations"
                />
                <FeatureCard
                  icon={Filter}
                  title="Smart Filtering"
                  description="Applies your selected filters to match specific criteria while maintaining randomness"
                />
              </div>

              <h3 className="font-semibold mt-6 mb-2">Technical Implementation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implements real-time data fetching from PokéAPI</li>
                <li>Ensures balanced distribution across all generations</li>
                <li>Optimizes performance with smart caching</li>
                <li>Validates all generated combinations</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Features and Benefits"
            isOpen={openSections.has('features')}
            onToggle={() => toggleSection('features')}
            icon={<Star className="w-5 h-5 text-yellow-500" />}
          >
            <div className="space-y-4">
              <p>Our generator offers a comprehensive suite of features designed to enhance your Pokémon experience:</p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <FeatureCard
                  icon={Heart}
                  title="Complete Stats"
                  description="View detailed HP, Attack, Defense, and Speed statistics for each Pokémon"
                />
                <FeatureCard
                  icon={Shield}
                  title="Type Coverage"
                  description="Analyze type combinations and effectiveness against other Pokémon"
                />
                <FeatureCard
                  icon={Sword}
                  title="Battle Ready"
                  description="Generate teams that are balanced and ready for competitive play"
                />
              </div>

              <h3 className="font-semibold mt-6 mb-2">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Discover new Pokémon combinations you might have never considered</li>
                <li>Perfect for both casual players and competitive trainers</li>
                <li>Save time building teams with instant generation</li>
                <li>Learn about different Pokémon types and strategies</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Applications"
            isOpen={openSections.has('applications')}
            onToggle={() => toggleSection('applications')}
            icon={<Target className="w-5 h-5 text-green-500" />}
          >
            <div className="space-y-4">
              <p>The Random Pokémon Generator serves multiple purposes across different aspects of the Pokémon experience:</p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Competitive Gaming</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Practice team building with random combinations</li>
                  <li>Challenge yourself with unexpected team compositions</li>
                  <li>Discover new meta-breaking strategies</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-3">Casual Play</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create fun challenge runs for games</li>
                  <li>Discover new favorite Pokémon</li>
                  <li>Learn about different generations</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Advanced Tips"
            isOpen={openSections.has('tips')}
            onToggle={() => toggleSection('tips')}
            icon={<Brain className="w-5 h-5 text-purple-500" />}
          >
            <div className="space-y-4">
              <p>Master the generator with these expert tips and strategies:</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Team Building</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Use type filters to ensure balanced coverage</li>
                    <li>Generate multiple teams to compare options</li>
                    <li>Consider evolution stages for team diversity</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Competitive Edge</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Analyze stat distributions</li>
                    <li>Look for unexpected type combinations</li>
                    <li>Consider regional variants for surprise factor</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Community and Support"
            isOpen={openSections.has('community')}
            onToggle={() => toggleSection('community')}
            icon={<Users className="w-5 h-5 text-red-500" />}
          >
            <div className="space-y-4">
              <p>Join our growing community of Pokémon trainers and enthusiasts:</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Community Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Share your generated teams with others</li>
                  <li>Discuss strategies and team compositions</li>
                  <li>Get help from experienced players</li>
                  <li>Participate in community challenges</li>
                </ul>
              </div>

              <p className="mt-4">Stay connected with us on social media and join our Discord server for real-time discussions, updates, and support.</p>
            </div>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}