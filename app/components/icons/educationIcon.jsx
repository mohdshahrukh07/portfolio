import Image from "next/image"
import educationIcon1 from "@/public/assets/educationicon2.svg"
import educationIcon2 from "@/public/assets/educationicon1.svg"
export default function EducationIcon({ hover }) {
  return hover ? (
    <Image
      src={educationIcon1}
      alt="Education Icon"
      width={50}
      height={50}
    />
  ) : (
    <Image
      src={educationIcon2}
      alt="Education Icon"
      width={50}
      height={50}
    />
  );
}