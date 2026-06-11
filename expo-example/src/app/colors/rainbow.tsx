import { ColorProvider } from "../../hooks/colors_context";
import RainbowPage from "../../components/rainbow_page";

export default function RainbowScreen() {
  return (
    <ColorProvider>
      <RainbowPage />
    </ColorProvider>
  );
}
