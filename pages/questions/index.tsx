import { useState, useEffect } from "react";
import styles from "../../styles/Questions.module.css";
import Card from "../../components/Card";

function Questions(){
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow');
            const result = await data.json();
            if (result) {
                setQuestions(result.items);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log("Questions: ", questions);
    // }, [questions])
    return (
        <div className={styles.QuestionsWrapper}>
            <h2>Questions</h2>
            {loading ? (<span>Loading...</span>):(
                <div>
                    {questions.map((question) => (
                       <a key={question.question_id} href={`/questions/${question.question_id}`}>
                        <div className={styles.CardLink}>
                            <Card 
                                key={question.question_id}
                                title={question.title}
                                views={question.view_count}
                                answers={question.answer_count} 
                            />
                        </div>
                       </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Questions;