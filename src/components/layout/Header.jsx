'use client'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


const HeaderStyle = styled.div`
    position: fixed;
    width: calc(100% - 260px);
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 20px;
    z-index: 5;
    background: #F3F3F3;
    border-radius: 30px;
`;

const Links = styled.nav`
    display: flex;
    gap: 40px;
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
    background-color: #4B40BB;
`;

export function Header() {
    return (
        <HeaderStyle>
            <Logo />
            <Links>
                <ItemLink href={"#"}>О нас</ItemLink>
                <ItemLink href={"#"}>Услуги</ItemLink>
                <ItemLink href={"#"}>Портфолио</ItemLink>
                <ItemLink href={"#"}>FAQ</ItemLink>
                <ItemLink href={"#"}>Контакты</ItemLink>
            </Links>

        </HeaderStyle>
    );
}
