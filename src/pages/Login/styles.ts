import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const BackgroundWrapper = styled.View.attrs({
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: -1,
    position: 'absolute',
})``;

export const Title = styled.Text`
    color: #fff;
    font-size: 32px;
    line-height: 40px;
    left: 20px;
    font-weight: 300;
`;

export const InputText = styled.Text`
    font-size: 15px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
`;

export const LoginWrapper = styled.View`
    top: 32%;
`;

export const LoginButtonText = styled.Text`
    color: #b22e6f;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
`;

export const LoginContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InputContainer = styled.View`
    width: 72%;
    height: 50px;
`;

export const LogoWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 5%;
`;

export const LoginButton = styled.TouchableOpacity`
    background: #ffffff;
    border-radius: 44px;
    width: 90px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const InputWrapper = styled.View`
    width: 90%;
    padding: 12px;
    height: 72px;
    background-color: rgba(0, 0, 0, 0.32);
    top: 46px;
    align-self: center;
    border-radius: 4px;
    margin-bottom: 20px;
    flex-direction: row;
`;

export const BackgroundImage = styled.Image.attrs({
    source: require('../../assets/images/backgroundImage.png'),
    resizeMode: 'cover',
})`
    z-index: -1;
    height: 110%;
    width: 100%;
    position: absolute;
`;
