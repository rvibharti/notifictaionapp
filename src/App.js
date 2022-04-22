import Button from './components/button/Button';
import styles from './components/button/button.module.css';
import Toast from './components/toast/Toast';
import { useState } from 'react';


function App() {
  const [list, setList] = useState([])
  let toastProperty = null;

  const showToast = (type) => {
    switch (type) {
      case 'success':
        toastProperty = {
          id: list + 1,
          title: 'Success',
          description: "This is Success",
          backgroundColor: '#5cb85c'
        }
        break;
      case 'warning':
        toastProperty = {
          id: list + 1,
          title: 'Warning',
          description: "This is Warning",
          backgroundColor: '#8e962f'
        }
        break;
      case 'info':
        toastProperty = {
          id: list + 1,
          title: 'Info',
          description: "This is Info",
          backgroundColor: '#689ee8'
        }
        break;
      case 'danger':
        toastProperty = {
          id: list + 1,
          title: 'Danger',
          description: "This is Danger",
          backgroundColor: '#b33f39'
        }
        break;
      case 'Text':
        toastProperty = {
          id: list + 1,
          title: 'Text',
          description: "This is Text",
          backgroundColor: '#b3b3b3'
        }
        break;

      default: toastProperty = []
    }
    setList((old) => [...old, toastProperty])
  }

  return (
    <div className={styles.root}>
      <h1>React Notify components </h1>
      <div className={styles.buttons}>
        <Button handelClick={() => showToast('success')} >success</Button>
        <Button handelClick={() => showToast('warning')} >warning</Button>
        <Button handelClick={() => showToast('danger')} >failed</Button>
        <Button handelClick={() => showToast('info')} >info</Button>
        <Button handelClick={() => showToast('Text')} >Text</Button>
      </div>
      <Toast list={list} setList={setList} />
    </div>
  );
}
export default App;
