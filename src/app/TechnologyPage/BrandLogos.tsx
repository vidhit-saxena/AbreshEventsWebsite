import Image, { StaticImageData } from 'next/image';
import spotify from '@/assets/images/spotify-logo.png';
import slack from '@/assets/images/slack-logo.png';
import evanto from '@/assets/images/envato-logo.png';
import google from '@/assets/images/google-logo.png';
import netflix from '@/assets/images/netflix-logo.png'

interface Brand {
    name: string;
    src: string | StaticImageData; // Adjusted to allow both static imports and string paths
    alt: string;
}

const BrandLogos: React.FC = () => {
    const brands: Brand[] = [
        { name: 'Spotify', src: spotify, alt: 'Spotify Logo' },
        { name: 'Slack', src: slack, alt: 'Slack Logo' },
        { name: 'Envato', src: evanto, alt: 'Envato Logo' },
        { name: 'Google', src: google, alt: 'Google Logo' },
        { name: 'Netflix', src: netflix, alt: 'Netflix Logo' },
    ];

    return (
        <div className="bg-[#A044FF] py-3">
            <div className="container mx-auto flex flex-wrap items-center justify-evenly gap-2">
                {brands.map((brand, index) => (
                    <div key={index} className="w-24 sm:w-32">
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={128}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandLogos;

// import Image from 'next/image';

// interface Brand {
//     name: string;
//     src: string;
//     alt: string;
// }

// const BrandLogos: React.FC = () => {
//     const brands: Brand[] = [
//         { name: 'Spotify', src: '../assets/images/spotify-logo.png', alt: 'Spotify Logo' },
//         { name: 'Slack', src: '/images/slack-logo.png', alt: 'Slack Logo' },
//         { name: 'Envato', src: '/images/envato-logo.png', alt: 'Envato Logo' },
//         { name: 'Google', src: '/images/google-logo.png', alt: 'Google Logo' },
//         { name: 'Netflix', src: '/images/netflix-logo.png', alt: 'Netflix Logo' },
//     ];

//     return (
//         <div className="bg-purple-500 py-4">
//             <div className="container mx-auto flex flex-wrap items-center justify-center gap-8">
//                 {brands.map((brand, index) => (
//                     <div key={index} className="w-24 sm:w-32">
//                         <Image
//                             src={brand.src}
//                             alt={brand.alt}
//                             width={128}
//                             height={64}
//                             className="object-contain"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BrandLogos;
