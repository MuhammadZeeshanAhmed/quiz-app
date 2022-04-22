import React, { useEffect, useState } from 'react';
import { StarOutlined, StarFilled, SmileOutlined } from '@ant-design/icons';
import ProgressiveBar from '../progressive-bar/progressbar';
import './quiz.css'
import BottomProgress from '../progressive-bar/bottom-progress';

let quiz = [
    {
        key: 1,
        type: 'HTML',
        question: 'HTML stands for',
        option1: 'Hyper Text Markup Language',
        option2: 'Hyper Text Language',
        option3: 'chance',
        option4: 'communityt chest',
        answer: 'Hyper Text Markup Language'
    },
    {
        key: 2,
        type: 'CSS',
        question: 'CSS stand for',
        option1: 'c style sheet',
        option2: 'cursor style sheet',
        option3: 'circle style sheet',
        option4: 'Cascading style sheet',
        answer: 'Cascading style sheet'
    },

    {
        key: 3,
        type: 'JS',
        question: 'JS stand for',
        option1: 'Java script',
        option2: 'Java',
        option3: 'Java Style',
        option4: 'Java Sheet',
        answer: 'Java script'
    },
    {
        key: 4,
        type: 'English',
        question: 'Java Script is a ...... Language',
        option1: 'Scripting',
        option2: 'Not option',
        option3: 'Option B',
        option4: 'communityt chest',
        answer: 'Scripting'

    },
    {
        key: 5,
        type: 'Maths',
        question: 'The correct answer is 2*2',
        option1: '4',
        option2: '2',
        option3: '1',
        option4: '0',
        answer: '4'
    },
    {
        key: 6,
        type: 'Maths',
        question: 'The sum of 4+2',
        option1: '2',
        option2: '6',
        option3: '4',
        option4: '8',
        answer: '6'
    },
    {
        key: 7,
        type: 'English',
        question: 'At the Start of a standard game of the monopoly, if you throw a double six,which square would land on',
        option1: 'Electric',
        option2: 'Water Works',
        option3: 'chjance',
        option4: 'communityt chest',
        answer: 'Electric'
    },
    {
        key: 8,
        type: 'English',
        question: 'At the Start of a standard game of the monopoly, if you throw a double six,which square would land on',
        option1: 'Electric',
        option2: 'Water Works',
        option3: 'chjance',
        option4: 'communityt chest',
        answer: 'Electric'
    }
    ,
    {
        key: 9,
        type: 'English',
        question: 'At the Start of a standard game of the monopoly, if you throw a double six,which square would land on',
        option1: 'Electric',
        option2: 'Water Works',
        option3: 'chjance',
        option4: 'communityt chest',
        answer: 'chjance'
    },
    {
        key: 10,
        type: 'English',
        question: 'At the Start of a standard game of the monopoly, if you throw a double six,which square would land on',
        option1: 'Electric',
        option2: 'Water Works',
        option3: 'chjance',
        option4: 'communityt chest',
        answer: 'Water Works'
    }

]

export default function Quiz() {
    let [currentIndex, setcurrentIndex] = useState(0);
    let [progressive, setProgressive] = useState(0);
    let [sucsess, setSucsess] = useState(0);
    let [quizkey, setKey] = useState(0);
    let [total, setTotal] = useState(100)

    const currentQuiz = quiz[currentIndex]

    let arr = ['1', '2', '3', '4', '5']
    let [resultjs, setResult] = useState(true)
    let result = () => {
        if (currentIndex == 9) {
            setResult(false)
        }
    }

    return (
        <div>
            {resultjs ?
                <div>


                    <ProgressiveBar progressive={progressive} />
                    <div className='container'>
                        <h1>
                            Question No {currentIndex + 1} out of {quiz.length}
                        </h1>
                        <h1 className="h1">{currentQuiz?.type}</h1>

                        <div className='rating'>
                            {arr.map(item => {
                                return (
                                    <StarOutlined key={item} />
                                )
                            })}
                        </div>
                        <div className='main-div'>
                            <h1 className='question'>{currentQuiz?.question}</h1>
                            <div className='option'>
                                <button className='option1' onClick={() => {
                                    result()
                                    setcurrentIndex(currentIndex + 1)
                                    setProgressive(progressive + 10)

                                    if (currentQuiz?.option1 == currentQuiz?.answer) {
                                        setSucsess(sucsess + 10)
                                    }else{setTotal(total-10)}
                                }}>{currentQuiz?.option1}</button>
                                <button className='option1'
                                    onClick={() => {
                                        result()
                                        setProgressive(progressive + 10)
                                        setcurrentIndex(currentIndex + 1)


                                        if (currentQuiz?.option2 == currentQuiz?.answer) {
                                            setSucsess(sucsess + 10)


                                        }else{
                                            setTotal(total-10)

                                        }
                                    }}
                                >{currentQuiz?.option2}</button>

                            </div>
                            <div className='option'>
                                <button className='option1'
                                    onClick={() => {
                                        result()
                                        setProgressive(progressive + 10)
                                        setcurrentIndex(currentIndex + 1)

                                        if (currentQuiz?.option3 == currentQuiz?.answer) {
                                            setSucsess(sucsess + 10)
                                        }
                                        else{
                                            setTotal(total-10)

                                        }
                                    }}
                                >{currentQuiz?.option3}</button>
                                <button className='option1'
                                    onClick={() => {
                                        result()
                                        setKey(quizkey + 1)
                                        setProgressive(progressive + 10)
                                        setcurrentIndex(currentIndex + 1)


                                        if (currentQuiz?.option4 == currentQuiz?.answer) {
                                            setSucsess(sucsess + 10)
                                        }else{
                                            setTotal(total-10)

                                        }
                                    }}
                                >{currentQuiz?.option4}</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <BottomProgress sucsess={sucsess} progressive={progressive} total={total} />
                    </div>
                </div> :
               <h1>welldone</h1>
            }


        </div>

    )
}