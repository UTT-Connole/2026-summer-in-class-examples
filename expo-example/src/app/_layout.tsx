import { Stack } from "expo-router";
import {ColorProvider} from '@/contexts/colorContext';

export default function RootLayout() {
  return (
    <ColorProvider>
      <Stack />
    </ColorProvider>
  )

}
