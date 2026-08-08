import Image from "next/image"
import phone from "@/public/assets/phone.svg"

export default function EducationIcon() {
  return (
    <Image
      src={phone}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}