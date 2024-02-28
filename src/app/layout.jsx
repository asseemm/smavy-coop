'use client'
import styled from 'styled-components';
import './globals.css';
import { Header } from "@/components/layout/Header";
import { MainBlock } from '@/components/blocks/MainBlock';

const LayoutStyle = styled.div`
  max-width: 100%;
  margin: 40px 100px;
`;

const Content = styled.div`
  margin-top: 120px;
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutStyle>
          <Header />
          <Content>
            <MainBlock />
          </Content>
          <>
            {children}
          </>
        </LayoutStyle>
      </body>
    </html>
  );
}
