import { useState, useEffect } from 'react';
import { Camera, Calendar, Maximize2, Loader } from 'lucide-react';

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    full_name: string;
  };
  rover: {
    name: string;
  };
}

export default function MarsImages() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<MarsPhoto | null>(null);

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        setLoading(true);
        const API_KEY = 'geY7AFTNBh678Tv0iMV4wyVYM2n9hRy50BPsja8w';
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos.slice(0, 8));
        } else {
          setPhotos([
            {
              id: 1,
              img_src: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=800',
              earth_date: '2024-10-04',
              camera: { full_name: 'Front Hazard Avoidance Camera' },
              rover: { name: 'Curiosity' }
            },
            {
              id: 2,
              img_src: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=800',
              earth_date: '2024-10-03',
              camera: { full_name: 'Mast Camera' },
              rover: { name: 'Curiosity' }
            },
            {
              id: 3,
              img_src: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
              earth_date: '2024-10-02',
              camera: { full_name: 'Navigation Camera' },
              rover: { name: 'Perseverance' }
            },
            {
              id: 4,
              img_src: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=800',
              earth_date: '2024-10-01',
              camera: { full_name: 'Rear Hazard Avoidance Camera' },
              rover: { name: 'Curiosity' }
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching Mars photos:', error);
        setPhotos([
          {
            id: 1,
            img_src: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=800',
            earth_date: '2024-10-04',
            camera: { full_name: 'Front Hazard Avoidance Camera' },
            rover: { name: 'Curiosity' }
          },
          {
            id: 2,
            img_src: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=800',
            earth_date: '2024-10-03',
            camera: { full_name: 'Mast Camera' },
            rover: { name: 'Curiosity' }
          },
          {
            id: 3,
            img_src: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
            earth_date: '2024-10-02',
            camera: { full_name: 'Navigation Camera' },
            rover: { name: 'Perseverance' }
          },
          {
            id: 4,
            img_src: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=800',
            earth_date: '2024-10-01',
            camera: { full_name: 'Rear Hazard Avoidance Camera' },
            rover: { name: 'Curiosity' }
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMarsPhotos();
  }, []);

  return (
    <>
      <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 shadow-2xl shadow-red-500/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Latest Mars Images</h2>
            <p className="text-gray-400 text-sm">NASA Mars Rover Photos</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-12 h-12 text-red-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.img_src}
                    alt={`Mars photo from ${photo.camera.full_name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="truncate">{photo.camera.full_name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.earth_date}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 p-2 rounded-lg">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-red-500/30">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedImage.rover.name} Rover</h3>
                  <p className="text-gray-400 text-sm">{selectedImage.camera.full_name}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src={selectedImage.img_src}
                alt={`Mars photo from ${selectedImage.camera.full_name}`}
                className="w-full rounded-lg"
              />
              <div className="mt-4 flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Captured on {selectedImage.earth_date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
