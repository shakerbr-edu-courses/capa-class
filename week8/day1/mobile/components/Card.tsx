import { View, Text, Image, Button, ImageSourcePropType, Alert } from "react-native";

const placeholderImage = require("../assets/images/placeholder.png");

interface CardProps {
  name: string;
  author: string;
  price: number;
  bookCover: ImageSourcePropType;
}

export default function Card({ name, author, price, bookCover }: CardProps) {
  return (
    <View className="flex justify-center items-center p-4 border border-gray-200 m-4 rounded-lg shadow-md bg-white">
      <Image source={bookCover} className="w-24 h-36 mb-2" />
      <Text className="text-lg font-bold">{name}</Text>
      <Text className="text-gray-600">by {author}</Text>
      <Text className="text-blue-600 my-2">${price}</Text>
      <Button title="Buy Now" color="#007fff" onPress={() => {Alert.alert(`Buying ${name}`, `Added ${name} to cart.`);}} />
    </View>
  );
}