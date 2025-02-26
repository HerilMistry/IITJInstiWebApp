
const BlueButton = ({ text, iconColor, isSelected, isDisabled, onClick }) => {
    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`flex items-center gap-x-1 justify-between ${(isSelected) ? 'bg-[#4661D1]' : 'bg-gray-400'} text-white pl-3 pr-1 py-1 -tracking-tighter rounded-3xl cursor-pointer transition duration-100 disabled:bg-[#4662d1a2]`}>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill={iconColor}><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg></span>
        <span>{text} </span>
        <span className='pb-[2px] pr-2 text-sm w-6'>{isSelected ? 'x' : '+'}</span>
      </button>
    );
  };

export default BlueButton