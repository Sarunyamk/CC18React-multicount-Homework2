function App(){

    const [count,setCount] = React.useState([
        {id:1,number:0}
    ])
  
    //ปุ่ม update เช็ค ไอดีเท่ากับไอดี และตัวเลขต้องมากกว่า หรือเท่ากับ 0 ถ้าเป็นจริง ให้ number เท่ากับ number+num
    const updateCounter = (id,num)=>{
        const newCounter = count.map(el =>
            el.id === id && num + el.number >= 0 ? { ...el, number: el.number + num } : el
        );
        setCount(newCounter)
    }
    // เพิ่ม counter ไอดี จะเท่ากับความยาวของ ไอดี+1 เลขไอดีจะได้ไม่ซ้ำกัน แล้วกให้ number เป็น 0
    const addCounter = ()=>{
        
        setCount([...count, {id: Math.round(Math.random()*1000),number:0}])
    }
    // remove ออก เอาเลขอินเด็ก มา splice ออก || ใช้ filter 
    const removeCounter=(id)=>{
        let value = count.findIndex(el => el.id === id)
        let newArr = [...count]
        newArr.splice(value, 1)
        setCount(newArr )
        // setCount(count.filter(el=> el.id != id))

    }
    //ยอดรวม  ค่าก่อนหน้าเป็น 0 รวมกับnumber 
    return (
        <div>
            <div>
            <h1>Sum = {count.reduce((acc, el) => acc + el.number, 0)}</h1>
                <button onClick={()=> addCounter(count)} > Add Counter</button>
            </div>
            <div>
               {count.map(el => (
                <Counter key={el.id} item={el} removeCounter={removeCounter} updateCounter={updateCounter} />
               ))}
            </div>
        </div>
    )
}

function Counter(props){
    const {item,updateCounter,removeCounter} = props
    return(
        <div className = 'counter'>
            <button onClick ={() => updateCounter(item.id,-1)}>-</button>
            <h2>{item.number}</h2>
            <button onClick ={() => updateCounter(item.id,1)}>+</button>
            <button onClick ={() => updateCounter(item.id,-item.number)}>C</button>
            <button onClick ={() => removeCounter(item.id)}>X</button>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render( 
<App/>
)



