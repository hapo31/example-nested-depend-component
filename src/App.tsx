import { Tab, TabItem } from "./Tab";

function App() {
  return (
    <div className="App">
      <Tab defaultKey="first">
        <h3>common content</h3>
        <TabItem tabKey="first" title="first">
          first content
        </TabItem>
        <TabItem tabKey="second" title="second">
          second content
        </TabItem>
      </Tab>
    </div>
  );
}

export default App;
