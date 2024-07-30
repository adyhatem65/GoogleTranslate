import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onTranslate = () => {
    const translation = input;
    setOutput(translation);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />

      {/* Langauge Selector Row */}
      <View className="flex-row items-center justify-around p-5 ">
        <Text className="font-semibold color-blue-600">English</Text>
        <FontAwesome5 name="exchange-alt" size={16} color="gray" />
        <Text className="font-semibold color-blue-600">Spanish</Text>
      </View>
      {/* Input Container */}
      <View className="border-y border-gray-300 p-5">
        <View className="flex-row gap-5">
          {/* Input */}
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter your text"
            className="min-h-32 flex-1 text-xl"
            multiline
            maxLength={5000}
            textAlignVertical="top"
          />
          {/* send icon */}
          <FontAwesome6
            onPress={onTranslate}
            name="circle-arrow-right"
            size={24}
            color="royalblue"
          />
        </View>
        {/* mic and letters view */}
        <View className="flex-row justify-between">
          <FontAwesome6 name="microphone" size={18} color="dimgray" />
          <Text className="color-gray-500">{input?.length || 0} / 5000</Text>
        </View>
      </View>

      {/* Output Container */}
      {output && (
        <View className="gap-5 bg-gray-200 p-5">
          <Text className="min-h-32 text-xl">Output</Text>
          <View className="flex-row justify-between">
            <FontAwesome6 name="volume-high" size={18} color="dimgray" />
            <FontAwesome5 name="copy" size={18} color="dimgray" />
          </View>
        </View>
      )}
    </>
  );
}
