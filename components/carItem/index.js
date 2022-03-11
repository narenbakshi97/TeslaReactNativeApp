import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";

const CarItem = (props) => {
  const { name, image, tagline, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          type="primary"
          content="custom order"
          onPress={() => {
            console.warn("Custom order was pressed!");
          }}
        />
        <Button
          type="secondry"
          content="existing inventory"
          onPress={() => {
            console.warn("Existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
