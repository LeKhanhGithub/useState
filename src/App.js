
import './App.css';
import { useState } from 'react';






const gifts = ["PCi7", "MacBookPro", "Dola"];

const books = [
  {
    id: 1,
    Name: "Nha gia kim"
  },
  {
    id: 2,
    Name: "Dac nhan tam"
  },
  {
    id: 3,
    Name: "chicken"
  }
];


function App() {

  const [gift, setGift] = useState();

  function handleClick() {
    const number = Math.floor(Math.random() * 3);
    console.log(number);
    setGift(gifts[number])

  }

  const [values, setValue] = useState();

  console.log(values);


  const [id, setId] = useState();
  console.log(id);


  const [idcheck, setIdcheck] = useState([]);
  

  function testCheck(Id) {
    if(idcheck.includes(Id)){
      const filter = idcheck.filter((id) => id !==Id )
      setIdcheck(filter);
    }
    else {
      setIdcheck(prev => [...prev, Id]);
    }
    
  }
  console.log(idcheck);





  return (
    <div style={{ padding: 40 }}>
      <h1>Chao mung ban den voi chuong trinh trao thuong!</h1>
      <h2 className="gift">{gift || "ban chua chon phan thuong"}</h2>
      <button onClick={handleClick}>ready</button>


      <div>
        <br />
        <input type="text" onChange={e => setValue(e.target.value)} value={values}></input>
        <button onClick={() => setValue('Le Thi Thanh')}>Change</button>
      </div>


      <br /> <br />
      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              <input type='radio' onChange={() => setId(book.id)} checked = {id === book.id}></input>
              {book.Name}
            </div>
          )
        })}
      </div>

      <br /> <br />
      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              {/* nen nho tat ca thay doi khi ta click vao checkbox deu la su kien onchange nen phai dua ham vao onchange 
              chu khong phai dua vao checked, checked khong su ly su kien khi ta click vao checkbox*/}
              <input type='checkbox' onChange={() => testCheck(book.id)} checked = {idcheck.includes(book.id)} ></input>
              {book.Name}
            </div>
          )
        })}
      </div>

    </div>

  )

}

export default App;
