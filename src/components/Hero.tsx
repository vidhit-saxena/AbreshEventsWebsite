import ArrowWIcon from '../assets/Icons/arrow-right.svg'
import Person1Image from '../assets/images/Image-person1.png'
import Person2Image from '../assets/images/Image-person2.png'
import StarImage from '../assets/images/star.png'
import PyramidImage from '../assets/images/pyramid.png'
import Image from 'next/image'

export const Hero = () => {
    return ( 
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[1000px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

            <div className="container relative"> 
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                            Welcome to ABResh Events
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span> Read more</span>
                            <ArrowWIcon/>
                        </span>
                    </a>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="inline-flex relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
                            Digital Products
                            <br/>and Services
                        </h1>
                        <Image 
                            src={PyramidImage} 
                            height="230" 
                            width="230" 
                            alt="" 
                            className="
                                absolute 
                                right-[596px] top-[90px] 
                                hidden sm:inline
                                lg:right-[780px] lg:top-[30px]
                                lg:w-[300px] lg:h-[300px]"
                        />
                        <Image 
                            src={StarImage} 
                            height="250" 
                            width="250" 
                            alt="" 
                            className="
                                absolute 
                                top-[16px] left-[540px] 
                                hidden sm:inline
                                lg:top-[96px] lg:left-[790px]
                                lg:w-[270px] lg:h-[270px]"
                        />
                        {/*<Image src={StarImage} alt=""/>
                        <Image src={PyramidImage} alt=""/>*/}
                    </div>
                </div>
                <div className="flex justify-center">
                <p className="text-center text-xl mt-8 max-w-md">
                    ABResh Technologies, focusing on how their digital solutions (web, app, software, digital marketing) help businesses grow and innovate.
                </p>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="relative px-6 py-3 font-medium text-black bg-white rounded-lg shadow-md hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">
                        <span>Explore</span>
                    </button>
                </div>
            </div>
        </div>
    );
}