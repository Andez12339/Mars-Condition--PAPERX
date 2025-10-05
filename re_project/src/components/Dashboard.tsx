import { useState, useEffect } from 'react';
import { LogOut, Thermometer, Droplets, Wind, Activity, Calculator, Mail, ExternalLink } from 'lucide-react';
import MarsStatus from './MarsStatus';
import MarsImages from './MarsImages';
import ResourceCalculators from './ResourceCalculators';
import ContactSection from './ContactSection';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950">
      <div
        className="fixed inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      <div className="relative z-10">
        <header className="bg-black/40 backdrop-blur-lg border-b border-red-500/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  PAPERX
                </h1>
                <p className="text-gray-400 text-sm mt-1">Mars Mission Control</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 rounded-lg text-red-400 hover:text-red-300 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <MarsStatus />
            <MarsImages />
            <ResourceCalculators />
            <ContactSection />
          </div>
        </main>

        <footer className="bg-black/40 backdrop-blur-lg border-t border-red-500/30 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-400 text-sm">
              PAPERX Mars Exploration System - Monitoring Mars conditions for human adaptation
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
