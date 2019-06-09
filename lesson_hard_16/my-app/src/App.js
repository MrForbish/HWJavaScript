import React, { Component } from 'react';
import logo from './logo.png';
import bg from './img/bg.png';
import './App.css';
import styled from 'styled-components';

const Body = styled.div `
	width: 100%;
	position: relative;
`

const Wrapper = styled.div `
width: 940px;
height: 650px;
position: relative;
margin: 0 auto;
`

const Header = styled.div `
margin-top: 30px;
position: relative;
`
const LogoDiv = styled.div `
position: absolute;
top: 0px;
left: 0px;
`

const AppLogo = styled.img `
padding-right: 15px;
padding-left:

`
const HeadText = styled.p `
margin-top: -45px;
margin-left:45px;
width: 90px;
height: 14px;
color: #292929;
font-size: 20px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
letter-spacing: 2px;
`
const HeaderTextMin = styled.p `
padding-top: 8px;
margin-left:45px;
height: 8px;
color: #969696;
font-family: "GothaProBla";
font-size: 11px;
font-weight: 400;
line-height: 22px;
`

const PhoneDiv = styled.div `
position: absolute;
top: 0;
right: 210px;
width: 190px;
height: 50px;
color: #000;
`

const PhoneNumb = styled.p `
padding-bottom: 10px;
text-align: right;
height: 13px;
color: #292929;
font-family: "GothaProBla";
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
`
const FreeCall = styled.p `
text-align: right;
height: 8px;
color: #969696;
font-family: "GothaProBla";
font-size: 11px;
font-weight: 400;
line-height: 22px;
`
const Btn = styled.button `
position: absolute;
top: 0;
right: 0;
margin-left: 60px;
width: 160px;
height: 40px;
border: 2px solid #292929;
background-color: #fff;
font-family: "GothaProBla";
font-size: 12px;
font-weight: 500;
`
const Menu = styled.div `
	position: absolute;
	width: 100%;
	background-color: #ffcc00;
	top: 95px;
	z-index: 1;


`
const UlMenu = styled.ul `
	list-style: none;

`
const LiMenu = styled.li `
	display: inline-block;
`
const Link = styled.a `
	text-decoration: none;
	padding: 25px 45px;
	color: #000;
	font-family: "GothaProBla";
	font-size: 14px;
	font-weight: 500;
	display: inline-block;
`

const Main = styled.div `
	position: absolute;
	top: 130px;
`

const MainImg = styled.img `
	width: 100%;
`

const Description = styled.div `
	position: absolute;
	top: 95px;
	left: 204px;
	z-index: 100;
`

const HeadH1 = styled.h1 `
	color: #ffffff;
	font-family: "GothaProBla";
	font-size: 36px;
	font-weight: 700;
	text-transform: uppercase;
`

const Parag = styled.p `
	color: #ffffff;
	font-family: "GothaProMed";
	font-size: 14px;
	font-weight: 100;
	line-height: 22px;
	margin-top: 30px;
`

const Span = styled.span `
display: block;
`
const BtnTwo = styled.button `

	width: 200px;
	height: 50px;
	margin-top: 60px;
	border: none;
	font-family: "GothaProBla";
	font-size: 11px;
	font-weight: 700;
	line-height: 22px;
	background-color: #ffd200;
`

const OrCatalog = styled.p `
	position: absolute;
	top: 210px;
	left: 235px;
	color: #ffffff;
	font-family: "GothaProMed";
	font-size: 14px;
	font-weight: 100;
	line-height: 22px;
`
const LinkTwo = styled.a `
	color: #ffffff;
	font-weight: 500;

`
class App extends React.Component {
		render() {
				return (
					<Body>
						<Wrapper>
							<Header>
								<LogoDiv>	
									<AppLogo src = {logo} alt="logo" />
									<HeadText>GRANIT</HeadText>
									<HeaderTextMin>Доставка нерудных материалов</HeaderTextMin>
								</LogoDiv>
								<PhoneDiv>
									<PhoneNumb>8 800 342-13-33</PhoneNumb>
									<FreeCall>Бесплатный звонок по России</FreeCall>
								</PhoneDiv>
							<Btn>Обратный звонок</Btn>
							<Menu>
								<UlMenu>
									<LiMenu><Link href="#">Главная</Link></LiMenu>
									<LiMenu><Link href="#">Каталог</Link></LiMenu>
									<LiMenu><Link href="#">Услуги</Link></LiMenu>
									<LiMenu><Link href="#">Доставка</Link></LiMenu>
									<LiMenu><Link href="#">О компании</Link></LiMenu>
									<LiMenu><Link href="#">Контакты</Link></LiMenu>
								</UlMenu>
							</Menu>	
							</Header>
						</Wrapper>
							<Main>
								<Description>
									<HeadH1>быстрая Доставка</HeadH1>
									<Parag>бетона, щебня, песка
										<Span>и других нерудных материалов </Span>
										<Span> по Москве и Московской области</Span>
									</Parag>
									<BtnTwo>Подробнее о доставке</BtnTwo>
									<OrCatalog>или <LinkTwo href="#">перейти в каталог</LinkTwo></OrCatalog>
								</Description>
								<MainImg src= {bg} />
							</Main>
					</Body>		
					)

		}
}
export default App;
