import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from '../components/RestaurantInfo';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View` padding: 16px; `;
const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue;
`;
export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfo />
            </RestaurantListContainer>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
});