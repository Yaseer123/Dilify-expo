import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useLocalization } from "../localization/LocalizationContext";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLocalization();

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue) => setLanguage(itemValue)}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Türkçe" value="tr" />
                <Picker.Item label="বাংলা" value="bn" />
                <Picker.Item label="Français" value="fr" />
                <Picker.Item label="Deutsch" value="de" />
                <Picker.Item label="Español" value="es" />
                <Picker.Item label="Svenska" value="sv" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    picker: {
        height: 50,
        width: 150,
    },
});

export default LanguageSwitcher;
