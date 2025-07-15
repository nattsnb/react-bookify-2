import React from "react";
import { Divider } from "@mui/material";
import { SMLinks } from "../../SMLinks/index.jsx";
import {
  StyledEntryContainer,
  StyledIconContainer,
  StyledContactDetailsList,
  StyledContactDetailsTextContainer,
  StyledContactInfoTypogrphy,
  StyledSMLinksContainer,
} from "./ContactInfo.styled.js";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";

interface ContactInfoProps {
  venue: VenueDto;
  contactsRef?: React.RefObject<HTMLDivElement>;
}

export function ContactInfo({ venue, contactsRef }: ContactInfoProps) {
  const contactDetailsToList = [
    {
      id: 0,
      Icon: PhoneIcon,
      string: venue.owner.phoneNumber,
    },
    {
      id: 1,
      Icon: EmailIcon,
      string: venue.owner.email,
    },
  ];

  const socialMediaLinks = [
    { id: 0, path: venue.facebookUrl || "", Icon: FacebookIcon },
    { id: 1, path: venue.instagramUrl || "", Icon: InstagramIcon },
    { id: 2, path: venue.twitterUrl || "", Icon: TwitterIcon },
    { id: 3, path: venue.websiteUrl || "", Icon: LanguageIcon },
  ];

  return (
    <div ref={contactsRef}>
      <StyledContactInfoTypogrphy>
        Contact this venue
      </StyledContactInfoTypogrphy>
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
      <StyledContactInfoTypogrphy>
        Check out on social media
      </StyledContactInfoTypogrphy>
      <Divider variant="dark" />
      <StyledSMLinksContainer>
        <SMLinks links={socialMediaLinks} />
      </StyledSMLinksContainer>
    </div>
  );
}
