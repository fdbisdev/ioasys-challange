import styled from 'styled-components/native';
import { BulletProps } from '.';

export const Container = styled.TouchableOpacity<BulletProps>`
    background-color: ${props => (props.active ? '#333' : '#fff')};
    padding: 6px 16px;
    border-radius: 44px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid rgba(51, 51, 51, 0.3);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text<BulletProps>`
    font-size: 14px;
    line-height: 20px;
    color: ${props => (props.active ? '#fff' : '#333')};
    font-weight: 400;
`;
