import { View, Text, TextInput, Button } from 'react-native';

interface LoginProps {
    email: string;
    password: string;
    onEmailChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onPress: () => void;
}

export default function Login({ email, password, onEmailChange, onPasswordChange, onPress }: LoginProps) {
    return (
        <View className="p-4 m-8 bg-white rounded-lg shadow-md flex justify-center">
            <Text className="text-lg font-bold mb-2">Login</Text>
            <TextInput
                value={email}
                onChangeText={onEmailChange}
                placeholder="Email"
                className="border border-gray-300 rounded p-2 mb-4"
            />
            <TextInput
                value={password}
                onChangeText={onPasswordChange}
                placeholder="Password"
                secureTextEntry
                className="border border-gray-300 rounded p-2 mb-4"
            />
            <Button
                title="Login"
                color="#007fff"
                onPress={onPress}
            />
        </View>
    );
}