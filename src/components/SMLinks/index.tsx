import { SMContainer, StyledSMLinks } from "./SMLinks.styled.ts";

interface SMLink {
  id: number;
  path: string;
  Icon: SvgIconComponent;
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
