import { useState } from 'react';
import { Calculator, Droplets, Utensils, Wind } from 'lucide-react';

export default function ResourceCalculators() {
  const [waterPeople, setWaterPeople] = useState('');
  const [waterDays, setWaterDays] = useState('');
  const [waterResult, setWaterResult] = useState<number | null>(null);

  const [foodPeople, setFoodPeople] = useState('');
  const [foodDays, setFoodDays] = useState('');
  const [foodResult, setFoodResult] = useState<number | null>(null);

  const [oxygenPeople, setOxygenPeople] = useState('');
  const [oxygenHours, setOxygenHours] = useState('');
  const [oxygenResult, setOxygenResult] = useState<number | null>(null);

  const calculateWater = () => {
    const people = parseInt(waterPeople);
    const days = parseInt(waterDays);
    if (people && days) {
      const litersPerPersonPerDay = 3.5;
      setWaterResult(people * days * litersPerPersonPerDay);
    }
  };

  const calculateFood = () => {
    const people = parseInt(foodPeople);
    const days = parseInt(foodDays);
    if (people && days) {
      const kgPerPersonPerDay = 0.6;
      setFoodResult(people * days * kgPerPersonPerDay);
    }
  };

  const calculateOxygen = () => {
    const people = parseInt(oxygenPeople);
    const hours = parseInt(oxygenHours);
    if (people && hours) {
      const litersPerPersonPerHour = 20;
      setOxygenResult(people * hours * litersPerPersonPerHour);
    }
  };

  return (
    <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 shadow-2xl shadow-red-500/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Resource Calculators</h2>
          <p className="text-gray-400 text-sm">Calculate survival resource requirements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Water Calculator</h3>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of People</label>
              <input
                type="number"
                value={waterPeople}
                onChange={(e) => setWaterPeople(e.target.value)}
                placeholder="e.g., 5"
                className="w-full px-3 py-2 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of Days</label>
              <input
                type="number"
                value={waterDays}
                onChange={(e) => setWaterDays(e.target.value)}
                placeholder="e.g., 30"
                className="w-full px-3 py-2 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          <button
            onClick={calculateWater}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all mb-3"
          >
            Calculate
          </button>

          {waterResult !== null && (
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
              <p className="text-cyan-400 text-sm mb-1">Water Required</p>
              <p className="text-2xl font-bold text-white">{waterResult.toFixed(1)} L</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Food Calculator</h3>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of People</label>
              <input
                type="number"
                value={foodPeople}
                onChange={(e) => setFoodPeople(e.target.value)}
                placeholder="e.g., 5"
                className="w-full px-3 py-2 bg-black/40 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of Days</label>
              <input
                type="number"
                value={foodDays}
                onChange={(e) => setFoodDays(e.target.value)}
                placeholder="e.g., 30"
                className="w-full px-3 py-2 bg-black/40 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          <button
            onClick={calculateFood}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all mb-3"
          >
            Calculate
          </button>

          {foodResult !== null && (
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
              <p className="text-orange-400 text-sm mb-1">Food Required</p>
              <p className="text-2xl font-bold text-white">{foodResult.toFixed(1)} kg</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Wind className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Oxygen Calculator</h3>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of People</label>
              <input
                type="number"
                value={oxygenPeople}
                onChange={(e) => setOxygenPeople(e.target.value)}
                placeholder="e.g., 5"
                className="w-full px-3 py-2 bg-black/40 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Number of Hours</label>
              <input
                type="number"
                value={oxygenHours}
                onChange={(e) => setOxygenHours(e.target.value)}
                placeholder="e.g., 24"
                className="w-full px-3 py-2 bg-black/40 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          <button
            onClick={calculateOxygen}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-2 px-4 rounded-lg transition-all mb-3"
          >
            Calculate
          </button>

          {oxygenResult !== null && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <p className="text-green-400 text-sm mb-1">Oxygen Required</p>
              <p className="text-2xl font-bold text-white">{oxygenResult.toFixed(1)} L</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
