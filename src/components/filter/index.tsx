import { useState } from 'react';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow.svg';
import { FilterOptionsType } from '../../utils/types';

type FilterProps = {
  options: FilterOptionsType[];
  onSelect: (selectedOptions: { [key: string]: string[] }) => void;
};

const Filter = ({ options, onSelect }: FilterProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const toggleOptions = (filter: string) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  const handleCheckboxChange = (filter: string, option: string) => {
    setSelectedOptions((prevState) => {
      const currentOptions = prevState[filter] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];
      const newSelectedOptions = { ...prevState, [filter]: updatedOptions };
      onSelect(newSelectedOptions);
      return newSelectedOptions;
    });
  };
  return (
    <div className=''>
      <div
        onClick={() => setShowDropDown(!showDropDown)}
        className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[100px] cursor-pointer relative '
      >
        <p>Filter</p>
        <FilterIcon />
      </div>

      {showDropDown && (
        <div className='bg-white w-[250px] absolute mt-2 shadow-md rounded-md p-3 z-[999]'>
          <div className='text-sm flex justify-between gap-3'>
            <p>Filters</p>
            <p className='text-red-500 cursor-pointer'>Clear all</p>
          </div>
          <div className='bg-[#FAFAFA] flex gap-2 p-3 w-full my-2 rounded-md '>
            <SearchIcon />
            <input
              type='text'
              placeholder='Search '
              className='bg-[#FAFAFA] outline-none text-sm font-light w-full'
            />
          </div>
          {options.map((item, index) => (
            <div key={index} className='text-sm'>
              <div
                onClick={() => toggleOptions(item.filter)}
                className='flex gap-3 justify-between items-center cursor-pointer p-3'
              >
                <p>{item.filter}</p>
                <DownArrowIcon />
              </div>
              {expandedFilter === item.filter &&
                item.options.map((itm, idx) => (
                  <div key={idx} className='bg-[#fafafa] p-2'>
                    <input
                      type='checkbox'
                      checked={
                        selectedOptions[item.filter]?.includes(itm) || false
                      }
                      onChange={() => handleCheckboxChange(item.filter, itm)}
                      className='accent-black'
                    />
                    <label className='ml-3 text-[#808080]'>{itm}</label>
                  </div>
                ))}
            </div>
          ))}
          <button className='w-full h-[40px] bg-black rounded-lg p-2 text-white text-sm my-4'>
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
