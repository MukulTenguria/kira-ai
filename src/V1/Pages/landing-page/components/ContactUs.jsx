import React from "react";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Handshake as HandshakeIcon,
  Monitor as MonitorIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

const ContactUsWrapper = styled(Box)({
  backgroundColor: "#032d42",
  padding: "80px 40px",
  marginBottom: "40px",
});

const MainContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  "@media (max-width: 1024px)": {
    flexDirection: "column",
    gap: "40px",
    alignItems: "flex-start",
  },
});

const LeftSection = styled(Box)({
  flex: "0 0 40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media (max-width: 1024px)": {
    flex: "1 1 auto",
  },
});

const SectionHeading = styled(Typography)({
  fontSize: "42px",
  fontWeight: 700,
  marginBottom: "20px",
  color: "#fff",
  lineHeight: 1.2,
  "& .highlight": {
    color: "#62d84e",
  },
});

const SectionSubtitle = styled(Typography)({
  fontSize: "16px",
  color: "#fff",
  lineHeight: 1.6,
});

const RightSection = styled(Box)({
  flex: "0 0 60%",
  minWidth: 0,
});

const ItemWrapper = styled(Box)({
  display: "flex",
  gap: "16px",
  alignItems: "flex-start",
  paddingBottom: "20px",
  paddingTop: "20px",
  paddingLeft: "16px",
  paddingRight: "16px",
  marginBottom: "12px",
  borderRadius: "12px",
  borderBottom: "1px solid rgba(98, 216, 78, 0.15)",
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  "&:last-child": {
    borderBottom: "none",
    paddingBottom: "20px",
    marginBottom: 0,
  },
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    "& .icon-circle": {
      borderColor: "#62d84e",
      backgroundColor: "rgba(98, 216, 78, 0.1)",
    },
    "& .arrow-circle": {
      borderColor: "#62d84e",
      backgroundColor: "rgba(98, 216, 78, 0.1)",
    },
  },
});

const IconCircle = styled(Box)({
  width: "60px",
  height: "60px",
  minWidth: "60px",
  borderRadius: "50%",
  border: "2px solid rgba(98, 216, 78, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: "32px",
    color: "#62d84e",
  },
});

const ContentWrapper = styled(Box)({
  flex: 1,
  minWidth: 0,
});

const ItemTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  color: "#fff",
  marginBottom: "8px",
  variant: "h5",
});

const ItemDescription = styled(Typography)({
  fontSize: "15px",
  color: "#fff",
  lineHeight: 1.6,
  variant: "body1",
});

const ArrowCircle = styled(Box)({
  width: "48px",
  height: "48px",
  minWidth: "48px",
  borderRadius: "50%",
  border: "2px solid rgba(98, 216, 78, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: "20px",
    color: "#62d84e",
  },
});

const cardData = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Contact us",
    description:
      "Talk to a ServiceNow expert and see how a single platform can solve your most pressing needs.",
  },
  {
    id: 2,
    icon: PeopleIcon,
    title: "Join the community",
    description:
      "Learn, share, and connect with people doing work that matters on the ServiceNow AI Platform.",
  },
  {
    id: 3,
    icon: HandshakeIcon,
    title: "Find a partner",
    description:
      "Realize even more value with a ServiceNow partner—Resellers, Service Providers, Implementation partners and more.",
  },
  {
    id: 4,
    icon: MonitorIcon,
    title: "Explore demos",
    description:
      "Get hands-on with the ServiceNow AI Platform. Explore demo options for everyone at every skill level.",
  },
];

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <Container
        sx={{
          backgroundColor: "var(--cyan-900)",
          padding: "40px 24px",
          borderRadius: "16px",
        }}
        maxWidth="xl"
      >
        <MainContainer>
          <LeftSection>
            <SectionHeading>
              Let's <span className="highlight">get</span> to work
            </SectionHeading>
            <SectionSubtitle>
              Explore all the ways ServiceNow can put AI to work for your
              people.
            </SectionSubtitle>
          </LeftSection>

          <RightSection>
            {cardData.map((card) => {
              const IconComponent = card.icon;
              return (
                <ItemWrapper key={card.id}>
                  <IconCircle className="icon-circle">
                    <IconComponent />
                  </IconCircle>
                  <ContentWrapper>
                    <ItemTitle>{card.title}</ItemTitle>
                    <ItemDescription>{card.description}</ItemDescription>
                  </ContentWrapper>
                  <ArrowCircle className="arrow-circle">
                    <ArrowForwardIcon />
                  </ArrowCircle>
                </ItemWrapper>
              );
            })}
          </RightSection>
        </MainContainer>
      </Container>
    </ContactUsWrapper>
  );
};

export default ContactUs;
