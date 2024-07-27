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
                <SubMenuBase
                  key={label}
                  label={label}
                  menuList={menuList}
                  _type={_type}
                />
              </>
            )}

            {_type === "subMenuHighlight" && (
              <>
                <SubMenuHighlight
                  key={label}
                  label={label}
                  menuList={menuList}
                  _type={_type}
                />
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

// Make a component for subMenuBase
const SubMenuBase = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};

const SubMenuHighlight = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};

const SubMenuDoc = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};

const SubMenuResources = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};
