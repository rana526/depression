import styled from 'styled-components';
import React from 'react' ;
import { Link } from 'react-router-dom';





const Container = styled.div`
height:60px;
`



const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#017efd ;
  color: #4a4758;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  font-size: 28px ; 
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:space-around;


`
const Advices = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }
`
const Home = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }
`
const About = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }
`
const Contact = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }

`


function Navbar() {




  return (

      
      <Container>
        <Wrapper>

          <Left>
            <Logo >
                Depression Test
            </Logo>
          </Left>

          <Center>

          </Center>

          <Right>

            <Home  to="/">
                Home
            </Home>

            <About to="/about">
                About
            </About>
            
            <Advices to="/advices">
                Advices
            </Advices>

            <Contact to="/test">
            Test
            </Contact>

          </Right>
          
        </Wrapper>
      </Container>

  )
}

export default Navbar ;
