import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "@/types/navigation.types";
import { Routes } from "@/router/routes";
import { color } from "@/theme/colors";
import { Button } from "@/components/Button";
import { windowHeight, windowWidth } from "@/theme/consts.styles";
import { TypographyStyles } from "@/theme/typography";
import { CommonStyles } from "@/theme/common.styles";
import { Feather } from "@expo/vector-icons";

export const ProjectScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.project>
> = ({ route, navigation }) => {
  const { description, image, title, link } = route.params.data;

  const handlePress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.root}
      contentContainerStyle={styles.container}
    >
      <Feather
        onPress={() => navigation.navigate(Routes.home)}
        name="arrow-left-circle"
        color={color.white}
        size={30}
        style={styles.icon}
      />
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        {link && (
          <Button
            title="Visit Project"
            onPress={handlePress}
            style={styles.button}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.background,
    paddingBottom: 30,
  },
  container: {
    ...CommonStyles.flexAlignJustifyCenter,
    padding: 30,
  },
  image: {
    width: windowWidth / 2,
    height: windowHeight / 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    width: windowWidth / 2,
    gap: 20,
  },
  title: {
    ...TypographyStyles.playFair24,
    marginBottom: 10,
  },
  description: {
    ...TypographyStyles.montserrat18,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: color.blue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: color.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
