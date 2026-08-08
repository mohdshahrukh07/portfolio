import Image from "next/image"
import insta from "@/public/assets/insta.svg"

export default function EducationIcon() {
  return (
    <Image
      src={insta}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}