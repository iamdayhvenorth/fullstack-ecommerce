import Link from "next/link";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function Order() {
  return (
    <section className="w-full">
      <div className="border rounded-sm">
        <h2 className="py-3 px-4 font-medium text-dark text-sm uppercase">
          Order History
        </h2>
        {/* order table */}
        <table className="w-full">
          <thead className="border-y bg-[#e4e7e9] text-sm text-dark font-medium">
            <tr className="uppercase">
              <th>Order Id</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-dark text-sm">
              <td className="font-medium">#9754765</td>
              <td className="text-[#fa8232] uppercase font-semibold">
                In Progress
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5products)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754765`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754577</td>
              <td className="text-[#ee5858] uppercase font-semibold">
                Cancelled
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754577`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754655</td>
              <td className="text-[#2db224] uppercase font-semibold">
                Completed
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754655`}>View Details</Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex items-center justify-center p-4 gap-1">
          <span className="w-10 h-10 rounded-full border border-[#fa8232] text-[#fa8232] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#fa8232] transition-colors duration-150 ease-linear">
            <IoMdArrowBack />
          </span>
          {[...Array(3)].map((_, idx) => (
            <span
              key={idx}
              className="w-10 h-10 rounded-full border  text-dark flex items-center justify-center cursor-pointer hover:text-white hover:border-[#fa8232] hover:bg-[#fa8232] transition-colors duration-150 ease-linear text-sm"
            >
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </span>
          ))}

          <span className="w-10 h-10 rounded-full border border-[#fa8232] text-[#fa8232] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#fa8232] transition-colors duration-150 ease-linear">
            <IoMdArrowForward />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Order;
