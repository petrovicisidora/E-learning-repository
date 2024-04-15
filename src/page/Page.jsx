//Main Page and component that contains all other components
//It loads data from Redux store to display e-learning courses information

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  MainContainer,
  StyledFlexContainer,
  StyledPageContact,
  StyledPageContainer,
  StyledPageContent,
  StyledPageContentHeader,
  StyledPageSidebarContainer,
} from "./Page.style";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/Title/Title";
import Contact from "../components/Contact/Contact";
import Content from "../components/ContentArea/Content";
import ContentDetail from "../components/ContentArea/ContentDetail";
import fraudPrevention from "../assets/fraud_prevention.png";
import itSecurity from "../assets/it_security.png";
import dataProtection from "../assets/data_protection.png";
import wphg from "../assets/wphg.png";
import { loadData } from "../actions/actions";
import { mockData } from "../data/mockData";

function Page() {
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadData(mockData));
  }, [dispatch]);

  return (
    <MainContainer>
      <Header />
      <StyledPageContainer>
        <Breadcrumb />
        <StyledFlexContainer>
          <div>
            <StyledPageSidebarContainer data-testid="sidebar-container">
              <Title title={"Navigation"} />
              <Sidebar
                title={"Money Laundering and Fraud Prevention"}
                image={fraudPrevention}
              />
              <Sidebar
                title={"It security and information security"}
                image={itSecurity}
              />
              <Sidebar title={"Data Protection"} image={dataProtection} />
              <Sidebar title={"WpHG-Compliance"} image={wphg} />
            </StyledPageSidebarContainer>
            <StyledPageContact>
              <Title title={"Contact"} />
              <Contact
                title={"Technical support"}
                name={"John Doe"}
                email={"it@example.com"}
              />
              <Contact
                title={"Content-didactic topic"}
                name={"Jane Roe"}
                email={"content@example.com"}
              />
            </StyledPageContact>
          </div>
          <StyledPageContent>
            <StyledPageContentHeader>
              e-Learning Courses
            </StyledPageContentHeader>
            {coursesData.map((group, index) => (
              <Content key={index} image={group.image}>
                {group.courses.map((course, idx) => (
                  <ContentDetail
                    key={idx}
                    title={course.title}
                    time={course.duration}
                    text={course.text}
                    progress={course.progress}
                  />
                ))}
              </Content>
            ))}
          </StyledPageContent>
        </StyledFlexContainer>
      </StyledPageContainer>
    </MainContainer>
  );
}

export default Page;
