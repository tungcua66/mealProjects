import { useState } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name, size, color }) => {
  const [isPressed, setIsPressed] = useState(false);
  const iconPressedHandler = () => {
    setIsPressed((prev) => !prev);
  };
  return (
    <Pressable
      onPress={iconPressedHandler}
    >
      <Ionicons name={name} size={size} color={isPressed ? 'yellow' : color} />
    </Pressable>
  );
};

export default IconButton;
