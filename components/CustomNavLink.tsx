import { RefObject } from "react";

import { Navbar, NavLink, NavLinkProps } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type Props = Omit<NavLinkProps, "onClick" | "sx"> & {
  ref: RefObject<HTMLHeadingElement>;
  setOpened: (v: boolean) => void;
};

const CustomNavLink = ({ ref, setOpened, ...rest }: Props) => {
  const isHamburgerShowing = useMediaQuery("(max-width: 992px)");

  return (
    <Navbar.Section>
      <NavLink
        {...rest}
        sx={(theme) => ({
          ":hover": { backgroundColor: theme.colors.gray[3] },
        })}
        onClick={() => {
          ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          if (isHamburgerShowing) {
            setOpened(false);
          }
        }}
      />
    </Navbar.Section>
  );
};

export default CustomNavLink;
