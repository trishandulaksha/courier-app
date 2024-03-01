import React, { useState } from "react";
import Logo from "../Logo";

type NavItem = keyof typeof navBarList;
type SubItem = string;

const navBarList = {
  " Company": {
    AboutUs: "About Us",
    Leaderhip: "Leadership",
    CorparateSocialResponsibilty: "Corporate Social Responsibility",
  },
  "Our Services": {
    ServiceVertical: "Service Vertical",
    IndustrySolution: "Industry Solution",
    ServiceGuide: "Service Guide",
  },
  "    Grow With Us": {
    BecomeaPartner: "Become a Partner",
    BusinessInquiry: "Business Inquiry",
  },
  " Careers": {
    JoinWithUs: "Join With Us",
  },
  "Contact Us": {
    LocateUs: "Locate Us",
    CustomerCare: "Customer Care",
  },
};

function HeaderComponenet() {
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem | null>(null);

  const handleNavItemSelect = (navItem: NavItem) => {
    setSelectedNavItem(navItem === selectedNavItem ? null : navItem);
  };

  return (
    <>
      <div>
        <div>
          <nav className="flex items-center justify-between bg-slate-600 font-madimi-one">
            <div>
              <Logo />
            </div>
            <div>
              <ul className="flex">
                {Object.entries(navBarList).map(([navItem, subItems]) => (
                  <li
                    key={navItem}
                    onClick={() => handleNavItemSelect(navItem as NavItem)}
                  >
                    {navItem}
                    {selectedNavItem === navItem && (
                      <ul>
                        {Object.values(subItems || {}).map(
                          (subItem: SubItem) => (
                            <li key={subItem}>{subItem}</li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderComponenet;
