import { useState, useEffect } from 'react';
import { Thermometer, Droplets, Wind, Activity, AlertCircle, Globe } from 'lucide-react';

interface MarsWeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  oxygenLevel: number;
  survivalRate: number;
  pressure: number;
}

export default function MarsStatus() {
  const [weatherData, setWeatherData] = useState<MarsWeatherData>({
    temperature: -63,
    humidity: 0.03,
    windSpeed: 24,
    oxygenLevel: 0.13,
    survivalRate: 45,
    pressure: 610
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarsData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        setWeatherData({
          temperature: Math.floor(Math.random() * 40) - 80,
          humidity: Math.random() * 0.1,
          windSpeed: Math.floor(Math.random() * 30) + 10,
          oxygenLevel: Math.random() * 0.2,
          survivalRate: Math.floor(Math.random() * 30) + 40,
          pressure: Math.floor(Math.random() * 100) + 580
        });
      } catch (error) {
        console.error('Error fetching Mars data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarsData();
    const interval = setInterval(fetchMarsData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getSurvivalColor = (rate: number) => {
    if (rate >= 60) return 'from-green-500 to-emerald-600';
    if (rate >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-red-700';
  };

  return (
    <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 shadow-2xl shadow-red-500/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Mars Status Conditions</h2>
            <p className="text-gray-400 text-sm">Real-time environmental monitoring</p>
          </div>
        </div>
        {!loading && (
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-medium">LIVE</span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-500/30 rounded-xl p-4 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Temperature</h3>
              </div>
              <p className="text-3xl font-bold text-white">{weatherData.temperature}°C</p>
              <p className="text-gray-400 text-sm mt-1">Average surface temp</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-950/40 border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Humidity</h3>
              </div>
              <p className="text-3xl font-bold text-white">{weatherData.humidity.toFixed(2)}%</p>
              <p className="text-gray-400 text-sm mt-1">Atmospheric moisture</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Wind className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Wind Speed</h3>
              </div>
              <p className="text-3xl font-bold text-white">{weatherData.windSpeed} km/h</p>
              <p className="text-gray-400 text-sm mt-1">Current wind velocity</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-green-950/40 border border-green-500/30 rounded-xl p-4 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Oxygen Level</h3>
              </div>
              <p className="text-3xl font-bold text-white">{weatherData.oxygenLevel.toFixed(2)}%</p>
              <p className="text-gray-400 text-sm mt-1">Atmospheric O₂</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-orange-950/40 border border-orange-500/30 rounded-xl p-4 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Pressure</h3>
              </div>
              <p className="text-3xl font-bold text-white">{weatherData.pressure} Pa</p>
              <p className="text-gray-400 text-sm mt-1">Surface pressure</p>
            </div>

            <div className="bg-gradient-to-br from-red-900/40 to-red-950/40 border border-red-500/30 rounded-xl p-4 hover:border-red-500/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-gray-300 font-medium">Survival Rate</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-white">{weatherData.survivalRate}%</p>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getSurvivalColor(weatherData.survivalRate)} transition-all duration-500 rounded-full shadow-lg`}
                    style={{ width: `${weatherData.survivalRate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-yellow-400 font-semibold mb-1">Environmental Alert</h4>
                <p className="text-gray-300 text-sm">
                  Current conditions show extreme cold temperatures and low oxygen levels. Enhanced life support systems required for human habitation.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
