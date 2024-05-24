import React, { useState, useRef } from 'react'
import { data } from '../../../Top_courses/Data/selfBlockchainDev/Quiz1Data';

function Quiz() {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false)

    const checkAns = (e, ans) => {
        const correct = {
            backgroundColor: '#dffff2',
            borderColor: 'green',
        }
        const wrong = {
            backgroundColor: '#FFEBEB',
            borderColor: 'red',
        }
       
        if (lock === false) {
            if (question.ans === ans) {
                Object.assign(e.target.style, correct);
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                Object.assign(e.target.style, wrong);
                setLock(true);
                Object.assign(option_array[question.ans - 1].current.style, correct);
            }
        }
    
       

    }

    // next page moving

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option_array = [option1, option2, option3];

    
   
    const next = () => {
        if(index=== data.length-1){
            setResult(true)
            return 0;
        }
        if (lock === true) {
            setIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                setQuestion(data[newIndex]);
                setLock(false);
                option_array.forEach(option => {
                    option.current.classList.remove('wrong');
                    option.current.classList.remove('correct');
                    Object.assign(option.current.style, {
                        backgroundColor: 'transparent',
                        borderColor: 'gray',
                    });
                });
                return newIndex;
            });
        }}

        const reset=()=>{
            setIndex(0);
            setQuestion(data[0]);
            setScore(0);
            setLock(false);
            setResult(false);
        }

        const Submit=()=>{

        }

    return (
        <><div className='mx-auto container  p-5'>
            <h2 className='font-bold text-3xl border-b-4 border-b-black mb-3 '>Assessment-1</h2>

{result?<></>:<>
            <h2 className=' mb-3 '>{index + 1}.{question.question}</h2>

            <ul className=' mb-3'>

                <li ref={option1} onClick={(e) => { checkAns(e, 1) }} className='border-2 border-gray-300 p-3 rounded mb-4 bg-blue-50 cursor-pointer'>{question.option1} </li>
                <li ref={option2} onClick={(e) => { checkAns(e, 2) }} className='border-2 border-gray-300 p-3 rounded mb-4 bg-blue-50 cursor-pointer'>{question.option2}</li>
                <li ref={option3} onClick={(e) => { checkAns(e, 3) }} className='border-2 border-gray-300 p-3 rounded mb-4 bg-blue-50 cursor-pointer'>{question.option3}</li>
                {/* <li className='border-2 border-gray-300 p-3 rounded mb-4 bg-blue-50'>{question.option4}</li> */}
            </ul>
            <button onClick={next} className='border-gray-300 bg-blue-50 text-lg cursor-pointer hover:bg-blue-400 rounded text-gray-500 p-2 pl-3 pr-3'>Next</button>
           
            <div className='py-3 text-lg text-bold'>{index+1} of {data.length} questions.</div></>}
            {(result < data.length-4)?<>
            <div className='bg-blue-100 text-center mx-auto container p-8 rounded'>
            <h2 className='text-xl font-bold py-3'>You Scored:{score} out of {data.length}</h2>
            <button className='bg-blue-500 rounded p-2 mb-3' onClick={Submit}>Submit</button></div></>:
            <div className='bg-blue-100 text-center mx-auto container p-8 rounded'>
            <h2 className='text-xl font-bold py-3'>You Scored:{score} out of {data.length}</h2>
            <button className='bg-blue-500 rounded p-2 mb-3' onClick={reset}>Reset</button></div>}
        </div>

        </>
    )
}

export default Quiz