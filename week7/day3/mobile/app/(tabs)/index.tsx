import { Text, View, ScrollView } from "react-native";
import BookCard from "../../components/BookCard";

export default function Index() {
  return (

    <View> 
      <ScrollView>
        <BookCard name="Diwan" author="Ahamede Xani" price={19.99} />
        <BookCard name="The Great Gatsby" author="F. Scott Fitzgerald" price={10.99} />
        <BookCard name="To Kill a Mockingbird" author="Harper Lee" />
      </ScrollView>
    </View>
  );
}
