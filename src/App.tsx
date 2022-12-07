import { Header, LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";

import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
