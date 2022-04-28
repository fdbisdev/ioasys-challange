import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IBookProps } from '../../components/BookCard';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f5f5ee;
`;

export const Title = styled.Text`
    font-size: 28px;
    line-height: 40px;
    color: #333;
    font-weight: 300;
    margin-left: 18px;
`;

export const LogoWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Header = styled.View`
    margin-top: 82px;
    margin-left: 5%;
    flex-direction: row;
    width: 80%;
    align-items: center;
    height: 50px;
    justify-content: space-between;
`;

export const LogoutButton = styled.TouchableOpacity`
    border: 1px solid rgba(51, 51, 51, 0.2);
    padding: 8px;
    border-radius: 32px;
`;

export const SearchWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    height: 50px;
    width: 87%;
    justify-content: space-between;
    margin-left: 5%;
`;

export const TextArea = styled.TextInput`
    color: rgba(153, 153, 153, 0.7);
    height: 50px;
`;

export const SearchInput = styled.View`
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 270px;
    justify-content: space-between;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-radius: 2px;
    padding: 12px;
`;

export const BookList = styled(FlatList as new () => FlatList<IBookProps>)`
    margin-top: 32px;
    width: 100%;
    margin-left: 5%;
`;

export const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SearchButton = styled.TouchableOpacity``;
