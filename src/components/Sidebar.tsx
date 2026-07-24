import { X, Settings2, Image as ImageIcon, Type, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BrandingState {
  logo: string;
  title: string;
  subtitle: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBgChange: (style: { background: string }) => void;
  activeFrame: string;
  setActiveFrame: (frame: string) => void;
  activePreset: string;
  setActivePreset: (preset: string) => void;
  branding: BrandingState;
  setBranding: (branding: BrandingState) => void;
}

export default function Sidebar({ 
  isOpen, onClose, onBgChange, activeFrame, setActiveFrame, activePreset, setActivePreset, branding, setBranding 
}: SidebarProps) {
  const [color1, setColor1] = useState("#00856F");
  const [color2, setColor2] = useState("");
  const [isBrandingOpen, setIsBrandingOpen] = useState(false);

  const frames = [
    { id: 'glassmorphic', name: 'Glassmorphic 3D', desc: 'Premium floating glass bezel' },
    { id: 'laptop', name: 'The MacBook Pro', desc: 'Sleek realistic laptop chassis' },
    { id: 'polaroid', name: 'Vintage Polaroid', desc: 'Classic physical photo aesthetic' },
    { id: 'billboard', name: 'Cinematic Billboard', desc: 'Ultra-wide stadium screen' },
    { id: 'hologram', name: 'Floating Hologram', desc: 'Sci-fi semi-transparent display' },
  ];

  const overlayPresets = [
    { id: 'none', name: 'None (Clean)' },
    { id: 'clouds', name: 'Floating Clouds' },
    { id: 'matrix', name: 'Matrix Digital Rain' },
    { id: 'fireflies', name: 'Magical Fireflies' },
    { id: 'snow', name: 'Ambient Snowfall' },
    { id: 'rainbow', name: 'Rainbow Borders' },
  ];

  const standalonePresets = [
    { id: 'vortex', name: 'The Vortex (Opaque)' },
    { id: 'fluid', name: 'Fluid Morph (Opaque)' },
    { id: 'aurora', name: 'Aurora Glass (Opaque)' },
    { id: 'rays', name: 'Animated Rays (Opaque)' },
    { id: 'lines', name: 'Light Lines (Opaque)' },
    { id: 'ocean', name: 'Liquid Ocean (Opaque)' },
    { id: 'grid', name: 'Perspective Grid (Opaque)' }
  ];

  const isStandaloneActive = standalonePresets.some(p => p.id === activePreset);

  // Live update background colors (Only if standalone is NOT active)
  useEffect(() => {
    if (color1 && !isStandaloneActive) {
      // Basic hex validation/formatting
      const c1 = color1.startsWith('#') ? color1 : `#${color1}`;
      const c2 = color2 ? (color2.startsWith('#') ? color2 : `#${color2}`) : null;
      
      if (c2 && c2 !== '#') {
        onBgChange({ background: `linear-gradient(135deg, ${c1}, ${c2})` });
      } else {
        onBgChange({ background: c1 });
      }
    }
  }, [color1, color2, onBgChange, isStandaloneActive]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBranding({ ...branding, logo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-black/90 backdrop-blur-2xl border-r border-white/10 z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <h2 className="text-xl font-bold text-white tracking-wide">Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Global Branding Settings */}
          <div className="mb-8">
            <button
              onClick={() => setIsBrandingOpen(!isBrandingOpen)}
              className="flex items-center justify-between w-full p-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Settings2 size={18} className="text-[#7bf1d6] group-hover:rotate-90 transition-transform duration-500" />
                <span className="font-semibold text-white/90">Global Branding</span>
              </div>
            </button>

            {isBrandingOpen && (
              <div className="mt-3 p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-4">
                {/* Logo Upload */}
                <div>
                  <label className="text-xs font-semibold text-white/60 mb-2 flex items-center gap-2 uppercase tracking-widest">
                    <ImageIcon size={14} /> Logo Upload
                  </label>
                  <label className="flex items-center justify-center w-full h-20 border-2 border-dashed border-white/20 rounded-lg hover:border-[#7bf1d6] hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden">
                    {branding.logo && branding.logo !== '/ogdcl-logo.png' ? (
                      <img src={branding.logo} alt="Custom Logo" className="h-12 object-contain opacity-80" />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-white/40">
                        <Upload size={16} />
                        <span className="text-[10px]">Select Image</span>
                      </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                  </label>
                </div>

                {/* Title */}
                <div>
                  <label className="text-xs font-semibold text-white/60 mb-2 flex items-center gap-2 uppercase tracking-widest">
                    <Type size={14} /> Main Title
                  </label>
                  <input
                    type="text"
                    value={branding.title}
                    onChange={(e) => setBranding({ ...branding, title: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7bf1d6] transition-colors"
                    placeholder="Enter main title..."
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="text-xs font-semibold text-white/60 mb-2 flex items-center gap-2 uppercase tracking-widest">
                    <Type size={14} /> Subtitle
                  </label>
                  <input
                    type="text"
                    value={branding.subtitle}
                    onChange={(e) => setBranding({ ...branding, subtitle: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7bf1d6] transition-colors"
                    placeholder="Enter subtitle..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Frame Gallery */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-[#7bf1d6] uppercase tracking-widest mb-4">Frame Gallery</h3>
            <div className="flex flex-col gap-3">
              {frames.map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => {
                    setActiveFrame(frame.id);
                    onClose();
                  }}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col gap-1 cursor-pointer ${
                    activeFrame === frame.id 
                      ? 'bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                      : 'bg-black/40 border-transparent text-white/70 hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  <span className={`font-semibold ${activeFrame === frame.id ? 'text-white' : 'text-white/90'}`}>
                    {frame.name}
                  </span>
                  <span className="text-xs text-white/50">{frame.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Atmosphere Overlays */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-[#7bf1d6] uppercase tracking-widest mb-4">Atmosphere Overlays</h3>
            <p className="text-[10px] text-white/40 mb-3 -mt-2">Transparent effects that blend with your custom hex color.</p>
            <div className="grid grid-cols-2 gap-2">
              {overlayPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset.id)}
                  className={`py-2.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                    activePreset === preset.id
                      ? 'bg-[#7bf1d6]/20 border-[#7bf1d6] text-[#7bf1d6] shadow-[0_0_10px_rgba(123,241,214,0.2)]'
                      : 'bg-black/40 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Standalone Backgrounds */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-[#f17bbd] uppercase tracking-widest mb-4">Standalone Backgrounds</h3>
            <p className="text-[10px] text-white/40 mb-3 -mt-2">Opaque presets that completely replace your background color.</p>
            <div className="grid grid-cols-2 gap-2">
              {standalonePresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset.id)}
                  className={`py-2.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                    activePreset === preset.id
                      ? 'bg-[#f17bbd]/20 border-[#f17bbd] text-[#f17bbd] shadow-[0_0_10px_rgba(241,123,189,0.2)]'
                      : 'bg-black/40 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Background Controls */}
          <div className={`transition-opacity duration-300 ${isStandaloneActive ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <h3 className="text-xs font-bold text-[#7bf1d6] uppercase tracking-widest mb-4 flex items-center justify-between">
              Custom Background
              {isStandaloneActive && <span className="text-[#f17bbd] text-[10px]">Disabled by Preset</span>}
            </h3>
            <div className="flex flex-col gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  value={color1.startsWith('#') && color1.length === 7 ? color1 : '#00856F'}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                  aria-label="Choose Color 1"
                  disabled={isStandaloneActive}
                />
                <div className="flex-1">
                  <label className="block text-xs text-white/60 mb-1">Color 1 (Hex code)</label>
                  <input 
                    type="text" 
                    placeholder="#00856F" 
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#7bf1d6]"
                    disabled={isStandaloneActive}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  value={color2.startsWith('#') && color2.length === 7 ? color2 : '#000000'}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                  aria-label="Choose Color 2"
                  disabled={isStandaloneActive}
                />
                <div className="flex-1">
                  <label className="block text-xs text-white/60 mb-1">Color 2 (Optional gradient)</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="#000000 (leave empty for solid)" 
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#7bf1d6]"
                      disabled={isStandaloneActive}
                    />
                    {color2 && !isStandaloneActive && (
                      <button 
                        onClick={() => setColor2('')}
                        className="p-1.5 text-white/50 hover:text-white bg-white/5 rounded-md cursor-pointer"
                        title="Clear Gradient"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
