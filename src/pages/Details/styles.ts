import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #fff;
`;

export const Title = styled.Text``;

export const Header = styled.View`
    margin-top: 82px;
    width: 32px;
    margin-left: 5%;
`;

export const BackButton = styled.TouchableOpacity`
    border: 1px solid rgba(51, 51, 51, 0.2);
    padding: 8px;
    border-radius: 32px;
`;

export const BookImage = styled.Image`
    width: 240px;
    height: 351px;
`;

export const Body = styled.View`
    align-items: center;
    justify-content: center;
`;

export const BookTitle = styled.Text`
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    color: #333;
    margin-top: 24px;
`;

export const BookAuthor = styled.Text`
    color: #ab2680;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
`;

export const InfoWrapper = styled.View`
    margin-top: 32px;
    width: 60%;
`;

export const InfoTitle = styled.Text`
    font-weight: 500;
    font-size: 12px;
    color: #333;
    line-height: 20px;
`;
export const InfoBody = styled.View`
    align-items: flex-end;
`;
export const InfoItem = styled.Text`
    font-weight: 400;
    font-size: 12px;
    color: #999;
    line-height: 20px;
`;
export const InfoContainer = styled.View``;

export const InfoItemTitle = styled.Text``;

export const InfoDescription = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    color: #333;
    margin-top: 8px;
`;

export const Description = styled.View`
    margin-top: 20px;
    align-items: flex-start;
    width: 60%;
`;

export const AuthorDescription = styled.View`
    margin-top: 8px;
    flex-direction: row;
    align-items: flex-start;
`;

export const Resume = styled.Text`
    color: #999;
    text-align: justify;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
`;
