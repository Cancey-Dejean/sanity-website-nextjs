import Image from "next/image";
import { Menu } from "@/types";

export default function HeaderContent({
  logoImage,
  logoAlt,
  menu,
}: {
  logoImage: string;
  logoAlt?: string;
  menu: [];
}) {
  return (
    <header>
      <Image
        src={logoImage || "https://dummyimage.com/28x28.png/dddddd/ffffff"}
        height={28}
        width={28}
        alt={logoAlt || "Logo Alt text"}
      />

      <div>
        {menu.map(({ label, _type, menuList }: Menu) => (
          <div key={label}>
            {_type === "subMenuBase" && (
              <>
                <p>{label}</p>
                <p>{_type}</p>
              </>
            )}

            {_type === "subMenuHighlight" && (
              <>
                <p>{label}</p>
                <p>{_type}</p>
              </>
            )}

            {_type === "subMenuDocs" && (
              <>
                <p>{label}</p>
                <p>{_type}</p>
              </>
            )}

            {_type === "subMenuResources" && (
              <>
                <p>{label}</p>
                <p>{_type}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
