import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #fff;
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

export const Title = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-weight: 300;
`;
