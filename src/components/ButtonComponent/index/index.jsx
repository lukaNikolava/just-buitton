import './styles.css';

export const ButtonComponent = () =>{
    return(
        <div className="buttonContainer">
            <div className="buttonContentContainer">
                <h1>Some text</h1>
                <p>blah blah blah eminem is cool maybe...</p>
            </div>
            <div className='learnButtonContainer'>
                <span className="arrowBefore">&rarr;</span>
                <div className='learnButtonContent'>Learn</div>
                <span className="arrowAfter">&rarr;</span>
            </div>
        </div>
    )
}