type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: HangmanWordProps) {
    return (
        <div className='word'>
            {wordToGuess.split('').map((letter, index) => (
                <span className='singleLetter' key={index + letter}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? 'visible'
                                    : 'hidden',
                            color:
                                !guessedLetters.includes(letter) && reveal
                                    ? 'red'
                                    : 'black',
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

export default HangmanWord;
