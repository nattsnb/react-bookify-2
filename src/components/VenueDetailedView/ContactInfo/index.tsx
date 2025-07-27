import React from "react";
import { Divider } from "@mui/material";
import { SMLinks } from "../../SMLinks";
import {
  StyledEntryContainer,
  StyledIconContainer,
  StyledContactDetailsList,
  StyledContactDetailsTextContainer,
  StyledContactInfoTypography,
  StyledSMLinksContainer,
} from "./ContactInfo.styled.js";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

interface ContactInfoProps {
  contactsRef?: React.RefObject<HTMLDivElement>;
}

export function ContactInfo({ contactsRef }: ContactInfoProps) {
  const { activeVenue } = useActiveVenue();
  if (!activeVenue) {
    return null;
  }

  const contactDetailsToList = [
    {
      id: 0,
      Icon: PhoneIcon,
      string: activeVenue.owner.phoneNumber,
    },
    {
      id: 1,
      Icon: EmailIcon,
      string: activeVenue.owner.email,
    },
  ];

  const socialMediaLinks = [
    { id: 0, path: activeVenue.facebookUrl || "", Icon: FacebookIcon },
    { id: 1, path: activeVenue.instagramUrl || "", Icon: InstagramIcon },
    { id: 2, path: activeVenue.twitterUrl || "", Icon: TwitterIcon },
    { id: 3, path: activeVenue.websiteUrl || "", Icon: LanguageIcon },
  ];

  return (
    <div ref={contactsRef}>
      <StyledContactInfoTypography>
        Contact this venue
      </StyledContactInfoTypography>
      <Divider variant="dark" />
      <StyledContactDetailsList>
        {contactDetailsToList.map(({ id, Icon, string }) => (
          <StyledEntryContainer key={id}>
            <StyledIconContainer>
              <div>
                <Icon />
              </div>
            </StyledIconContainer>
            <StyledContactDetailsTextContainer>
              {string}
            </StyledContactDetailsTextContainer>
          </StyledEntryContainer>
        ))}
      </StyledContactDetailsList>
      <StyledContactInfoTypography>
        Check out on social media
      </StyledContactInfoTypography>
      <Divider variant="dark" />
      <StyledSMLinksContainer>
        <SMLinks links={socialMediaLinks} />
      </StyledSMLinksContainer>
    </div>
  );
}
