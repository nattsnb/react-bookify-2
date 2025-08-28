import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { SMContainer, StyledSMLinks } from "./SMLinks.styled.ts";

interface SMLink {
  id: number;
  path: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
}

interface SMLinksProps {
  links: SMLink[];
}

export function SMLinks({ links }: SMLinksProps) {
  return (
    <SMContainer>
      {links.map(({ id, path, Icon }) => (
        <StyledSMLinks href={`https://${path}`} key={id}>
          <Icon />
        </StyledSMLinks>
      ))}
    </SMContainer>
  );
}
