import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfileForm() {
  return (
    <form className="form grid grid-cols-2 gap-2">
      <label>
        <span>Display Name</span>
        <input type="text" defaultValue={"Kevin"} />
      </label>
      <label>
        <span>Username</span>
        <input type="text" defaultValue={"kevin123"} />
      </label>
      <label>
        <span>Full Name</span>
        <input type="text" defaultValue={"Kevin Gilbert"} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" defaultValue={"Kevin.gilbert@gmail.com"} />
      </label>
      <label>
        <span>Secondary Email</span>
        <input type="email" defaultValue={"kevin12345@gmail.com"} />
      </label>
      <label>
        <span>Phone Number</span>
        <input type="text" defaultValue={"+1-202-555-0118"} />
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

      <div className="flex gap-2">
        <label className="w-1/2">
          <span>States</span>
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

        <label className="w-1/2">
          <span>Zip Code</span>
          <input type="text" defaultValue={"1207"} />
        </label>
      </div>
    </form>
  );
}
