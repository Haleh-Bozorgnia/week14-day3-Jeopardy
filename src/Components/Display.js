
function Display (props){
    const question = props.question
    if( question[0]){
        return <div>
            <h2>{question[0].question}</h2>
        </div>
    }else{
        return<h3>play</h3>
    }
   
}

export default Display