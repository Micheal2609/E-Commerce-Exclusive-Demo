  
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Hàm convert slug → dạng Title Case
  const format = (str: string) =>
    str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <nav className="flex items-center gap-2 text-sm my-5">
      {/* HOME */}
      <Link href="/homepage" className="text-gray-500 hover:text-black">
        Homepage
      </Link>

      {segments.length > 0 && <span className="text-gray-400">/</span>}

      {/* CÁC SEGMENT TIẾP THEO */}
      {segments.map((seg, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            {!isLast ? (
              <Link href={href} className="text-gray-500 hover:text-black">
                {format(seg)}
              </Link>
            ) : (
              <span className="font-medium text-black">
                {format(seg)}
              </span>
            )}

            {!isLast && (
              <span className="text-gray-400">/</span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
export default Breadcrumb;