'use client'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Text from '../ui/Text';

const BlockStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80vh;
    align-items: center;
`;

const Info = styled.div`
    width: 40%;
`;

const Statistic = styled.div`
    width: 45%;
    height: 80%;
    background-color: #4B40BB;
    border-radius: 25px;

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

export function MainBlock() {
    return (
        <BlockStyle>
            <Info>
                <Text fontSize="40px" fontWeight="600" lineHeight="48px">Мы создаем цифровые решения, которые вдохновляют, привлекают и преображают.</Text>
                <Text fontSize="18px" fontWeight="400" lineHeight="20px">Мы — это команда талантливых специалистов, объединенных общей страстью к инновациям и стремлением к достижению выдающихся результатов.</Text>
            </Info>
            <Statistic />
        </BlockStyle>
    );
}
