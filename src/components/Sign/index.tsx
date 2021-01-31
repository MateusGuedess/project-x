import React, { useState } from 'react';
import { LoginForm } from './loginForm';
import { SignUpForm } from './signUpForm';

import { Container, BoxContainer, BackDrop, TopContainer, HeaderContainer, HeaderText, SmallText, InnerContainer } from './styles';

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)"
  },
  collapse: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    trasnform: "rotate(60deg)"
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30
}

function Sign() {

  const [isExpanded, setExpanded] = useState(false)
  const [whatForm, setWhatForm] = useState('login')

  const playExpandedAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1500)
  }

  return (
    <Container>
        <BoxContainer>
            <TopContainer>
                <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapse"} variants={backdropVariants} transition={expandingTransition}/>
                <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue</SmallText>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
              {whatForm === 'login' ? <LoginForm setWhatForm={setWhatForm} playExpandedAnimation={playExpandedAnimation} /> : ''}
              {whatForm === 'signup' ? <SignUpForm setWhatForm={setWhatForm} playExpandedAnimation={playExpandedAnimation}/> : ''}
            </InnerContainer>
        </BoxContainer>
    </Container>)
  ;
}

export default Sign; 