import { InventoryIcon, OrdersIcon } from "../../assets/icons/Icons"
import { Card } from "../../components/app-card/Card"
import AreaBarChart from "./AreaBarChart"

export const TopStats = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4  ">
        <Card>
            <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
                <div className="">
                    <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                        <span>$20,231</span>
                        <span className="fill-[#888]">
                            <InventoryIcon width={16} height={16}/>
                        </span>
                    </div>
                    <div className="text-gray-400 mt-2 ">29% increase in profit</div>
                
                </div>
                <div className="fill-[#7069E5]">
                    <OrdersIcon width={30} height={30}/>
                </div>
            </div>
        </Card>
        <Card>
            <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
                <div className="">
                    <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                        <span>$20,231</span>
                        <span className="fill-[#7069E5]">
                            <InventoryIcon width={16} height={16}/>
                        </span>
                    </div>
                    <div className="text-gray-400 mt-2 ">29% increase in profit</div>
                
                </div>
                <div className="fill-[#888]">
                    <OrdersIcon width={30} height={30}/>
                </div>
            </div>
        </Card>
        <Card>
            <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
                <div className="">
                    <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                        <span>$20,231</span>
                        <span className="fill-[#7069E5]">
                            <InventoryIcon width={16} height={16}/>
                        </span>
                    </div>
                    <div className="text-gray-400 mt-2 ">29% increase in profit</div>
                
                </div>
                <div className="fill-[#7069E5]">
                    <OrdersIcon width={30} height={30}/>
                </div>
            </div>
        </Card>
        <div className="row-span-3 bg-white">4</div>
        <div className="col-span-3 row-span-2 bg-white"><AreaBarChart/></div>
        <div className="col-span-2 row-span-2 row-start-4 bg-white">6</div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-white">7</div>
    </div>
  )
}
