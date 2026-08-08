import Image from "next/image"
import mail from "@/public/assets/mail.svg"

export default function EducationIcon() {
  return (
    <Image
      src={mail}
      alt="Education Icon"
      width={25}
      height={25}
    />
  ) ;
}