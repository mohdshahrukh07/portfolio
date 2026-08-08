import Image from "next/image"
import location from "@/public/assets/location.svg"

export default function EducationIcon() {
  return (
    <Image
      src={location}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}