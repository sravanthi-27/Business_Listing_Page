import React, { useState } from "react";
import FilterIcon from "../assets/rivet-icons_filter.svg";
import CategoriesIcon from "../assets/iconamoon_category-light.svg";
import DistanceIcon from "../assets/mdi_map-marker-distance.svg";
import ArrowIcon from "../assets/weui_arrow-filled (1).svg";

function ServiceProviders() {
  const [showCategories, setShowCategories] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState("Distance");
  const [openNested, setOpenNested] = useState(null);

  const categories = [
    // ... (keep your existing categories array exactly as is)
  ];

  const distances = [
    // ... (keep your existing distances array exactly as is)
  ];

  const toggleNestedDropdown = (index) => {
    setOpenNested(openNested === index ? null : index);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setOpenNested(null);
  };

  return (
    <div className="bg-white w-full overflow-visible">
      {/* Desktop Design - Keep exactly as is */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-[50px] px-6 sm:px-6 lg:px-8 pt-[130px] pb-[20px] relative">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold text-black leading-tight">
              SERVICE PROVIDERS{" "}
              <span className="font-normal">
                - Hair Treatments & Salons
              </span>
            </h2>
          </div>

          {/* Filters Section */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Filters Button */}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
              <img src={FilterIcon} alt="Filters" className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Categories Dropdown */}
            <div className="relative" style={{ width: "380px", flexShrink: 0 }}>
              {/* ... (keep all your desktop dropdown code exactly as is) */}
            </div>

            {/* Distance Dropdown */}
            <div className="relative" style={{ width: "200px", flexShrink: 0 }}>
              {/* ... (keep all your desktop dropdown code exactly as is) */}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Mobile Design */}
      <div className="md:hidden px-4 pt-6 pb-4">
        {/* Title Section */}
        <div className="mb-4">
          <h2 className="font-montserrat text-lg font-semibold text-black leading-[22.5px]">
            SERVICE PROVIDERS{" "}
            <span className="font-normal">
              - Hair Treatments & Salons
            </span>
          </h2>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* Filters Button */}
          <button className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-300 bg-white text-[#949494]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 1C5.37935 0.999675 4.77387 1.19186 4.26702 1.55006C3.76016 1.90826 3.37688 2.41484 3.17 3H0V5H3.17C3.3766 5.58553 3.75974 6.09257 4.2666 6.45121C4.77346 6.80985 5.37909 7.00245 6 7.00245C6.62091 7.00245 7.22654 6.80985 7.7334 6.45121C8.24026 6.09257 8.6234 5.58553 8.83 5H16V3H8.83C8.62312 2.41484 8.23984 1.90826 7.73298 1.55006C7.22613 1.19186 6.62065 0.999675 6 1ZM5 4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3C6.26522 3 6.51957 3.10536 6.70711 3.29289C6.89464 3.48043 7 3.73478 7 4C7 4.26522 6.89464 4.51957 6.70711 4.70711C6.51957 4.89464 6.26522 5 6 5C5.73478 5 5.48043 4.89464 5.29289 4.70711C5.10536 4.51957 5 4.26522 5 4ZM10 9C9.37935 8.99967 8.77387 9.19186 8.26702 9.55006C7.76016 9.90826 7.37688 10.4148 7.17 11H0V13H7.17C7.3766 13.5855 7.75974 14.0926 8.2666 14.4512C8.77346 14.8099 9.37909 15.0025 10 15.0025C10.6209 15.0025 11.2265 14.8099 11.7334 14.4512C12.2403 14.0926 12.6234 13.5855 12.83 13H16V11H12.83C12.6231 10.4148 12.2398 9.90826 11.733 9.55006C11.2261 9.19186 10.6207 8.99967 10 9ZM9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11C10.2652 11 10.5196 11.1054 10.7071 11.2929C10.8946 11.4804 11 11.7348 11 12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12Z" fill="#949494"/>
            </svg>
            <span className="font-montserrat text-sm font-medium leading-5">Filters</span>
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <div 
              className="inline-flex px-[30px] py-[9px] items-center gap-1 rounded-[21px] border border-[#BCBCBC] bg-white"
              onClick={() => {
                setShowCategories(!showCategories);
                setShowDistance(false);
                setOpenNested(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.2279 7.23541C14.6892 7.23541 15.8738 6.05081 15.8738 4.58954C15.8738 3.12826 14.6892 1.94366 13.2279 1.94366C11.7666 1.94366 10.582 3.12826 10.582 4.58954C10.582 6.05081 11.7666 7.23541 13.2279 7.23541Z" stroke="#5C5C5C" strokeWidth="1.323" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.40368 16.0555C5.86496 16.0555 7.04955 14.8709 7.04955 13.4096C7.04955 11.9483 5.86496 10.7637 4.40368 10.7637C2.94241 10.7637 1.75781 11.9483 1.75781 13.4096C1.75781 14.8709 2.94241 16.0555 4.40368 16.0555Z" stroke="#5C5C5C" strokeWidth="1.323" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5774 10.7632H15.8691V15.173C15.8691 15.4069 15.7762 15.6313 15.6108 15.7967C15.4454 15.9621 15.2211 16.055 14.9872 16.055H11.4593C11.2254 16.055 11.0011 15.9621 10.8357 15.7967C10.6703 15.6313 10.5774 15.4069 10.5774 15.173V10.7632ZM1.75781 1.94366H7.04955V6.35345C7.04955 6.58736 6.95663 6.81169 6.79123 6.97709C6.62584 7.14249 6.40151 7.23541 6.1676 7.23541H2.63977C2.40586 7.23541 2.18153 7.14249 2.01613 6.97709C1.85073 6.81169 1.75781 6.58736 1.75781 6.35345V1.94366Z" stroke="#5C5C5C" strokeWidth="1.323" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-montserrat text-sm font-normal leading-[17.5px] text-[#606060] overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]">
                Categories
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 23 12" fill="none" style={{ transform: 'rotate(90deg)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8053 9.74265L5.7119 4.64923L6.98503 3.3761L11.4419 7.83296L15.8987 3.3761L17.1719 4.64923L12.0785 9.74265C11.9096 9.91144 11.6806 10.0063 11.4419 10.0063C11.2031 10.0063 10.9742 9.91144 10.8053 9.74265Z" fill="#606060"/>
              </svg>
            </div>

            {/* Categories Dropdown Menu - Mobile */}
            {showCategories && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-h-[300px] overflow-y-auto">
                {categories.map((category, index) => (
                  <React.Fragment key={category.name}>
                    <div
                      className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-md ${
                        openNested === index
                          ? "bg-purple-200"
                          : "hover:bg-purple-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (category.subcategories.length > 0) {
                          toggleNestedDropdown(index);
                        } else {
                          handleCategorySelect(category.name);
                        }
                      }}
                    >
                      <span className="font-montserrat text-sm text-[#202020]">
                        {category.name}
                      </span>
                      {category.subcategories.length > 0 && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="11" 
                          height="12" 
                          viewBox="0 0 23 12" 
                          fill="none"
                          style={{
                            transform: openNested === index ? 'rotate(270deg)' : 'rotate(90deg)',
                          }}
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.8053 9.74265L5.7119 4.64923L6.98503 3.3761L11.4419 7.83296L15.8987 3.3761L17.1719 4.64923L12.0785 9.74265C11.9096 9.91144 11.6806 10.0063 11.4419 10.0063C11.2031 10.0063 10.9742 9.91144 10.8053 9.74265Z" 
                            fill={openNested === index ? "#6D28D9" : "#606060"} />
                        </svg>
                      )}
                    </div>

                    {openNested === index && category.subcategories.length > 0 && (
                      <div className="bg-white pl-4">
                        {category.subcategories.map((subcat) => (
                          <div
                            key={subcat}
                            className="px-4 py-2 cursor-pointer hover:bg-purple-100 rounded-md"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCategorySelect(subcat);
                            }}
                          >
                            <span className="font-montserrat text-sm text-[#606060]">
                              {subcat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Distance Dropdown */}
          <div className="relative">
            <div 
              className="inline-flex px-[17.22px] py-[9px] items-center gap-2 rounded-[21px] border border-[#BCBCBC] bg-white"
              onClick={() => {
                setShowDistance(!showDistance);
                setShowCategories(false);
                setOpenNested(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 16" fill="none">
                <g clipPath="url(#clip0_4001_10791)">
                  <path d="M4.29653 5.0591C3.62369 5.0591 3.07937 4.51478 3.07937 3.84194C3.07937 3.51913 3.20761 3.20954 3.43587 2.98128C3.66413 2.75302 3.97372 2.62478 4.29653 2.62478C4.96937 2.62478 5.51369 3.1691 5.51369 3.84194C5.51369 4.16475 5.38546 4.47434 5.15719 4.7026C4.92893 4.93087 4.61934 5.0591 4.29653 5.0591ZM4.29653 0.439941C2.40653 0.439941 0.894531 1.95194 0.894531 3.84194C0.894531 6.38966 4.29653 10.1621 4.29653 10.1621C4.29653 10.1621 7.69853 6.38966 7.69853 3.84194C7.69853 1.95194 6.18653 0.439941 4.29653 0.439941ZM12.6125 5.0591C12.2897 5.0591 11.9801 4.93087 11.7519 4.7026C11.5236 4.47434 11.3954 4.16475 11.3954 3.84194C11.3954 3.6821 11.4269 3.52383 11.488 3.37615C11.5492 3.22848 11.6388 3.0943 11.7519 2.98128C11.8649 2.86826 11.9991 2.7786 12.1467 2.71743C12.2944 2.65626 12.4527 2.62478 12.6125 2.62478C12.7724 2.62478 12.9306 2.65626 13.0783 2.71743C13.226 2.7786 13.3602 2.86826 13.4732 2.98128C13.5862 3.0943 13.6759 3.22848 13.737 3.37615C13.7982 3.52383 13.8297 3.6821 13.8297 3.84194C13.8297 4.16475 13.7015 4.47434 13.4732 4.7026C13.2449 4.93087 12.9353 5.0591 12.6125 5.0591ZM12.6125 0.439941C10.7225 0.439941 9.21053 1.95194 9.21053 3.84194C9.21053 6.38966 12.6125 10.1621 12.6125 10.1621C12.6125 10.1621 16.0145 6.38966 16.0145 3.84194C16.0145 1.95194 14.5025 0.439941 12.6125 0.439941ZM12.6125 11.0239C11.6524 11.0239 10.7981 11.6287 10.4806 12.5359H6.42845C6.22813 11.9701 5.81168 11.5068 5.27036 11.2475C4.72904 10.9881 4.107 10.954 3.54053 11.1525C3.25898 11.2511 2.99964 11.4043 2.77733 11.6032C2.55501 11.8022 2.37409 12.043 2.2449 12.3119C2.11571 12.5808 2.04079 12.8725 2.02442 13.1704C2.00805 13.4683 2.05055 13.7665 2.14949 14.0479C2.35253 14.6152 2.77179 15.0791 3.31571 15.3384C3.85963 15.5976 4.48402 15.631 5.05253 15.4314C5.69513 15.2046 6.18653 14.6905 6.42845 14.0479H10.4882C10.904 15.2273 12.2043 15.8472 13.3685 15.4314C13.6509 15.3338 13.9113 15.1813 14.1346 14.9827C14.3578 14.7842 14.5397 14.5434 14.6697 14.2744C14.7996 14.0053 14.8751 13.7132 14.8919 13.4149C14.9086 13.1166 14.8662 12.8178 14.7671 12.5359C14.4421 11.6287 13.5802 11.0239 12.6125 11.0239ZM12.6125 14.4259C12.3118 14.4259 12.0233 14.3065 11.8107 14.0938C11.598 13.8811 11.4785 13.5927 11.4785 13.2919C11.4785 12.9912 11.598 12.7028 11.8107 12.4901C12.0233 12.2774 12.3118 12.1579 12.6125 12.1579C12.9133 12.1579 13.2017 12.2774 13.4144 12.4901C13.6271 12.7028 13.7465 12.9912 13.7465 13.2919C13.7465 13.5927 13.6271 13.8811 13.4144 14.0938C13.2017 14.3065 12.9133 14.4259 12.6125 14.4259Z" fill="#5C5C5C"/>
                </g>
                <defs>
                  <clipPath id="clip0_4001_10791">
                    <rect width="15.12" height="15.12" fill="white" transform="translate(0.900391 0.440002)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="font-montserrat text-sm font-normal leading-[17.5px] text-[#606060] overflow-hidden text-ellipsis whitespace-nowrap max-w-[70px]">
                Distance
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 22 12" fill="none" style={{ transform: 'rotate(90deg)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.90129 9.63564L4.95339 4.68774L6.19015 3.45099L10.5197 7.78051L14.8492 3.45099L16.0859 4.68774L11.138 9.63564C10.974 9.79961 10.7516 9.89173 10.5197 9.89173C10.2877 9.89173 10.0653 9.79961 9.90129 9.63564Z" fill="#606060"/> 
              </svg>
            </div>

            {/* Distance Dropdown Menu - Mobile */}
            {showDistance && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-full">
                {distances.map((distance) => (
                  <div
                    key={distance}
                    className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => {
                      setSelectedDistance(distance);
                      setShowDistance(false);
                    }}
                  >
                    <span className="font-montserrat text-sm text-[#606060]">
                      {distance}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;
