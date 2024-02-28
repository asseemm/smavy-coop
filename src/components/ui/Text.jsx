import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Content = styled.p`
    font-size: ${(props) => props.fontSize || '24px'};
    font-weight: ${(props) => props.fontWeight || '400'};
    line-height: ${(props) => props.lineHeight || '30px'};
    color: ${(props) => props.color || '#000'};
`;

const Text = ({ children, ...styleProps }) => {
    return (
        <Content {...styleProps}>
            {children}
        </Content>
    );
};

export default dynamic(() => Promise.resolve(Text), {
    ssr: false
});
