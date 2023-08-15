import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Card,
  Heading,
  Image,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have authentication!</Heading>
      </Card>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  );
}

export default withAuthenticator(App);
