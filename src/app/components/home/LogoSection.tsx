import imgEzyHouseLogo1 from "figma:asset/f181fc7e8c7aee49a4a283f4a0a6e8a117a8a37b.png";
import imgImage167 from "figma:asset/e3d1b9c47b1c3d034045512ba0df8922bc39bb6e.png";
import imgImage168 from "figma:asset/c28ad6b484cc3209cae6fa9becb18cc358855e31.png";
import imgImage166 from "figma:asset/992451366a5d0e92fdab24705683b4d2c8691205.png";
import imgImage170 from "figma:asset/b76f953817cbd88775688c2bffa2d25cc71bc782.png";
import imgImage185 from "figma:asset/d2169fb65ea01c2dc7f2634ef58b4e02db30d9e1.png";
import imgImage184 from "figma:asset/c8f94bbe370c2e65fe333315ef391f4c950293f6.png";
import imgImage171 from "figma:asset/811065802d482c0d461cb3009f43a2281ee5221f.png";
import { useTheme } from '../ThemeContext';

export function LogoSection() {
  const { isDark } = useTheme();

  const logos = [
    { src: imgEzyHouseLogo1, alt: 'EzyHouse', rounded: true },
    { src: imgImage167, alt: 'EY (Ernst & Young)' },
    { src: imgImage168, alt: 'Microsoft' },
    { src: imgImage166, alt: 'Financial Times' },
  ];

  const logosAfterMask = [
    { src: imgImage185, alt: 'University of Greenwich', wide: true },
    { src: imgImage184, alt: 'Kingston University London' },
    { src: imgImage171, alt: 'Partner Organisation' },
  ];

  return (
    <section className="relative py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className={`text-[11px] uppercase tracking-[3px] font-normal ${isDark ? 'text-[rgba(255,255,255,0.25)]' : 'text-[rgba(7,6,14,0.3)]'}`}>
            Companies &amp; Organisations I&rsquo;ve worked with
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isDark ? 'opacity-30 hover:opacity-60' : 'opacity-40 hover:opacity-70'}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`relative h-7 md:h-8 w-auto object-contain ${logo.rounded ? 'rounded-[3px]' : ''} ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </div>
          ))}

          {/* AdPlus — circular cropped logo */}
          <div
            className={`group relative transition-all duration-500 ${isDark ? 'opacity-30 hover:opacity-60' : 'opacity-40 hover:opacity-70'}`}
          >
            <img
              src={imgImage170}
              alt="AdPlus"
              className={`relative h-7 md:h-8 w-7 md:w-8 object-cover rounded-full ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
            />
          </div>

          {logosAfterMask.map((logo, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isDark ? 'opacity-30 hover:opacity-60' : 'opacity-40 hover:opacity-70'}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`relative ${logo.wide ? 'h-8 md:h-9' : 'h-7 md:h-8'} w-auto object-contain ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </div>
          ))}
        </div>

        <div className={`mt-12 h-px ${isDark ? 'bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent' : 'bg-gradient-to-r from-transparent via-[rgba(7,6,14,0.06)] to-transparent'}`} />
      </div>
    </section>
  );
}