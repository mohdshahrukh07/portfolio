import Image from "next/image"
import bagIcon1 from "@/public/assets/bag1.svg"
import bagIcon2 from "@/public/assets/bag2.svg"
export default function EducationIcon({ hover }) {
  return hover ? (
    <Image
      src={bagIcon2}
      alt="Education Icon"
      width={50}
      height={50}
    />
  ) : (
    <Image
      src={bagIcon1}
      alt="Education Icon"
      width={50}
      height={50}
    />
  );
}