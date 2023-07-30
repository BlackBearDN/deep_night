import Button from "./lib/components/Button/Button.tsx";
import { initI18next } from "./lib/locale/init.ts";
import GlobalStyles from "./lib/styles/globalStyles.ts";

initI18next();

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Button>Кнопка</Button>
    </div>
  );
};

export default App;
