import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// import LogoIcon from '@assets/Logo.svg'

const HeaderStyle = styled.div`
    position: fixed;
    top: 40px;
    width: calc(100% - 260px);
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 20px;
    z-index: 5;
    background: #F3F3F3;
    border-radius: 30px;

    @media screen and (max-width: 1150px){
        gap: 50px;
    }

    @media screen and (max-width: 950px){
        gap: 30px;
    }
`;

const Links = styled.nav`
    display: flex;
    gap: 40px;

    @media screen and (max-width: 1150px){
        gap: 25px;
    }
`;

const ItemLink = styled(Link)`
    color: #343434;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    text-decoration: none;
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    border: #4B40BB 3px solid;
    border-radius: 10px;
`;

const OrderButton = styled.button`
    position: absolute; 
    right: 20px;
    display: flex;
    gap: 10px;
    background-color: #4B40BB;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 15px 20px;
`;

export function Header() {
    return (
        <HeaderStyle>
            {/* <Logo /> */}
            <Image src='/logo.svg' width={50} height={50} />
            <Links>
                <ItemLink href={"#"}>О нас</ItemLink>
                <ItemLink href={"#"}>Услуги</ItemLink>
                <ItemLink href={"#"}>Портфолио</ItemLink>
                <ItemLink href={"#"}>FAQ</ItemLink>
                <ItemLink href={"#"}>Контакты</ItemLink>
                
            </Links>
            <OrderButton>Оставить заявку <span>&#10138;</span></OrderButton>
        </HeaderStyle>
    );
}

export default dynamic(() => Promise.resolve(Header), {
    ssr: false
});