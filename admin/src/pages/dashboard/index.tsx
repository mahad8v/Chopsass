import { InventoryIcon, OrdersIcon } from "../../assets/icons/Icons";
import { Card } from "../../components/app-card/Card";
import { AppHeader } from "../../components/app-header/AppHeader";
import { PageWrapper } from "../../components/app-page-wrapper/PageWrapper";
import AreaBarChart from "./AreaBarChart";
import { TopStats } from "./TopStats";

export const Dashboard = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-4 grid-rows-5 gap-4  ">
        <Card>
          <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
            <div className="">
              <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                <span>$20,231</span>
                <span className="fill-[#888]">
                  <InventoryIcon width={16} height={16} />
                </span>
              </div>
              <div className="text-gray-400 mt-2 ">29% increase in profit</div>
            </div>
            <div className="fill-[#7069E5]">
              <OrdersIcon width={30} height={30} />
            </div>
          </div>
        </Card>

        <Card>
          <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
            <div className="">
              <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                <span>$20,231</span>
                <span className="fill-[#7069E5]">
                  <InventoryIcon width={16} height={16} />
                </span>
              </div>
              <div className="text-gray-400 mt-2 ">29% increase in profit</div>
            </div>
            <div className="fill-[#888]">
              <OrdersIcon width={30} height={30} />
            </div>
          </div>
        </Card>

        <Card>
          <div className=" h-[100px] bg-primary-500 rounded-md p-3 flex justify-between">
            <div className="">
              <div className="text-[24px] font-[650] text-[#888] flex items-center gap-2">
                <span>$20,231</span>
                <span className="fill-[#7069E5]">
                  <InventoryIcon width={16} height={16} />
                </span>
              </div>
              <div className="text-gray-400 mt-2 ">29% increase in profit</div>
            </div>
            <div className="fill-[#7069E5]">
              <OrdersIcon width={30} height={30} />
            </div>
          </div>
        </Card>

        {/* Recent Orders */}
        <div className="row-span-3 bg-white rounded-lg p-2">
          <Card>
            <AppHeader>Recent Expenses</AppHeader>
            {order.map((order) => {
              return (
                <div className="flex justify-between mb-4">
                  <div className="text-gray-400  ">{order.name}</div>
                  {/* <div
                    className={
                      order.status === "completed"
                        ? "text-green-400"
                        : "text-red-500"
                    }>
                    {order.status}
                  </div> */}
                  <div className="text-[#666]">{order.price}</div>
                </div>
              );
            })}
          </Card>
        </div>

        {/* Area Chart */}
        <div className="col-span-3 row-span-2 bg-white">
          <AreaBarChart />
        </div>

        <div className="col-span-4 row-span-2 row-start-4 bg-white">6</div>
      </div>
    </PageWrapper>
  );
};

const order = [
  {
    name: "Bought 50 plates ",
    price: "400",
    status: "completed",
  },
  {
    name: "Pay house Rent",
    price: "300",
    status: "pending",
  },
  {
    name: "Pay eletricity bill",
    price: "700",
    status: "completed",
  },
  {
    name: "Fix 2nd floor light",
    price: "500",
    status: "cancel",
  },
  {
    name: "Bought 3 laptops",
    price: "340",
    status: "completed",
  },
  {
    name: "pay water bill for last month",
    price: "476",
    status: "completed",
  },
  {
    name: "purchase 230 Chicken",
    price: "2400",
    status: "completed",
  },
  {
    name: "Pay taxi driver to collect the plates",
    price: "1200",
    status: "completed",
  },
  {
    name: "fixed the coffee machine ",
    price: "200",
    status: "cancelled",
  },
  {
    name: "fix the female bathroom",
    price: "240",
    status: "completed",
  },
];
