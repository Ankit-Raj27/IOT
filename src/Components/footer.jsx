import {
  Facebook,
  Instagram,
  Twitter,
  //   LocationOn,
  //   LocalPhone,
  //   MailOutlineOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import logo1 from "../Images/logo1.png";

const Container = styled.div`
  display: flex;
  position: absolute;
  background-color: #061c41;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.img`
  height: 80px;
  width: 90px;
  margin-left: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 50%;
`;
const SocialContainer = styled.div`
display: grid;
flex:1;
grid-template-columns: repeat(3, 60px);
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  grid-align: right;
`;
const SearchContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  width: 50%;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
  border: 1px solid white;
  color: white;
  label-align: center;
  background-color: #061c41;
  padding: 10px 30px;
  border-radius: 5px;
  type: text;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 0;
  left:0;
  background-color: orange;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 7px;
  border: none;
`;
const Title1 = styled.h5`
margin-top:30px;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo1}></Logo>
        <Desc>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lore
        </Desc>
      </Left>
      <Center>
        <Title>About Us.</Title>
        <List>
          <ListItem>Company</ListItem>
          <ListItem>Quick links</ListItem>
          <ListItem>Our Partners</ListItem>
          <ListItem>Our Customers</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Contact Us </ListItem>
          <ListItem>Webstore</ListItem>
          <ListItem>Webstore</ListItem>
          <ListItem>Trademarks & Copyrights</ListItem>
          <ListItem>Complaints & Appeal</ListItem>
          <ListItem>Our Team </ListItem>
          <ListItem>Sitemap</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Subscribe to our newsletter</Title>
        {/* <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> KP14,Campus 12,Patia
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +918210226861
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlined style={{ marginRight: "10px" }} />{" "}
          contact@lama.dev
        </ContactItem> */}
        <SearchContainer>
          <Input type="text" placeholder="Your Email"></Input>
          <Button>Subscribe</Button>
        </SearchContainer>
          <Title1>Follow us on.</Title1>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Right>
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
    </Container>
  );
};

export default Footer;
