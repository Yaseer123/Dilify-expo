import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    LocalizationProvider,
    useLocalization,
} from "./localization/LocalizationContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

const HomeScreen: React.FC = () => {
    const { t } = useLocalization();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t("welcome")}</Text>
            <LanguageSwitcher />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});

const MainApp: React.FC = () => {
    return (
        <LocalizationProvider>
            <HomeScreen />
        </LocalizationProvider>
    );
};

export default MainApp;
