import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react'

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export default function TabBarIcon(props: { name: string; color: string}) {
    return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
  }