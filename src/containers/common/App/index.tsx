import React from 'react';
import { Button } from 'antd'
import styles from './index.module.css'

function App() {
  return (
    <div className="App">
      <div className={styles.container}>app2</div>
      <Button>antd点击</Button>
    </div>
  );
}

export default App;
