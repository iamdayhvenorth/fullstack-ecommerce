import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddressForm() {
  return (
    <form className="flex flex-col gap-2 form">
      <div className="flex gap-2">
        <label>
          <span>First Name</span>
          <input type="text" defaultValue={"Kevin"} />
        </label>

        <label>
          <span>Last Name</span>
          <input type="text" defaultValue={"Gilbert"} />
        </label>
      </div>

      <label>
        <span>
          Company Name <span>(Optional)</span>
        </span>
        <input type="text" />
      </label>

      <label>
        <span>Address</span>
        <input
          type="text"
          defaultValue={"Road No. 13/x, House no. 1320/C, Flat No. 5D"}
        />
      </label>
      <label>
        <span>Country/Region</span>
        <Select>
          <SelectTrigger className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2">
            <SelectValue placeholder="Bangladesh" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
            <SelectItem value="Nigeria">Nigeria</SelectItem>
            <SelectItem value="United State">United State</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <label>
        <span>State</span>
        <Select>
          <SelectTrigger className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2">
            <SelectValue placeholder="Bangladesh" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
            <SelectItem value="Nigeria">Nigeria</SelectItem>
            <SelectItem value="United State">United State</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <div className="flex gap-2">
        <label className="flex-1">
          <span>City</span>
          <Select>
            <SelectTrigger className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2">
              <SelectValue placeholder="Dhaka" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dhaka">Dhaka</SelectItem>
              <SelectItem value="Lagos">Lagos</SelectItem>
              <SelectItem value="California">California</SelectItem>
            </SelectContent>
          </Select>
        </label>

        <label className="w-[40%]">
          <span>Zip Code</span>
          <input type="text" defaultValue={"1207"} />
        </label>
      </div>

      <label>
        <span>Email</span>
        <input type="email" defaultValue={"Kevin.gilbert@gmail.com"} />
      </label>

      <label>
        <span>Phone Number</span>
        <input type="text" defaultValue={"+1-202-555-0118"} />
      </label>
    </form>
  );
}
