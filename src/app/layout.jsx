'use client'
import styled from 'styled-components';
import './globals.css';
import { Header } from "@/components/layout/Header";

const LayoutStyle = styled.div`
  width: 100%;
  margin: 60px 100px;
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutStyle>
        <Header />
        <>
          {children}
        </>
        </LayoutStyle>
      </body>
    </html>
  );
}
