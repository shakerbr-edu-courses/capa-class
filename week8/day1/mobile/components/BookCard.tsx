import { View, Image, Text, type ImageSourcePropType } from "react-native";

const placeholderCover = require("../assets/images/placeholder.png");

interface BookCardProps {
    name: string;
    author: string;
    price?: number | "--";
    bookCover?: ImageSourcePropType;
}

export default function BookCard({ name, author, price = "--", bookCover = placeholderCover }: BookCardProps) {
    return (
        // We make both image(book cover) and text be in the same row
        <View className="flex-row items-center p-4 mb-4 bg-white rounded-lg shadow-md">
            <Image
                source={bookCover}
                className="w-18 h-27 rounded-lg mr-4"
            />
            <View className="flex-1">
                <Text className="text-lg font-bold">{name}</Text>
                <Text className="text-gray-600">by {author}</Text>
                <Text className="text-blue-600 mt-2">${price}</Text>
            </View>
        </View>
    )
}