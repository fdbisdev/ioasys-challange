import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
})`
    flex-direction: row;
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 16px;
    height: 160px;
    width: 90%;
    elevation: 4;
`;

export const Title = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: #333;
    font-weight: 500;
`;

export const BookInfoWrapper = styled.View`
    margin-left: 16px;
    justify-content: space-between;
`;

export const BookTitleWrapper = styled.View``;

export const Auth = styled.Text`
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
    font-weight: 400;
`;

export const BookDescriptionWrapper = styled.View``;

export const BookDescriptionText = styled.Text`
    font-size: 12px;
    line-height: 20px;
    color: #999;
    font-weight: 400;
`;

export const BookImage = styled.Image`
    width: 80px;
    height: 128px;
`;
