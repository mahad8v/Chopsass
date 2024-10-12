
import { NotificationIcon, SearchIcon } from '../../assets/icons/Icons'

const TopNav = () => {
  return (
    <div className='h-14  flex justify-between  items-center '>
      <div className="h-10  flex items-center gap-2">
        <div className="w-12 h-12 bg-red-300  rounded-full">
            <img  className="w-12 h-12 rounded-full" src="https://photos.peopleimages.com/picture/202211/2553995-natural-hair-studio-and-black-woman-in-beauty-portrait-with-skincare-cosmetics-and-salon-for-youth-wellness-power-and-self-love-promotion.-african-or-afro-model-face-with-healthy-hair-care-growth-fit_400_400.jpg" alt="" srcset="" />
        </div>
        <h1 className='text-md font-semibold text-primary-500'>Good Evening Awa!</h1>
      </div>
      <div className="  flex items-center">
        <div className="flex ">
          <div className="flex gap-4 items-center ">
              <div className="fill-gray-400 bg-gray-200 rounded-full p-2 cursor-pointer">
                <SearchIcon width={25} height={25}/>
              </div>
              <div className="fill-gray-500 cursor-pointer">
                <NotificationIcon width={25} height={25} />
              </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default TopNav