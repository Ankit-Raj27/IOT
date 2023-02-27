import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Search from "./searchOverlay";

// import "./styles.css";

function SearchContainer() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Overlay</button>
      <Search
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
}

export default SearchContainer;