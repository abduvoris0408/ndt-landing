import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Next Developers Team"
        width={1208}
        height={235}
        priority
        className={`${className ?? ""} dark:hidden`}
      />
      <Image
        src="/NDT_NEXT_logo_dark_mode.png"
        alt="Next Developers Team"
        width={1208}
        height={235}
        priority
        className={`${className ?? ""} hidden dark:block`}
      />
    </>
  );
}
