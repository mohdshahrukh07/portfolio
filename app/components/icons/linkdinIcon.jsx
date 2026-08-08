import Image from "next/image"
import linkdin from "@/public/assets/linkdin.svg"

export default function EducationIcon() {
  return (
    <Image
      src={linkdin}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}