//İSLEMLER İCİN KURULACAK KUTUPHANELER:
// yarn add react-native-svg
// yarn add react-qr-code

import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';
function App() {
  const [value,setValue] = useState("");
  const [qrVisible,setQrVisible] = useState(false);

  const generateQrCodeHandler = () => { //eger url girilmezse hata veriir; girilirse qrkodu cikti verir
    if(!value){
      alert("!! URL Boş Bırakılamaz !!");
    }

    setQrVisible(true);

  }
  return <div className="container"> 
    <h1 id="baslik">QR KOD OLUŞTURUCU</h1>
    <input type="text" placeholder='Bir URL giriniz...' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={generateQrCodeHandler}>QR KOD OLUŞTUR</button>

    {
      qrVisible && 
      <div className="qr-code">
        <QRCode value={value} size={300} />
      </div>
    }
  </div>;
}


export default App;
