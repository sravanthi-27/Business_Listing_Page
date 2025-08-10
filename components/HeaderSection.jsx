import React from 'react';
import imageToDisplay from '../assets/1a42454ed0b5f558b2ab7f2478aefbb4d03a89c7.jpg';
import logoDots from '../assets/Group 1000001933.svg';

const HeaderSection = () => {
  return (
    <>
      {/* Desktop Version - Main header with studio information */}
      <div className="hidden md:block relative bg-white max-w-[1280px] h-[530px] mt-8 overflow-visible pt-8 ml-32">
        <div className="absolute top-0 left-0 w-[432px] h-[432px] rounded-md border border-[#888] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 77.4%, rgba(0, 0, 0, 0.5) 100%), url(${imageToDisplay})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src={logoDots} alt="Logo Dots" className="w-[61.4px] h-[14px] absolute bottom-[23px] left-1/2 -translate-x-1/2 object-contain" />
        </div>

        <div className="absolute top-0 left-0 pl-[552px] pr-6 h-full flex flex-col justify-start w-full">
          <h1 className="text-[#2A2929] font-inter uppercase font-extrabold text-5xl leading-[67.2px] mb-6 text-left max-w-[810px]">
            <span className="whitespace-nowrap">Beeyan | Classical Hatha</span><br />Yoga Center
          </h1>

          <p className="text-[#616161] font-montserrat text-base font-semibold underline underline-offset-2 mb-4 max-w-[700px] text-left">
            Fitness &amp; Body Movement / Yoga
          </p>

          <div className="flex items-center gap-2 mb-8 max-w-[700px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none">
              <path d="M17.4993 16.7708C16.5324 16.7708 15.6051 16.3867 14.9214 15.703C14.2376 15.0192 13.8535 14.0919 13.8535 13.125C13.8535 12.158 14.2376 11.2307 14.9214 10.547C15.6051 9.86324 16.5324 9.47913 17.4993 9.47913C18.4663 9.47913 19.3936 9.86324 20.0773 10.547C20.7611 11.2307 21.1452 12.158 21.1452 13.125C21.1452 13.6037 21.0509 14.0778 20.8677 14.5202C20.6844 14.9625 20.4159 15.3644 20.0773 15.703C19.7388 16.0415 19.3369 16.3101 18.8945 16.4933C18.4522 16.6765 17.9781 16.7708 17.4993 16.7708ZM17.4993 2.91663C14.7919 2.91663 12.1954 3.99214 10.281 5.90658C8.36653 7.82101 7.29102 10.4175 7.29102 13.125C7.29102 20.7812 17.4993 32.0833 17.4993 32.0833C17.4993 32.0833 27.7077 20.7812 27.7077 13.125C27.7077 10.4175 26.6322 7.82101 24.7177 5.90658C22.8033 3.99214 20.2068 2.91663 17.4993 2.91663Z" fill="#D4AF37"/>
            </svg>
            <p className="text-[#464646] font-montserrat text-xl font-medium leading-[110%] max-w-[600px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition w-max">
            Contact
          </button>
        </div>

        <div className="absolute top-[470px] left-0 w-full">
          <h2 className="text-black font-inter font-semibold text-xl mb-2">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat font-medium text-lg leading-[140%] mb-4">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-full h-px bg-[#A2A2A2]"></div>
        </div>
      </div>

      {/* Mobile Version - Compact layout for smaller screens */}
      <div className="block md:hidden bg-white">
        <div className="relative w-full h-[420px] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 77.4%, rgba(0,0,0,0.5) 100%), url(${imageToDisplay})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img src={logoDots} alt="Logo Dots" className="w-[61.4px] h-[14px] absolute bottom-[23px] left-1/2 -translate-x-1/2 object-contain" />
        </div>

        <div className="px-4">
          <h1 className="text-[#2A2929] font-inter uppercase font-extrabold text-2xl mt-4 mb-2 leading-snug">
            Beeyan | Classical Hatha YOGA<br />Center
          </h1>
          <p className="text-[#616161] font-montserrat text-sm font-semibold underline underline-offset-2 mb-3">
            Fitness &amp; Body Movement / Yoga
          </p>
          <div className="flex items-start gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path d="M12 11.5c-.86 0-1.687-.34-2.293-.947A3.236 3.236 0 0 1 8.76 8.26a3.236 3.236 0 0 1 .947-2.293A3.236 3.236 0 0 1 12 5.02c.86 0 1.687.34 2.293.947A3.236 3.236 0 0 1 15.24 8.26c0 .43-.085.855-.268 1.246a3.27 3.27 0 0 1-.739 1.046A3.27 3.27 0 0 1 12 11.5Zm0-8.75c-2.12 0-4.153.843-5.657 2.343C4.843 6.597 4 8.63 4 10.75 4 16.75 12 25 12 25s8-8.25 8-14.25c0-2.12-.843-4.153-2.343-5.657A7.982 7.982 0 0 0 12 2.75Z" fill="#D4AF37"/>
            </svg>
            <p className="text-[#464646] font-montserrat text-base">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md font-bold mb-6">
            Contact
          </button>
          <h2 className="text-black font-inter font-semibold text-lg mb-1">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat text-sm mb-6">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;