import Image from "next/image"
import github from "@/public/assets/github.svg"

export default function EducationIcon() {
  return (
    <Image
      src={github}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}