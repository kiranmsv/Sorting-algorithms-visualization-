import React,{useState,useEffect} from 'react'
let arr = [];
for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 40)+1);

export const Body = () => {
    const [array,setArray] = useState([]);
    useEffect(() => {
      setArray(arr);
    }, []);
    const swap = (idx1,idx2) => {
        // console.log(idx1);
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let arr = [...array];
                if (arr[idx1] > arr[idx2])
                    {[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];}
                resolve(arr);
                }, 100);
        });
        return promise;
    }
    const bubbleSort = async() =>{
         let arrSize = array.length;
         for (let i = arrSize - 1; i > 1; i--) {
            for (let j = 1; j <= i; j++) {
                const arr = await swap(j-1,j);
                console.log(arr);
            }
         }
    };
    return (
      <>
        <button
          onClick={bubbleSort}
        >run</button>
        <div className="array">
          {array.map((e,idx) => (
            <div
              style={{
                height: "20px",
                width: `${e * 10}px`,
                background: "red",
                border: "2px solid black",
              }}
              className="arrayElement"
              key={idx}
            >
              {e}
            </div>
          ))}
        </div>
      </>
    );
}
export default Body;
