import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
  TextField,
  Grid,
} from "@mui/material";
import {
  X as XIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import AppButton from "./AppButton";

const FooterWrapper = styled(Box)({
  backgroundColor: "#fff",
});

const NewsletterSection = styled(Box)({
  padding: "60px 40px",
  textAlign: "center",
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#fff",
  "@media (max-width: 768px)": {
    padding: "40px 20px",
  },
  "@media (max-width: 480px)": {
    padding: "30px 16px",
  },
});

const NewsletterHeading = styled(Typography)({
  fontSize: "28px",
  fontWeight: 700,
  marginBottom: "24px",
  color: "#000",
  "@media (max-width: 768px)": {
    fontSize: "24px",
    marginBottom: "18px",
  },
  "@media (max-width: 480px)": {
    fontSize: "20px",
    marginBottom: "14px",
  },
});

const NewsletterForm = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "500px",
  margin: "0 auto",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "10px",
    maxWidth: "100%",
  },
});

const EmailInput = styled(TextField)({
  flex: "1 1 auto",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#ddd",
    },
  },
});

const FooterLinksSection = styled(Box)({
  padding: "60px 40px",
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#fff",
  "@media (max-width: 768px)": {
    padding: "40px 20px",
  },
  "@media (max-width: 480px)": {
    padding: "30px 16px",
  },
});

const FooterLinksGrid = styled(Grid)({
  marginBottom: "40px",
  justifyContent: "space-evenly",
});

const FooterColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const FooterColumnTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  color: "#000",
  marginBottom: "12px",
  "@media (max-width: 768px)": {
    fontSize: "18px",
    marginBottom: "10px",
  },
  "@media (max-width: 480px)": {
    fontSize: "16px",
    marginBottom: "8px",
  },
});

const FooterLink = styled(Typography)({
  fontSize: "16px",
  color: "#0066cc",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    textDecoration: "underline",
  },
  "@media (max-width: 768px)": {
    fontSize: "14px",
  },
  "@media (max-width: 480px)": {
    fontSize: "13px",
  },
});

const DemoSection = styled(Box)({
  paddingTop: "60px",
  textAlign: "center",
  backgroundColor: "#fff",
  "@media (max-width: 768px)": {
    paddingTop: "40px",
  },
  "@media (max-width: 480px)": {
    paddingTop: "30px",
  },
});

const DemoHeading = styled(Typography)({
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "24px",
  color: "#000",
  "@media (max-width: 768px)": {
    fontSize: "20px",
    marginBottom: "18px",
  },
  "@media (max-width: 480px)": {
    fontSize: "18px",
    marginBottom: "14px",
  },
});

const BottomFooter = styled(Box)({
  padding: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  "@media (max-width: 768px)": {
    padding: "30px",
    flexDirection: "column",
    gap: "20px",
  },
  "@media (max-width: 480px)": {
    padding: "20px 16px",
    gap: "15px",
  },
});

const SocialIconsBox = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  "& svg": {
    width: "24px",
    height: "24px",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#62d84e",
    },
  },
  "@media (max-width: 768px)": {
    gap: "12px",
    "& svg": {
      width: "20px",
      height: "20px",
    },
  },
  "@media (max-width: 480px)": {
    gap: "10px",
    "& svg": {
      width: "18px",
      height: "18px",
    },
  },
});

const CopyrightText = styled(Typography)({
  fontSize: "12px",
  color: "#333",
  "@media (max-width: 480px)": {
    fontSize: "11px",
    textAlign: "center",
  },
});

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Newsletter Section */}
      <NewsletterSection>
        <Container maxWidth="lg">
          <NewsletterHeading>
            Get the latest ServiceNow updates
          </NewsletterHeading>
          <NewsletterForm>
            <EmailInput
              placeholder="Email"
              variant="outlined"
              size="small"
              type="email"
            />
            <AppButton variant="contained" withAnimation={false}>
              Subscribe
            </AppButton>
          </NewsletterForm>
        </Container>
      </NewsletterSection>

      {/* Footer Links Section */}
      <FooterLinksSection>
        <Container maxWidth="xl">
          <FooterLinksGrid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <FooterColumn>
                <FooterColumnTitle>Company</FooterColumnTitle>
                <FooterLink>About</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Locations</FooterLink>
                <FooterLink>Partners</FooterLink>
                <FooterLink>Suppliers</FooterLink>
                <FooterLink>Investors</FooterLink>
                <FooterLink>Code of ethics</FooterLink>
                <FooterLink>Newsroom</FooterLink>
                <FooterLink>Blog</FooterLink>
                <FooterLink>
                  Workflow magazine: Insights and research
                </FooterLink>
                <FooterLink>Artificial intelligence</FooterLink>
              </FooterColumn>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterColumn>
                <FooterColumnTitle>Services and Support</FooterColumnTitle>
                <FooterLink>Services</FooterLink>
                <FooterLink>ServiceNow Support portal</FooterLink>
              </FooterColumn>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterColumn>
                <FooterColumnTitle>Resources</FooterColumnTitle>
                <FooterLink>Customer stories</FooterLink>
                <FooterLink>ServiceNow AI Research</FooterLink>
                <FooterLink>Now on Now</FooterLink>
                <FooterLink>Training and certification</FooterLink>
                <FooterLink>User community</FooterLink>
                <FooterLink>Developer portal</FooterLink>
                <FooterLink>Product documentation</FooterLink>
                <FooterLink>Product accessibility</FooterLink>
                <FooterLink>Resource library</FooterLink>
                <FooterLink>What is GenAI</FooterLink>
              </FooterColumn>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterColumn>
                <FooterColumnTitle>My Account</FooterColumnTitle>
                <FooterLink>Sign in</FooterLink>
                <FooterLink>Register</FooterLink>
              </FooterColumn>
            </Grid>
          </FooterLinksGrid>
        </Container>
      </FooterLinksSection>

      {/* Demo Section */}
      <DemoSection>
        <Container maxWidth="lg">
          <DemoHeading>Request info or schedule a demo</DemoHeading>
          <AppButton variant="outlined" withAnimation={false}>
            Contact Us
          </AppButton>
        </Container>
      </DemoSection>

      {/* Bottom Footer */}
      <BottomFooter>
        <Box>
          <Typography variant="body2" sx={{ color: "#000", fontWeight: 600 }}>
            ServiceNow® The world works with ServiceNow™
          </Typography>
        </Box>
        <SocialIconsBox>
          <XIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </SocialIconsBox>
        <CopyrightText>© 2025 ServiceNow, All rights reserved.</CopyrightText>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;
